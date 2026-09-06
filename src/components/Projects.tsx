import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { ProjectCard, ProjectCardData } from './ProjectCard';
import { X, ShoppingBag, Globe, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import lahoreCollegeImg from '../assets/images/lahore_city_college_preview_1788103991642.jpg';
import centroStoreImg from '../assets/images/centro_cash_carry_preview_1788104010892.jpg';
import shahanshaImg from '../assets/images/shahansha_dry_fruits_preview_1788104025950.jpg';

const PROJECTS: ProjectCardData[] = [
  {
    id: 'lahore-city-college',
    title: 'The Lahore City College – Zafarwal Campus',
    category: 'Web Development',
    description:
      'A modern responsive college website featuring navigation, hero section, faculty information, programs and contact details.',
    technologies: ['Web Development', 'Responsive UI', 'Academic Programs', 'Contact Integration'],
    image: lahoreCollegeImg,
    previewUrlDomain: 'lahorecitycollege.edu.pk',
  },
  {
    id: 'centro-cash-carry',
    title: 'Centro Cash & Carry',
    category: 'Shopify',
    description:
      'A professional e-commerce store concept built with Shopify, featuring product categories, featured products, collections and a clean shopping experience.',
    technologies: ['Shopify', 'E-Commerce', 'Product Collections', 'Modern Layout'],
    image: centroStoreImg,
    previewUrlDomain: 'centrocashcarry.store',
  },
  {
    id: 'shahansha-dry-fruits',
    title: 'Shahansha Dry Fruits',
    category: 'Shopify',
    description:
      'A modern Shopify store concept for a dry-fruit brand, including product presentation, collections, branding and an attractive online shopping layout.',
    technologies: ['Shopify', 'Brand Store', 'Product Presentation', 'Collections'],
    image: shahanshaImg,
    previewUrlDomain: 'shahanshadryfruits.store',
  },
];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Web Development' | 'Shopify'>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectCardData | null>(null);

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-12 sm:py-14 lg:py-16 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          title="Selected Projects"
          subtitle=""
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {(['All', 'Web Development', 'Shopify'] as const).map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/25'
                    : 'bg-[#0F172A] text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Grid: 3 Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onViewDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#0F172A] border border-slate-800 rounded-2xl p-4 sm:p-7 shadow-2xl z-10 space-y-4 sm:space-y-5"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900 text-indigo-400 border border-slate-800">
                    {selectedProject.category === 'Shopify' ? (
                      <ShoppingBag className="w-3.5 h-3.5" />
                    ) : (
                      <Globe className="w-3.5 h-3.5" />
                    )}
                    <span>{selectedProject.category}</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Project Image in Modal */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Title & Body */}
              <div className="space-y-2.5">
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {selectedProject.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-medium">
                  Technologies / Focus
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-3 border-t border-slate-800 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-mono border border-slate-800 transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
