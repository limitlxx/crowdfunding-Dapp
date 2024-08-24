export const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_feePercentage",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			}
		],
		"name": "NameIsEmpty",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "uuid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum CrowdfundingDapp.Status",
				"name": "status",
				"type": "uint8"
			}
		],
		"name": "CampaignStatusUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalPaid",
				"type": "uint256"
			}
		],
		"name": "Contributed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "uuid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "campaignAmount",
				"type": "uint256"
			}
		],
		"name": "NewCampaign",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "OwnerWithdrawal",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			}
		],
		"name": "Withdrawal",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_website",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_campaignAmount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_sender",
				"type": "address"
			}
		],
		"name": "addCampaign",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "uuid",
				"type": "uint256"
			}
		],
		"name": "contribute",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "creatorCampaigns",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "feePercentage",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllCampaigns",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "uuid",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "creator",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "campaignAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalPaid",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalContributors",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "website",
						"type": "string"
					},
					{
						"internalType": "enum CrowdfundingDapp.Status",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct CrowdfundingDapp.Participates[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "uuid",
				"type": "uint256"
			}
		],
		"name": "getCampaign",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "uuid",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "creator",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "campaignAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalPaid",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalContributors",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "website",
						"type": "string"
					},
					{
						"internalType": "enum CrowdfundingDapp.Status",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct CrowdfundingDapp.Participates",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_creator",
				"type": "address"
			}
		],
		"name": "getCreatorCampaigns",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "participates",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "uuid",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "campaignAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalPaid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalContributors",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "website",
				"type": "string"
			},
			{
				"internalType": "enum CrowdfundingDapp.Status",
				"name": "status",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalFeesCollected",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "uuid",
				"type": "uint256"
			},
			{
				"internalType": "enum CrowdfundingDapp.Status",
				"name": "_status",
				"type": "uint8"
			}
		],
		"name": "updateCampaignStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "uuid",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawFees",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]