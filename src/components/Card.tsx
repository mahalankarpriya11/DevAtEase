import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          "bg-white dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-slate-800/60 rounded-2xl p-6 transition-all duration-300",
          hoverEffect && "hover:shadow-premium-hover hover:border-slate-300 dark:hover:border-slate-700/60 hover:-translate-y-1",
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
