import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavLinkItem {
  id: string;
  label: string;
  href: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section spy
      const sections = NAV_LINKS.map((item) => item.id);
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0E1A]/95 backdrop-blur-md py-2.5 shadow-lg shadow-black/40 border-b border-slate-800'
          : 'bg-[#0A0E1A]/85 backdrop-blur-sm py-3.5 border-b border-slate-800/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left Side: Brand Name */}
          <a
            href="#home"
            id="brand-logo-link"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-sm tracking-tight group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200">
              A
            </div>

            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-white group-hover:text-indigo-300 transition-colors duration-200">
                Ayesha Gulzar
              </span>
              <span className="text-[9px] font-mono font-semibold tracking-widest text-slate-400 uppercase -mt-0.5">
                WEB DEVELOPER
              </span>
            </div>
          </a>

          {/* Right Side: Desktop Navigation Links & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-1" id="desktop-nav">
              {NAV_LINKS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    id={`nav-link-${item.id}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    onMouseEnter={() => setHoveredLink(item.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`relative px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? 'text-indigo-400 font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>

                    {/* Animated Active Indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="active-nav-indicator"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-indigo-400 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}

                    {!isActive && hoveredLink === item.id && (
                      <motion.span
                        layoutId="hover-nav-indicator"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-slate-600 rounded-full"
                        transition={{ duration: 0.15 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Compact CTA Button: "Let's Talk" */}
            <a
              href="#contact"
              id="nav-cta-btn"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-sm shadow-indigo-600/20 hover:shadow-md hover:shadow-indigo-600/35 active:scale-[0.98]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden bg-[#0F172A] border-b border-slate-800 px-4 pt-3 pb-5 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    id={`mobile-nav-link-${item.id}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-slate-900 text-indigo-400 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />}
                  </a>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <div className="pt-3 mt-2 border-t border-slate-800">
              <a
                href="#contact"
                id="mobile-nav-cta-btn"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all duration-150 shadow-md shadow-indigo-600/20"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
