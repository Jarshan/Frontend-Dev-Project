import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import FAQ from './components/FAQ'
import Footer from './components/Footer'



function App() {
  console.log("in app ")

  return(
   <div>
     <Navbar/>
     <Hero/>
     <Services/>
     <FAQ/>
     <Footer/>
   </div>)
}



export default App
