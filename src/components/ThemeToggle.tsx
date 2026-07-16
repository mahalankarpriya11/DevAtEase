import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-950"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-4.5 h-4.5 text-amber-500 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4.5 h-4.5 text-slate-600 dark:text-slate-400 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};
