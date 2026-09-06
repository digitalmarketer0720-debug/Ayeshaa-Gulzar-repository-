import React from 'react';
import { ArrowRight, Send, Sparkles, ShoppingBag, Code2, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

const ayeshaPortrait = '/ayesha-portrait.jpg';

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-14 overflow-hidden"
    >
      {/* Subtle background ambient grid and radial lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-slate-800/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-7 sm:gap-8 md:gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="md:col-span-7 space-y-3.5 sm:space-y-5 text-left"
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F172A] border border-slate-800 text-[10px] sm:text-xs font-mono font-semibold text-indigo-400 tracking-wider uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span>WEB DEVELOPER • SHOPIFY DEVELOPER</span>
            </div>

            {/* Main Heading & Secondary Heading */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Hi, I'm{' '}
                <span className="text-white relative inline-block">
                  Ayesha Gulzar
                  <span className="text-indigo-400">.</span>
                </span>
              </h1>
              <h2 className="text-base sm:text-xl md:text-2xl font-bold text-slate-200 tracking-tight leading-snug">
                Web Developer &amp; Shopify Developer
              </h2>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-lg leading-relaxed font-normal">
              I'm a BSCS student passionate about building modern websites and Shopify experiences that are clean, responsive, and user-friendly.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
              <a
                href="#projects"
                id="hero-primary-cta"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/35 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                id="hero-secondary-cta"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-medium text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <Send className="w-4 h-4 text-indigo-400" />
                <span>Let's Talk</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Personal Portrait in Frame */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="md:col-span-5 relative flex justify-center md:justify-end items-center pt-2 md:pt-0"
          >
            {/* Ambient soft glow background behind the portrait */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-indigo-500/15 via-slate-800/10 to-transparent rounded-3xl blur-xl pointer-events-none" />

            {/* Subtle decorative background border */}
            <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-full h-full border border-indigo-500/20 rounded-2xl pointer-events-none -z-10" />

            {/* Premium Portrait Frame with balanced responsive scaling */}
            <div className="relative w-full max-w-[210px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[330px] bg-[#0F172A] border border-slate-800 hover:border-slate-700 rounded-2xl p-2 sm:p-2.5 lg:p-3 shadow-xl shadow-black/60 transition-all duration-300 group">
              
              {/* Image Container with Natural Aspect Ratio & Focus */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#0A0E1A] border border-slate-800/80">
                <img
                  src={ayeshaPortrait}
                  alt="Ayesha Gulzar - Web Developer & Shopify Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== '/ayesha-portrait.jpg') {
                      target.src = '/ayesha-portrait.jpg';
                    }
                  }}
                />

                {/* Subtle bottom tone overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent pointer-events-none" />

                {/* Subtle Name & Role Badge at the base */}
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-2.5 sm:left-2.5 sm:right-2.5 flex items-center justify-between pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-800 text-[9px] sm:text-[11px] font-mono text-slate-200 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    <span>Ayesha Gulzar</span>
                  </div>

                  <span className="text-[9px] sm:text-[10px] font-mono text-indigo-400 bg-slate-950/85 backdrop-blur-md px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border border-slate-800 shadow-md">
                    BSCS Student
                  </span>
                </div>
              </div>

              {/* Floating Role Pill - Bottom Right Outside Frame */}
              <motion.div
                animate={{ y: [2, -2, 2] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2.5 -right-2 sm:-right-2.5 hidden sm:flex items-center gap-2 bg-[#0A0E1A]/95 border border-slate-700/80 rounded-xl px-2.5 sm:px-3 py-1.5 shadow-xl backdrop-blur-md z-20"
              >
                <div className="w-5 h-5 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <Code2 className="w-3 h-3" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-white leading-tight">Web &amp; Shopify Dev</div>
                  <div className="text-[8px] font-mono text-indigo-400">Available for Projects</div>
                </div>
              </motion.div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
