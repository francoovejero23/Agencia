import React from 'react'
import './home.css'
import img from '../../images/Macbook Pro - Copy@1-1350x689.png';

function Home() {
  return (
    <div className='home-container'>
    <div class="clip-path-home">
    </div>
    <div class="home-grid-container">

        <div className="text-home-container">
          <h1 className='title-home'>AGENCIA DE MARKETING <br />& PUBLICIDAD</h1>
          <p className='home-parrafo'> Apalancá los ingresos de tu negocio con un equipo de profesionales especializados en las diferentes
            dimensiones del Marketing Digital. Trabajando con presupuestos fijos o por resultado de variables (% de ventas - Metodo despegar)
            Todo bajo garantia de satisfacción </p>
        </div>
          <img className='image-home' src={img} alt='img not found' />
      </div>
    </div>


  )
}

export default Home;