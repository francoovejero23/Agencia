import React from 'react';
// import Slider from './componentes/Slider/Slider.jsx';
import Header from './componentes/Header/Header.jsx';
import Metodo from './componentes/Metodo/Metodo.jsx'
import Presupuestos from './componentes/Presupuestos/Presupuestos.jsx';
import Servicios from './componentes/Servicios/Servicios.jsx';
import Slider from './componentes/Slider/Slider.jsx';
// import Slider from './componentes/Slider/Slider.jsx';
// import Presupuestos from './components/Presupuestos.jsx';

function App() {
  return (
    <div>
     <Header/>
     <Metodo/>
     <Presupuestos />	
     <Servicios/>
     {/* <Slider/> */}
     <Slider/>
    </div>
  );
}

export default App;
