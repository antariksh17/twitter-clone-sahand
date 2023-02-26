import { EmojiHappyIcon, PhotographIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'

export const Input = () => {
  return (
    <div className="flex border-b border-gray-200 p-3 space">

        <img 
            src="https://avatars.githubusercontent.com/u/76833140?s=400&u=b45260fba07872f8c8f67f6c727806d891ba8464&v=4"
            alt="user-img"
            className="h-10 w-11 rounded-full cursor-pointer hover:brightness-95"

        />
        <div className="w-full divide-y divide-gray-200">
            <div className="">
                <textarea className="w-full border-none focus:ring-0 text-lg  placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700 " rows="2" placeholder='Whats happening?'></textarea>
            </div>
            <div className="flex items-center justify-between pt-2.5">
                <div className="flex ">
                    <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky"/>
                    <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky"/>

                </div>
                <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">
                    Tweet
                </button>

            </div>

        </div>
    </div>
  )
}
