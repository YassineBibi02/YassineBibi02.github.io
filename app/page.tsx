
import React from 'react';
import Header from "./components/Header";
import BackgroundParticles from './components/BackgroundParticles';
import Footer from './components/footer';
import Aboutme from './components/Aboutme';
import LandingSlide from './components/LandingSlide';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';




export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <BackgroundParticles />

      <div className="fixed top-0 left-0 w-full z-20">
        <Header />
      </div>

      <LandingSlide />

      <div className="pt-24  relative z-10">

        <Aboutme />

        <div className='  sm:mt-0 py-20 '>
        <h1 className='text-center text-5xl sm:text-4xl text-[rgba(255,255,255,0.8)]'>Portfolio</h1>
        </div>

        <Projects />
        <Timeline />
        <Contact />
      </div>
      
      <Footer />

    </main>
  );
}
