import { CaseStudy } from "@/lib/types";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
  showViewAllButton?: boolean;
  title?: string;
  subtitle?: string;
}

const CaseStudiesSection = ({ 
  caseStudies, 
  showViewAllButton = true,
  title = "Success Stories",
  subtitle = "See how we've helped hotels like yours achieve remarkable results through strategic consulting and revenue optimization."
}: CaseStudiesSectionProps) => {
  
  const getResultClassName = (resultType: string) => {
    switch (resultType) {
      case 'revenue':
        return 'bg-green-100 text-green-800';
      case 'rebranding':
        return 'bg-blue-100 text-blue-800';
      case 'cost-reduction':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 px-6 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-playfair text-[#001F3F] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-[#333333] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={study.id}
              className="bg-white rounded-lg shadow-md overflow-hidden scale-on-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={study.imageUrl} alt={study.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className={`${getResultClassName(study.resultType)} text-xs font-semibold px-2 py-1 rounded inline-block mb-3`}>
                  {study.result}
                </div>
                <h3 className="text-xl font-playfair text-[#001F3F] mb-2">{study.title}</h3>
                <p className="text-[#333333] mb-4">{study.excerpt}</p>
                <Link href={`/case-studies/${study.slug}`}>
                  <a className="text-[#FFB400] font-semibold hover:underline inline-flex items-center">
                    Read Case Study
                    <i className="fas fa-arrow-right ml-2 text-sm"></i>
                  </a>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {showViewAllButton && (
          <div className="text-center mt-12">
            <Link href="/case-studies">
              <a className="inline-block bg-[#001F3F] text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors btn-hover">
                View All Case Studies
              </a>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
