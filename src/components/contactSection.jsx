'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);


const ContactSection = () => {
    const formRef = useRef(null);
    const mapRef = useRef(null);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    const [formStatus, setFormStatus] = useState(null); // null, 'sending', 'success', 'error'
    const [focusedField, setFocusedField] = useState(null);
    
    // Animation for form fields when component mounts
    useEffect(() => {
      if (formRef.current) {
        const formElements = formRef.current.querySelectorAll('input, textarea, button');
        
        gsap.fromTo(formElements, 
          { y: 20, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            stagger: 0.1, 
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 80%",
            }
          }
        );
      }
      
      // Map pin drop animation
      if (mapRef.current) {
        gsap.fromTo(
          mapRef.current,
          { scale: 0.8, opacity: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 1.2, 
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: mapRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }, []);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
    
    const handleFocus = (fieldName) => {
      setFocusedField(fieldName);
    };
    
    const handleBlur = () => {
      setFocusedField(null);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormStatus('sending');
      
      // Simulate API call
      setTimeout(() => {
        console.log('Contact Form Submitted:', formData);
        setFormStatus('success');
        setTimeout(() => {
          setFormStatus(null);
          setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
        }, 3000);
      }, 1500);
    };
  
    const contactInfo = [
      { type: 'email', value: 'mail@collegetips.in', icon: (
          <svg className="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7m-18 0h18"></path>
          </svg>
        )
      },
      { type: 'phone', value: '(+91) 7024577333', icon: (
          <svg className="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
          </svg>
        )
      },
    ];
  
    const officeLocations = [
      { city: 'BHOPAL', address: 'Third Floor, Above Bread & Better, Near Shiyoy Complex, infront of Uco & Canera Bank, E-8 Extension Gulmohar, Bhopal, Madhya Pradesh 462039', icon: (
          <svg className="w-6 h-6 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657m11.314 0A8.998 8.998 0 0112 21a8.998 8.998 0 01-5.657-4.343m11.314 0A8.998 8.998 0 0012 13a8.998 8.998 0 00-5.657 3.343m11.314 0H21M6.343 16.657H3m14.314 0a8.998 8.998 0 01-11.314 0"></path>
          </svg>
        )
      },
      { city: 'INDORE', address: 'The One, RNT Marg, Indore, Madhya Pradesh 452001', icon: (
          <svg className="w-6 h-6 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657m11.314 0A8.998 8.998 0 0112 21a8.998 8.998 0 01-5.657-4.343m11.314 0A8.998 8.998 0 0012 13a8.998 8.998 0 00-5.657 3.343m11.314 0H21M6.343 16.657H3m14.314 0a8.998 8.998 0 01-11.314 0"></path>
          </svg>
        )
      },
      { city: 'MUMBAI', address: '74 Technopark, MIDC Gate no 2, Seepz, Andheri East, Mumbai, Maharashtra 400069', icon: (
          <svg className="w-6 h-6 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657m11.314 0A8.998 8.998 0 0112 21a8.998 8.998 0 01-5.657-4.343m11.314 0A8.998 8.998 0 0012 13a8.998 8.998 0 00-5.657 3.343m11.314 0H21M6.343 16.657H3m14.314 0a8.998 8.998 0 01-11.314 0"></path>
          </svg>
        )
      },
      { city: 'PUNE', address: 'First Floor, Creaticity Mall, Opposite Golf Course, Shastrinagar, Yerawada, Pune 411006', icon: (
          <svg className="w-6 h-6 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657m11.314 0A8.998 8.998 0 0112 21a8.998 8.998 0 01-5.657-4.343m11.314 0A8.998 8.998 0 0012 13a8.998 8.998 0 00-5.657 3.343m11.314 0H21M6.343 16.657H3m14.314 0a8.998 8.998 0 01-11.314 0"></path>
          </svg>
        )
      },
      { city: 'DELHI', address: '1112, Surya kiran building Connaught Place, New Delhi, 110001', icon: (
          <svg className="w-6 h-6 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657m11.314 0A8.998 8.998 0 0112 21a8.998 8.998 0 01-5.657-4.343m11.314 0A8.998 8.998 0 0012 13a8.998 8.998 0 00-5.657 3.343m11.314 0H21M6.343 16.657H3m14.314 0a8.998 8.998 0 01-11.314 0"></path>
          </svg>
        )
      },
      { city: 'UPCOMING', address: 'RAIPUR, JAIPUR, GWALIOR, AHMEDABAD & GOA, HUNGARY (International Hub)', icon: (
          <svg className="w-6 h-6 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        )
      },
    ];
    
    // Animation variants for form elements
    const formItemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      hover: { scale: 1.02, transition: { duration: 0.2 } },
      tap: { scale: 0.98, transition: { duration: 0.2 } },
    };
    
    // Animation variants for success message
    const successVariants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { 
          duration: 0.5,
          type: "spring",
          stiffness: 200,
          damping: 15
        } 
      },
      exit: { 
        opacity: 0, 
        scale: 0.8, 
        transition: { duration: 0.3 } 
      }
    };
  
    return (
      <section id="contact" className=" text-black py-20 bg-gradient-to-b from-light-gray-bg to-white text-dark-bg relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-primary-green/10 animate-pulse"></div>
          <div className="absolute top-1/4 -right-20 w-40 h-40 rounded-full bg-accent-yellow/10 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 -left-16 w-32 h-32 rounded-full bg-accent-pink/10 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-20 right-1/3 w-56 h-56 rounded-full bg-secondary-blue/10 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-secondary-blue inline-block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <span className="relative text-white">
                Contact Us 💌
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-accent-pink rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.span>
              </span>
            </motion.h2>
            <motion.p
              className=" text-white text-lg md:text-xl mt-4 text-dark-bg font-medium max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              You can contact us anytime, we are always here for you.
            </motion.p>
          </motion.div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Map & Contact Info */}
            <div className="flex flex-col space-y-8">
              {/* Map Section */}
              <motion.div
                ref={mapRef}
                className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-primary-green"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.126585934484!2d77.44781447514332!3d23.25052957896435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c439162953251%3A0x6b301c238b6d8a3!2sCollegetips!5e0!3m2!1sen!2sin!4v1701026362675!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Collegetips.in Location"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-green/20 to-transparent pointer-events-none"></div>
                
                {/* Animated map pin */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 10,
                    delay: 1 
                  }}
                >
                  <div className="w-8 h-8 bg-accent-pink rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-4 h-4 bg-accent-pink/30 rounded-full absolute -bottom-10 left-1/2 transform -translate-x-1/2 animate-ping"></div>
                </motion.div>
              </motion.div>
  
              {/* Contact Info */}
              <motion.div
                className="bg-white p-8 rounded-xl shadow-lg border border-secondary-blue/30 relative overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-green/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-yellow/10 rounded-full transform -translate-x-12 translate-y-12"></div>
                
                <div className="relative z-10">
                  <motion.h3 
                    className="text-3xl font-poppins font-bold text-primary-green mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    Get In Touch
                  </motion.h3>
                  <motion.p 
                    className="text-lg text-gray-700 leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Do you have anything in your mind to tell us? Please don't hesitate to get in touch with us via our contact form.
                  </motion.p>
                  <div className="space-y-4 mb-8">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {info.icon}
                        </motion.div>
                        <span className="text-lg text-gray-800 font-medium">{info.value}</span>
                      </motion.div>
                    ))}
                  </div>
  
                  <motion.h4 
                    className="text-2xl font-poppins font-bold text-secondary-blue mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Our Offices
                  </motion.h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {officeLocations.map((location, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 hover:border-accent-yellow hover:bg-white transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.4 + index * 0.08 }}
                        whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                      >
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {location.icon}
                        </motion.div>
                        <div>
                          <p className="text-lg font-semibold text-dark-bg">{location.city}</p>
                          <p className="text-sm text-gray-600">{location.address}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
  
            {/* Right Column: Contact Form */}
            <motion.div
              ref={formRef}
              className="bg-white p-8 rounded-xl shadow-lg border-4 border-accent-pink relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-accent-pink/10 rounded-full transform -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-secondary-blue/5 rounded-full transform translate-x-20 translate-y-20"></div>
              
              <div className="relative z-10">
                <motion.h3
                  className="text-3xl font-poppins font-bold text-accent-pink mb-8 text-center"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="relative inline-block">
                    Message Us
                    <motion.span 
                      className="absolute -bottom-2 left-0 w-full h-1 bg-accent-pink rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    ></motion.span>
                  </span>
                </motion.h3>
                
                <AnimatePresence>
                  {formStatus === 'success' ? (
                    <motion.div
                      className="bg-green-50 border-2 border-primary-green rounded-xl p-6 text-center my-8"
                      variants={successVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <motion.div 
                        className="w-16 h-16 bg-primary-green rounded-full mx-auto flex items-center justify-center mb-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                      >
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </motion.div>
                      <h4 className="text-2xl font-bold text-primary-green mb-2">Message Sent!</h4>
                      <p className="text-gray-700">We'll get back to you soon. Thank you for reaching out! 💌</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <motion.div
                        variants={formItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        whileTap="tap"
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <label 
                          htmlFor="contact-name" 
                          className={`block text-lg font-poppins mb-2 font-semibold ${focusedField === 'name' ? 'text-accent-pink' : 'text-gray-800'} transition-colors duration-300`}
                        >
                          Your Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="contact-name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => handleFocus('name')}
                            onBlur={handleBlur}
                            placeholder="Your Name"
                            required
                            className="w-full p-4 pl-12 rounded-lg bg-gray-50 border-2 border-gray-200 focus:border-accent-pink focus:ring focus:ring-accent-pink/30 focus:ring-opacity-50 transition-all duration-300 text-dark-bg shadow-sm"
                          />
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <svg className={`w-6 h-6 ${focusedField === 'name' ? 'text-accent-pink' : 'text-gray-400'} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        variants={formItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        whileTap="tap"
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative"
                      >
                        <label 
                          htmlFor="contact-email" 
                          className={`block text-lg font-poppins mb-2 font-semibold ${focusedField === 'email' ? 'text-accent-pink' : 'text-gray-800'} transition-colors duration-300`}
                        >
                          Your Email
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="contact-email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => handleFocus('email')}
                            onBlur={handleBlur}
                            placeholder="your.email@example.com"
                            required
                            className="w-full p-4 pl-12 rounded-lg bg-gray-50 border-2 border-gray-200 focus:border-accent-pink focus:ring focus:ring-accent-pink/30 focus:ring-opacity-50 transition-all duration-300 text-dark-bg shadow-sm"
                          />
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <svg className={`w-6 h-6 ${focusedField === 'email' ? 'text-accent-pink' : 'text-gray-400'} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        variants={formItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        whileTap="tap"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                      >
                        <label 
                          htmlFor="contact-subject" 
                          className={`block text-lg font-poppins mb-2 font-semibold ${focusedField === 'subject' ? 'text-accent-pink' : 'text-gray-800'} transition-colors duration-300`}
                        >
                          Subject
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="contact-subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            onFocus={() => handleFocus('subject')}
                            onBlur={handleBlur}
                            placeholder="Regarding Collaboration / Query"
                            required
                            className="w-full p-4 pl-12 rounded-lg bg-gray-50 border-2 border-gray-200 focus:border-accent-pink focus:ring focus:ring-accent-pink/30 focus:ring-opacity-50 transition-all duration-300 text-dark-bg shadow-sm"
                          />
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <svg className={`w-6 h-6 ${focusedField === 'subject' ? 'text-accent-pink' : 'text-gray-400'} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        variants={formItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        whileTap="tap"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                      >
                        <label 
                          htmlFor="contact-message" 
                          className={`block text-lg font-poppins mb-2 font-semibold ${focusedField === 'message' ? 'text-accent-pink' : 'text-gray-800'} transition-colors duration-300`}
                        >
                          Your Message
                        </label>
                        <div className="relative">
                          <textarea
                            id="contact-message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => handleFocus('message')}
                            onBlur={handleBlur}
                            rows="6"
                            placeholder="Type your message here..."
                            required
                            className="w-full p-4 pl-12 rounded-lg bg-gray-50 border-2 border-gray-200 focus:border-accent-pink focus:ring focus:ring-accent-pink/30 focus:ring-opacity-50 transition-all duration-300 text-dark-bg shadow-sm"
                          ></textarea>
                          <div className="absolute left-3 top-8 text-gray-400">
                            <svg className={`w-6 h-6 ${focusedField === 'message' ? 'text-accent-pink' : 'text-gray-400'} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.button
                        type="submit"
                        disabled={formStatus === 'sending'}
                        className={`w-full relative overflow-hidden group bg-accent-pink text-light-text font-bold py-4 px-6 rounded-full text-xl shadow-xl transition-all duration-300 ${formStatus === 'sending' ? 'opacity-80' : 'hover:bg-rose-400'}`}
                        variants={formItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(244, 114, 182, 0.6)" }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {/* Button background animation */}
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                        <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                          {formStatus === 'sending' ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>Send Message 🚀</>
                          )}
                        </span>
                      </motion.button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  export default ContactSection;