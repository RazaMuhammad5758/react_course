import React from 'react'

const Header = ({info, children}) => {
  return (
    <div>
      <h1>This is Header</h1>
      <p>{info.name} {info.age} {children}</p>
    </div>
  )
}

export default Header
