import React from 'react';
import { Target, Users, LayoutDashboard, Rocket } from 'lucide-react';

export default function AboutRoadmap() {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white dark:bg-slate-800 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <span className="text-primary-600 dark:text-primary-400 font-bold tracking-wider text-xs uppercase mb-3 block">Why It Matters</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Phishing is designed to look trustworthy.</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Students, online shoppers, banking users, and employees can all be affected by deceptive links that steal credentials or personal data.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-1 text-sm">
                  <Users className="w-4 h-4 text-blue-500" /> Students
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Fake scholarships & exam links</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-1 text-sm">
                  <Target className="w-4 h-4 text-green-500" /> Shoppers
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Fake stores and discount pages</p>
              </div>
            </div>
          </div>

          <div className="bg-primary-900 p-8 sm:p-10 rounded-3xl border border-primary-800 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Rocket className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <span className="text-primary-300 font-bold tracking-wider text-xs uppercase mb-3 block">Roadmap</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Built to scale.</h2>
              <ul className="space-y-4 mt-8">
                <li className="flex items-center gap-3 text-sm font-medium text-primary-100 border-b border-primary-800/50 pb-4">
                  <span className="w-2 h-2 rounded-full bg-primary-400"></span> Mobile app with real-time protection
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-primary-100 border-b border-primary-800/50 pb-4">
                  <span className="w-2 h-2 rounded-full bg-primary-400"></span> Advanced AI/ML phishing detection
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-primary-100 border-b border-primary-800/50 pb-4">
                  <span className="w-2 h-2 rounded-full bg-primary-400"></span> WhatsApp & SMS scanning
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-primary-100 border-b border-primary-800/50 pb-4">
                  <span className="w-2 h-2 rounded-full bg-primary-400"></span> Enterprise dashboard & monitoring
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="mt-16 text-center">
          <span className="text-slate-500 dark:text-slate-400 font-bold tracking-wider text-xs uppercase mb-4 block">Technology Stack</span>
          <div className="flex flex-wrap justify-center gap-3">
            {['React/Vite', 'Tailwind CSS', 'Python', 'FastAPI', 'Machine Learning', 'MySQL', 'Browser Extension', 'Gemini AI', 'Docker', 'Replit'].map(tech => (
              <span key={tech} className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold text-slate-700 dark:text-slate-300 shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
