import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, MapPin, Phone, Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { supabase } from '@/lib/supabase';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      });

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email me directly.');
    }
  };

  return (
    <section id="contact" className="relative w-11/12 max-w-6xl mx-auto py-20 md:py-28">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">Have a project or opportunity? Let's talk</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="card p-6 card-hover">
              <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center text-accent mb-4">
                <Mail size={22} />
              </div>
              <h3 className="font-semibold text-heading mb-1">Email</h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-text-secondary text-sm hover:text-accent transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="card p-6 card-hover">
              <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center text-accent mb-4">
                <Phone size={22} />
              </div>
              <h3 className="font-semibold text-heading mb-1">Phone</h3>
              <a
                href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                className="text-text-secondary text-sm hover:text-accent transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>

            <div className="card p-6 card-hover">
              <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center text-accent mb-4">
                <MapPin size={22} />
              </div>
              <h3 className="font-semibold text-heading mb-1">Location</h3>
              <p className="text-text-secondary text-sm">{personalInfo.location}</p>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-3">
                {personalInfo.socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      className="w-11 h-11 rounded-xl bg-bg-secondary border border-border flex items-center justify-center text-icon hover:text-accent hover:border-accent transition-all duration-300"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-input-bg border border-input-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-input-focus transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-input-bg border border-input-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-input-focus transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-xl bg-input-bg border border-input-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-input-focus transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-input-bg border border-input-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-input-focus transition-colors resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-error/10 text-error text-sm animate-fade-in">
                  <AlertCircle size={18} />
                  {errorMsg}
                </div>
              )}

              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-success/10 text-success text-sm animate-fade-in">
                  <CheckCircle2 size={18} />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
