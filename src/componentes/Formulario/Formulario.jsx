import React from 'react'
import "./formulario.css"
export default function Formulario() {
    return (
        <form className='form_contact'>
            <h1>Trabajemos Juntos</h1>
            <div className='form_contact-container'>

                <input type="text" placeholder='Nombre*' required className='input'/>
                <input type="email" placeholder='Email*' required />
                <input type="number" placeholder='Celular / Telefono*' required className='input'/>
                <input type="text" placeholder='Organizacion' />
                <input type="text" className='input_large input' placeholder='Mensaje'/>
            </div>

            <div className='submit_button-container'>
                <input type="submit" value="Enviar" className='submit_button' />
            </div>
        </form>
    )
}
