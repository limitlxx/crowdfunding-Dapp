"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from 'wagmi';

const navigation = [ 
    { name: 'Home', href: '/', current: false },
    { name: 'Campaigns', href: '/campaigns', current: false },
    { name: 'Github', href: 'https://github.com', current: false },
    
];

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

export default function NavLinks() {
    const { isConnected } = useAccount();

    return (
        <div className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                alt="Your Company"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-8"
                            />
                        </div>
                        <div className="md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {/* Conditionally add Dashboard item if connected */}
                                {isConnected && (
                                    <a
                                        key="Dashboard"
                                        href="/dashboard"
                                        className="bg-gray-900 text-white block rounded-md px-3 py-2 text-sm font-medium"
                                    >
                                        Dashboard
                                    </a>
                                )}
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-sm font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="ml-4 flex items-center md:ml-6">
                            <ConnectButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
