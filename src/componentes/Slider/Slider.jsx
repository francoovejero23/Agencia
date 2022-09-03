// import React from 'react'
// import { useState } from 'react'
// import { integrantes } from "./integrantes"

// import Card from './Card'
// export default function Slider() {
//     let [current, setCurrent] = useState(0)
//     let currentSlider=integrantes[current]
//     function next(){
//         if (current>=integrantes.length-1) {
//             setCurrent(0)
//         } else{
//             setCurrent(current + 1)
//         }
//     }
//     function prev(){
//         if (current<=0) {
//             setCurrent(integrantes.length-1)
//         } else{
//             setCurrent(current - 1)
//         }
//     }

// function handleClick(index){

// if (index > current) {
//     next()
// } else if (index < current) {
//     prev()
// }

// }

//     return (
//         <div id="default-carousel" className="relative" data-carousel="static">
//             <h1>hello</h1>
//             <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//                 <div className="flex justify-center duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
//                     {
//                         <Card {...currentSlider}/>
//                     }
//                 </div>
//             </div>


//             <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
//                 {
//                     integrantes.map((e , index)=>{
//                         return(
//                             <button onClick={()=>handleClick(index)} type="button" className={`${index === current?"bg-red-700":"bg-blue-600" } w-3 h-3 rounded-full  dark:bg-gray-800" aria-current="true" aria-label="Slide 1`} data-carousel-slide-to="0"></button>
//                         )
//                     })
//                 }
//                 {/* <button type="button" className="w-3 h-3 rounded-full bg-blue-600 dark:bg-gray-800/50 hover:bg-black dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//                 <button type="button" className="w-3 h-3 rounded-full bg-blue-600 dark:bg-gray-800/50 hover:bg-black dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button> */}
//             </div>
//             <button onClick={() => prev()} type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
//                 <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-gray-500 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-blue-700 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg aria-hidden="true" className="w-5 h-5 text-red-700 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
//                     <span className="sr-only">Previous</span>
//                 </span>
//             </button>
//             <button onClick={() => next()} type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
//                 <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-gray-500 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-blue-700 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg aria-hidden="true" className="w-5 h-5 text-red-700 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
//                     <span className="sr-only">Next</span>
//                 </span>
//             </button>
//         </div>

//     )
// }




import { useState } from "react"
import "./slider.css"

import Card from './Card'
import { integrantes } from "./integrantes"

export default function Slider() {
    const [slideSelect, setSlideSelect] = useState(0)
    const [animation, setAnimation] = useState(null)

    function handleNext() {
        if (slideSelect === integrantes.length - 1) {
            return setSlideSelect(0)
        }
        setSlideSelect(slideSelect + 1)
        setAnimation(1)
    }

    function handlePrev() {
        console.log(slideSelect)
        if (slideSelect <= 0) {
            return setSlideSelect(integrantes.length - 1)
        }
        setSlideSelect(slideSelect - 1)
        setAnimation(2)
    }

    function handleDots(index) {

        if (index > slideSelect) {
            setAnimation(1)
        } else if (index < slideSelect) {
           setAnimation(2)
        }

        setSlideSelect(index)

    }
    return (
        <div className="team-container">
            <h1>Team MultiD</h1>
            <h3>Algunos de los profesionales que se encargaran de tu negocio o proyecto</h3>
            <div className="container-slide">

                {
                    integrantes.map((integrante, index) => {
                        if (index === slideSelect) {
                            return (
                                <div className={`card_slide ${animation === 1 && "animation_next" || animation === 2 && "animation_prev"}`} >
                                    <Card avatar={integrante.avatar} name={integrante.name} />
                                </div>
                            )
                        }
                    }
                    )
                }
                <button onClick={handleNext} className="button_next">Next</button>
                <button onClick={handlePrev} className="button_prev">Prev</button>
            </div>
            {

                integrantes.map((_, index) => {
                    return (
                        <button
                            className={`slider_dots ${slideSelect === index && "slider_dots-active"}`}
                            onClick={()=>handleDots(index)}
                        ></button>
                    )
                }
                )
            }
        </div>
    )
}






