import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left font-medium text-slate-900 dark:text-slate-100 hover:text-primary dark:hover:text-primary transition-colors focus:outline-none py-2"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold pr-4">{title}</span>
        <ChevronDown
          className={clsx(
            "w-4.5 h-4.5 text-slate-400 transition-transform duration-300 shrink-0",
            isOpen && "rotate-180 text-primary"
          )}
        />
      </button>
      <div
        className={clsx(
          "grid transition-all duration-300 ease-in-out text-slate-600 dark:text-slate-400 text-sm overflow-hidden",
          isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden leading-relaxed pb-2">
          {children}
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ children, className }) => {
  return (
    <div className={clsx("divide-y divide-slate-200 dark:divide-slate-850", className)}>
      {children}
    </div>
  );
};
