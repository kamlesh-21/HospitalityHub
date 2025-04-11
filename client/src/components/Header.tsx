import { Link } from "wouter";
import { motion } from "framer-motion";

interface HeaderProps {
  onToggleMobileMenu: () => void;
}

const Header = ({ onToggleMobileMenu }: HeaderProps) => {
  return (
    <motion.header 
      className="sticky top-0 z-50 bg-white shadow-sm flex justify-between items-center px-6 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Link href="/" className="text-2xl font-playfair text-[#001F3F]">
        Bhargavi Hospitality
      </Link>
      <nav className="hidden md:flex space-x-6 text-sm text-[#333]">
        <Link href="/#services" className="hover:text-[#FFB400] transition-colors">
          Services
        </Link>
        <Link href="/case-studies" className="hover:text-[#FFB400] transition-colors">
          Case Studies
        </Link>
        <Link href="/strategic-services" className="hover:text-[#FFB400] transition-colors">
          Strategic Services
        </Link>
        <Link href="/about" className="hover:text-[#FFB400] transition-colors">
          About
        </Link>
        <Link href="/contact" className="hover:text-[#FFB400] transition-colors">
          Contact
        </Link>
      </nav>
      <div className="md:hidden">
        <button onClick={onToggleMobileMenu} className="text-[#001F3F]">
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>
      <Link href="/contact" className="hidden md:block bg-[#FFB400] text-[#001F3F] px-5 py-2 rounded-md font-semibold hover:bg-[#FFC300] transition-colors btn-hover">
        Book Free Call
      </Link>
    </motion.header>
  );
};

export default Header;
