import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { Link } from "wouter";

const ContactPreview = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair text-[#001F3F] mb-6">Get in Touch</h2>
            <p className="text-lg text-[#333333] mb-8">
              Have questions about our services or want to discuss your hotel's specific needs? Reach out to us directly or fill out the form.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-[#FFB400] bg-opacity-20 rounded-full p-3 mr-4">
                  <i className="fas fa-envelope text-[#FFB400]"></i>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p>
                    <a href="mailto:contact@bhargavihospitality.com" className="text-[#FFB400] hover:underline">
                      contact@bhargavihospitality.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#FFB400] bg-opacity-20 rounded-full p-3 mr-4">
                  <i className="fas fa-phone text-[#FFB400]"></i>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p>
                    <a href="tel:+919876543210" className="hover:text-[#FFB400]">
                      +91 9876 543 210
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#FFB400] bg-opacity-20 rounded-full p-3 mr-4">
                  <i className="fas fa-calendar-alt text-[#FFB400]"></i>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Schedule a Call</h3>
                  <p>
                    Use our <Link href="/contact"><a className="text-[#FFB400] hover:underline">online calendar</a></Link> to book a time that works for you
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#FAFAFA] p-8 rounded-lg shadow-md">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
