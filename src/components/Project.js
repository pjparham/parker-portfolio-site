import React from 'react'
import blogfaceMobile from '../images/blogface_mobile.png'
import blogFaceDesktop from '../images/blogface_desktop.png'

export default function Project({ project }) {
    // [title, mobileImage, desktopImage, description, languages, videoLink, githubLink] = project
    let photos = [blogfaceMobile, blogFaceDesktop]
  return (
    <div>
        <h3>{project.title}</h3>
        <div className="project-image-container">
            <img src={photos[project.mobileImage]} alt="Parker' project in mobile view" className="project-mobile-image"/>
            <img src={photos[project.desktopImage]} alt="Parker' project in desktop view" className="project-desktop-image"/>
        </div>
    </div>
  )
}
