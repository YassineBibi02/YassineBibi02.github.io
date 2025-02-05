import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  icon: string;
  bgColor: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, icon, bgColor }) => {
console.log('link:',link);

  return (
    <div className={`p-6 rounded-md shadow-md text-white ${bgColor} w-full sm:w-[300px]`}>
      <div className="flex justify-center mb-4">
        <img src={icon} alt={title} className="w-12 h-12" />
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm mt-2">{description}</p>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold underline">
          VISIT WEBSITE
        </a>
      ) : null}
      
    </div>
  );
};

export default ProjectCard;
