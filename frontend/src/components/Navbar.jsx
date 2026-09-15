import { ShieldCheck } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isAppPage = location.pathname === '/app';

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="bg-primary-600 p-1.5 rounded-lg text-white">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              Trust<span className="text-primary-600 dark:text-primary-400">Lens</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {!isAppPage && <a href="#extension" className="text-sm font-semibold text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors">Extension</a>}
            {!isAppPage && <a href="#features" className="text-sm font-semibold text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors">Features</a>}
            {!isAppPage && <a href="#community" className="text-sm font-semibold text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors">Community</a>}
            {!isAppPage && <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors">About</a>}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            {!isAppPage ? (
              <Link 
                to="/app"
                className="hidden sm:flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-primary-600 rounded-xl hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/20 transition-all"
              >
                Check a Link
              </Link>
            ) : (
              <Link 
                to="/"
                className="hidden sm:flex items-center justify-center px-4 py-2 text-sm font-bold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                Back to Home
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
