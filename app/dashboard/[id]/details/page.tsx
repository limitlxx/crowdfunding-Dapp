import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Push to deploy.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
    },
]

export default function CampaignDetails() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                                iste dolor cupiditate blanditiis ratione.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>

                    <div className="flex min-h-full flex-1 flex-col justify-center px-1 py-1 lg:px-8 ">
                        <div className="flex flex-col gap-6">
                            {/* First Card */}
                            <div className="p-6 rounded-lg shadow-lg bg-white w-full max-w-md">
                                <h5 className="text-lg font-semibold text-gray-900 mb-4">Campaign Title</h5>

                                {/* Campaign Price / Total Contributed */}
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-700">Price: $10,000</span>
                                    <span className="text-gray-700">Contributed: $5,000</span>
                                </div>

                                {/* Progress Bar */}
                                <div className="relative w-full h-4 bg-gray-200 rounded-full mb-4">
                                    <div className="absolute top-0 left-0 h-full w-1/2 bg-green-500 rounded-full"></div>
                                </div>

                                {/* Button */}
                                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                    View Campaign
                                </button>
                            </div>

                            {/* Second Card */}
                            <div className="p-6 rounded-lg shadow-lg bg-white w-full max-w-md">
                                <h5 className="text-lg font-semibold text-gray-900 mb-4">Contribute to Campaign</h5>

                                {/* Contribution Input */}
                                <div className="mb-4">
                                    <input
                                        type="number"
                                        placeholder="Enter amount"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>

                                {/* Pay Button */}
                                <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                                    Contribute
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
