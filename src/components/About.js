import React from 'react'
import RubyLogo from '../images/Icons/ruby_logo.png'
import ReactLogo from '../images/Icons/React-icon.svg.png'
import JavaScriptLogo from '../images/Icons/javascript-icon.svg'
import RailsLogo from '../images/Icons/rails-icon.png'
import CSSLogo from '../images/Icons/css-icon.webp'
import HTMLLogo from '../images/Icons/html-icon.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function About() {
  return (
    <div className='pages'>
        <h1>About Me:</h1>
        <h2>Skills</h2>
        <ul className="about-ul">
          <li>JavaScript <img src={JavaScriptLogo} alt="JavaScript logo" className="icon"/></li>
          <li>React <img src={ReactLogo} alt="React logo" className="icon"/></li> 
          <li>Ruby <img src={RubyLogo} alt="Ruby icon" className="icon"/></li>
          <li>Ruby on Rails <img src={RailsLogo} alt="Rails icon" className="icon"/></li>
          <li>HTML <img src={HTMLLogo} alt="HTML icon" className="icon"/></li>
          <li>CSS  <img src={CSSLogo} alt="CSS icon" className="icon"/></li>

        </ul>
        <h2>Bio</h2>
        <p>I am a full-stack web developer with experience designing websites and building APIs. I specialize in React, and I have also worked with vanilla JS, Ruby, and Ruby on Rails. I am currently learning Python. My previous experience includes consulting with companies on their brand identity and using persuasive writing to increase conversions. I hope to use my experience in web development and branding to better connect companies and their clients. I am currently searching for a role in web development, so reach out and let's connect!</p>
        <h2>Location</h2>
        <p>I am located in Greenville, South Carolina. I am open to roles in my area and remote roles anywhere in the United States.</p>
        <h2>Links</h2>
        <ul className="about-ul self-links">
          <li><a href="https://github.com/pjparham" className="about-link">Github <GitHubIcon/></a></li>
          <li><a href="https://www.linkedin.com/in/parker-parham/" className="about-link">LinkedIn <LinkedInIcon/></a></li>
        </ul>
    </div>
  )
}
