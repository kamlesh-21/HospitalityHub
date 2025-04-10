'use client';

import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../../../components/HeroSection';
import CaseStudiesSection from '../../../components/CaseStudiesSection';
import CTASection from '../../../components/CTASection';
import { caseStudies } from '../../../lib/data';

export default function CaseStudies() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection
        title="Our Success Stories"
        subtitle="Explore how we've helped hotels across India and beyond achieve remarkable revenue growth, operational efficiency, and strategic positioning."
        primaryCta={{ text: "See Our Approach", link: "#case-studies" }}
      />
      
      <CaseStudiesSection
        caseStudies={caseStudies}
        showViewAllButton={false}
        title="Real Results for Real Hotels"
        subtitle="Each case study highlights our data-driven approach to hotel consulting, focusing on practical solutions that deliver measurable outcomes."
      />
      
      <CTASection
        title="Ready to Become Our Next Success Story?"
        description="Our proven methodologies have helped independent hotels across various markets achieve significant growth. Let's apply these strategies to your property."
        buttonText="Start Your Success Story"
        buttonLink="/contact"
      />
    </motion.div>
  );
}