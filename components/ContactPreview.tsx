'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ContactPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair text-primary mb-6">Get in Touch</h2>
            <p className="text-text mb-8">
              Have questions about how we can help your hotel? Reach out to schedule a free 30-minute consultation to discuss your specific needs and challenges.
            </p>
            
            <div className="space-y-6 mb-8">
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
            </div>
            
            <Link 
              href="/routes/contact" 
              className="btn-primary"
            >
              Contact Us
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-playfair text-primary mb-6">How We Work</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="shrink-0 rounded-full bg-primary w-8 h-8 flex items-center justify-center text-white font-semibold mr-4">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Initial Consultation</h4>
                  <p className="text-muted">We'll discuss your hotel's current situation, challenges, and objectives.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="shrink-0 rounded-full bg-primary w-8 h-8 flex items-center justify-center text-white font-semibold mr-4">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Needs Analysis</h4>
                  <p className="text-muted">We'll perform a thorough analysis of your property and market position.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="shrink-0 rounded-full bg-primary w-8 h-8 flex items-center justify-center text-white font-semibold mr-4">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Strategic Proposal</h4>
                  <p className="text-muted">We'll develop a tailored proposal with clear objectives and pricing.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="shrink-0 rounded-full bg-primary w-8 h-8 flex items-center justify-center text-white font-semibold mr-4">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Implementation</h4>
                  <p className="text-muted">We'll work alongside your team to implement strategic improvements.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}