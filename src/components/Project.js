import React from 'react'
import blogfaceMobile from '../images/blogface_mobile.png'
import blogFaceDesktop from '../images/blogface_desktop.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Project({ project }) {

    let photos = [blogfaceMobile, blogFaceDesktop]
  return (
    <div className="project-card">
        <h3>{project.title}</h3>

        <div className="project-image-container">
            <img src={photos[project.mobileImage]} alt="Parker' project in mobile view" className="project-mobile-image"/>
            <img src={photos[project.desktopImage]} alt="Parker' project in desktop view" className="project-desktop-image"/>
        </div>
        <p className="project-image-caption">Pictured: Mobile and Desktop views of {project.title}</p>
        <p><b>Descripton:</b></p>
        <p>{project.description}</p>
        <p><b>Tools used:</b></p>
        <p>{project.languages}</p>
        <div className="project-links">
            <a className="project-link" href={project.videoLink}>Video Demo  <YouTubeIcon/></a><br/>
            <a className="project-link" href={project.githubLink}>Github Repository  <GitHubIcon/></a>
        </div>
        <hr/>
    </div>
  )
}
