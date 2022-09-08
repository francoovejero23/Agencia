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






