import React from 'react'
import Project from './Project'


let allProjects = [
    {title: "BlogFace",
    mobileImage: 0,
    desktopImage: 1,
    description: "BlogFace is a blogging application that allows users to share, like, and comment on eachother's posts. BlogFace uses a JSON server to store posts with data on each post's likes and comments. I used Auth0 which allows users to login. With data acquired at login, the profile page dynamically renders a user's name. Each user has a unique key, and this is used to support the 'like' functionality. This is a full CRUD application, and posts can be displayed, created, edited, and deleted on the front-end and on a JSON backend. Users are also able to like posts and comment on posts, and both of those actions take place on the front-end and back-end as well. Enabling comments and likes to be assiociated with Post objects only using a JSON backend was a fun challenge that I really enjoyed applying my problem-solving skills to.",
    languages: "JavaScript, React, CSS, Auth0",
    videoLink: "https://youtu.be/FWfpuK92YT0",
    githubLink: "https://github.com/pjparham/phase-2-blog-face"}
]

export default function Projects() {
    const projects = allProjects.map((project) => {
       return <Project project={project} key={project.name}/>
    })


  return (
    <div className="pages">
        <h1>My Projects:</h1>
       
        {projects}
    </div>
  )
}

{/* <div className='pages'>
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
</div> */}
