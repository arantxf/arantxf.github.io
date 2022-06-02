import React from 'react'
import './About.css'
import ME from './../../assets/me.png'
import {BiTrophy} from 'react-icons/bi'
import {MdOutlineDraw} from 'react-icons/md'
import {FaRegKeyboard} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Conóceme</h5>
      <h2>Sobre mí</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

                  {/* EXPERIENCIA */}            
            <article className='about__card'>
              <BiTrophy className='about__icon'/>

              <h5>Experiencia</h5>
              <small>1 año de estudio</small>
            </article>

                  {/* PROYECTOS */}
            <article className='about__card'>
              <MdOutlineDraw className='about__icon'/>

              <h5>Proyectos ilustrados</h5>
              <small>+10 ilustraciones</small>
            </article>

                  {/* PROYECTOS */}
            <article className='about__card'>
              <FaRegKeyboard className='about__icon'/>

              <h5>Proyectos informáticos</h5>
              <small>5 páginas web</small>
            </article>
          </div>

          <p>
            Bon dia
          </p>

          <a href="#contacto" className='btn btn-primary'>Hablémos</a>

        </div>
      </div>
    </section>
  )
}

export default About