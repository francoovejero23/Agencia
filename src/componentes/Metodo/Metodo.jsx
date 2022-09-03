import React from 'react'
import s from './Metodo.module.css'
import img from '../../images/jason-goodman-Oalh2MojUuk-unsplash.jpg'
function Metodo() {
  return (
    <>
      <div className={s["grid-container"]}>
        <div className={s.sub}>
          <img className={s.image} src={img} alt=""/>
        </div>
        <div className={s.sub}>
          <h1 className={s.title}>
           Metodo Despegar
          </h1>

          <h3 className={s.subtitle}>Paga por los resultados que generamos en tu negocio.</h3>
        
        <div className="lista">
          <li className={s.lis}>No tienes que formar un equipo desde 0:Contratarás a un equipo de líderes ya organizados y que saben exactamente lo que hay que hacer </li>
          <li className={s.lis}>No tienes nada que perder:Es un método win-win en el que solo ganamos si tu negocio gana. Al trabajar
              por % si bien podemos ganar más que por presupuesto, eso significa que tu negocio tambien lo hace</li>
          <li className={s.lis}>Ahorrá en tiempos y ganá en resultados:Escalá tu productividad al delegar tareas comerciales a un equipo
              especialista en la misma</li>
              </div>
        </div>
      </div>
    </>
  )
}

export default Metodo