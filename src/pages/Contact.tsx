import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Accordion, AccordionItem } from '../components/Accordion';
import { Mail, MapPin, Phone, Check, Loader2, Calendar, MessageCircle } from 'lucide-react';
import { CalendlyModal } from '../components/CalendlyModal';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', organization: '', industry: 'other', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    // Retrieve environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              from_name: form.name,
              from_email: form.email,
              organization: form.organization,
              industry: form.industry,
              message: form.message
            }
          })
        });

        if (response.ok) {
          setSuccess("Thank you! Your message has been sent successfully. We'll be in touch within 24 hours.");
          setForm({ name: '', email: '', organization: '', industry: 'other', message: '' });
        } else {
          throw new Error('EmailJS submission failed');
        }
      } catch (err) {
        console.error(err);
        setSuccess("There was an issue sending your message. Please email us directly at info@devatease.in");
      } finally {
        setLoading(false);
      }
    } else {
      // Simulate submission when environment variables are missing
      setTimeout(() => {
        setLoading(false);
        setSuccess("Mock Mode: Message submitted successfully! (Connect your free EmailJS credentials in environment variables to receive actual emails).");
        setForm({ name: '', email: '', organization: '', industry: 'other', message: '' });
      }, 1500);
    }
  };

  const faqs = [
    {
      q: "Do you build custom integrations for existing CRMs?",
      a: "Yes. We work extensively with standard platforms like Salesforce, HubSpot, ActiveCampaign, and custom database backends. We can bridge them with custom chatbots, automatic WhatsApp triggers, or custom voice agents."
    },
    {
      q: "What is your typical project timeline?",
      a: "For workflow automations and custom dashboard integrations, timeline is usually 2-4 weeks. Full custom web portals and comprehensive mobile apps typically take 6-12 weeks from discovery to deployment."
    },
    {
      q: "Do you offer post-launch support and hosting?",
      a: "Yes. We offer optional fixed-price hosting, maintenance, and analytics updates monthly. This guarantees that your integrations stay updated, and your databases remain securely backed up."
    },
    {
      q: "Is EmailJS free for contact forms?",
      a: "Yes! EmailJS offers a comprehensive free plan that lets you receive up to 200 emails per month, which is perfect for new start-ups, consulting businesses, and local service providers."
    }
  ];

  return (
    <div className="py-16 md:py-24 space-y-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white max-w-3xl mx-auto leading-tight font-sans">
          Let's Build Something Practical Together
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Tell us about your operational bottlenecks, product concept, or timeline goals. We reply within 24 hours.
        </p>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Info Column */}
        <div className="space-y-8 lg:col-span-1">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans">Contact Details</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              If you prefer direct communication, feel free to call us or send an email. We can also schedule a virtual Google Meet consultation.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/5 rounded-xl text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-semibold uppercase">Email</span>
                <a href="mailto:info@devatease.in" className="font-medium text-slate-800 dark:text-slate-200 hover:text-primary">info@devatease.in</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/5 rounded-xl text-primary">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-semibold uppercase">Call</span>
                <a href="tel:+918082455663" className="font-medium text-slate-800 dark:text-slate-200 hover:text-primary">+91 8082455663</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/5 rounded-xl text-primary">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-semibold uppercase">WhatsApp</span>
                <a 
                  href="https://wa.me/918082455663?text=Hi%20DevAtEase%2C%20I%27d%20like%20to%20discuss%20our%20software%20and%20AI%20automation%20requirements." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-medium text-slate-800 dark:text-slate-200 hover:text-primary"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/5 rounded-xl text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-semibold uppercase">Location</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Quick Schedule Call Card */}
          <div className="p-6 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Calendar className="w-5 h-5" />
              <h4 className="font-bold text-slate-900 dark:text-white font-sans text-sm">Immediate Booking</h4>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Skip the contact form entirely. Instantly find a slot on our calendar for a 30-minute discovery call.
            </p>
            <Button size="sm" className="w-full" onClick={() => setIsCalendlyOpen(true)}>
              Schedule Call
            </Button>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-2">
          <Card className="border border-slate-200 dark:border-slate-800 p-8 shadow-premium">
            <form onSubmit={handleSubmit} className="space-y-6">
              {success && (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-emerald-750 dark:text-emerald-400 text-sm rounded-xl flex items-start gap-3">
                  <Check className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{success}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-350">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Shankaran Pillai"
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary text-slate-800 dark:text-slate-200"
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
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary text-slate-800 dark:text-slate-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-350">Company Name (Optional)</label>
                  <input
                    type="text"
                    value={form.organization}
                    onChange={(e) => setForm({ ...form, organization: e.target.value })}
                    placeholder="e.g. ScaleUp Inc."
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary text-slate-800 dark:text-slate-200"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-350">Your Industry *</label>
                  <select
                    value={form.industry}
                    onChange={(e) => setForm({ ...form, industry: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary text-slate-800 dark:text-slate-200"
                  >
                    <option value="gym">Gym / Health Club</option>
                    <option value="realtor">Real Estate Agent</option>
                    <option value="clinic">Healthcare / Medical</option>
                    <option value="retail">Retail / E-commerce</option>
                    <option value="restaurant">Restaurant / F&B</option>
                    <option value="manufacturing">Manufacturing / Logistics</option>
                    <option value="other">Other Business Services</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-350">How can we help you? *</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Share a short summary of the manual tasks you are looking to automate, or the type of web app/portal you want to design and engineer..."
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary text-slate-800 dark:text-slate-200 resize-none"
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit" disabled={loading} className="gap-2 px-6">
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans text-center">Frequently Asked Questions</h3>
        <Accordion className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 rounded-2xl p-6 shadow-premium">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} title={faq.q}>
              <p className="text-sm leading-relaxed">{faq.a}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </div>
  );
};
