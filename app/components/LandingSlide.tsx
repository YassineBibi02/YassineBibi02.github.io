import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const LandingSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white relative z-10">
      <Image 
      src="/images/Picture.jpg" 
      alt="Yassine Bibi"  
      className="rounded-2xl mt-14 sm:mt-0 mb-5 sm:mb-10"
      width={0} 
      height={0} 
      sizes="(max-width: 640px) 300px, (max-width: 1024px) 250px, 300px"
      style={{ width: 'auto', height: 'auto' }}
      />
      <h1 className="text-5xl sm:text-7xl text-center ">Yassine Bibi</h1>
      <h2 className="text-2xl sm:text-4xl mt-2">Computer Engineer</h2>

      <div className="flex gap-6 mt-4">
      <a
        href="https://www.linkedin.com/in/yassine-bibi-b8936b252/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 text-3xl"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/YassineBibi02"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 text-3xl"
      >
        <FaGithub />
      </a>
      <a
        href="mailto:yassinebibi2002@gmail.com"
        className="flex items-center space-x-3 hover:text-red-500 text-3xl"
      >
        <FaEnvelope />
      </a>
      </div>
    </div>
  );
};

export default LandingSlide;
