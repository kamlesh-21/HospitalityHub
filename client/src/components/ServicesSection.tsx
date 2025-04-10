import { ServiceCard } from "@/lib/types";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface ServicesSectionProps {
  services: ServiceCard[];
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-playfair text-[#001F3F] text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Two Ways to Grow—Choose What's Right for You
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="bg-[#FAFAFA] rounded-lg shadow-md p-10 scale-on-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-[#FFB400] rounded-full p-3 mr-4">
                  <i className={`fas ${service.icon} text-[#001F3F] text-xl`}></i>
                </div>
                <h3 className="text-2xl font-playfair text-[#001F3F]">{service.title}</h3>
              </div>
              
              <p className="text-[#333333] mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <i className="fas fa-check text-[#FFB400] mt-1 mr-3"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href={service.ctaLink}>
                <a className="inline-flex items-center text-[#001F3F] font-semibold group">
                  {service.ctaText}
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
