import React, { useState, useEffect } from 'react';
import { personalInfo, heroContent } from '../data/portfolioData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg border border-white/10' : 'bg-transparent'}`}>
          
          {/* Brand */}
          <a href="#" className="text-white font-bold text-xl tracking-tight z-10 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-black text-sm">
              AB
            </span>
            <span className="hidden sm:block uppercase">{personalInfo.brandName}</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-white text-sm font-semibold transition-colors uppercase tracking-wider relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff2a2a] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Hire Me CTA (Desktop) */}
          <div className="hidden md:block">
            <a 
              href={heroContent.ctaSecondary.href}
              className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] uppercase tracking-wide"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white z-10 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-0 transition-opacity duration-300 md:hidden flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-2xl font-black uppercase tracking-widest hover:text-[#ff2a2a] transition-colors"
            style={{ transitionDelay: `${index * 50}ms`, transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)', opacity: isMobileMenuOpen ? 1 : 0 }}
          >
            {link.name}
          </a>
        ))}
        <a 
          href={heroContent.ctaSecondary.href}
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-8 bg-[#ff2a2a] text-white px-8 py-3 rounded-full text-lg font-bold hover:scale-105 transition-all"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
