import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import { teamMembers } from "@/lib/data";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection
        title="About Bhargavi Hospitality"
        subtitle="Founded on decades of industry experience, we're committed to helping independent hotels maximize their potential through practical, results-driven consulting."
        primaryCta={{ text: "Meet Our Team", link: "#about" }}
      />
      
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-playfair text-[#001F3F] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Story
            </motion.h2>
            <motion.p 
              className="text-lg text-[#333333] max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Bhargavi Hospitality was founded with a simple yet powerful mission: to help independent hotels thrive in an increasingly competitive marketplace. We combine industry expertise with practical solutions to deliver measurable results for our clients.
            </motion.p>
          </div>
        </div>
      </section>
      
      <AboutSection teamMember={teamMembers[0]} />
      
      <section className="py-20 px-6 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-playfair text-[#001F3F] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Philosophy
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-[#FFB400] rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <i className="fas fa-bullseye text-[#001F3F] text-xl"></i>
              </div>
              <h3 className="text-xl font-playfair text-[#001F3F] mb-3">Practical Solutions</h3>
              <p className="text-[#333333]">We focus on implementable strategies that deliver real results, not theoretical frameworks that gather dust on shelves.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-[#FFB400] rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-[#001F3F] text-xl"></i>
              </div>
              <h3 className="text-xl font-playfair text-[#001F3F] mb-3">Data-Driven Approach</h3>
              <p className="text-[#333333]">We base our recommendations on thorough market analysis and performance metrics, ensuring strategies that align with real opportunities.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-[#FFB400] rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <i className="fas fa-hands-helping text-[#001F3F] text-xl"></i>
              </div>
              <h3 className="text-xl font-playfair text-[#001F3F] mb-3">Long-Term Partnerships</h3>
              <p className="text-[#333333]">We believe in building lasting relationships with our clients, providing ongoing support as their properties evolve and grow.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Ready to Work With Us?"
        description="Let's start a conversation about your hotel's challenges and opportunities. Our team is ready to help you achieve your business goals."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </motion.div>
  );
};

export default About;
