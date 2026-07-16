import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-900/20 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <span className="font-sans font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
              Dev<span className="text-primary font-medium">At</span>Ease
            </span>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              We design and build bespoke software, cloud architectures, and practical business automation using AI to increase revenue and efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">Software Engineering</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">Web Applications</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">Cloud Architecture</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">AI Consulting & Agents</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/ai-solutions" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">AI Solutions</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">Contact Support</Link>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider">Stay Updated</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Get our monthly dispatch of practical AI case studies and tech architecture reviews.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="flex-1 px-3 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-slate-950 text-slate-800 dark:text-slate-200"
              />
              <Button type="submit" size="sm" className="px-3 shrink-0">
                {subscribed ? 'Sent!' : <Send className="w-4 h-4" />}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom copyright block */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-450 dark:text-slate-500">
          <p>© {new Date().getFullYear()} DevAtEase. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Pune, Maharashtra, India • info@devatease.in</p>
        </div>
      </div>
    </footer>
  );
};
