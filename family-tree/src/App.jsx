import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Component/Login/Login'
import Signup from './Component/Signup/Signup'
import Home from './Component/Home/Home'
import Model1 from './Component/Model 1/Model1'


const App = () => {



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}  />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/Home" element={<Home/>} />
          
        </Routes>
      
      </BrowserRouter>
          
    </div>
  )
}

export default App
