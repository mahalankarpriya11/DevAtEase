import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HomeProps {
  onBookCall: () => void;
}

export const Home: React.FC<HomeProps> = ({ onBookCall }) => {
  const [activeLog, setActiveLog] = useState(0);

  const logs = [
    { label: "[Clinic Agent]", text: "Automated schedule update for Dr. Verma - Intake parsed.", time: "Just now" },
    { label: "[Realtor Bot]", text: "Lead qualified: score 94/100. Matched with 3 MLS listings.", time: "1m ago" },
    { label: "[Gym Agent]", text: "WhatsApp follow-up response sent. Trial scheduled for 7:00 PM.", time: "3m ago" },
    { label: "[Retail Pipeline]", text: "Forecast model triggered: restocked items 12 and 45.", time: "5m ago" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLog((prev) => (prev + 1) % logs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "14,800+", label: "Manual Hours Saved" },
    { value: "85%", label: "Average Automation Rate" },
    { value: "99.98%", label: "System Availability" },
  ];

  const previewSolutions = [
    {
      title: "AI for Gyms",
      desc: "WhatsApp chat automations, trial bookings, and diet planning systems.",
      metric: "Reduce member admin by 75%"
    },
    {
      title: "AI for Realtors",
      desc: "Instant MLS matches, SMS lead qualification, and document indexing.",
      metric: "5x faster lead response"
    },
    {
      title: "AI for Clinics",
      desc: "HIPAA-compliant scheduling assistants and patient follow-up notifications.",
      metric: "Save 12h of front-desk calls/week"
    }
  ];

  const steps = [
    { num: "01", name: "Audit & Discover", desc: "We review your operations to identify bottlenecks where automated software yields the highest financial return." },
    { num: "02", name: "Architect & Design", desc: "We map user journeys and system logic. You receive high-fidelity Figma designs before any code is written." },
    { num: "03", name: "Bespoke Development", desc: "Our engineers build using React, TypeScript, and serverless Cloud APIs. No templates, strictly custom code." },
    { num: "04", name: "Deploy & Optimize", desc: "We integrate the custom dashboard into your daily CRM, monitor uptime, and scale performance metrics." }
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Info */}
        <div className="space-y-8 lg:col-span-7">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold w-fit">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Practical AI Solutions That Increase Business Revenue</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight font-sans tracking-tight">
            AI & Software Solutions <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">That Help Businesses Grow</span>
          </h1>

          <p className="text-base md:text-lg text-slate-555 dark:text-slate-400 max-w-xl leading-relaxed">
            We build intelligent software, bespoke web applications, and digital workflows that eliminate manual administrative work, optimize operations, and drive measurable revenue growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={onBookCall}>
              Book a Consultation
            </Button>
            <Link to="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Services
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side HTML Dashboard Mockup */}
        <div className="lg:col-span-5 w-full relative">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-purple-600 opacity-20 blur-xl animate-pulse-slow"></div>
          <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-premium overflow-hidden space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Automation Pipeline</span>
            </div>

            {/* Simulated Live Analytics Graph */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-700 dark:text-slate-350">Uptime Reliability</span>
                <span className="text-emerald-500 font-extrabold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                  99.98%
                </span>
              </div>
              <div className="h-16 w-full flex items-end gap-1.5 pt-4">
                {[45, 60, 55, 70, 65, 80, 75, 90, 85, 95, 100].map((val, idx) => (
                  <div key={idx} className="flex-1 bg-primary/10 dark:bg-primary/20 hover:bg-primary transition-all duration-300 rounded-sm" style={{ height: `${val}%` }}></div>
                ))}
              </div>
            </div>

            {/* Dynamic Console Logger */}
            <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-850 rounded-xl p-4 font-mono text-[10px] space-y-2">
              <span className="text-slate-400 block border-b border-slate-100 dark:border-slate-900 pb-1.5 font-sans font-bold uppercase">Console Monitor</span>
              <div className="space-y-1.5 min-h-[45px]">
                {logs.map((log, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between items-center transition-opacity duration-500 ${
                      activeLog === idx ? 'opacity-100 text-primary dark:text-blue-400' : 'opacity-40 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <span>
                      <strong className="font-bold">{log.label}</strong> {log.text}
                    </span>
                    <span className="text-[8px] text-slate-400 font-bold">{log.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white font-sans">{stat.value}</span>
                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Solutions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-sans">AI & Software Solutions by Industry</h2>
          <p className="text-sm text-slate-555 dark:text-slate-400 max-w-lg mx-auto">
            We target workflows where manual staff operations can be reduced by 80% using custom LLM agents and cloud systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewSolutions.map((sol, idx) => (
            <Card key={idx} className="border border-slate-200 dark:border-slate-800 flex flex-col justify-between p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">{sol.title}</h3>
                <p className="text-sm text-slate-555 dark:text-slate-400 leading-relaxed">{sol.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-850 flex justify-between items-center text-xs">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{sol.metric}</span>
                <Link to="/ai-solutions" className="text-primary hover:underline font-bold flex items-center gap-1">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* The Stepper Stepper Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-sans">Our Development Process</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">From strategic discovery to verified commercial deployment</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, idx) => (
            <div key={idx} className="relative space-y-4">
              <span className="text-5xl font-black text-slate-100 dark:text-slate-800/80 font-sans select-none">{s.num}</span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white font-sans">{s.name}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 dark:bg-slate-900/10 py-16 md:py-20 border-y border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-sans">Business Case Studies</h2>
            <p className="text-sm text-slate-555 dark:text-slate-400">Read what other business owners say about the DevAtEase workflow upgrades</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-slate-200 dark:border-slate-800 space-y-4">
              <p className="text-sm text-slate-500 dark:text-slate-400 italic leading-relaxed">
                "The WhatsApp booking agent DevAtEase built for our fitness center has cut admin scheduling time in half. Members love the immediate responsiveness, and our trial conversions increased by 30%."
              </p>
              <div className="pt-2">
                <h5 className="text-xs font-bold text-slate-800 dark:text-white font-sans">Marcus Reed</h5>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Owner, Apex Performance Center</span>
              </div>
            </Card>

            <Card className="border border-slate-200 dark:border-slate-800 space-y-4">
              <p className="text-sm text-slate-500 dark:text-slate-400 italic leading-relaxed">
                "We integrated their MLS matching API and SMS responder. Our team no longer spends hours filtering duplicate leads. The AI scores lead lists, allowing us to close properties twice as fast."
              </p>
              <div className="pt-2">
                <h5 className="text-xs font-bold text-slate-800 dark:text-white font-sans">Sarah Sterling</h5>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Managing Partner, Sterling Realtor Group</span>
              </div>
            </Card>

            <Card className="border border-slate-200 dark:border-slate-800 space-y-4">
              <p className="text-sm text-slate-500 dark:text-slate-400 italic leading-relaxed">
                "Their automated intake coordinator completely revamped our clinic scheduling. Patient satisfaction score went up immediately because there is zero phone wait time, and insurance docs parse instantly."
              </p>
              <div className="pt-2">
                <h5 className="text-xs font-bold text-slate-800 dark:text-white font-sans">Dr. Alan Mercer</h5>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Founder, Mercer Healthcare Group</span>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
