'use client';

import React, { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// --- Component: Navbar ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark-bg text-light-text p-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold font-poppins text-primary-green"
        >
          Collegetips.in <span className="text-accent-yellow">🐾</span>
        </motion.div>
        <div className="hidden md:flex space-x-8 font-poppins text-lg">
          {['Home', 'About', 'Volunteer', 'Impact Stories', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="hover:text-accent-yellow transition-colors duration-300 relative group"
              whileHover={{ scale: 1.05 }}
            >
              {item}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-accent-yellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </motion.a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-light-text focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-bg mt-4 flex flex-col items-center space-y-4 font-poppins text-lg"
          >
            {['Home', 'About', 'Volunteer', 'Impact Stories', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-accent-yellow transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;