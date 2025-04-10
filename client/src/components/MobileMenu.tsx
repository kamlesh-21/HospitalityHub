import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-50"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <div className="flex justify-end p-6">
            <button onClick={onClose} className="text-[#001F3F]">
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 text-lg text-[#333333] mt-16">
            <Link href="/#services" onClick={handleLinkClick} className="hover:text-[#FFB400] transition-colors">
              Services
            </Link>
            <Link href="/case-studies" onClick={handleLinkClick} className="hover:text-[#FFB400] transition-colors">
              Case Studies
            </Link>
            <Link href="/strategic-services" onClick={handleLinkClick} className="hover:text-[#FFB400] transition-colors">
              Strategic Services
            </Link>
            <Link href="/about" onClick={handleLinkClick} className="hover:text-[#FFB400] transition-colors">
              About
            </Link>
            <Link href="/contact" onClick={handleLinkClick} className="hover:text-[#FFB400] transition-colors">
              Contact
            </Link>
            <Link href="/contact" onClick={handleLinkClick} className="mt-8 bg-[#FFB400] text-[#001F3F] px-6 py-3 rounded-md font-semibold hover:bg-[#FFC300] transition-colors">
              Book Free Call
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
