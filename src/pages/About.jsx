import React from 'react'
import Navbar from '../components/Navbar'
import AboutEco from '../components/about/AboutEco'
import Values from '../components/about/Values'
import Story from '../components/about/Story'
import Team from '../components/about/Team'
import Footer from '../components/Footer'

function About() {
  return (
    <>
    <Navbar/>
    <AboutEco/>
    <Values/>
    <Story/>
    <Team/>
    <Footer/>
    </>
  )
}

export default About