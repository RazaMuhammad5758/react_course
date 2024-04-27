import React from 'react'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import DiagnosePage from './Pages/DiagnosePage/DiagnosePage'
import DiseaseDet from './components/DiseaseDet/DiseaseDet'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/diagnose' element={<DiagnosePage/>} />
        <Route path='/disease' element={<DiseaseDet/>} />
        
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
