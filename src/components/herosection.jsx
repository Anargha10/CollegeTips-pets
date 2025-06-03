'use client';
'use client';

import React, {  useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const heroRef = useRef(null);
  
    useEffect(() => {
      // GSAP animation for hero text and button
      gsap.fromTo(".hero-slogan",
        { opacity: 0, y: 50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "back.out(1.7)", delay: 0.5 }
      );
      gsap.fromTo(".hero-cta-btn",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 1 }
      );
  
      // Subtle parallax for background image
      gsap.to(".hero-bg-img", {
        yPercent: 10, // Move background 10% down relative to scroll
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, []);
  
    return (
      <section
        id="home"
        ref={heroRef}
        className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-dark-bg"
      >
        <div
          className="hero-bg-img absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg.jpeg')" }} // Placeholder AI image
        >
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        </div>
  
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <motion.h1
            className="hero-slogan text-5xl md:text-7xl lg:text-8xl font-pacifico text-accent-yellow leading-tight drop-shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Making Cities Paw-some! 🐾✨
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-light-text mt-4 mb-8 font-poppins"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Join our movement to create a safer, happier, and more loving environment for every furry friend.
          </motion.p>
          <motion.div
            className="hero-cta-btn flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(52, 211, 153, 0.7)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-green text-dark-bg font-bold py-3 px-8 rounded-full text-lg shadow-xl hover:bg-emerald-400 transition-all duration-300"
            >
              Join the Movement 🐶
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.7)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary-blue text-light-text font-bold py-3 px-8 rounded-full text-lg shadow-xl hover:bg-blue-400 transition-all duration-300"
            >
              Volunteer Now! 🤝
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  };

  export default HeroSection;