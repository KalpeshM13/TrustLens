import React from 'react';
import { Flag, Trophy, Shield, Medal } from 'lucide-react';

const leaders = [
  { name: 'Alex', reports: 42, badge: '🏆' },
  { name: 'Riya', reports: 37, badge: '🥈' },
  { name: 'Karan', reports: 31, badge: '🥉' },
];

export default function Community() {
  return (
    <section id="community" className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary-100 dark:bg-slate-800 text-primary-600 dark:text-primary-400 text-sm font-semibold border border-primary-200 dark:border-slate-700">
              <Shield className="w-4 h-4" /> COMMUNITY PROTECTION
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
              Turn every user into a <span className="text-primary-600 dark:text-primary-400">threat hunter.</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
              Community reporting adds real-world intelligence to automated detection. Users can report scams, see report counts, and earn recognition for keeping the web safe.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-500 transition-colors text-white font-bold rounded-xl shadow-lg shadow-primary-600/20">
              <Flag className="w-5 h-5 mr-2" /> Report a Threat
            </button>
          </div>

          <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-sm rounded-3xl p-8 backdrop-blur-sm">
            <div className="flex justify-between items-end mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-500" /> Leaderboard
                </h3>
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">This week</span>
            </div>

            <div className="space-y-4">
              {leaders.map((leader, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-bold text-slate-500">0{i+1}</span>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center font-bold text-white">
                      {leader.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-200">{leader.name}</h4>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{leader.reports} verified reports</p>
                    </div>
                  </div>
                  <div className="text-2xl">{leader.badge}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
