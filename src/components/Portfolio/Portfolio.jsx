import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Joker',
    comprar: 'google.com',
  },

  {
    id: 2,
    image: IMG2,
    title: 'Rorsarch',
    comprar: 'google.com',
  },

  {
    id: 3,
    image: IMG3,
    title: 'Spiderman-Mysterio',
    comprar: 'google.com',
  }
]

const Portfolio = () => {
  return (
    <section id='potfolio'>
      <h5>Trabajo reciente</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        {
          data.map(({id, image, title, comprar}) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={comprar} className='btn btn-primary' target='_blank'>Comprar</a>
              </div>
            </article>
          )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio