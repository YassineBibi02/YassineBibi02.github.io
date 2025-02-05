import React from 'react'
import ProjectCard from './ComplicatedComponents/ProjectCard';

const projects = [
    {
      title: "Battleships",
      description: "During my second semester i developed a battleship game using java. it was a group project with three memebers. one had to develop the UI and one had to develop the Game logic. My responsability was to develop the networking side. as the game had to be online. I also took care of the implenetation between game logic and server logic",
      link: "#",
      icon: "/battleships.png",
      bgColor: "bg-blue-600",
    },
    {
        title: "Anti-Phising App",
        description: "This app was developed within the circumstance of 'Software Projekt' Module in the university. it aims to help workers learn how to deal with fishing emails. where we test the workers by sending fake fishing emails. and also provide guide on how to avoid them in the longrun. i was in charge of developing the backend and i helped connect backend to frontend",
        link: "#",
        icon: "/logo_weiß.png",
        bgColor: "bg-blue-800",
      }
   
  ];

const Projects = () => {
  return (
    <div className="bg-white w-full h-auto shadow-md  p-4 mb-0 ">
        <h1 className='text-center text-3xl font-medium text-BlackCustom mt-10'>My Projects</h1>
        <section className="flex flex-wrap gap-6 justify-center px-6 py-10">
            {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
            ))}
        </section>
    </div>
  )
}

export default Projects