import React from 'react'
import { useState } from 'react'
import { integrantes } from "./integrantes"

import Card from './Card'
export default function Slider() {
    let [current, setCurrent] = useState(0)
    let currentSlider=integrantes[current]


    function next(){
        if (current>=integrantes.length-1) {
            setCurrent(0)
        } else{
            setCurrent(current + 1)
        }

    }

    function prev(){
        if (current<=0) {
            setCurrent(integrantes.length-1)
        } else{
            setCurrent(current - 1)
        }
    }
    // function handleClick(value) {
    //     if (value<0) {
    //         setCurrentSlider(integrantes[integrantes.length-1])
    //         setCurrent(integrantes.length)

    //     } else if (value >= integrantes.length) {
    //         setCurrentSlider(0)
    //         setCurrent(0)
    //     } else{
    //         setCurrentSlider(integrantes[value])
    //         setCurrent(value)

    //     }
       
    // }

    return (
        <div id="default-carousel" className="relative" data-carousel="static">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div className="flex justify-center duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
                    {
                        <Card {...currentSlider}/>
                    }

                    {/* <img src={avatar} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" /><img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
                </div>
                {/* <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
                    <img src={avatar} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />

                </div>
                <div className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">

                    <img src={avatar} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                </div> */}
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" className="w-3 h-3 rounded-full bg-red-700 dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-blue-600 dark:bg-gray-800/50 hover:bg-black dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-blue-600 dark:bg-gray-800/50 hover:bg-black dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>
            <button onClick={() => prev()} type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-gray-500 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-blue-700 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-red-700 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button onClick={() => next()} type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-gray-500 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-blue-700 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-red-700 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>

    )
}
