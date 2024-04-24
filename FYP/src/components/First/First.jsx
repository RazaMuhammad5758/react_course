import React from 'react'
import './First.css'
import { Link } from 'react-router-dom'

const First = () => {
  return (
    <div>
      <div className="container-main">
        
          <img src="/public/Pics/bg.png" alt="first" />
        
        <div className="text">
            <h1 className='hed-1'>IDENTIFY AND CURE</h1>
            <h1 className='hed-2'>PLANT DISEASES</h1>
            <h1 className='hed-3'>WITH US!</h1>
            <p>Get quick solutions for crop issues! <br />Find Comprehensive Disease Info <br />
            And Care Tips In Seconds</p>

           <Link style={{ textDecoration: 'none' }} to="/diagnose"><button className='Down-btn'>Diagnose Now</button></Link> 
        </div>
        
      </div>
    </div>
  )
}

export default First
