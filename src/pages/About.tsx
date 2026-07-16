import React from 'react';
import { Card } from '../components/Card';
import { ShieldCheck, Cpu, Code2, Users2, Milestone } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Outcome-Driven Focus",
      desc: "We don't build software for the sake of technology. We engineer solutions that directly increase your revenue, reduce operational overhead, or save manual hours."
    },
    {
      icon: <Code2 className="w-6 h-6 text-primary" />,
      title: "Clean Engineering",
      desc: "Our systems are built on React, TypeScript, and modern Cloud environments. Every line of code is modular, type-safe, and documented for painless long-term scale."
    },
    {
      icon: <Cpu className="w-6 h-6 text-primary" />,
      title: "Practical AI Integration",
      desc: "No flashy hype. We build robust LLM workflows, automated document processing systems, and custom chatbots that provide immediate, measurable utility."
    }
  ];

  return (
    <div className="py-16 md:py-24 space-y-20">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white max-w-3xl mx-auto leading-tight font-sans">
          We Build Intelligent Software That Helps Businesses Grow
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          DevAtEase is a bespoke software development and AI integration consultancy. We bridge the gap between complex emerging tech and real-world commercial outcomes.
        </p>
      </section>

      {/* Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Our Engineering Philosophy</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">The standards that guide our team daily</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, idx) => (
            <Card key={idx} className="space-y-4 border border-slate-200 dark:border-slate-800">
              <div className="p-3 bg-primary/5 rounded-xl w-fit">
                {v.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">{v.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Story / About Section */}
      <section className="bg-slate-50 dark:bg-slate-900/10 py-16 md:py-20 border-y border-slate-200 dark:border-slate-800/60 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="p-1.5 px-3 bg-primary/5 text-primary text-xs font-semibold rounded-full w-fit">
              Who We Serve
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-sans">
              Bridging the Gap for SMBs and Scale-ups
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We started DevAtEase because we noticed that local businesses, startups, and growing enterprises were being left behind in the AI revolution. Most agencies sell high-level concepts and complex tech stacks that yield little business value.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Our approach is different. We focus exclusively on practical automation—automating follow-ups for realtors, patient intakes for clinics, and WhatsApp messaging systems for gyms. We design, develop, and host the software so you can focus on running your business.
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 space-y-6 shadow-premium">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white font-sans">Our Track Record</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 rounded-lg">
                  <Milestone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-850 dark:text-slate-200 text-sm">Custom AI Agents Delivered</h5>
                  <p className="text-xs text-slate-550 dark:text-slate-400 mt-0.5">Automating hundreds of hours of daily operations for real estate and healthcare clients.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 rounded-lg">
                  <Users2 className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-850 dark:text-slate-200 text-sm">30+ Local Businesses Optimized</h5>
                  <p className="text-xs text-slate-550 dark:text-slate-400 mt-0.5">Integrating WhatsApp messaging, CRM solutions, and predictive stock analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
