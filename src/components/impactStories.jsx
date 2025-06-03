'use client';

import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);


// --- Component: ImpactStories ---
const ImpactStories = () => {
    const stories = [
      {
        id: 1,
        title: "From Stray to Star: Buddy's New Home",
        description: "Buddy, a timid stray, found his forever family through our adoption drive. His story inspires us every day!",
        image: "/images/story1.jpeg", // Placeholder AI image
        emoji: "🌟"
      },
      {
        id: 2,
        title: "Clean Parks, Happy Paws: Our Community Drives",
        description: "Thanks to our volunteers, local parks are now cleaner and safer for pets and their owners. A true community effort!",
        image: "/images/story2.jpeg", // Placeholder AI image
        emoji: "🌳"
      },
      {
        id: 3,
        title: "Advocacy in Action: New Pet-Friendly Policies",
        description: "Our persistent advocacy led to new city policies, making public transport more accessible for pet parents. A huge win!",
        image: "/images/story3.jpeg", // Placeholder AI image
        emoji: "🚌"
      },
    ];
  
    return (
      <section id="impact-stories" className="py-20 bg-primary-green/10 text-dark-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-poppins font-bold text-center mb-12 text-primary-green"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Impact Stories: Paws-itive Tales! 💖
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                className="bg-light-text rounded-xl shadow-lg overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.png'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/50 to-transparent"></div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-poppins font-semibold mb-3 text-secondary-blue">{story.title} {story.emoji}</h3>
                  <p className="text-gray-700 leading-relaxed">{story.description}</p>
                </div>
                <div className="p-6 pt-0">
                  <button className="text-primary-green font-semibold hover:underline">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default ImpactStories;