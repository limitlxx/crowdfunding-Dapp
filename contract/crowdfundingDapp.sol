// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract CrowdfundingDapp {

    struct Participates {
        uint256 uuid;
        address creator;
        string title;
        string description;
        uint256 campaignAmount;
        uint256 totalPaid;
        uint256 totalContributors;
        string website;
        Status status;
    }

    enum Status {
        Pending,
        Ongoing,
        Completed,
        Paused,
        Canceled
    }

    //custom errors
    error NameIsEmpty(string description);

    address private owner;
    uint256 public feePercentage; // Fee percentage taken on withdrawals
    uint256 public totalFeesCollected;

    event NewCampaign(address indexed creator, uint256 uuid, uint256 campaignAmount);
    event Contributed(address indexed contributor, uint256 amount, uint256 totalPaid);
    event CampaignStatusUpdated(uint256 uuid, Status status);
    event Withdrawal(address indexed creator, uint256 amount, uint256 fee);
    event OwnerWithdrawal(uint256 amount);

    Participates[] public participates;
    mapping(address => uint256[]) public creatorCampaigns; // Keep track of campaigns per creator

    modifier isNotAddressZero() {
        require(msg.sender != address(0), "Invalid Address");
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }

    modifier campaignExists(uint256 uuid) {
        require(uuid > 0 && uuid <= participates.length, "Campaign does not exist.");
        _;
    }

    modifier onlyCreator(uint256 uuid) {
        require(msg.sender == participates[uuid - 1].creator, "Not the creator of this campaign.");
        _;
    }

    constructor(uint256 _feePercentage) {
        owner = msg.sender;
        feePercentage = _feePercentage;
    }

    receive() external payable {}

    // Create a new campaign
    function addCampaign(
        string memory _title,
        string memory _description,
        string memory _website,
        uint256 _campaignAmount,
        address _sender
    ) public isNotAddressZero {
        require(_campaignAmount > 0, "Campaign amount can't be zero.");

        if (bytes(_title).length == 0 || bytes(_description).length == 0 || bytes(_website).length == 0) {
            revert NameIsEmpty({description: "Campaign title, description or website url can not be empty"});
        }

        uint256 _uuid = participates.length + 1;
        Participates memory newParticipate = Participates({
            creator: _sender,
            title: _title,
            description: _description,
            website: _website,
            uuid: _uuid,
            campaignAmount: _campaignAmount,
            totalPaid: 0,
            totalContributors: 0,
            status: Status.Ongoing
        });

        participates.push(newParticipate);
        creatorCampaigns[msg.sender].push(_uuid);

        emit NewCampaign(msg.sender, _uuid, _campaignAmount);
    }

    // Contribute to a campaign
    function contribute(uint256 uuid) public payable campaignExists(uuid) {
        Participates storage campaign = participates[uuid - 1];

        require(campaign.status == Status.Ongoing, "Campaign is not active.");
        require(msg.value > 0, "Contribution must be greater than zero.");

        campaign.totalPaid += msg.value;
        campaign.totalContributors += 1;

        emit Contributed(msg.sender, msg.value, campaign.totalPaid);

        // Check if the campaign is completed
        if (campaign.totalPaid >= campaign.campaignAmount) {
            campaign.status = Status.Completed;
            emit CampaignStatusUpdated(uuid, Status.Completed);
        }
    }

    // Withdraw funds from a completed campaign (minus the fee)
    function withdraw(uint256 uuid) public onlyCreator(uuid) campaignExists(uuid) {
        Participates storage campaign = participates[uuid - 1];

        require(campaign.status == Status.Completed, "Campaign is not completed.");
        uint256 totalRaised = campaign.totalPaid;

        // Calculate the fee and the amount to send to the creator
        uint256 fee = (totalRaised * feePercentage) / 100;
        uint256 payout = totalRaised - fee;

        totalFeesCollected += fee;
        campaign.totalPaid = 0; // Reset totalPaid after withdrawal to prevent re-withdrawal

        (bool sent,) = campaign.creator.call{value: payout}("");
        require(sent, "Failed to send Ether");
        
        emit Withdrawal(campaign.creator, payout, fee);
    }

    // Get all campaigns
    function getAllCampaigns() public view returns (Participates[] memory) {
        return participates;
    }

    // Get specific campaign by UUID
    function getCampaign(uint256 uuid) public view campaignExists(uuid) returns (Participates memory) {
        return participates[uuid - 1];
    }

    // Get campaigns created by an address
    function getCreatorCampaigns(address _creator) public view returns (uint256[] memory) {
        return creatorCampaigns[_creator];
    }

    // Withdraw fees collected (only owner can call this)
    function withdrawFees() public onlyOwner {
        uint256 amount = totalFeesCollected;
        totalFeesCollected = 0;

        (bool sent,) = owner.call{value: amount}("");
        require(sent, "Failed to send Ether");
        

        emit OwnerWithdrawal(amount);
    }

    // Update campaign status (for the owner)
    function updateCampaignStatus(uint256 uuid, Status _status) public onlyOwner campaignExists(uuid) {
        Participates storage campaign = participates[uuid - 1];
        campaign.status = _status;
        emit CampaignStatusUpdated(uuid, _status);
    }
}
