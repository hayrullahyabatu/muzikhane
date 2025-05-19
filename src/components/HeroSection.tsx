import React, { useCallback } from 'react';
import { Music, Guitar, Piano, Mic, Headphones, Radio, Drum, Speaker, Disc, Blinds as Violin, Drum as Trumpet } from 'lucide-react';
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";

const HeroSection: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Optional: Add any initialization after particles are loaded
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" id="home">
      {/* Particles Background */}
      <Particles
        id="heroParticles"
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
              opacity: 0.1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.8,
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
              value: 60,
            },
            opacity: {
              value: 0.15,
              random: true,
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.1,
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
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
              },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy-dark/95 to-burgundy/95 backdrop-blur-sm" />

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 text-center z-10 -mt-32">
        {/* Welcome Text */}
        <h1 
          className="text-5xl md:text-6xl font-script text-primary-100 mb-16 animate-scale-in"
          style={{
            textShadow: '0 0 20px rgba(252, 231, 243, 0.3)',
          }}
        >
          Hoş Geldiniz
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
          <button
            onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto bg-primary-100 text-burgundy hover:bg-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 hover:shadow-xl animate-fade-in flex items-center justify-center gap-3 group"
          >
            <Music size={24} className="transition-transform group-hover:rotate-12" />
            Eğitim Almak İstiyorum
          </button>

          <button
            onClick={() => document.getElementById('studio')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto bg-primary-100 text-burgundy hover:bg-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 hover:shadow-xl animate-fade-in flex items-center justify-center gap-3 group"
          >
            <Mic size={24} className="transition-transform group-hover:rotate-12" />
            Stüdyo & Kayıt Hizmeti
          </button>

          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto bg-primary-100 text-burgundy hover:bg-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 hover:shadow-xl animate-fade-in flex items-center justify-center gap-3 group"
          >
            <Guitar size={24} className="transition-transform group-hover:rotate-12" />
            Sadece Gezinmek İstiyorum
          </button>
        </div>
      </div>

      {/* Floating Musical Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Row */}
        <div className="absolute top-[5%] left-[10%] animate-float opacity-20" style={{ animationDelay: '0s' }}>
          <Guitar size={32} className="text-primary-100" />
        </div>
        <div className="absolute top-[8%] left-[30%] animate-float opacity-15" style={{ animationDelay: '1.2s' }}>
          <Piano size={36} className="text-primary-100" />
        </div>
        <div className="absolute top-[12%] left-[50%] animate-float opacity-20" style={{ animationDelay: '2.4s' }}>
          <Violin size={28} className="text-primary-100" />
        </div>
        <div className="absolute top-[6%] left-[70%] animate-float opacity-15" style={{ animationDelay: '3.6s' }}>
          <Trumpet size={34} className="text-primary-100" />
        </div>
        <div className="absolute top-[10%] left-[90%] animate-float opacity-20" style={{ animationDelay: '4.8s' }}>
          <Music size={30} className="text-primary-100" />
        </div>

        {/* Middle Top Row */}
        <div className="absolute top-[25%] left-[5%] animate-float opacity-15" style={{ animationDelay: '0.6s' }}>
          <Headphones size={38} className="text-primary-100" />
        </div>
        <div className="absolute top-[28%] left-[25%] animate-float opacity-20" style={{ animationDelay: '1.8s' }}>
          <Radio size={32} className="text-primary-100" />
        </div>
        <div className="absolute top-[22%] left-[45%] animate-float opacity-15" style={{ animationDelay: '3s' }}>
          <Drum size={36} className="text-primary-100" />
        </div>
        <div className="absolute top-[26%] left-[65%] animate-float opacity-20" style={{ animationDelay: '4.2s' }}>
          <Speaker size={34} className="text-primary-100" />
        </div>
        <div className="absolute top-[20%] left-[85%] animate-float opacity-15" style={{ animationDelay: '5.4s' }}>
          <Mic size={32} className="text-primary-100" />
        </div>

        {/* Middle Bottom Row */}
        <div className="absolute top-[65%] left-[15%] animate-float opacity-20" style={{ animationDelay: '0.3s' }}>
          <Piano size={34} className="text-primary-100" />
        </div>
        <div className="absolute top-[68%] left-[35%] animate-float opacity-15" style={{ animationDelay: '1.5s' }}>
          <Guitar size={36} className="text-primary-100" />
        </div>
        <div className="absolute top-[62%] left-[55%] animate-float opacity-20" style={{ animationDelay: '2.7s' }}>
          <Music size={32} className="text-primary-100" />
        </div>
        <div className="absolute top-[66%] left-[75%] animate-float opacity-15" style={{ animationDelay: '3.9s' }}>
          <Disc size={38} className="text-primary-100" />
        </div>
        <div className="absolute top-[60%] left-[95%] animate-float opacity-20" style={{ animationDelay: '5.1s' }}>
          <Radio size={34} className="text-primary-100" />
        </div>

        {/* Bottom Row */}
        <div className="absolute top-[85%] left-[10%] animate-float opacity-15" style={{ animationDelay: '0.9s' }}>
          <Mic size={32} className="text-primary-100" />
        </div>
        <div className="absolute top-[88%] left-[30%] animate-float opacity-20" style={{ animationDelay: '2.1s' }}>
          <Speaker size={36} className="text-primary-100" />
        </div>
        <div className="absolute top-[82%] left-[50%] animate-float opacity-15" style={{ animationDelay: '3.3s' }}>
          <Headphones size={34} className="text-primary-100" />
        </div>
        <div className="absolute top-[86%] left-[70%] animate-float opacity-20" style={{ animationDelay: '4.5s' }}>
          <Drum size={32} className="text-primary-100" />
        </div>
        <div className="absolute top-[80%] left-[90%] animate-float opacity-15" style={{ animationDelay: '5.7s' }}>
          <Guitar size={38} className="text-primary-100" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;