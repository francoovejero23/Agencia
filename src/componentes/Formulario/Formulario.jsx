import React from 'react'
import "./formulario.css"
export default function Formulario() {
    return (
        <form className='form_contact'>
            <div className='title-contact-container'>
            <h1 className='title-contact'>Trabajemos Juntos</h1>
            <div className='bar-title'></div>
            </div>
            <div className='form_contact-container'>

                <label className='label_input'>
                    <input type="text" required className='input' />
                    <span className='span_label'>Nombre*</span>
                </label>

                <label className='label_input'>
                    <input type="text" required className='input' />
                    <span className='span_label'>Email*</span>
                </label>

                <label className='label_input'>
                    <input type="text" required className='input' />
                    <span className='span_label'>Celular / Telefono*</span>
                </label>

                <label className='label_input'>
                    <input type="text" required className='input' />
                    <span className='span_label'>Organizacion</span>
                </label>

                <label className='label_input label_input-large'>
                    <input type="text" required className='input' />
                    <span className='span_label'>Mensaje</span>
                </label>



                {/* <input type="email" placeholder='Email*' required />
                <input type="number" placeholder='Celular / Telefono*' required className='input' />
                <input type="text" placeholder='Organizacion' />
                <input type="text" className='input_large input' placeholder='Mensaje' /> */}
            </div>

            <div className='submit_button-container'>
                <input type="submit" value="Enviar" className='submit_button' />
            </div>
        </form>
    )
}
