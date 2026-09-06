import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ShoppingBag, Code, Zap, Layout, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'shopify-development',
    title: 'Custom Shopify Store Development',
    shortDesc:
      'End-to-end setup and development of bespoke Shopify stores structured for brand identity, seamless product browsing, and checkout efficiency.',
    features: [
      'Complete store setup & configuration',
      'Custom theme installation & styling',
      'Collection & product catalog architecture',
      'Essential app integration & payment gateways',
    ],
    iconName: 'shopping-bag',
  },
  {
    id: 'theme-customization',
    title: 'Shopify Theme Customization & Liquid',
    shortDesc:
      'Tailoring existing Shopify themes to match precise design specifications, creating custom Liquid sections, and modifying storefront behavior.',
    features: [
      'Custom Liquid template modifications',
      'Bespoke homepage & landing sections',
      'Header, footer, and navigation enhancements',
      'Responsive design fixes across devices',
    ],
    iconName: 'wrench',
  },
  {
    id: 'web-development',
    title: 'Modern Web & Frontend Development',
    shortDesc:
      'Engineering fast, scalable, and standards-compliant web interfaces utilizing modern JavaScript, React, and responsive CSS frameworks.',
    features: [
      'Responsive, mobile-first web pages',
      'Modular component development',
      'API integration & dynamic data rendering',
      'Semantic HTML5 & clean CSS architecture',
    ],
    iconName: 'code',
  },
  {
    id: 'speed-optimization',
    title: 'Performance & Speed Optimization',
    shortDesc:
      'Auditing and improving page load speeds, asset delivery, and core web vitals for higher user satisfaction and improved conversion rates.',
    features: [
      'Image & media asset compression',
      'CSS/JS script optimization',
      'Core Web Vitals diagnostic checks',
      'Liquid rendering & app bloat audits',
    ],
    iconName: 'zap',
  },
  {
    id: 'ui-ux-implementation',
    title: 'UI/UX Implementation & Redesigns',
    shortDesc:
      'Translating design mockups (Figma, Adobe XD) into pixel-perfect, interactive, and accessible digital web experiences.',
    features: [
      'Figma to clean HTML/CSS/React code',
      'Interactive animations & micro-interactions',
      'Cross-browser and multi-screen testing',
      'Accessibility & contrast compliance',
    ],
    iconName: 'layout',
  },
  {
    id: 'maintenance-support',
    title: 'Website Support & Maintenance',
    shortDesc:
      'Ongoing technical support, theme updates, bug fixes, and feature additions to ensure continuous operation and uptime.',
    features: [
      'Routine theme and app health checks',
      'Bug fixes and layout corrections',
      'Content updates & banner additions',
      'Technical advisory & troubleshooting',
    ],
    iconName: 'shield',
  },
];

export const Services: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'shopping-bag':
        return <ShoppingBag className="w-5 h-5 text-teal-400" />;
      case 'wrench':
        return <Wrench className="w-5 h-5 text-teal-400" />;
      case 'code':
        return <Code className="w-5 h-5 text-teal-400" />;
      case 'zap':
        return <Zap className="w-5 h-5 text-teal-400" />;
      case 'layout':
        return <Layout className="w-5 h-5 text-teal-400" />;
      case 'shield':
      default:
        return <ShieldCheck className="w-5 h-5 text-teal-400" />;
    }
  };

  const handleInquire = (serviceTitle: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What I Offer"
          title="Services &amp; Solutions"
          subtitle="Specialized development services designed to help businesses launch, optimize, and scale their web presence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="bg-[#0E1322] border border-slate-800 hover:border-slate-700/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 group-hover:border-teal-500/40 transition-colors">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-teal-300 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {service.shortDesc}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/60">
                <button
                  type="button"
                  onClick={() => handleInquire(service.title)}
                  className="w-full flex items-center justify-between px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-teal-500/30 text-xs font-semibold text-slate-200 hover:text-white transition-all duration-200"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
