"use client";

import Image from "next/image";
import { useAccount } from 'wagmi'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation' 
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() { 

  return (
     
        // <div className="min-h-full">
          <div className="bg-white">
            <div className="relative isolate px-6 lg:px-8">
               
              <div className="mx-auto max-w-2xl py-10 sm:py-48 lg:py-50">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Fund creative projects, support bold ideas, and be part of the next big thing.{' '}
                    <a href="/campaign" className="font-semibold text-indigo-600">
                      <span aria-hidden="true" className="absolute inset-0" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Empower the Future of Innovation
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                  At InnovateCrowd, we believe that the next great idea is just waiting to be brought to life.
                  We connect passionate creators with supportive backers, fostering a community of innovation, creativity, and progress.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                  <ConnectButton/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        // </div>
      
  );
}
