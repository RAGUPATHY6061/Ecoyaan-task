import React from 'react'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Community from '../components/Community'
import Ecofriend from '../components/Ecofriend'
import Business from '../components/Business'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Navbar/>
    <Content/>
    <Community/>
    <Ecofriend/>
    <Business/>
    <Footer/>
    </>
  )
}

export default Home