"use client";
import React, { useState, useEffect } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu if open
    
    const element = document.getElementById(id);
    if (element) {
      // Use CSS scroll-behavior: smooth via scrollIntoView
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = ['Home', 'Services', 'Gallery', 'Testimonials', 'Contact'];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav h-20 md:h-24' : 'bg-transparent h-24 md:h-32'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex-shrink-0 flex items-center">
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, 'home')}
                className="block"
              >
                 <img 
                  src="https://i.postimg.cc/bw8nqw6d/IMG-5406-JPG.jpg" 
                  alt="Kiru Photostories" 
                  className={`transition-all duration-300 ${scrolled ? 'h-10 md:h-16' : 'h-14 md:h-24'} w-auto max-w-[120px] md:max-w-xs object-contain rounded-xl shadow-sm`}
                />
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="text-sm uppercase tracking-widest hover:text-gold-500 transition-colors duration-300 font-sans font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="hidden md:block p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6 text-charcoal hover:text-pink-600 transition-colors" />
              </a>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-charcoal focus:outline-none"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden pt-32"
          >
            <div className="flex flex-col items-center justify-center h-[80vh] space-y-8">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="text-2xl font-serif text-charcoal hover:text-gold-500 transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="pt-8 mt-8 border-t border-gray-100 w-24 flex justify-center">
                 <a 
                  href={SOCIAL_LINKS.instagram} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 bg-gray-50 rounded-full"
                >
                  <Instagram className="w-6 h-6 text-charcoal" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;