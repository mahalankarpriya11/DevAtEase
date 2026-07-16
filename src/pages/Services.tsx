import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Code2, Monitor, Figma, Database, Settings2, BarChart } from 'lucide-react';

interface ServicesProps {
  onBookCall: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookCall }) => {
  const serviceList = [
    {
      icon: <Code2 className="w-6 h-6 text-primary" />,
      title: "Software & Web Development",
      desc: "We build custom, modern web applications from scratch using React, Next.js, and Node.js. Our products are fully type-safe, responsive, and performance-optimized for maximum conversions.",
      outcome: "High speed, responsive web app tailored to your workflows.",
      metric: "95+ Lighthouse scores",
      tags: ["React / TS", "Next.js", "Node.js", "SQL/NoSQL"]
    },
    {
      icon: <Monitor className="w-6 h-6 text-primary" />,
      title: "Mobile App Development",
      desc: "Cross-platform mobile applications for iOS and Android built on React Native. We ensure high-performance, native feel, and seamless App Store/Play Store delivery.",
      outcome: "Engaging mobile apps that keep your clients connected on the go.",
      metric: "Unified code, faster launch",
      tags: ["React Native", "Expo", "iOS & Android", "Push Notifications"]
    },
    {
      icon: <Figma className="w-6 h-6 text-primary" />,
      title: "UI/UX Product Design",
      desc: "User-centered visual and interaction design. We craft modern, premium layouts, establish design systems, and prototype flows that validate user experience before code is written.",
      outcome: "Award-winning, beautiful user interfaces that feel premium.",
      metric: "100% custom UI systems",
      tags: ["Figma", "User Mapping", "Prototyping", "Design Tokens"]
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Cloud Solutions & Infrastructure",
      desc: "Reliable database designs, serverless API integrations, and cloud infrastructure setup on AWS or Google Cloud. We guarantee high uptime and secure data handling.",
      outcome: "Scalable backends with zero maintenance overhead.",
      metric: "99.9% uptime architectures",
      tags: ["AWS / GCP", "Serverless", "REST & GraphQL", "CI/CD pipelines"]
    },
    {
      icon: <Settings2 className="w-6 h-6 text-primary" />,
      title: "Workflow & Business Automation",
      desc: "Automate repetitive daily tasks by connecting your tools (CRMs, payment gateways, calendar systems) via custom API logic and secure workflows.",
      outcome: "Zero double-data entry and reduced manual processing errors.",
      metric: "Save up to 20h per week",
      tags: ["Zapier / Make", "Custom APIs", "Stripe billing", "CRM sync"]
    },
    {
      icon: <BarChart className="w-6 h-6 text-primary" />,
      title: "Custom Dashboards & BI",
      desc: "Gather data from multiple sources and present it in real-time. We construct interactive data pipelines and charts that help teams make informed decisions.",
      outcome: "Visual insights into user behavior and business metrics.",
      metric: "Real-time sync APIs",
      tags: ["Chart.js / Recharts", "Data Pipelines", "Excel exports", "KPI panels"]
    }
  ];

  return (
    <div className="py-16 md:py-24 space-y-20">
      {/* Services Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="p-1.5 px-3 bg-primary/5 text-primary text-xs font-semibold rounded-full w-fit mx-auto">
          Core Capabilities
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white max-w-3xl mx-auto leading-tight font-sans">
          Bespoke Digital Solutions Tailored to Your Business
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          We combine Senior UX Design with bulletproof full-stack engineering to build websites, apps, and automations that drive business outcome metrics.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <Card key={index} className="flex flex-col h-full border border-slate-200 dark:border-slate-800 justify-between">
              <div className="space-y-4">
                <div className="p-3 bg-primary/5 rounded-xl w-fit">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">{service.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{service.desc}</p>
                
                <div className="pt-4 border-t border-slate-100 dark:border-slate-850 space-y-2">
                  <div className="text-xs text-slate-550 dark:text-slate-400">
                    <span className="font-semibold text-slate-900 dark:text-slate-250">Outcome:</span> {service.outcome}
                  </div>
                  <div className="text-xs text-slate-550 dark:text-slate-400">
                    <span className="font-semibold text-slate-900 dark:text-slate-250">Value Metric:</span> {service.metric}
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {service.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-450 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div className="bg-slate-900 dark:bg-slate-950/60 border border-slate-855 dark:border-slate-850 rounded-3xl p-8 md:p-12 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-sans">Ready to scale your tech capabilities?</h2>
          <p className="text-sm text-slate-450 max-w-xl mx-auto">
            Book a call with us. We'll audit your current workflow bottlenecks and provide a fixed-price roadmap for your software.
          </p>
          <div className="pt-4">
            <Button onClick={onBookCall} size="lg">Book a Discovery Call</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
