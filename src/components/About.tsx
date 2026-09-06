import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Code2, ShoppingBag, Search } from 'lucide-react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  const whatIDo = [
    {
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      title: 'Web Development',
      description:
        'Building responsive, fast, and structured websites using clean modern code and semantic standards.',
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-indigo-400" />,
      title: 'Shopify & Web Design',
      description:
        'Crafting customized Shopify storefronts, intuitive web layouts, and engaging visual experiences.',
    },
    {
      icon: <Search className="w-5 h-5 text-indigo-400" />,
      title: 'SEO & Digital Skills',
      description:
        'Enhancing search engine visibility, technical performance, and digital marketing foundations.',
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-14 lg:py-16 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          title="About Me"
          subtitle=""
        />

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
          {/* Single Short Intro Paragraph */}
          <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 sm:p-7 text-center shadow-lg shadow-black/20">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
              I'm <span className="text-white font-semibold">Ayesha Gulzar</span>, a developer and designer passionate about crafting modern websites, tailored Shopify stores, and search-optimized digital experiences that balance clean aesthetics with technical performance.
            </p>
          </div>

          {/* What I Do Area */}
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                What I Do
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Core areas of engineering and design practice
              </p>
            </div>

            {/* 3 Compact Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {whatIDo.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="bg-[#0F172A] border border-slate-800 hover:border-indigo-500/40 rounded-xl p-5 transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-3 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 transition-colors">
                      {item.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

