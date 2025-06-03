'use client'

import React, { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// --- Component: VolunteerForm ---
const VolunteerForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      city: '',
      role: '',
      message: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Volunteer Form Submitted:', formData);
      // In a real app, you'd send this data to a backend
      alert('Thank you for your interest! We will get in touch soon. 💖');
      setFormData({ name: '', city: '', role: '', message: '' }); // Reset form
    };
  
    return (
      <section id="volunteer" className="py-20 bg-dark-bg text-light-text">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-poppins font-bold text-center mb-12 text-accent-yellow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Be a Paw-sitive Change! 🐾
          </motion.h2>
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-[#2A303C] p-8 rounded-xl shadow-3xl border border-primary-green/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-poppins mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-primary-green focus:ring focus:ring-primary-green focus:ring-opacity-50 transition-all duration-300 text-light-text"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="city" className="block text-lg font-poppins mb-2">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Mumbai"
                required
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-primary-green focus:ring focus:ring-primary-green focus:ring-opacity-50 transition-all duration-300 text-light-text"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="role" className="block text-lg font-poppins mb-2">Role Preference</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-primary-green focus:ring focus:ring-primary-green focus:ring-opacity-50 transition-all duration-300 text-light-text appearance-none"
              >
                <option value="">Select a role</option>
                <option value="awareness">Awareness & Outreach</option>
                <option value="event">Event Management</option>
                <option value="rescue">Animal Rescue Support</option>
                <option value="social-media">Social Media & Content</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-poppins mb-2">Tell Us More (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Any specific skills or ideas you'd like to share?"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-primary-green focus:ring focus:ring-primary-green focus:ring-opacity-50 transition-all duration-300 text-light-text"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(251, 191, 36, 0.6)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-accent-yellow text-dark-bg font-bold py-4 rounded-full text-xl shadow-xl hover:bg-amber-300 transition-all duration-300"
            >
              Sign Up to Volunteer! 🚀
            </motion.button>
          </motion.form>
        </div>
      </section>
    );
  }; 

  export default VolunteerForm;
  