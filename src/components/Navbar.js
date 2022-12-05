import React from 'react'
import personalLogo from '../images/parkers_logo.png'

export default function Navbar() {
  return (
    <div className="navbar">
        <img className="navbar-logo" src={personalLogo} alt="Parker Parham logo"/>
    </div>
  )
}
