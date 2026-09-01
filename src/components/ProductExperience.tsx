import { Braces, CheckCircle2, Compass, Layers3, Lightbulb, Rocket, SearchCheck } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const process = [
  { title: 'Understand', text: 'Start with the user problem and define a clear, useful outcome.', icon: Compass },
  { title: 'Design', text: 'Turn the idea into a simple, responsive experience before adding complexity.', icon: Lightbulb },
  { title: 'Build', text: 'Create maintainable components and connect every piece with intention.', icon: Layers3 },
  { title: 'Refine', text: 'Test the details, improve the flow, and ship with confidence.', icon: SearchCheck },
];

export default function ProductExperience() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <section className="relative w-11/12 max-w-6xl mx-auto pb-20 md:pb-28">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="rounded-3xl border border-blue-500/25 bg-gradient-to-br from-blue-600/15 via-card to-cyan-500/10 p-6 md:p-10 overflow-hidden relative">
          <div className="absolute right-0 top-0 h-64 w-64 bg-cyan-400/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_.9fr] items-center">
            <div>
              <p className="font-mono text-xs tracking-[.22em] uppercase text-accent">Featured build / 2026</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-black text-heading">Nexus AI Chat App</h2>
              <p className="mt-4 max-w-xl text-text-secondary leading-relaxed">A calm, capable AI workspace designed for thoughtful conversations - with prompt starters, saved history, and responses that feel natural on every screen.</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {['Chat history', 'Smart prompts', 'Dark mode', 'Responsive'].map((item) => (
                  <div key={item} className="rounded-xl border border-border bg-card/80 p-3 text-xs font-semibold text-text-secondary"><CheckCircle2 size={15} className="mb-2 text-accent" />{item}</div>
                ))}
              </div>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary mt-7 !py-2.5 !text-sm">See project details <Rocket size={16} /></button>
            </div>
            <div className="rounded-2xl border border-border bg-[#0b1220] p-4 shadow-primary font-mono text-sm text-slate-300">
              <div className="flex gap-1.5 border-b border-slate-700 pb-3"><span className="h-2.5 w-2.5 rounded-full bg-red-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /></div>
              <p className="mt-5 text-cyan-300">// Nexus AI</p>
              <p className="mt-2"><span className="text-purple-300">const</span> <span className="text-sky-300">answer</span> = <span className="text-purple-300">await</span> assistant.think(</p>
              <p className="pl-5 text-emerald-300">&quot;Make complexity feel simple&quot;</p>
              <p>);</p>
              <div className="mt-5 rounded-xl bg-slate-800 p-3 text-slate-200">Ready when you are. What are we building?</div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center"><p className="font-mono text-xs tracking-[.22em] uppercase text-accent">How I work</p><h2 className="section-title mt-3">From idea to <span className="gradient-text">impact</span></h2></div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {process.map((item, index) => { const Icon = item.icon; return <div key={item.title} className="card card-hover p-6"><span className="text-xs font-mono text-accent">0{index + 1}</span><div className="mt-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent"><Icon size={21} /></div><h3 className="mt-5 font-bold text-heading">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.text}</p></div>; })}
        </div>

        <div className="mt-16 card overflow-hidden grid lg:grid-cols-[.8fr_1.2fr]">
          <div className="bg-bg-secondary p-7 md:p-9"><Braces className="text-accent" size={28} /><p className="mt-6 font-mono text-xs tracking-[.22em] uppercase text-accent">Code, with intent</p><h2 className="mt-3 text-2xl font-bold text-heading">Good UI is more than a pretty screen.</h2><p className="mt-4 text-sm leading-relaxed text-text-secondary">I build components that are clear, reusable, responsive, and designed around real interaction states.</p></div>
          <pre className="overflow-x-auto bg-[#0b1220] p-7 md:p-9 text-sm leading-7 text-slate-300"><code><span className="text-purple-300">function</span> <span className="text-sky-300">BuildExperience</span>() {'{'}{`\n`}  <span className="text-purple-300">return</span> ({`\n`}    &lt;<span className="text-cyan-300">Product</span> thoughtful={<span className="text-amber-300">true</span>}{`\n`}      userFirst={<span className="text-amber-300">true</span>} /&gt;{`\n`}  );{`\n`}{'}'}</code></pre>
        </div>
      </div>
    </section>
  );
}
