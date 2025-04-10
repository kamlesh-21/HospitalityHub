'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonLink
}: CTASectionProps) {
  return (
    <section className="py-20 bg-accent">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-playfair text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-primary/80 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              href={buttonLink} 
              className="bg-primary text-white px-8 py-4 rounded-md font-semibold inline-block hover:bg-opacity-90 transition-colors"
            >
              {buttonText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}