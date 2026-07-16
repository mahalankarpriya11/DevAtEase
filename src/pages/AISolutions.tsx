import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Dumbbell, Home, ShoppingBag, Stethoscope, Utensils, Factory } from 'lucide-react';

export const AISolutions: React.FC = () => {
  const [industry, setIndustry] = useState<'gym' | 'realtor' | 'retail' | 'clinic' | 'restaurant' | 'manufacturing'>('gym');
  const [hours, setHours] = useState<number>(20);

  const solutionCards = [
    {
      id: 'gym',
      icon: <Dumbbell className="w-5 h-5 text-primary" />,
      title: "AI for Gyms",
      features: [
        "Automated WhatsApp lead follow-ups and trial scheduling.",
        "Diet and routine recommendations generated based on membership level.",
        "Attendance pattern analytics to optimize class schedules.",
        "Immediate support chatbot for membership pauses/renewals."
      ]
    },
    {
      id: 'realtor',
      icon: <Home className="w-5 h-5 text-primary" />,
      title: "AI for Realtors",
      features: [
        "24/7 lead scoring and qualification via text/SMS.",
        "Automated document processing and contract drafting assistant.",
        "Interactive property matching engines based on buyer preferences.",
        "Immediate property Q&A chat for active MLS listings."
      ]
    },
    {
      id: 'retail',
      icon: <ShoppingBag className="w-5 h-5 text-primary" />,
      title: "AI for Retailers",
      features: [
        "Predictive restocking algorithms using seasonal data.",
        "Personalized loyalty campaigns and dynamic automated discounts.",
        "Support bots handling common delivery and return tracking queries.",
        "Semantic search engines optimizing product listing conversions."
      ]
    },
    {
      id: 'clinic',
      icon: <Stethoscope className="w-5 h-5 text-primary" />,
      title: "AI for Clinics",
      features: [
        "Conversational scheduling assistant handling appointments and changes.",
        "HIPAA-compliant document parsing for intake forms.",
        "Automated pre-visit and post-visit follow-up instructions.",
        "Instant FAQ response regarding location, services, and insurance."
      ]
    },
    {
      id: 'restaurant',
      icon: <Utensils className="w-5 h-5 text-primary" />,
      title: "AI for Restaurants",
      features: [
        "Voice ordering assistants and interactive WhatsApp reservation bots.",
        "Automated review collection and sentiment feedback dashboards.",
        "Intelligent menu recommendations matching user historical orders.",
        "Real-time delivery partner coordination workflows."
      ]
    },
    {
      id: 'manufacturing',
      icon: <Factory className="w-5 h-5 text-primary" />,
      title: "AI for Manufacturing",
      features: [
        "Predictive maintenance triggers based on sensor logs.",
        "Computer-vision sorting systems flagging component defects.",
        "Material requirements supply chain forecasting pipelines.",
        "Workflow layout optimization using simulation pipelines."
      ]
    }
  ];

  // ROI Math
  const getROIMetrics = () => {
    const hourlyRate = 25; // standard admin/staff rate
    const automationRate = 0.8; // 80% tasks automated
    const hoursSavedMonth = Math.round(hours * 4.33 * automationRate);
    const moneySavedMonth = Math.round(hoursSavedMonth * hourlyRate);
    const yearlySavings = moneySavedMonth * 12;

    return {
      hoursSavedMonth,
      moneySavedMonth,
      yearlySavings
    };
  };

  const { hoursSavedMonth, moneySavedMonth, yearlySavings } = getROIMetrics();

  return (
    <div className="py-16 md:py-24 space-y-20">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="p-1.5 px-3 bg-primary/5 text-primary text-xs font-semibold rounded-full w-fit mx-auto">
          AI Implementations
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white max-w-3xl mx-auto leading-tight font-sans">
          Industry-Specific AI Automations
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          We implement tailored workflows that take the manual labor out of scheduling, document processing, and customer routing.
        </p>
      </section>

      {/* ROI Calculator Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Inputs */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white font-sans">Calculate Your AI ROI</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Estimate the time and financial savings your business can achieve.</p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-350 uppercase tracking-wider">Select Industry</label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value as any)}
                className="w-full px-4 py-2.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary text-slate-800 dark:text-slate-200"
              >
                <option value="gym">Gym / Fitness Center</option>
                <option value="realtor">Real Estate Agency</option>
                <option value="retail">Retail / E-commerce Store</option>
                <option value="clinic">Healthcare / Medical Clinic</option>
                <option value="restaurant">Restaurant / Hospitality</option>
                <option value="manufacturing">Manufacturing / Supply Chain</option>
              </select>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                <span>MANUAL STAFF HOURS / WEEK</span>
                <span className="text-primary font-extrabold">{hours} Hours</span>
              </div>
              <input
                type="range"
                min="5"
                max="80"
                step="5"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full accent-primary bg-slate-200 dark:bg-slate-800 rounded-lg h-2"
              />
              <span className="text-[10px] text-slate-400 block">Spent on appointments, follow-ups, standard FAQs, and repetitive admin data-entry.</span>
            </div>
          </div>

          {/* Outputs */}
          <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-850 rounded-2xl p-6 md:p-8 space-y-6 shadow-premium">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase block">Hours Saved / Mo</span>
                <span className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white font-sans">{hoursSavedMonth}h</span>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase block">Savings / Mo</span>
                <span className="text-2xl md:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-sans">${moneySavedMonth}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-900 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-550 uppercase block">Estimated Est. Annual Savings</span>
                <span className="text-xl font-extrabold text-slate-900 dark:text-white font-sans">${yearlySavings.toLocaleString()}</span>
              </div>
              <span className="bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold px-2 py-1 rounded-md uppercase">
                ~80% Automated
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white font-sans">AI Workflows by Industry</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Bespoke agents and processing engines we deploy</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionCards.map((card) => (
            <Card
              key={card.id}
              className={`flex flex-col h-full border justify-between transition-all ${
                industry === card.id
                  ? 'border-primary ring-1 ring-primary/25 bg-slate-50/20 dark:bg-slate-900/10'
                  : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="space-y-4">
                <div className="p-3 bg-primary/5 rounded-xl w-fit">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">{card.title}</h3>
                <ul className="space-y-2">
                  {card.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-xs text-slate-550 dark:text-slate-400 flex items-start gap-2 leading-relaxed">
                      <span className="text-primary mt-1 shrink-0">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
