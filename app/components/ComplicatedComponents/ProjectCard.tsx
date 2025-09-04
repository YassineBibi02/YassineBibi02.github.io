import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  icon: string;
  bgColor: string;
  txtColor: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  icon,
  bgColor,
  txtColor,
}) => {
  return (
    <div
      className={`p-6 rounded-md shadow-md ${txtColor} ${bgColor} w-full sm:w-[300px] relative`}
    >
      <div className="flex justify-center h-[48px] mb-4">
        {/* <img src={icon} alt={title} className="w-12 h-12" /> */}
        <Image src={icon} alt={title} width={48} height={48} unoptimized />
      </div>
      <h2 className="text-xl  font-bold">{title}</h2>
      <p className="text-sm mt-2 mb-5">{description}</p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-5 left-6 text-sm font-semibold underline "
        >
          VISIT WEBSITE
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
