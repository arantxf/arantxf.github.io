import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {ImPinterest2} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/arantxa-salmer%C3%B3n-658675204/" target="_blank"><FiLinkedin /></a>
      <a href="https://www.instagram.com/arantx_f/" target="_blank"><BsInstagram/></a>
      <a href="https://pinterest.es/aranchasalmeron" target="_blank"><ImPinterest2/></a>
    </div>
  )
}

export default HeaderSocials