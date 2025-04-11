import { Link } from "wouter";
import { motion } from "framer-motion";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection = ({ title, description, buttonText, buttonLink }: CTASectionProps) => {
  return (
    <section className="py-20 px-6 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-playfair text-[#001F3F] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        
        <motion.p 
          className="text-lg text-[#333333] mb-10"
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
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href={buttonLink}>
            <a className="inline-block bg-[#FFB400] text-[#001F3F] px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#FFC300] transition-colors btn-hover">
              {buttonText}
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
