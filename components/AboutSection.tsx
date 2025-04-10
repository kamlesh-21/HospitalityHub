'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TeamMember } from '../lib/data';

interface AboutSectionProps {
  teamMember: TeamMember;
}

export default function AboutSection({ teamMember }: AboutSectionProps) {
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
            <div className="bg-white p-2 rounded-lg shadow-md">
              <div className="bg-primary/5 rounded-lg p-8 relative">
                {/* This would normally be an image, but we're using a placeholder div for now */}
                <div className="aspect-[3/4] rounded-lg mb-6 bg-primary/10 flex items-center justify-center overflow-hidden">
                  <i className="fas fa-user-tie text-5xl text-primary/30"></i>
                </div>
                <h3 className="text-2xl font-playfair text-primary mb-1">{teamMember.name}</h3>
                <p className="text-accent font-medium mb-4">{teamMember.title}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-primary hover:text-accent transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-primary hover:text-accent transition-colors">
                    <i className="far fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair text-primary mb-6">About Our Founder</h2>
            <p className="text-text mb-6">{teamMember.bio}</p>
            
            <h3 className="font-semibold text-primary mb-3">Expertise & Qualifications</h3>
            <ul className="space-y-3 mb-8">
              {teamMember.qualifications.map((qualification, index) => (
                <li key={index} className="flex">
                  <span className="text-accent mr-2">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span>{qualification}</span>
                </li>
              ))}
            </ul>
            
            <Link 
              href="/about" 
              className="btn-secondary"
            >
              Learn More About Our Team
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}