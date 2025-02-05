'use client';

import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { Engine } from 'tsparticles-engine';  // Import the correct type

const BackgroundParticles = () => {
  const particlesInit = async (main: Engine) => {  // Add type for 'main'
    await loadSlim(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={{
        particles: {
          links: {
            enable: true,
            distance: 100,
            opacity: 0.5,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 55,
          },
          size: {
            value: 3,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 2,
            straight: false,
          },
          opacity: {
            value: 0.5,
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default BackgroundParticles;
