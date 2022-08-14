import React from 'react'
import s from "./presupuestos.module.css"
export default function Presupuestos() {
    return (
        <div className={s["grid-container"]}>
            <div>
                <h1>Presupuestos Personalizados</h1>
                
                <h3>
                    Si te gustaria contratar alguno de nuestros servicios recibir mas informacion al respecto
                    contactanos para una asesoria gratuita con nuestro equipo
                </h3>
                <button>MAS INFO</button>
            </div>
            <div className={s["grid-container"]}>
                <div className={s.sub}>
                    imagen1
                </div>
                <div className={s.sub}>
                    imagen2
                </div>
                <div className={s.image3}>
                    imagen 3
                </div>
            </div>
        </div>

       
    )
}
