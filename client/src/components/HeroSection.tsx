import { Link } from "wouter";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCta: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
}

const HeroSection = ({ title, subtitle, primaryCta, secondaryCta }: HeroSectionProps) => {
  return (
    <section className="text-center py-20 bg-[#001F3F] text-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-playfair mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          className="text-lg max-w-3xl mx-auto mb-8 text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href={primaryCta.link}>
            <a className="bg-[#FFB400] text-[#001F3F] px-6 py-3 rounded-md font-semibold hover:bg-[#FFC300] transition-colors btn-hover w-64 md:w-auto">
              {primaryCta.text}
            </a>
          </Link>
          
          {secondaryCta && (
            <Link href={secondaryCta.link}>
              <a className="text-white flex items-center group">
                {secondaryCta.text}
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </a>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
