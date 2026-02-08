import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Sublytic
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['What Is It?', 'Features', 'How It Works'].map((item, idx) => {
              const ids = ['what-is', 'features', 'how-it-works'];
              return (
                <button
                  key={idx}
                  onClick={() => scrollToSection(ids[idx])}
                  className={`text-sm font-medium transition-colors ${
                    scrolled 
                      ? 'text-gray-600 hover:text-blue-600' 
                      : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              )
            })}
            
            <Button 
              onClick={() => scrollToSection('download')}
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Download App
            </Button>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className={`md:hidden p-2 transition-colors ${scrolled ? 'text-gray-600' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-white rounded-b-xl shadow-xl mt-4"
            >
              <div className="py-4 space-y-2 px-6 text-black">
                <button
                  onClick={() => scrollToSection('what-is')}
                  className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                >
                  What Is Sublytic?
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                >
                  How It Works
                </button>
                <div className="pt-2 pb-2">
                  <Button 
                    className="w-full bg-blue-600 text-white"
                    onClick={() => scrollToSection('download')}
                  >
                    Download App
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;