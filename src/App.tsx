import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import StudioSection from './components/StudioSection';
import PrepSection from './components/PrepSection';
import ChildrenSection from './components/ChildrenSection';
import AdultsSection from './components/AdultsSection';
import Footer from './components/Footer';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const particlesLoaded = async (container: Container | undefined) => {
    // Optional: Add any initialization after particles are loaded
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = document.querySelectorAll('section');
      const newVisibility = {};

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom >= 0;
        newVisibility[section.id] = isVisible;
      });

      setIsVisible(newVisibility);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="font-sans text-white bg-gradient-to-b from-burgundy-dark to-burgundy overflow-x-hidden relative">
      {/* Global Particles Background */}
      <Particles
        id="globalParticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#fce7f3",
            },
            links: {
              color: "#fce7f3",
              distance: 150,
              enable: true,
              opacity: 0.05,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "bounce",
              },
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.1,
              random: true,
              animation: {
                enable: true,
                speed: 0.3,
                minimumValue: 0.05,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
              random: true,
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.5,
                sync: false,
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 200,
                  line_linked: {
                    opacity: 0.2,
                  },
                },
                push: {
                  particles_nb: 3,
                },
              },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      <div className="relative z-10">
        <Navbar scrollY={scrollY} />
        <main>
          <HeroSection />
          <div className={`transition-all duration-700 transform ${isVisible['about'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <AboutSection />
          </div>
          <div className={`transition-all duration-700 transform ${isVisible['courses'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <CoursesSection />
          </div>
          <div className={`transition-all duration-700 transform ${isVisible['studio'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <StudioSection />
          </div>
          <div className={`transition-all duration-700 transform ${isVisible['prep'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <PrepSection />
          </div>
          <div className={`transition-all duration-700 transform ${isVisible['children'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <ChildrenSection />
          </div>
          <div className={`transition-all duration-700 transform ${isVisible['adults'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <AdultsSection />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;