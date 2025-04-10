'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { StrategicPillar } from '../lib/data';

interface StrategicServicesPreviewProps {
  pillars: StrategicPillar[];
}

export default function StrategicServicesPreview({ pillars }: StrategicServicesPreviewProps) {
  const [activePillar, setActivePillar] = useState<StrategicPillar>(pillars[0]);

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-playfair mb-6">Strategic Services</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Whether you're looking to maximize your property's current performance or considering major strategic shifts, our specialized consulting services can help.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-6 gap-4 mb-10">
          {pillars.map((pillar, index) => (
            <motion.button
              key={pillar.id}
              className={`p-4 rounded-lg text-center transition-all ${activePillar.id === pillar.id ? 'bg-accent text-primary font-medium' : 'bg-white/10 hover:bg-white/20'}`}
              onClick={() => setActivePillar(pillar)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center">
                <i className={`fas ${pillar.icon} text-2xl mb-2 ${activePillar.id === pillar.id ? 'text-primary' : 'text-accent'}`}></i>
                <span className="text-sm">{pillar.title.split(' ')[0]}</span>
              </div>
            </motion.button>
          ))}
        </div>
        
        <motion.div 
          className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          key={activePillar.id}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-accent rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  <i className={`fas ${activePillar.icon} text-primary`}></i>
                </div>
                <h3 className="text-2xl font-playfair">{activePillar.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">{activePillar.description}</p>
              <Link 
                href="/routes/strategic-services" 
                className="bg-accent text-primary px-6 py-2 rounded-md inline-flex items-center font-medium hover:bg-white transition-colors"
              >
                Learn More
                <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </Link>
            </div>
            
            <div>
              <h4 className="text-accent font-medium mb-4">Services Included:</h4>
              <ul className="grid grid-cols-1 gap-3">
                {activePillar.services.map((service, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="text-accent mr-2 mt-1">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span>{service}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link 
            href="/routes/strategic-services" 
            className="text-accent hover:text-white transition-colors inline-flex items-center font-medium"
          >
            View All Strategic Services
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}