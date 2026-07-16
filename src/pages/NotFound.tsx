import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '../components/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[65vh] flex flex-col items-center justify-center text-center p-6 bg-slate-50/10 dark:bg-transparent">
      <div className="space-y-4">
        <h1 className="text-8xl font-black text-slate-200 dark:text-slate-800">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-150 font-sans">Page Not Found</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="pt-4">
          <Link to="/">
            <Button className="gap-2">
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
