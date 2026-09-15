import React from 'react';
import { MousePointerClick, ShieldCheck, Activity, BrainCircuit, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Input URL / QR",
      desc: "Paste a link or upload a QR code into the scanner.",
      icon: <MousePointerClick className="w-6 h-6" />
    },
    {
      num: "02",
      title: "Analyze Signals",
      desc: "We check the URL, domain, security, and reputation.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      num: "03",
      title: "Calculate Risk",
      desc: "Signals are combined into a 0-100 risk score.",
      icon: <BrainCircuit className="w-6 h-6" />
    },
    {
      num: "04",
      title: "Explain & Protect",
      desc: "AI explains the risk and recommends an action.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <section id="how" className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 dark:text-primary-400 font-bold tracking-wider text-sm uppercase mb-3 block">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Multi-layer protection, one clear answer.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm z-10 group hover:-translate-y-2 transition-transform">
              <span className="text-5xl font-black text-slate-300 dark:text-slate-600 absolute top-6 right-6">{step.num}</span>
              <div className="w-12 h-12 bg-primary-100 dark:bg-slate-700 text-primary-600 dark:text-primary-400 rounded-2xl flex items-center justify-center mb-8 relative z-10">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">{step.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed relative z-10">
                {step.desc}
              </p>
            </div>
          ))}
          
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 z-0"></div>
        </div>
      </div>
    </section>
  );
}
