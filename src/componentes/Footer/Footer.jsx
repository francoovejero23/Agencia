import React from 'react'
import "./footer.css"
import linkedin_icon from "../../images/icons/linkedin.svg"
export default function Footer() {
  return (
    <div className='footer'>
      <h3>Agencia de Marketing Multi D</h3>
      <h4>Todos los derechos reservados</h4>
      <div className='social_icon-container'>
        <a href="#">
          <img className='social_icon' src={linkedin_icon} alt="" />
        </a>
        <a href="#">
          <img className='social_icon' src={linkedin_icon} alt="" />
        </a>
        <a href="#">
          <img className='social_icon' src={linkedin_icon} alt="" />
        </a>
      </div>
    </div>
  )
}
