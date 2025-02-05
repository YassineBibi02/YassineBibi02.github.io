import React from 'react';
import ProjectCard from './ComplicatedComponents/ProjectCard';
import projects from './projectList';

const Projects = () => {
  return (
    <div className="bg-white w-full h-auto shadow-md p-4 mb-0">
      <h1 className='text-center text-3xl font-medium text-BlackCustom mt-10'>My Projects</h1>
      <section className="flex flex-wrap gap-6 justify-center px-6 py-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>
    </div>
  );
};

export default Projects;