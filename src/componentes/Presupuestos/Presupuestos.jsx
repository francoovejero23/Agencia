import React from 'react'
import s from "./presupuestos.module.css"
import './presupuestos.module.css'
import image from '../../images/charlesdeluvio-Lks7vei-eAg-unsplash.jpg'
import image1 from '../../images/alessio-zaccaria-MplUOXqEUK0-unsplash.jpg'
import image2 from '../../images/austin-distel-wD1LRb9OeEo-unsplash.jpg'
export default function Presupuestos() {
    return (
        <div className={s["grid-container"]}>
            <div>
                <h1 className={s.presu}>Presupuestos<br></br>Personalizados</h1>
                
                <h3 className={s.parrafo}>
                    Si te gustaria contratar alguno de nuestros servicios recibir mas informacion al respecto
                    contactanos para una asesoria gratuita con nuestro equipo
                </h3>
                <button className={s.buttons}>MAS INFO</button>
            </div>
            <div className={s["grid-container"]}>
                <div className={s.sub}>
                <img className={s.tradin2} src={image1} alt=""/>
                </div>

                <div className={s.sub}>
                <img className={s.tradin1} src={image2} alt=""/>
                </div>

                <div className={s.image3}>
                <img src={image} alt=""/>
                </div>
            </div>
        </div>

       
    )
}
