import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Portfolio from './Portfolio'
import About from './About'
import Services from './Services'
import Contact from './Contact'


const Main = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </div>
  )
}

export default Main