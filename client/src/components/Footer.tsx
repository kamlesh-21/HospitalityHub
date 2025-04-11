import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-12 px-6 text-center text-sm text-[#888888]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-2xl font-playfair text-[#001F3F] inline-block mb-4">
            Bhargavi Hospitality
          </Link>
          <p className="max-w-md mx-auto">Premium hotel consulting services specializing in revenue optimization and strategic brand partnerships.</p>
        </div>
        
        <div className="mb-6 space-x-4 md:space-x-8 text-[#333333]">
          <Link href="/" className="hover:text-[#FFB400] transition-colors">
            Home
          </Link>
          <Link href="/#services" className="hover:text-[#FFB400] transition-colors">
            Services
          </Link>
          <Link href="/strategic-services" className="hover:text-[#FFB400] transition-colors">
            Full Consulting
          </Link>
          <Link href="/case-studies" className="hover:text-[#FFB400] transition-colors">
            Case Studies
          </Link>
          <Link href="/about" className="hover:text-[#FFB400] transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#FFB400] transition-colors">
            Contact
          </Link>
        </div>
        
        <div className="flex justify-center space-x-4 mb-6">
          <a href="#" className="bg-[#001F3F] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#FFB400] transition-colors">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="bg-[#001F3F] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#FFB400] transition-colors">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="bg-[#001F3F] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#FFB400] transition-colors">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        
        <p className="mb-2">© {new Date().getFullYear()} Bhargavi Hospitality · All rights reserved</p>
        <p>
          <a href="mailto:contact@bhargavihospitality.com" className="hover:text-[#FFB400]">contact@bhargavihospitality.com</a> · 
          <a href="tel:+919876543210" className="hover:text-[#FFB400]"> +91 9876 543 210</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
