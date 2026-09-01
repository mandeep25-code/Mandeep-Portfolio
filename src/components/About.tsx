import { ArrowUpRight, BrainCircuit, Code2, Rocket, Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const signals = [
  { label: 'Focus', value: 'AI + full stack', icon: BrainCircuit },
  { label: 'Approach', value: 'Build, test, refine', icon: Code2 },
  { label: 'Direction', value: 'Software engineer', icon: Rocket },
];

export default function About() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative w-11/12 max-w-6xl mx-auto py-20 md:py-28">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-7 items-stretch">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-600 to-cyan-500 p-7 md:p-10 text-white shadow-accent">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/20" />
            <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-cyan-300/25 blur-2xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-bold tracking-wider uppercase">
                <Sparkles size={14} /> More than a developer
              </div>
              <p className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-cyan-100">WHO I AM / 01</p>
              <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight md:text-5xl">
                I turn ambitious ideas into useful digital products.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-blue-50 md:text-lg">
                I am Mandeep, a computer science student who enjoys the full journey - from a rough problem to a polished, working experience.
              </p>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 transition-transform hover:scale-105"
              >
                Explore my work <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          <div className="card p-7 md:p-10 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs font-semibold tracking-[0.22em] text-accent uppercase">My developer DNA</p>
              <p className="mt-5 text-lg leading-relaxed text-text-secondary">{personalInfo.bio[0]}</p>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">{personalInfo.bio[1]}</p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {signals.map((signal) => {
                const Icon = signal.icon;
                return (
                  <div key={signal.label} className="rounded-2xl border border-border bg-bg-secondary p-4">
                    <Icon size={19} className="text-accent" />
                    <p className="mt-3 text-xs text-text-muted">{signal.label}</p>
                    <p className="mt-1 text-sm font-bold text-heading">{signal.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {['I care about the small details that make a product feel effortless.', 'I use AI deliberately - as a tool for better experiences, not just a buzzword.', 'I am always learning, shipping, and looking for the next hard problem.'].map((note, index) => (
            <div key={note} className="card card-hover p-5 flex gap-4">
              <span className="font-mono text-sm font-bold text-accent">0{index + 1}</span>
              <p className="text-sm leading-relaxed text-text-secondary">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
