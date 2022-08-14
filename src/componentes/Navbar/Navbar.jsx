import React from 'react'
import {Link} from 'react-scroll';
import logo from '../../images/Multid.png';
import multi from '../../images/Mesa de trabajo 2 copia.png'

function Navbar() {
  return (
    <div>
      <nav class="padre">
      <Link to='main' className='logo'>
        <img src={logo} alt='logo'/>
        </Link>
        <input className='menu-btn' type='checkbox' id ='menu-btn'/>
        <label className="menu-icon" for='menu-btn'>
          <span className="nav-icon"></span>
        </label>
        <ul className='menu'>
          <li><a href='https://www.youtube.com/watch?v=2QXZiHpPQq4main' className='active'>Home</a></li>
          <li><Link to='features' className='active'>Service</Link></li>
          <li><Link to='service' className='active'>Work</Link></li>
          <li><Link to='suscribe' className='active'>About Us</Link></li>
          <li><Link to='#' className='active'>Contact</Link></li>
        </ul>
        {/* <Link to='#' className='hey'><img className='hey1' src={multi} alt='logo'/></Link> */}
      </nav>


    </div>
  )
}

export default Navbar;