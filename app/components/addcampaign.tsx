"use client";
import React, { useState, FormEvent } from 'react'
import { useWriteContract, useWatchContractEvent, useAccount, useReadContract } from 'wagmi'
import { abi } from '../abi/abi'; 
import Notification from './notification';


export default function AddCampaign() {

  const { data: hash, isPending, writeContract } = useWriteContract()
  const account = useAccount()
  if (account.status === 'connected') {
    var ownerAddress = account.address;
  }

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [open, setOpen] = useState(false) // Set to false initially, so the drawer is closed by default
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null) // Clear previous errors when a new request starts

    try {
      const formData = new FormData(event.currentTarget)

      // Convert FormData to an object
      const data: { [key: string]: any } = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });


      // Ensure the data matches the smart contract function signature
      const { _title, _description, _website, _campaignAmount } = data;
      const _sender = ownerAddress;

      // Make sure campaignAmount is a valid uint256 (e.g., convert to BigNumber if needed)
      const _amount = BigInt(_campaignAmount); // Assuming campaignAmount is a valid number string

      // Use the data object in your writeContract function if needed
      const result = writeContract({
        abi,
        address: '0x8Aa9f760822D81dA9d779DA1C8f8E4AC7dF8Dfa8',
        functionName: 'addCampaign',
        args: [_title, _description, _website, _amount, _sender]
      });

      setOpen(false)
     
    } catch (error: any) {
      // Capture the error message to display to the user
      setError(error.message)
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useWatchContractEvent({
    address: '0x8Aa9f760822D81dA9d779DA1C8f8E4AC7dF8Dfa8',
    abi,
    eventName: 'NewCampaign',
    onLogs(logs) {
      console.log(logs);
      
    },
  })

  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      
      {/* <div className="fixed top-4 right-4 z-50 flex items-center max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-2 bg-green-500"></div>
        <div className="w-full flex flex-col px-4 py-2">
          <div className="flex justify-between items-center">
            <h5 className="text-lg font-semibold text-gray-900">Success!</h5>
            <button className="text-gray-500 hover:text-gray-700">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <p className="text-gray-600 mt-2">Your changes have been successfully saved.</p>
        </div>
      </div> */}

      <form onSubmit={onSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Title
                </label>
                <div className="mt-2">
                  <input
                    id="title"
                    name="_title"
                    type="text"
                    autoComplete="title"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  About
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="_description"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Campaign Amount
                </label>
                <div className="mt-2">
                  <input
                    id="amount"
                    name="_campaignAmount"
                    type="number"
                    autoComplete="amount"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Campaign Website
                </label>
                <div className="mt-2">
                  <input
                    id="website"
                    name="_website"
                    type="text"
                    autoComplete="website"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button disabled={isLoading}
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >

            {isLoading ? 'Loading...' : 'Submit campaign'}
          </button>
        </div>
      </form>
    </>
  )
}
