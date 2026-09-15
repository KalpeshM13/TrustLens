import React from 'react';
import { Globe, Code, Layout, HardDrive, Zap } from 'lucide-react';

export default function BrowserExtension() {
  const extensionFeatures = [
    {
      icon: <Globe className="w-5 h-5" />,
      text: "Built on Manifest V3 for optimal security and performance."
    },
    {
      icon: <Code className="w-5 h-5" />,
      text: "Powered by TypeScript and JavaScript."
    },
    {
      icon: <Layout className="w-5 h-5" />,
      text: "Clean, responsive popup UI using React + Tailwind CSS."
    },
    {
      icon: <HardDrive className="w-5 h-5" />,
      text: "Seamless data management with the Chrome Storage API."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Real-time scanning via background service workers and content scripts."
    }
  ];

  return (
    <section id="extension" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-bold tracking-wide border border-orange-200 dark:border-orange-800/50">
              COMING SOON
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              TrustLens <span className="text-primary-600 dark:text-primary-400">Browser Extension</span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              We are bringing our powerful security scanning directly to your browser. Our upcoming extension will automatically analyze links and pages as you browse, keeping you safe without breaking your workflow.
            </p>
            
            <div className="space-y-4">
              {extensionFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-primary-100 dark:bg-slate-700 text-primary-600 dark:text-primary-400">
                    {feature.icon}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium pt-2">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative mx-auto max-w-md rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-8 shadow-2xl border border-slate-200 dark:border-slate-700 aspect-[4/3] flex flex-col items-center justify-center text-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 dark:opacity-5"></div>
              
              <div className="relative z-10 w-24 h-24 bg-white dark:bg-slate-800 rounded-3xl shadow-xl flex items-center justify-center mb-6 border border-slate-100 dark:border-slate-700">
                <Globe className="w-12 h-12 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="relative z-10 text-2xl font-bold text-slate-800 dark:text-white mb-2">TrustLens Shield</h3>
              <p className="relative z-10 text-slate-500 dark:text-slate-400 font-medium">Coming to Extension Store</p>
              
              <div className="relative z-10 mt-8">
                <button className="px-6 py-2 bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 font-bold rounded-lg cursor-not-allowed opacity-70">
                  Notify Me
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
