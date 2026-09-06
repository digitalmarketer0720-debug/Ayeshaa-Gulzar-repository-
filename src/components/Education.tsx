import React from 'react';
import { SectionHeading } from './SectionHeading';
import { GraduationCap, Award, Building2, Sparkles, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

interface EducationRecord {
  id: string;
  degree: string;
  shortTag: string;
  institution?: string;
  status?: string;
  semester?: string;
  result: string;
  resultLabel: string;
  description: string;
  isCurrent?: boolean;
}

const EDUCATION_RECORDS: EducationRecord[] = [
  {
    id: 'bscs',
    degree: 'Bachelor of Science in Computer Science (BSCS)',
    shortTag: 'Undergraduate Degree',
    institution: 'The Lahore City College, Zafarwal',
    status: 'Currently Studying',
    semester: '5th Semester',
    result: '4.0 / 4.0 CGPA',
    resultLabel: '3rd Semester Result',
    description:
      'Pursuing core computer science foundations, algorithm design, software architecture, and modern programming practices with an emphasis on web and software development.',
    isCurrent: true,
  },
  {
    id: 'fsc',
    degree: 'Faculty of Science (FSc)',
    shortTag: 'Higher Secondary',
    result: '1059 / 1200',
    resultLabel: 'Academic Score',
    description:
      'Pre-university science education establishing strong analytical, mathematical, and logical problem-solving capabilities.',
    isCurrent: false,
  },
  {
    id: 'matric',
    degree: 'Matriculation',
    shortTag: 'Secondary School',
    result: '1038 / 1100',
    resultLabel: 'Academic Score',
    description:
      'Foundational secondary education demonstrating consistent academic discipline, focus, and dedication to excellence.',
    isCurrent: false,
  },
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-12 sm:py-14 lg:py-16 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          title="Education"
          subtitle=""
        />

        {/* Compact 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {EDUCATION_RECORDS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: 'easeOut' }}
              className={`bg-[#0F172A] rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20 flex flex-col justify-between ${
                item.isCurrent
                  ? 'border-2 border-indigo-500/40 hover:border-indigo-500/60 ring-1 ring-indigo-500/20'
                  : 'border border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Header Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 shrink-0">
                    {item.isCurrent ? (
                      <GraduationCap className="w-5 h-5" />
                    ) : (
                      <BookOpen className="w-5 h-5 text-slate-400" />
                    )}
                  </div>

                  {item.isCurrent ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      <span>Current</span>
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                      {item.shortTag}
                    </span>
                  )}
                </div>

                {/* Degree Title */}
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-indigo-300 transition-colors">
                  {item.degree}
                </h3>

                {/* Institution & Status (for BSCS) */}
                {item.institution && (
                  <div className="flex items-center gap-1.5 mt-2 text-xs font-medium text-slate-300">
                    <Building2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>{item.institution}</span>
                  </div>
                )}

                {item.status && item.semester && (
                  <div className="flex items-center gap-2 mt-2 text-[11px] font-mono text-indigo-300">
                    <span>{item.status}</span>
                    <span>•</span>
                    <span>{item.semester}</span>
                  </div>
                )}

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Result Pill Footer */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {item.resultLabel}
                  </div>
                  <div className="text-sm sm:text-base font-bold font-mono text-indigo-300 mt-0.5 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>{item.result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

