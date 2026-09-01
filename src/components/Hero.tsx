import { ArrowDown, Download, MapPin } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 grid-pattern" />

      <div className="glow-orb w-[400px] h-[400px] bg-blue-500/20 top-20 -left-20 animate-pulse-slow" />
      <div className="glow-orb w-[300px] h-[300px] bg-cyan-500/15 bottom-20 -right-20 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 w-11/12 max-w-6xl mx-auto text-center py-20">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-soft border border-border text-sm text-accent font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Available for opportunities
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 flex items-center justify-center text-white text-4xl md:text-5xl font-black shadow-accent animate-float">
            MD
          </div>
        </div>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-black text-heading mb-3 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Hi, I'm <span className="gradient-text">Mandeep Dhiman</span>
        </h1>

        <p
          className="text-xl md:text-2xl font-semibold text-text-secondary mb-4 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          {personalInfo.title}
        </p>

        <p
          className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-2 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          {personalInfo.tagline}
        </p>

        <div
          className="flex items-center justify-center gap-2 text-sm text-text-muted mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.45s' }}
        >
          <MapPin size={16} />
          {personalInfo.location}
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
            View Projects
            <ArrowDown size={18} />
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
            Contact Me
          </button>
          <a href="/Mandeep_Dhiman_Resume_Updated.pdf" download className="btn-secondary">
            <Download size={18} />
            Resume
          </a>
        </div>

        <div
          className="flex items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          {personalInfo.socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="w-12 h-12 rounded-xl card card-hover flex items-center justify-center text-icon hover:text-accent"
              >
                <Icon size={22} />
              </a>
            );
          })}
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent transition-colors animate-bounce-slow"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </button>
    </section>
  );
}
