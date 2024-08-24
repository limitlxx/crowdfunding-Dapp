"use client";



import Image from "next/image";
import { useAccount, useReadContract } from 'wagmi'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { CheckIcon, ClockIcon, PencilIcon, TrashIcon } from '@heroicons/react/20/solid';
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import AddCampaign from "@/app/components/addcampaign"
import { abi } from '../abi/abi'; 

const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: 'dashboard/1/details',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: 'dashboard/1/details',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More posts...
]

export default function Page() {

    const [open, setOpen] = useState(false) // Set to false initially, so the drawer is closed by default
    const { isConnecting } = useAccount()
    const router = useRouter()

    const { data, isError } = useReadContract({
        address: '0x8Aa9f760822D81dA9d779DA1C8f8E4AC7dF8Dfa8',
        abi,
        functionName: 'getAllCampaigns',
      });
    
    
      console.log(data);

    useEffect(() => {
        if (isConnecting) {
            // Redirect to another page/component when the wallet is connected
            router.push('/') // Change '/dashboard' to the desired path
        }
    }, [isConnecting, router])

    return (
        <div>
            {isConnecting ? (
                <p>Redirecting...</p>
            ) : (
                <div className="min-h-full bg-gray-100">
                    <main>
                        <div className="bg-white py-2 sm:py-32">
                            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                                <div className="flex justify-end mx-auto">
                                    <div className="inline-flex rounded-md shadow-sm" role="group">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                                        >
                                            All
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                                        >
                                            <ClockIcon className="w-5 h-5 mr-2" />
                                            In Progress
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700"
                                        >
                                            <CheckIcon className="w-5 h-5 mr-2" />
                                            Concluded
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-end gap-x-6">
                                        <button type="button"
                                            onClick={() => setOpen(true)} // Open drawer when button is clicked
                                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        >
                                            Add Campaign
                                        </button>
                                        <Dialog open={open} onClose={setOpen} className="relative z-10">
                                            <DialogBackdrop
                                                transition
                                                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
                                            />

                                            <div className="fixed inset-0 overflow-hidden">
                                                <div className="absolute inset-0 overflow-hidden">
                                                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                                        <DialogPanel
                                                            transition
                                                            className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                                                        >
                                                            <TransitionChild>
                                                                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => setOpen(false)} // Close drawer when 'X' button is clicked
                                                                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                                    >
                                                                        <span className="absolute -inset-2.5" />
                                                                        <span className="sr-only">Close panel</span>
                                                                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                                                    </button>
                                                                </div>
                                                            </TransitionChild>
                                                            <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                                                <div className="px-4 sm:px-6">
                                                                    <DialogTitle className="text-base font-semibold leading-6 text-gray-900">Create Campaign</DialogTitle>
                                                                </div>
                                                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                                    <AddCampaign/>
                                                                </div>
                                                            </div>
                                                        </DialogPanel>
                                                    </div>
                                                </div>
                                            </div>
                                        </Dialog>
                                    </div>
                                </div>

                                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-1 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                    {posts.map((post) => (
                                        <article
                                            key={post.id}
                                            className="flex max-w-xl flex-col items-start justify-between rounded-lg border border-gray-200 p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-gray-300"
                                        >
                                            <div className="flex items-center gap-x-4 text-xs">
                                                <time dateTime={post.datetime} className="text-gray-500">
                                                    {post.date}
                                                </time>
                                                <a
                                                    href={post.category.href}
                                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                                >
                                                    {post.category.title}
                                                </a>
                                            </div>
                                            <div className="group relative">
                                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                                    <a href={post.href}>
                                                        <span className="absolute inset-0" />
                                                        {post.title}
                                                    </a>
                                                </h3>
                                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                                            </div>
                                            <div className="relative mt-8 flex items-center gap-x-4">
                                                <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                                                <div className="text-sm leading-6">
                                                    <p className="font-semibold text-gray-900">
                                                        <a href={post.author.href}>
                                                            <span className="absolute inset-0" />
                                                            {post.author.name}
                                                        </a>
                                                    </p>
                                                    <p className="text-gray-600">{post.author.role}</p>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>

                            </div>
                        </div>


                    </main>
                </div>
            )}
        </div>
    );
}