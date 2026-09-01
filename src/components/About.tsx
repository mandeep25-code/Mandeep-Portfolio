import { Sparkles } from 'lucide-react';
import { personalInfo, experiences, educations, certifications, experienceIcon, educationIcon, certificationIcon } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const ExperienceIcon = experienceIcon;
  const EducationIcon = educationIcon;
  const CertificationIcon = certificationIcon;

  return (
    <section id="about" className="relative w-11/12 max-w-6xl mx-auto py-20 md:py-28">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="card p-6 md:p-8 card-hover">
            <h3 className="text-xl font-bold text-heading mb-4 flex items-center gap-2">
              <Sparkles size={20} className="text-accent" />
              Who I Am
            </h3>
            <div className="space-y-4 text-text-secondary text-sm md:text-base leading-relaxed">
              {personalInfo.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-accent-soft border border-border">
              <p className="text-accent text-sm md:text-base font-medium italic">
                {personalInfo.passion}
              </p>
            </div>
          </div>

          <div className="card p-6 md:p-8 card-hover">
            <h3 className="text-xl font-bold text-heading mb-4 flex items-center gap-2">
              <ExperienceIcon size={20} className="text-accent" />
              Experience
            </h3>
            <div className="space-y-4">
              {experiences.map((exp, i) => (
                <div key={i} className="border-l-2 border-border hover:border-accent transition-colors pl-4 py-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="font-semibold text-text-primary">{exp.role}</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-accent-soft text-accent font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-accent text-sm font-medium mb-2">{exp.company}</p>
                  <ul className="space-y-1.5">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-text-secondary text-sm flex gap-2">
                        <span className="text-accent mt-1 shrink-0">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-6 md:p-8 card-hover">
            <h3 className="text-xl font-bold text-heading mb-4 flex items-center gap-2">
              <EducationIcon size={20} className="text-accent" />
              Education
            </h3>
            <div className="space-y-4">
              {educations.map((edu, i) => (
                <div key={i} className="border-l-2 border-border hover:border-accent transition-colors pl-4 py-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="font-semibold text-text-primary text-sm">{edu.degree}</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-bg-secondary text-text-secondary font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm">{edu.institution}</p>
                  <p className="text-accent text-sm font-medium mt-1">{edu.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6 md:p-8 card-hover">
            <h3 className="text-xl font-bold text-heading mb-4 flex items-center gap-2">
              <CertificationIcon size={20} className="text-accent" />
              Certifications & Workshops
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-bg-secondary border border-border hover:border-accent transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center shrink-0">
                    <CertificationIcon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary text-sm">{cert.name}</p>
                    <p className="text-text-muted text-xs">{cert.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
