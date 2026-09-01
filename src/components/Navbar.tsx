import { useState } from 'react';
import { Menu, X, Moon, Sun, Github } from 'lucide-react';
import { navLinks, personalInfo } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useScrollReveal';

type NavbarProps = {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
};

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navbar backdrop-blur-xl border-b border-border transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => handleClick('home')}
          className="flex items-center gap-2 font-bold text-lg text-heading"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
            MD
          </span>
          <span className="hidden sm:inline">Mandeep</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-accent bg-accent-soft'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-lg flex items-center justify-center text-text-secondary hover:text-accent hover:bg-bg-secondary transition-all duration-300"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href={personalInfo.socials[0].link}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex btn-primary !px-4 !py-2 !text-sm"
          >
            <Github size={16} />
            GitHub
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-all"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card animate-fade-in-down">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-accent bg-accent-soft'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
