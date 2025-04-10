'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CaseStudy } from '../lib/data';

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
  showViewAllButton?: boolean;
  title?: string;
  subtitle?: string;
}

export default function CaseStudiesSection({ 
  caseStudies, 
  showViewAllButton = true,
  title = "Success Stories",
  subtitle = "Real results for hotels like yours across India. See how our consulting transformed their revenue and positioning."
}: CaseStudiesSectionProps) {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy>(caseStudies[0]);

  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-playfair text-primary mb-6">{title}</h2>
          <p className="text-lg text-text max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1 space-y-4">
            {caseStudies.map((caseStudy, index) => (
              <motion.div 
                key={caseStudy.id}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${activeCaseStudy.id === caseStudy.id ? 'bg-accent text-primary shadow-md' : 'bg-white hover:bg-gray-50'}`}
                onClick={() => setActiveCaseStudy(caseStudy)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className={`font-playfair text-lg mb-2 ${activeCaseStudy.id === caseStudy.id ? 'text-primary' : 'text-primary'}`}>
                  {caseStudy.title}
                </h3>
                <p className={`text-sm mb-2 ${activeCaseStudy.id === caseStudy.id ? 'text-primary/90' : 'text-muted'}`}>
                  {caseStudy.location} | {caseStudy.propertyType}
                </p>
                <div className={`font-bold ${activeCaseStudy.id === caseStudy.id ? 'text-primary' : 'text-accent'}`}>
                  Revenue Increase: {caseStudy.revenueIncrease}
                </div>
              </motion.div>
            ))}
            
            {showViewAllButton && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 text-center"
              >
                <Link 
                  href="/routes/case-studies" 
                  className="inline-flex items-center font-medium text-accent hover:text-primary transition-colors"
                >
                  View All Case Studies
                  <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </Link>
              </motion.div>
            )}
          </div>
          
          <motion.div 
            className="md:col-span-2 bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            key={activeCaseStudy.id}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h3 className="text-2xl font-playfair text-primary mb-2 sm:mb-0">{activeCaseStudy.title}</h3>
              <div className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm font-bold">
                +{activeCaseStudy.revenueIncrease} Revenue
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">The Challenge</h4>
                <p className="text-text">{activeCaseStudy.challenge}</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Our Solution</h4>
                <p className="text-text">{activeCaseStudy.solution}</p>
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h4 className="font-semibold text-primary mb-2">Results Achieved</h4>
              <p className="text-text">{activeCaseStudy.result}</p>
            </div>
            
            <div className="mt-6 flex items-center text-sm text-muted">
              <i className="fas fa-map-marker-alt mr-2 text-accent"></i>
              <span className="mr-4">{activeCaseStudy.location}</span>
              <i className="fas fa-building mr-2 text-accent"></i>
              <span>{activeCaseStudy.propertyType}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}