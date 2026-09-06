/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0E1A] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* 1. Sticky Top Navbar (always first element at the top) */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero */}
        <Hero />

        {/* 3. About */}
        <About />

        {/* 4. Skills */}
        <Skills />

        {/* 5. Projects */}
        <Projects />

        {/* 6. Education */}
        <Education />

        {/* 7. Contact */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
