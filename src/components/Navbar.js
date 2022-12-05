import React from 'react';
import personalLogo from '../images/parkers_white_logo.png';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
        <NavLink to="/">
            <img className="navbar-logo" src={personalLogo} alt="Parker Parham logo"/>
        </NavLink>
        <div className="navbar-menu">
            <NavLink className="navbar-link" to="/about">
                <b>About</b>
            </NavLink>
            <NavLink className="navbar-link"  to="/projects">
                <b>Projects</b>
            </NavLink>
            <NavLink className="navbar-link"  to="/contact">
                <b>Contact Me</b>
            </NavLink>
        </div>
    </div>
  )
}
