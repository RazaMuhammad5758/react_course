import React from 'react'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Diagnose from './components/Diagnose/Diagnose'
import DiagnosePage from './Pages/DiagnosePage/DiagnosePage'
import First from './components/First/First'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/diagnose' element={<DiagnosePage/>} />
        <Route path='/First' element={<First/>} />
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
