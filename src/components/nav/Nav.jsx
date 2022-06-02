import React from 'react'
import './nav.css'
import {RiHome3Fill} from 'react-icons/ri'
import {BiUserPin} from 'react-icons/bi'
import {BiBookBookmark} from 'react-icons/bi'
import {MdDesignServices} from 'react-icons/md'
import {MdContacts} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RiHome3Fill/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#' ? 'active' : ''}><BiUserPin/></a>
      <a href='#experiencia' onClick={() => setActiveNav('#experiencia')} className={activeNav === '#' ? 'active' : ''}><BiBookBookmark/></a>
      <a href='#servicios' onClick={() => setActiveNav('#servicios')} className={activeNav === '#' ? 'active' : ''}><MdDesignServices/></a>
      <a href='#contacto' onClick={() => setActiveNav('#contacto')} className={activeNav === '#' ? 'active' : ''}><MdContacts/></a>
    </nav>
  )
}

export default Nav