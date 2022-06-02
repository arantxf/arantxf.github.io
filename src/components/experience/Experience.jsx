import React from 'react'
import './Experience.css'
import {TiInputChecked} from 'react-icons/ti'

const Experience = () => {
  return (
    <section id='experiencia'>
      <h5>Habilidades</h5>
      <h2>Mi experiencia</h2>

      <div className="container experiencia__container">
        <div className="experiencia__frontend">
          <h3>Programación</h3>
          <div className="experiencia__content">

            <article className='experiencia__details'>
              <TiInputChecked className='experiencia__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>experiencia</small>
              </div>
            </article>

            <article className='experiencia__details'>
              <TiInputChecked className='experiencia__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>experiencia</small>
              </div>
            </article>

            <article className='experiencia__details'>
              <TiInputChecked className='experiencia__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>experiencia</small>
              </div>
            </article>

            <article className='experiencia__details'>
              <TiInputChecked className='experiencia__details-icon'/>
              <div>
                <h4>Bash</h4>
                <small className='text-light'>experiencia</small>
              </div>
            </article>

            <article className='experiencia__details'>
              <TiInputChecked className='experiencia__details-icon' />
              <div>
                <h4>React</h4>
                <smal className='text-light'>nuevo</smal>
              </div>
            </article>

          </div>
        </div>

        <div className="experiencia__backend">
        <h3>Ilustración</h3>
          <div className="experiencia__content">

            <article className='experiencia__details'>
              <TiInputChecked className='experiencia__details-icon'/>
              <div>
                <h4>Comic</h4>
                <small className='text-light'>experiencia</small>
              </div>
            </article>

            <article className='experiencia__details'>
              <TiInputChecked className='experiencia__details-icon'/>
              <div>
                <h4>Anime</h4>
                <small className='text-light'>experiencia</small>
              </div>
            </article>

            <article className='experiencia__details'>
              <TiInputChecked className='experiencia__details-icon'/>
              <div>
                <h4>Cartoon</h4>
                <small className='text-light'>experiencia</small>
              </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience