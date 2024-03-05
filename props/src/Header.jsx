import React from 'react'
import raza from "./Images/raza.jpg"

const Header = ({info, children}) => {
  return (
    <div>
      <h1>This is Header</h1>
      <p>{info.name} {info.age} {children}</p>
    <img src={raza} alt=""  width={200}/>
    
    </div>
  )
}

export default Header
