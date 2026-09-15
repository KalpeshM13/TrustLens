import React from 'react';
import { ShieldCheck, MessageSquare, QrCode, ArrowUpRight, Flag, Trophy } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    bg: "bg-primary-50 dark:bg-primary-900/30",
    title: "Real-time Protection",
    desc: "A traffic-light safety status makes threat levels understandable at a glance."
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    bg: "bg-purple-50 dark:bg-purple-900/30",
    title: "Ask the Website",
    desc: "AI translates technical security findings into a simple explanation of why a link may be risky."
  },
  {
    icon: <QrCode className="w-6 h-6 text-green-600 dark:text-green-400" />,
    bg: "bg-green-50 dark:bg-green-900/30",
    title: "QR Code Analysis",
    desc: "Extract hidden URLs from QR codes and send them through the same threat-detection pipeline."
  },
  {
    icon: <ArrowUpRight className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
    bg: "bg-orange-50 dark:bg-orange-900/30",
    title: "Safe Alternatives",
    desc: "When possible, TrustLens can recommend an official or safer destination instead of a suspicious one."
  },
  {
    icon: <Flag className="w-6 h-6 text-red-600 dark:text-red-400" />,
    bg: "bg-red-50 dark:bg-red-900/30",
    title: "Community Intelligence",
    desc: "User scam reports add another signal and help the community recognize recurring threats."
  },
  {
    icon: <Trophy className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
    bg: "bg-teal-50 dark:bg-teal-900/30",
    title: "Threat Hunter Leaderboard",
    desc: "Reward useful reports with badges and encourage collaborative cyber awareness."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 dark:text-primary-400 font-bold tracking-wider text-sm uppercase mb-3 block">Platform Features</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Security that speaks human.</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Advanced backend algorithms translating complex threat intel into a simple, beautiful interface for everyday users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl dark:hover:shadow-primary-900/10 transition-all group">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${feature.bg}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-medium">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
