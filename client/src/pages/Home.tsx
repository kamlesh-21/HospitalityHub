import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import AboutSection from "@/components/AboutSection";
import StrategicServicesPreview from "@/components/StrategicServicesPreview";
import CTASection from "@/components/CTASection";
import ContactPreview from "@/components/ContactPreview";
import { serviceCards, caseStudies, teamMembers, strategicPillars } from "@/lib/data";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection
        title="Your Hotel Deserves Better Revenue. And Better Growth Options."
        subtitle="Most independent hotels leak revenue—through poor pricing, weak marketing, or inefficiencies. We plug those leaks and unlock your potential. And if a brand partnership makes sense—we'll guide that too."
        primaryCta={{ text: "Get My Revenue Strategy", link: "/contact" }}
        secondaryCta={{ text: "Explore Brand Options", link: "/strategic-services" }}
      />
      
      <ServicesSection services={serviceCards} />
      
      <CaseStudiesSection caseStudies={caseStudies} />
      
      <AboutSection teamMember={teamMembers[0]} />
      
      <StrategicServicesPreview pillars={strategicPillars} />
      
      <CTASection
        title="Ready to Transform Your Hotel's Performance?"
        description="Book a free 30-minute consultation to discuss your property's unique challenges and opportunities. No obligation, just actionable insights you can implement immediately."
        buttonText="Book Your Free Consultation"
        buttonLink="/contact"
      />
      
      <ContactPreview />
    </motion.div>
  );
};

export default Home;
