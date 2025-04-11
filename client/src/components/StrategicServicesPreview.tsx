import { StrategicPillar } from "@/lib/types";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface StrategicServicesPreviewProps {
  pillars: StrategicPillar[];
}

const StrategicServicesPreview = ({ pillars }: StrategicServicesPreviewProps) => {
  return (
    <section className="py-20 px-6 bg-[#001F3F] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-playfair mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Full-Suite Strategic Consulting
          </motion.h2>
          
          <motion.p 
            className="text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Beyond revenue fixes and brand partnerships, we offer comprehensive consulting services across the hotel lifecycle.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={pillar.id}
              className="bg-white bg-opacity-10 rounded-lg p-6 scale-on-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-[#FFB400] rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <i className={`fas ${pillar.icon} text-[#001F3F] text-xl`}></i>
              </div>
              
              <h3 className="text-xl font-playfair mb-3">{pillar.title}</h3>
              <p className="text-gray-200 mb-4">{pillar.description}</p>
              
              <ul className="space-y-2 text-sm">
                {pillar.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <i className="fas fa-check text-[#FFB400] mt-1 mr-2"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/strategic-services">
            <a className="inline-block bg-[#FFB400] text-[#001F3F] px-6 py-3 rounded-md font-semibold hover:bg-[#FFC300] transition-colors btn-hover">
              Explore Full Strategic Services
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StrategicServicesPreview;
