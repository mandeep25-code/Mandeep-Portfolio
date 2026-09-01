import { skillCategories } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Skills() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

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
                    <span
                      key={tech.name}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium bg-bg-secondary text-text-secondary border border-border hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
