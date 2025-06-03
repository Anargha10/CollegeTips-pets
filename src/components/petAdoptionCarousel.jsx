'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);



// --- Component: PetAdoptionCarousel (Bonus Feature) ---
const PetAdoptionCarousel = () => {
    const pets = [
      { id: 1, name: "Whiskers", breed: "Calico Cat", age: "2 years", description: "A playful and affectionate cat looking for a cozy home. Loves to chase laser pointers!", image: "/images/pet1.jpeg", emoji: "🐱" },
      { id: 2, name: "Buddy", breed: "Golden Retriever Mix", age: "1 year", description: "An energetic and loyal dog, perfect for an active family. Enjoys long walks and belly rubs.", image: "/images/pet2.jpeg", emoji: "🐶" },
      { id: 3, name: "Pip", breed: "Parrotlet", age: "6 months", description: "Small but mighty, Pip loves to sing and sit on shoulders. A tiny friend with a big personality!", image: "/images/pet3.jpeg", emoji: "🦜" },
      { id: 4, name: "Shadow", breed: "Black Lab", age: "3 years", description: "A gentle giant with a heart of gold. Shadow is great with kids and other pets, loves to cuddle.", image: "/images/pet4.jpeg", emoji: "🐕" },
      { id: 5, name: "Mittens", breed: "Siamese Cat", age: "4 years", description: "Elegant and independent, Mittens enjoys quiet afternoons in sunbeams. A purr-fect companion.", image: "/images/pet5.jpeg", emoji: "🐈" },
    ];
  
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      // GSAP for smooth auto-scrolling
      const tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });
      const cards = gsap.utils.toArray(carouselRef.current.children);
      const cardWidth = cards[0]?.offsetWidth + 32; // Card width + gap (tailwind gap-8 = 32px)
      const totalWidth = cardWidth * pets.length;
  
      tl.to(carouselRef.current, {
        x: -totalWidth,
        duration: pets.length * 3, // Adjust speed based on number of pets
      });
  
      return () => tl.kill(); // Clean up on unmount
    }, [pets.length]);
  
    return (
      <section className="py-20 bg-dark-bg text-light-text">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-poppins font-bold text-center mb-12 text-accent-pink"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Adopt a Friend! ❤️‍🩹
          </motion.h2>
          <div className="relative overflow-hidden py-8">
            <div ref={carouselRef} className="flex space-x-8 w-max">
              {pets.map((pet, index) => (
                <motion.div
                  key={pet.id}
                  className="flex-none w-72 bg-[#2A303C] rounded-xl shadow-lg border border-accent-pink/30 p-6 flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(244, 114, 182, 0.5)" }}
                >
                  <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-accent-yellow">
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.png'; }}
                    />
                  </div>
                  <h3 className="text-3xl font-poppins font-bold text-accent-yellow mb-2">{pet.name} {pet.emoji}</h3>
                  <p className="text-lg text-light-text mb-1">{pet.breed}</p>
                  <p className="text-md text-gray-400 mb-4">{pet.age}</p>
                  <p className="text-sm text-gray-300 leading-relaxed flex-grow">{pet.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 bg-accent-pink text-dark-bg font-bold py-2 px-6 rounded-full shadow-md hover:bg-rose-300 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default PetAdoptionCarousel;