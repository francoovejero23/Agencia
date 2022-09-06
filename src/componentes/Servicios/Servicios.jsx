import React from 'react'
import s from "./servicios.module.css"
export default function Servicios() {
  return (
    <div className={s.services_container}>
      <h1 className={s.titulo}>Servicios</h1>
    <div className={s["grid-services"]}>
        <div className={s.services_item}>1</div>
        <div className={s.services_item}>2</div>
        <div className={s.services_item}>3</div>
        <div className={s.services_item}>4</div>
        <div className={s.services_item}>5</div>
        <div className={s.services_item}>6</div>
    </div>
    </div>
  )
}
