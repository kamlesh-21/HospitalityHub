'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold font-playfair mb-4 block">
              Bhargavi Hospitality
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Premier hospitality consulting for independent hotels. Revenue optimization, operational excellence, and strategic growth solutions.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon="fa-facebook-f" />
              <SocialIcon icon="fa-twitter" />
              <SocialIcon icon="fa-linkedin-in" />
              <SocialIcon icon="fa-instagram" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/case-studies">Case Studies</FooterLink>
              <FooterLink href="/strategic-services">Strategic Services</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex">
                <i className="fas fa-envelope mr-3 mt-1 text-accent"></i>
                <a href="mailto:contact@bhargavihospitality.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@bhargavihospitality.com
                </a>
              </li>
              <li className="flex">
                <i className="fas fa-phone mr-3 mt-1 text-accent"></i>
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors">
                  +91 9876 543 210
                </a>
              </li>
              <li className="flex">
                <i className="fas fa-map-marker-alt mr-3 mt-1 text-accent"></i>
                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <motion.div 
          className="pt-8 mt-8 border-t border-gray-700 text-gray-400 text-sm text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} Bhargavi Hospitality. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  return (
    <a 
      href="#" 
      className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
    >
      <i className={`fab ${icon}`}></i>
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-gray-300 hover:text-white transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}