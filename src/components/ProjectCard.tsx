import React from 'react';
import { ArrowUpRight, ShoppingBag, Globe, Code2 } from 'lucide-react';
import { motion } from 'motion/react';

export interface ProjectCardData {
  id: string;
  title: string;
  category: 'Web Development' | 'Shopify';
  description: string;
  technologies: string[];
  image: string;
  previewUrlDomain: string;
}

interface ProjectCardProps {
  project: ProjectCardData;
  index: number;
  onViewDetails?: (project: ProjectCardData) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onViewDetails,
}) => {
  const isShopify = project.category === 'Shopify';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
      className="group bg-[#0F172A] border border-slate-800 hover:border-indigo-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-black/30 flex flex-col justify-between"
    >
      <div>
        {/* Project Image & Browser Mockup Container */}
        <div className="relative aspect-[16/10] bg-[#0A0E1A] border-b border-slate-800/90 overflow-hidden flex flex-col justify-between">
          {/* Mockup Browser Top Bar */}
          <div className="relative z-20 flex items-center justify-between gap-3 px-4 py-2.5 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>

            {/* Mock URL Bar */}
            <div className="flex-1 max-w-[190px] sm:max-w-[220px] mx-auto px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 truncate text-center flex items-center justify-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span className="truncate">{project.previewUrlDomain}</span>
            </div>

            {/* Category Pill */}
            <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider hidden sm:inline-block">
              {project.category}
            </span>
          </div>

          {/* Project Screenshot / Image */}
          <div className="relative flex-1 w-full h-full overflow-hidden bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent pointer-events-none" />
            
            {/* Category Tag Overlay */}
            <div className="absolute bottom-2.5 left-3 z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-slate-800 text-[11px] font-mono font-medium text-indigo-300 shadow-md">
                {isShopify ? (
                  <ShoppingBag className="w-3 h-3 text-indigo-400" />
                ) : (
                  <Globe className="w-3 h-3 text-indigo-400" />
                )}
                <span>{project.category}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Project Content Area */}
        <div className="p-5 sm:p-6 space-y-3.5">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors leading-snug">
              {project.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Technologies Used */}
          <div className="pt-1">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Button Footer */}
      <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-2 border-t border-slate-800/80 mt-auto">
        <button
          type="button"
          onClick={() => onViewDetails && onViewDetails(project)}
          className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/35 active:scale-[0.98]"
        >
          <span>View Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};
