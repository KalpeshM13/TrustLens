import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="flex items-center gap-2">
            <div className="bg-primary-600 p-1.5 rounded-lg text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
              Trust<span className="text-primary-600 dark:text-primary-400">Lens</span>
            </span>
          </div>
          <p className="text-sm font-bold tracking-widest text-slate-400 dark:text-slate-500">
            SCAN. DETECT. PROTECT.
          </p>
        </div>
        <div className="text-center text-xs font-medium text-slate-500 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} TrustLens. AI-powered malicious & phishing URL detection concept.</p>
        </div>
      </div>
    </footer>
  );
}
