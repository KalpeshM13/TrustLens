import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-slate-900 pt-[120px] pb-[110px] lg:pt-[150px]">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://saasly.demos.tailgrids.com/images/hero/hero-bg.svg')] bg-cover bg-center bg-no-repeat opacity-10 dark:opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-[570px] lg:pt-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-wide border border-primary-100 dark:border-primary-800">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                AI-POWERED WEB SAFETY
              </div>
              
              <h1 className="mb-6 text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-[50px]">
                Know the link <br />
                <span className="text-primary-600 dark:text-primary-400">before you trust it.</span>
              </h1>
              
              <p className="mb-10 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                TrustLens analyzes URLs and QR codes using multiple security, reputation and community signals to help you detect phishing and malicious websites before you interact with them.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/app"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-base font-bold text-white transition-all bg-primary-600 rounded-xl hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/20"
                >
                  Scan a Link
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="#how"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-base font-bold transition-all bg-white border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  See how it works
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-8 border-t border-slate-200 dark:border-slate-800 pt-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">0–100</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Risk Score</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">4 Levels</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Threat Class</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">24/7</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Protection</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative z-10 mx-auto max-w-[500px] rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-2xl dark:shadow-none border border-slate-100 dark:border-slate-700">
              <div className="flex justify-between items-center mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
                <span className="font-bold text-slate-700 dark:text-slate-200">TrustLens Protection</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-600 dark:text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> LIVE
                </span>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-8 truncate text-sm font-medium text-slate-600 dark:text-slate-400">
                <span className="mr-2">🔗</span> https://google.com
              </div>
              
              <div className="relative w-40 h-40 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-50 dark:bg-green-900/20 border-[8px] border-green-500">
                <div className="text-center">
                  <span className="block text-4xl font-extrabold text-slate-900 dark:text-white leading-none">98</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-semibold">/ 100</span>
                </div>
              </div>
              
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 rounded-full text-sm font-bold">
                  ✓ Low Risk
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800">
                  <span>URL structure</span>
                  <span className="text-green-500">✓</span>
                </div>
                <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800">
                  <span>Reputation</span>
                  <span className="text-green-500">✓</span>
                </div>
                <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800">
                  <span>Intelligence</span>
                  <span className="text-green-500">✓</span>
                </div>
                <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800">
                  <span>Reports</span>
                  <span className="text-slate-400">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
