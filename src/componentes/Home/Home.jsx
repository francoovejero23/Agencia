import React from 'react'
import './Home.modules.css'
import img from '../../images/Macbook Pro - Copy@1-1350x689.png';

function Home() {
  return (
    <div>
       <div class="Home">

          <div className="text">
        <h2><strong>AGENCIA DE MARKETING <br/>& PUBLICIDAD</strong></h2> 
        <p> Apalancá los ingresos de tu negocio con un equipo de profesionales especializados en las diferentes
          dimensiones del Marketing Digital. Trabajando con presupuestos fijos o por resultado de variables (% de ventas - Metodo despegar)
          Todo bajo garantia de satisfacción </p> 
          </div>
          <div className="foto">
            <img src={img} alt='img not found'/>
          </div>

      </div>

    </div>
  )
}

export default Home;