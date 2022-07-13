import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Servicios from './components/services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/contact/Contact'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Servicios />
      <Portfolio />
      <Contact />
    </>
  )
}

export default App