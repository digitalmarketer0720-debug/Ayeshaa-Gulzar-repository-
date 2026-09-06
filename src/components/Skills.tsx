import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Code2, Palette, Terminal, ShoppingBag, Search, Layout } from 'lucide-react';
import { motion } from 'motion/react';

export const Skills: React.FC = () => {
  const skills = [
    {
      name: 'HTML',
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      category: 'Structure',
    },
    {
      name: 'CSS',
      icon: <Palette className="w-5 h-5 text-indigo-400" />,
      category: 'Styling',
    },
    {
      name: 'JavaScript',
      icon: <Terminal className="w-5 h-5 text-indigo-400" />,
      category: 'Logic',
    },
    {
      name: 'Shopify',
      icon: <ShoppingBag className="w-5 h-5 text-indigo-400" />,
      category: 'E-Commerce',
    },
    {
      name: 'SEO',
      icon: <Search className="w-5 h-5 text-indigo-400" />,
      category: 'Optimization',
    },
    {
      name: 'Web Design',
      icon: <Layout className="w-5 h-5 text-indigo-400" />,
      category: 'UI / UX',
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-14 lg:py-16 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          title="My Skills"
          subtitle=""
        />

        {/* 2-Row Compact Skills Grid (3 items per row on sm+) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4 max-w-3xl mx-auto">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="group bg-[#0F172A] border border-slate-800 hover:border-indigo-500/40 rounded-xl p-3 sm:p-4 lg:p-5 transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-black/20 flex items-center gap-2.5 sm:gap-3.5"
            >
              {/* Icon */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 transition-colors">
                {skill.icon}
              </div>

              {/* Title & Tag */}
              <div className="min-w-0">
                <h3 className="text-xs sm:text-base font-semibold text-white group-hover:text-indigo-300 transition-colors truncate">
                  {skill.name}
                </h3>
                <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 block truncate">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

