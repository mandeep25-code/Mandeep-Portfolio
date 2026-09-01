import { useState } from 'react';
import { Code2 } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Skills() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [selectedSkill, setSelectedSkill] = useState('React.js');

  return (
    <section id="skills" className="relative w-11/12 max-w-6xl mx-auto py-20 md:py-28">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.category}
                className="card p-6 card-hover group"
                style={{
                  animation: visible ? `fadeInUp 0.6s ease-out ${idx * 0.1}s both` : undefined,
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-heading">{cat.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech) => (
                    <button
                      key={tech.name}
                      onClick={() => setSelectedSkill(tech.name)}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium bg-bg-secondary text-text-secondary border border-border hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
                    >
                      {tech.name}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-7 rounded-2xl border border-accent/25 bg-accent-soft p-5 md:px-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-card flex items-center justify-center text-accent"><Code2 size={19} /></div><div><p className="text-xs font-mono tracking-wider text-accent uppercase">Skill playground</p><p className="text-sm text-text-secondary">Exploring <span className="font-bold text-heading">{selectedSkill}</span> - click any skill to switch focus.</p></div></div>
          <span className="text-xs font-medium text-text-muted">Building with curiosity</span>
        </div>
      </div>
    </section>
  );
}
