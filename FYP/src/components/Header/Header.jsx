import React from 'react'
import './Header.css'
import { IoPersonCircleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="nav">
          <div className="logo">
            <img src="/public/Pics/Logo.png" alt="logo" />
          </div>
          <div className="signIn">
            <button>Sign In</button>
            <IoPersonCircleOutline />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
