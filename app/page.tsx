'use client';

import React from 'react';
import Header from "./components/Header";
import BackgroundParticles from './components/BackgroundParticles';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <BackgroundParticles />

      <div className="fixed top-0 left-0 w-full z-20">
        <Header />
      </div>

      <div className="flex flex-col items-center justify-center h-screen text-white relative z-10">
        <img src="/Picture.jpg" alt="Yassine Bibi" className="w-50 h-72 rounded-2xl mb-4" />
        <h1 className="text-7xl text-center ">Yassine Bibi</h1>
        <h2 className="text-4xl mt-2">Software Developer</h2>

        <div className="flex gap-6 mt-4">
          <a href="https://www.linkedin.com/in/yassine-bibi-b8936b252/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-3xl">
            <FaLinkedin />
          </a>
          <a href="https://github.com/YassineBibi02" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 text-3xl">
            <FaGithub />
          </a>
        </div>

      </div>

      <div className="pt-24  relative z-10">

        <div className="bg-white w-full h-80 shadow-md rounded-none mb-4 px-60 py-5">
          
          <strong className="text-black text-2xl  mt-3">About me:</strong>
          <p className="text-black  text-lg mt-5">
          Motivated computer engineering graduate <br></br>
          looking for new challenges to further expand my knowledge and skills. In addition to my sound technical expertise, logical and constructive thinking are among my most important strengths.
          </p>
          
        </div>

        <div className="bg-white w-full h-80 shadow-md rounded-lg p-4 mb-4 my-80">
          <h2 className="text-lg font-semibold">Block 2</h2>
          <p className="text-gray-600">
            This is another placeholder for future content.
          </p>
        </div>

      </div>
    </main>
  );
}
