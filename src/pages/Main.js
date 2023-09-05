import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import BeforeAfter from './BeforeAfter';
import StoneWalls from './StoneWalls';
import WalkwaysDriveways from './WalkwaysDriveways';
import Pools from './Pools';
import BackyardElements from './BackyardElements';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Careers from './Careers';
import Design from './Design';
import Page404 from './Page404';

// Routes for React app
const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/before-after" element={<BeforeAfter/>}/>
          <Route path="/stone-work" element={<StoneWalls/>}/>
          <Route path="/walks-drives" element={<WalkwaysDriveways/>}/>
          <Route path="/pools" element={<Pools/>}/>
          <Route path="/backyard-elements" element={<BackyardElements/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/design" element={<Design/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </div>
  )
}

export default Main;