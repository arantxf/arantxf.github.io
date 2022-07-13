import React from 'react'
import './Contact.css'
import {BsInstagram} from 'react-icons/bs'
import {IoIosMailOpen}  from 'react-icons/io'
import {ImGithub} from 'react-icons/im'

const Contact = () => {
  return (
    <section id='contacto'>
      <h5>Pongamonos en contacto</h5>
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>@arantx_f</h5>
            <a href="https://www.instagram.com/arantx_f/">Envíame un mensaje</a>
          </article>

          <article className="contact__option">
            <IoIosMailOpen className='contact__option-icon'/>
            <h4>gmail</h4>
            <h5>arantxasalmeron1@gmail.com</h5>
            <a href="mailto:arantxasalmeron1@gmail.com">Envíame un correo</a>
          </article>

          <article className="contact__option">
            <ImGithub className='contact__option-icon'/>
            <h4>GitHub</h4>
            <h5>arantxf</h5>
            <a href="https://github.com/arantxf">Mi GitHub</a>
          </article>

        </div>
        {/* FINAL DE LAS OPCIONES DE CONTACTO */}
         <form action="">
           <label for="name">Nombre:</label>
           <input type="text" id='name' name='user_name'/>

           <label for="email" id='mail' name='user_email'>Email:</label>
           <input type="email" id='mail' name='user_email'/>

           <label for="mssg">Escribe un mensaje:</label>
            <textarea id="mssg" name="user_mssg"></textarea>

            <button class='btn btn-primary'>Enviar</button>
         </form>
      </div>
    </section>
  )
}

export default Contact