import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Descargar Currículum</a>
      <a href="#contacto" className='btn btn-primary'>Hablemos!</a>
    </div>
  )
}

export default CTA