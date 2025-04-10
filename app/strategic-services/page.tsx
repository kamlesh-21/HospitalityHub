'use client';

import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../../components/HeroSection';
import StrategicServicesPreview from '../../components/StrategicServicesPreview';
import CTASection from '../../components/CTASection';
import ContactPreview from '../../components/ContactPreview';
import { strategicPillars } from '../../lib/data';

export default function StrategicServices() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection
        title="Comprehensive Strategic Consulting"
        subtitle="From pre-launch planning to full property management, our strategic services cover every aspect of the hotel lifecycle with specialized expertise and practical solutions."
        primaryCta={{ text: "Explore Our Services", link: "#strategic-services" }}
      />
      
      <section id="strategic-services" className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-playfair text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              End-to-End Hotel Solutions
            </motion.h2>
            <motion.p 
              className="text-lg text-text max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our strategic services are designed to address every challenge and opportunity in your hotel's journey, from concept to optimization and beyond.
            </motion.p>
          </div>
        </div>
      </section>
      
      <StrategicServicesPreview pillars={strategicPillars} />
      
      <CTASection
        title="Let's Build Your Strategic Roadmap"
        description="Every hotel's journey is unique. Our consultants will work with you to develop a tailored strategic plan that addresses your specific challenges and goals."
        buttonText="Schedule a Strategy Session"
        buttonLink="/contact"
      />
      
      <ContactPreview />
    </motion.div>
  );
}