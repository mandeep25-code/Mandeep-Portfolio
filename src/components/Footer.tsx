import { ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-bg-secondary mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <button
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 font-bold text-lg text-heading mb-1"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xs">
                MD
              </span>
              Mandeep Dhiman
            </button>
            <p className="text-text-muted text-sm">{personalInfo.title}</p>
          </div>

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
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-icon hover:text-accent hover:border-accent transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-xl bg-accent text-white flex items-center justify-center hover:shadow-accent transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-text-muted text-sm flex items-center justify-center gap-1.5">
            © {new Date().getFullYear()} Mandeep Dhiman. Built with
            <Heart size={14} className="text-error fill-current" />
            using React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
