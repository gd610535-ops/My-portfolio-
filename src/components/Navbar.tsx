import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { NAV_LINKS } from '../data';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass' : 'py-8 px-6 md:px-12'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'px-6' : ''}`}>
          <a href="#home" className="text-xl font-bold tracking-tighter uppercase">
            Srishti<span className="text-primary">.</span>
          </a>

          <nav className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] font-medium text-gray-400">
            {NAV_LINKS.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`hover:text-white transition-colors ${index === 0 ? 'text-white border-b border-primary pb-1' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a href="#contact" className="glow-btn-secondary px-6 text-[10px] hidden md:flex border-gray-600">
            Let's Talk
          </a>
          
          <button className="md:hidden text-white p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
