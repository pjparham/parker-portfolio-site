import React from 'react'
import Project from './Project'


let allProjects = [
    {title: "BlogFace",
    mobileImage: 0,
    desktopImage: 1,
    description: "BlogFace is a blogging application that allows users to share, like, and comment on eachother's posts. BlogFace uses a JSON server to store posts with data on each post's likes and comments. I used Auth0 which allows users to login. With data acquired at login, the profile page dynamically renders a user's name. Each user has a unique key, and this is used to support the 'like' functionality. This is a full CRUD application, and posts can be displayed, created, edited, and deleted on the front-end and on a JSON backend. Users are also able to like posts and comment on posts, and both of those actions take place on the front-end and back-end as well. Enabling comments and likes to be assiociated with Post objects only using a JSON backend was a fun challenge that I enjoyed applying my problem-solving skills to.",
    languages: "JavaScript, React, CSS, Auth0",
    videoLink: "https://youtu.be/FWfpuK92YT0",
    githubLink: "https://github.com/pjparham/phase-2-blog-face"}
]

export default function Projects() {
    const projects = allProjects.map((project) => {
       return <Project project={project} key={project.title}/>
    })


  return (
    <div className="pages">
        <h1>My Projects:</h1>
       
        {projects}
    </div>
  )
}

