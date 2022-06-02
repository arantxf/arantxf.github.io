import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola! Soy</h5>
        <h1>Arantxa Salmeron</h1>
        <h5 className="text-lights">Ilustradora y programadora</h5>
        <CTA />
        
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="Arantxa" />
        </div>

        <a href="#contacto" className='scroll__down'>Contactame</a>

      </div>
    </header>
  )
}

export default Header