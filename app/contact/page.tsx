'use client';

import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../../components/HeroSection';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection
        title="Contact Us"
        subtitle="Have questions or ready to start a conversation about your hotel's growth? We're here to help."
        primaryCta={{ text: "Fill Out the Form Below", link: "#contact-form" }}
      />
      
      <section id="contact-form" className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-playfair text-primary mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Get in Touch
              </motion.h2>
              
              <motion.p 
                className="text-lg text-text mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Fill out the form to schedule a consultation or inquire about our services. We'll get back to you promptly to discuss how we can help with your hotel's specific needs.
              </motion.p>
              
              <motion.div 
                className="space-y-6 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-start">
                  <div className="bg-accent bg-opacity-20 rounded-full p-3 mr-4">
                    <i className="fas fa-envelope text-accent"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p>
                      <a href="mailto:contact@bhargavihospitality.com" className="text-accent hover:underline">
                        contact@bhargavihospitality.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent bg-opacity-20 rounded-full p-3 mr-4">
                    <i className="fas fa-phone text-accent"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p>
                      <a href="tel:+919876543210" className="hover:text-accent">
                        +91 9876 543 210
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent bg-opacity-20 rounded-full p-3 mr-4">
                    <i className="fas fa-map-marker-alt text-accent"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Location</h3>
                    <p>Mumbai, Maharashtra, India</p>
                    <p className="text-sm text-muted">(We work with clients nationwide and internationally)</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-background p-8 rounded-lg shadow-md">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-playfair mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            We Work With Hotels Across India
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From boutique properties in Goa to business hotels in Delhi NCR, our consulting expertise spans all markets and property types. We understand the unique challenges of each region and segment.
          </motion.p>
        </div>
      </section>
    </motion.div>
  );
}