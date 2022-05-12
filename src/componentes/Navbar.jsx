import React from 'react'
import {Link} from 'react-scroll';
import logo from '../images/logo1.png';

function Navbar() {
  return (
    <div>
      <nav>
      <Link to='main' className='logo'>
        <img src={logo} alt='logo'/>
        </Link>
        <input className='menu-btn' type='checkbox' id ='menu-btn'/>
        <label className="menu-icon" for='menu-btn'>
          <span className="nav-icon"></span>
        </label>
        <ul className='menu'>
          <li><Link to='main' className='active'>Home</Link></li>
          <li><Link to='features' className='active'>Home</Link></li>
          <li><Link to='service' className='active'>Home</Link></li>
          <li><Link to='suscribe' className='active'>Home</Link></li>
          <li><Link to='#' className='active'>Home</Link></li>
        </ul>
        <Link to='#' className='hey'>App</Link>
      </nav>


    </div>
  )
}

export default Navbar;