'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta?: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
}

export default function HeroSection({ 
  title, 
  subtitle, 
  primaryCta, 
  secondaryCta 
}: HeroProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-r from-primary to-primary/90 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-100 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {primaryCta && (
              <Link 
                href={primaryCta.link} 
                className="btn-primary"
              >
                {primaryCta.text}
              </Link>
            )}
            
            {secondaryCta && (
              <Link 
                href={secondaryCta.link} 
                className="border-2 border-white text-white hover:bg-white hover:text-primary transition-colors px-6 py-3 rounded-md font-semibold"
              >
                {secondaryCta.text}
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}