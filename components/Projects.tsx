import { Info } from '@phosphor-icons/react';

interface ProjectsProps {
  t: (key: string) => string;
}

const projects = [
  { key: 'proj.1', tags: ['Next.js', 'TypeScript', 'PostgreSQL'], variant: 1 },
  { key: 'proj.2', tags: ['Figma', 'Tailwind', 'SCSS'], variant: 2 },
  { key: 'proj.3', tags: ['Next.js', 'MongoDB', 'SQL'], variant: 3 },
];

export default function Projects({ t }: ProjectsProps) {
  return (
    <section className="section section--alt" id="projects">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{t('proj.eyebrow')}</p>
          <h2 className="h-lg">{t('proj.heading')}</h2>
          <p className="lead">{t('proj.sub')}</p>
        </div>

        <div className="projects__grid">
          {projects.map((proj, idx) => (
            <article key={proj.key} className="project reveal" data-d={idx + 1}>
              <div className={`project__thumb project__thumb--${proj.variant}`}>
                <span>{t('proj.soon')}</span>
              </div>
              <div className="project__body">
                <h3 className="project__title">{t(`${proj.key}t`)}</h3>
                <div className="project__tags">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="note reveal">
          <Info size={17} />
          <span>{t('proj.note')}</span>
        </p>
      </div>
    </section>
  );
}
