import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);

    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const top = element.getBoundingClientRect().top + window.pageYOffset - 75;
        window.scrollTo({
          top: top > 0 ? top : 0,
          behavior: 'smooth',
        });
      }
    }, 50);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-950/30'
          : 'py-4 sm:py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 sm:gap-3 group"
            data-cursor="PRASHANT"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-violet-600 to-rose-500 p-[2px] shadow-lg shadow-violet-500/30 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-syne font-extrabold text-base sm:text-lg tracking-tight gradient-text">
                PRASHANT YADAV
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-widest text-gray-400 uppercase -mt-1">
                Creative & AI Visuals
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                  data-cursor={link.name}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full shadow-md shadow-violet-500/40 -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold font-syne tracking-wider text-white overflow-hidden shadow-lg shadow-violet-500/25 border border-violet-500/30"
              data-cursor="HIRE"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 group-hover:scale-105 transition-transform duration-300 -z-10" />
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 active:scale-95 transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-rose-400" /> : <Menu className="w-6 h-6 text-cyan-400" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base sm:text-lg font-syne font-bold text-gray-300 hover:text-cyan-400 py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-500" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-4 w-full text-center py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-syne font-bold text-sm tracking-wider shadow-lg shadow-violet-600/30"
              >
                LET'S TALK PROJECT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
