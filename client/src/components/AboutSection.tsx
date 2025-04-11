import { TeamMember } from "@/lib/types";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface AboutSectionProps {
  teamMember: TeamMember;
}

const AboutSection = ({ teamMember }: AboutSectionProps) => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair text-[#001F3F] mb-6">About Bhargavi Hospitality</h2>
            <p className="text-lg text-[#333333] mb-6">
              Founded by Kamlesh Kumar, Bhargavi Hospitality brings decades of hospitality expertise to independent hotel owners looking to maximize revenue and explore strategic growth opportunities.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-playfair text-[#001F3F] mb-4">Our Mission</h3>
              <p className="text-[#333333]">
                We believe every hotel has untapped potential. Our mission is to unlock that potential through practical revenue strategies, operational excellence, and strategic partnerships that make sense for your unique property.
              </p>
            </div>
            
            <Link href="/about">
              <a className="inline-flex items-center text-[#FFB400] font-semibold group">
                Learn More About Us
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </a>
            </Link>
          </motion.div>
          
          <motion.div 
            className="bg-[#FAFAFA] p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-start mb-6">
              <img src={teamMember.imageSrc} alt={teamMember.name} className="w-20 h-20 rounded-full object-cover mr-4" />
              <div>
                <h3 className="text-xl font-playfair text-[#001F3F]">{teamMember.name}</h3>
                <p className="text-[#888888]">{teamMember.role}</p>
              </div>
            </div>
            
            <h4 className="font-semibold text-lg mb-3">Experience Timeline</h4>
            <ul className="space-y-4">
              {teamMember.experience.map((exp, index) => (
                <li key={index} className="flex">
                  <div className="bg-[#FFB400] w-1 rounded-full mr-4 relative">
                    <div className="absolute top-0 w-3 h-3 bg-[#FFB400] rounded-full -left-1"></div>
                  </div>
                  <div>
                    <p className="font-semibold">{exp.company}</p>
                    <p className="text-sm text-[#888888]">{exp.role}, {exp.period}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
