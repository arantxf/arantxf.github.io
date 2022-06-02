import React from 'react'
import './Services.css'
import {MdVerified} from 'react-icons/md'

const Services = () => {
  return (
    <section id='servicios'>
      <h5>Lo que ofrezco</h5>
      <h2>Servicios</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Ilustración</h3>
          </div>

          <ul className='service__list'>
            <li>
              <MdVerified className='service__list-icon' />
              <p>Páginas de comic</p>
            </li>

            <li>
              <MdVerified className='service__list-icon' />
              <p>Portadas de comic</p>
            </li>

            <li>
              <MdVerified className='service__list-icon' />
              <p>Ilustraciones</p>
            </li>

            <li>
              <MdVerified className='service__list-icon' />
              <p>Páginas manga</p>
            </li>

            <li>
              <MdVerified className='service__list-icon' />
              <p>Animación</p>
            </li>
          </ul>
        </article>

        {/* END OF ILUSTRACIÓN */}

        <article className="service">
          <div className="service__head">
            <h3>Programación</h3>
          </div>

          <ul className='service__list'>
            <li>
              <MdVerified className='service__list-icon' />
              <p>Programación web</p>
            </li>

            <li>
              <MdVerified className='service__list-icon' />
              <p>Desarrollo de aplicaciones web</p>
            </li>

            <li>
              <MdVerified className='service__list-icon' />
              <p>Desarrollo de aplicaciones móviles</p>
            </li>

            <li>
              <MdVerified className='service__list-icon' />
              <p>Programación de videojuegos</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

      </div>
    </section>
  )
}

export default Services