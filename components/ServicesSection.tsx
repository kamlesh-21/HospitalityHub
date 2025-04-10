'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ServiceCard } from '../lib/data';

interface ServicesSectionProps {
  services: ServiceCard[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-playfair text-primary mb-6">Our Services</h2>
          <p className="text-lg text-text max-w-3xl mx-auto">
            We help independent hotels grow revenue, optimize operations, and make smart decisions about their future. Whether you want to stay independent or explore brand options, we're your trusted partner.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="bg-background p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow scale-on-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-accent bg-opacity-20 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <i className={`fas ${service.icon} text-accent text-2xl`}></i>
              </div>
              <h3 className="text-xl font-playfair text-primary mb-3">{service.title}</h3>
              <p className="text-text mb-6">{service.description}</p>
              <Link 
                href={service.link} 
                className="text-accent hover:text-primary font-medium inline-flex items-center"
              >
                Learn More
                <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}