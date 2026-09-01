import { useState, useMemo } from 'react';
import { ExternalLink, Github, Calendar, CheckCircle2, Clock, X } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const filters = ['All', 'Featured', 'Full Stack', 'Frontend', 'AI'] as const;
type FilterType = (typeof filters)[number];

export default function Projects() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [filter, setFilter] = useState<FilterType>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    if (filter === 'Featured') return projects.filter((project) => project.featured);
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="relative w-11/12 max-w-6xl mx-auto py-20 md:py-28">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-12">
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">Things I've built and am proud of</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap gap-1 p-1.5 rounded-2xl bg-bg-secondary border border-border">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  filter === f
                    ? 'bg-accent text-white shadow-accent'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="w-full flex justify-center items-center py-16 text-text-secondary text-lg font-semibold">
            No {filter} projects found
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="card overflow-hidden card-hover group flex flex-col relative"
                style={{
                  animation: visible ? `fadeInUp 0.5s ease-out ${idx * 0.1}s both` : undefined,
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600" />

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-accent-soft text-accent font-medium">
                      {project.category}
                    </span>
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1 ${
                        project.status === 'Completed'
                          ? 'bg-success/10 text-success'
                          : 'bg-warning/10 text-warning'
                      }`}
                    >
                      {project.status === 'Completed' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-heading mb-2 group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-sm text-text-secondary mb-3 flex-1 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techUsed.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md bg-bg-secondary text-text-muted font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techUsed.length > 4 && (
                      <span className="text-xs px-2 py-1 rounded-md bg-bg-secondary text-text-muted font-medium">
                        +{project.techUsed.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-text-muted mb-4">
                    <Calendar size={14} />
                    {project.timeline}
                  </div>

                  <div className="flex items-center gap-3 mt-auto pt-2 border-t border-border">
                    <button
                      onClick={() => setSelected(project)}
                      className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                    >
                      View Details
                    </button>
                    <div className="flex items-center gap-2 ml-auto">
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded-lg bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent border border-border transition-all"
                          aria-label="Live demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      ) : null}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent border border-border transition-all"
                        aria-label="GitHub"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-card border-b border-border p-5 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="text-xs px-3 py-1 rounded-full bg-accent-soft text-accent font-medium">
              {project.category}
            </span>
            <span
              className={`text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1 ${
                project.status === 'Completed' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
              }`}
            >
              {project.status === 'Completed' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
              {project.status}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-all"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div>
            <h3 className="text-2xl font-bold text-heading mb-2">{project.name}</h3>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <Calendar size={14} />
              {project.timeline}
            </div>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed">{project.shortDescription}</p>

          <div>
            <h4 className="font-semibold text-heading mb-3 text-sm uppercase tracking-wide">
              Description
            </h4>
            <div className="space-y-2">
              {project.description.map((desc, i) => (
                <p key={i} className="text-text-secondary text-sm flex gap-2">
                  <span className="text-accent mt-1 shrink-0">▹</span>
                  <span>{desc}</span>
                </p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-heading mb-3 text-sm uppercase tracking-wide">
              Key Features
            </h4>
            <div className="space-y-2">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-text-secondary text-sm">
                  <CheckCircle2 size={16} className="text-success shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-heading mb-3 text-sm uppercase tracking-wide">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techUsed.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium bg-bg-secondary text-text-secondary border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            {project.live ? (
              <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary !py-2.5 !text-sm">
                <ExternalLink size={16} />
                Live Demo
              </a>
            ) : (
              <span className="text-sm text-text-muted font-medium px-4 py-2.5 rounded-xl bg-bg-secondary">
                No live preview
              </span>
            )}
            <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary !py-2.5 !text-sm">
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
