import React from "react";
import BackgroundParticles from "./components/BackgroundParticles";
import Aboutme from "./components/Aboutme";
import LandingSlide from "./components/LandingSlide";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <BackgroundParticles />

      <LandingSlide />

      <div className="pt-24  relative z-10">
        <Aboutme />

        <div className=" backdrop-blur sm:mt-0 py-20 ">
          <h1 className="text-center text-5xl  sm:text-4xl text-[rgba(255,255,255,0.8)]">
            Portfolio
          </h1>
        </div>

        <Projects />
        <Timeline />
        {/* <Languages /> */}
      </div>
    </main>
  );
}
