import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './compoents/Header'
import {  Routes, Route } from 'react-router-dom'
import Services from './compoents/services/Service'
import Testimonials from './compoents/testimonials/Testimonials'
import Contactus from './compoents/contact/Contactus'
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
       <Route path='/services' element={<Services/>}/>
       <Route path='/testimonials' element={<Testimonials/>}/>
       <Route path='/contact' element={<Contactus/>}/>
      </Routes>
    </div>
  )
}

export default App