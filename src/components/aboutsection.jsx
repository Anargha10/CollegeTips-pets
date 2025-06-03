'use client';

import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// --- Component: AboutSection ---
const AboutSection = () => {
    return (
      <section id="about" className="py-20 bg-light-gray-bg text-dark-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-poppins font-bold text-center mb-12 text-secondary-blue"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Our Vision: A City for Every Paw 🏙️🐕
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg leading-relaxed mb-6">
                At Collegetips.in, we believe in fostering communities where every living being thrives. Our Pet-Friendly City Campaign is dedicated to transforming urban environments into safe, welcoming, and joyful spaces for our beloved animal companions. From advocating for better pet policies to organizing awareness drives, we're building a network of compassionate volunteers who make a real difference.
              </p>
              <p className="text-lg leading-relaxed">
                We envision a future where pets and people coexist in harmony, enjoying green spaces, accessible services, and a community that truly understands their needs. Join us in this journey!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/about-pets.jpeg" // Placeholder image
                alt="Happy pet in city"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.png'; }}
              />
              <div className="absolute inset-0 bg-primary-green opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }; 

  export default AboutSection;