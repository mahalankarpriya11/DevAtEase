import React, { useState } from 'react';
import { X, Calendar, Check, Clock, Globe } from 'lucide-react';
import { Button } from './Button';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState({ name: '', email: '', note: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const dates = [
    { day: 'Mon', num: '20', full: 'Monday, July 20' },
    { day: 'Tue', num: '21', full: 'Tuesday, July 21' },
    { day: 'Wed', num: '22', full: 'Wednesday, July 22' },
    { day: 'Thu', num: '23', full: 'Thursday, July 23' },
    { day: 'Fri', num: '24', full: 'Friday, July 24' },
  ];

  const times = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedDate(null);
      setSelectedTime(null);
      setStep(1);
      setForm({ name: '', email: '', note: '' });
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-905/70 backdrop-blur-md transition-opacity duration-300">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-850">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Schedule Consultation</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">30-minute discovery call with our tech leaders</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 animate-bounce">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 font-sans">Meeting Scheduled!</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-md">
                We've sent a calendar invitation and confirmation email with meeting link details to <strong className="text-slate-800 dark:text-slate-200">{form.email}</strong>.
              </p>
            </div>
          ) : step === 1 ? (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Left side: Info */}
                <div className="sm:w-1/3 space-y-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 text-primary dark:text-blue-400 rounded-xl inline-block">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-slate-100 font-sans">Discovery Call</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">We'll discuss your software goals, business automation potential, and estimate AI impact.</p>
                  </div>
                  <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>30 min</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5" />
                      <span>Web Conferencing</span>
                    </div>
                  </div>
                </div>

                {/* Right side: Calendar select */}
                <div className="flex-1 space-y-4">
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-200 block">Select Date</span>
                  <div className="grid grid-cols-5 gap-2">
                    {dates.map((d) => (
                      <button
                        key={d.num}
                        onClick={() => setSelectedDate(d.full)}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${selectedDate === d.full
                            ? 'border-primary bg-primary/5 text-primary font-semibold dark:border-primary dark:bg-primary/10'
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50'
                          }`}
                      >
                        <span className="text-[10px] uppercase font-bold text-slate-400">{d.day}</span>
                        <span className="text-base font-semibold mt-1 text-slate-700 dark:text-slate-300">{d.num}</span>
                      </button>
                    ))}
                  </div>

                  {selectedDate && (
                    <div className="space-y-3 pt-2">
                      <span className="text-sm font-semibold text-slate-900 dark:text-slate-200 block">Select Time ({selectedDate})</span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {times.map((t) => (
                          <button
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`p-2.5 rounded-lg border text-sm transition-all ${selectedTime === t
                                ? 'border-primary bg-primary/5 text-primary font-semibold dark:border-primary dark:bg-primary/10'
                                : 'border-slate-200 dark:border-slate-850 hover:border-slate-300 dark:hover:border-slate-700 text-slate-600 dark:text-slate-350'
                              }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {selectedDate && selectedTime && (
                <div className="flex justify-end pt-4 border-t border-slate-100 dark:border-slate-855">
                  <Button onClick={() => setStep(2)}>Next Step</Button>
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
              <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-100 dark:border-slate-800 text-sm space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Discovery Call</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Time:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedTime} on {selectedDate}</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-350">Your Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Shankaran Pillai "
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-950 text-slate-800 dark:text-slate-200"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-350">Work Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-950 text-slate-800 dark:text-slate-200"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-350">What are you looking to build? (optional)</label>
                <textarea
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  placeholder="Tell us about your product goals, target timeline, or tech requirements..."
                  rows={3}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-950 text-slate-800 dark:text-slate-200 resize-none"
                />
              </div>

              <div className="flex gap-3 justify-end pt-4">
                <Button variant="ghost" onClick={() => setStep(1)}>Back</Button>
                <Button type="submit">Schedule Event</Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
