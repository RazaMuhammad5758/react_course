import React from 'react'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Diagnose from './components/Diagnose/Diagnose'
import DiagnosePage from './Pages/DiagnosePage/DiagnosePage'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/diagnose' element={<DiagnosePage/>} />
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
