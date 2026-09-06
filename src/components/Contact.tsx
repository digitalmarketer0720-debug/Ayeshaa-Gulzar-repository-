import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Mail, MapPin, Send, CheckCircle2, Clock, MessageSquare, Github, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 500);
  };

  return (
    <section id="contact" className="py-12 sm:py-14 lg:py-16 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          title="Let's Work Together"
          subtitle="Have a project in mind? I’d love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          {/* Left Column: Existing Contact Info & Profiles */}
          <div className="lg:col-span-5 bg-[#0F172A] border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-lg shadow-black/20">
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                  Feel free to reach out directly or send a message through the form.
                </p>
              </div>

              <div className="space-y-3.5 pt-1">
                {/* Email Slot */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800/90">
                  <div className="w-9 h-9 rounded-lg bg-[#0F172A] border border-slate-800 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-400">Direct Email</div>
                    <a
                      href="mailto:ayesha.gulzar.dev@example.com"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-indigo-300 transition-colors block truncate"
                    >
                      ayesha.gulzar.dev@example.com
                    </a>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800/90">
                  <div className="w-9 h-9 rounded-lg bg-[#0F172A] border border-slate-800 flex items-center justify-center text-indigo-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Availability</div>
                    <div className="text-xs sm:text-sm font-medium text-slate-200">
                      Open for Projects &amp; Remote Work
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800/90">
                  <div className="w-9 h-9 rounded-lg bg-[#0F172A] border border-slate-800 flex items-center justify-center text-indigo-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Location</div>
                    <div className="text-xs sm:text-sm font-medium text-slate-200">
                      Available Globally (Remote)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="text-[11px] font-mono text-slate-400 mb-2.5">
                Profiles &amp; Networks
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-200 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-200 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#0F172A] border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-lg shadow-black/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2 text-white font-bold text-base sm:text-lg">
                  <MessageSquare className="w-4 h-4 text-indigo-400" />
                  <span>Send a Message</span>
                </div>
                <span className="text-[11px] font-mono text-indigo-400 bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-800">
                  Quick Response
                </span>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mx-auto text-indigo-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out. Your message has been received, and I'll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-name"
                        className="block text-[11px] font-mono text-slate-300 font-medium"
                      >
                        Name <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-indigo-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-email"
                        className="block text-[11px] font-mono text-slate-300 font-medium"
                      >
                        Email <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-indigo-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-message"
                      className="block text-[11px] font-mono text-slate-300 font-medium"
                    >
                      Message <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message details..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-indigo-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-500 resize-none transition-colors"
                    />
                  </div>

                  {/* Send Message Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/35 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
