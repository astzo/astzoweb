"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const particlesLoaded = async (container?: Container): Promise<void> => {
    // console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "transparent",
        },
        opacity: 0,
      },
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: [
            "#FFD700", // Gold
            "#FFFFFF", // White
            "#FDB931", // Dark gold
            "#FFFAF0", // Floral white
            "#F0C420", // Light gold
            "#FFF8DC", // Cornsilk
            "#0B0B45", // Dark Navy blue
          ],
        },
        links: {
          enable: false,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: true,
          speed: 1.2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          value: 100, // Increased for more stars
        },
        opacity: {
          value: {
            min: 0.2,
            max: 0.9,
          },
          animation: {
            enable: true,
            speed: 1.8,
            sync: false,
          },
        },
        shape: {
          type: "star",
        },
        size: {
          value: {
            min: 1,
            max: 4.5,
          },
          animation: {
            enable: true,
            speed: 12,
            sync: false,
          },
        },
        twinkle: {
          lines: {
            enable: true,
            frequency: 0.005,
            opacity: 0.7,
            color: {
              value: ["#FFD700", "#FFFFFF"], // Gold and white twinkle lines
            },
          },
          particles: {
            enable: true,
            frequency: 0.05,
            opacity: 1,
            color: {
              value: ["#FDB931", "#FFFAF0"], // Gold and light twinkle particles
            },
          },
        },
      },
      detectRetina: true,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: {
            delay: 0.5,
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id='tsparticles'
      particlesLoaded={particlesLoaded}
      options={options}
      className='absolute inset-0'
    />
  );
};

export default ParticlesBackground;
