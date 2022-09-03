import React from 'react';
import Header from './componentes/Header/Header.jsx';
import Home from './componentes/Home/Home.jsx';
import Metodo from './componentes/Metodo/Metodo.jsx'
import Presupuestos from './componentes/Presupuestos/Presupuestos.jsx';
import Servicios from './componentes/Servicios/Servicios.jsx';
import Slider from './componentes/Slider/Slider.jsx';


function App() {
  return (
    <div>
     <Header/>
     <Home/>
     <Metodo/>
     <Presupuestos />	
     <Servicios/>
     <Slider/>
    </div>
  );
}

export default App;
