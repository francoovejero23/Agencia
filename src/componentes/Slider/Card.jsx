import React from 'react'

export default function Card({avatar, name, work, description}) {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg shadow-gray-800 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">

    </div>
    <div className="flex flex-col items-center pb-10">
        <img src={avatar} className="mb-3 w-24 h-24 rounded-full shadow-lg" alt="" />
        {/* <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"> */}
        <h4 className="mb-1 text-3xl font-medium text-gray-900 dark:text-white">{name}</h4>
        <span className="mb-8 text-xl font-medium text-gray-500 dark:text-gray-400">Lorem, ipsum dolor.</span>
        <span className="text-xl text-center text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
        {/* <p className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, fugit?</p> */}
    </div>
</div>
  )
}
