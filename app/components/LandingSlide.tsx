import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const LandingSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white relative z-10">
    <img src="/images/Picture.jpg" alt="Yassine Bibi" className="w-50 h-72 rounded-2xl mb-4" />
    <h1 className="text-7xl text-center ">Yassine Bibi</h1>
    <h2 className="text-4xl mt-2">Computer Engineer</h2>

    <div className="flex gap-6 mt-4">
      <a href="https://www.linkedin.com/in/yassine-bibi-b8936b252/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-3xl">
        <FaLinkedin />
      </a>
      <a href="https://github.com/YassineBibi02" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 text-3xl">
        <FaGithub />
      </a>
    </div>

  </div> 
  )
}

export default LandingSlide