import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="hero">
    <h1>Hello, my name is <span className="hero-name">Parker Parham</span>, and I am a Fullstack Developer.</h1>
    <NavLink to="/about" className="hero-link"><div className="hero-button">Learn More</div></NavLink>
    </div>
  )
}
