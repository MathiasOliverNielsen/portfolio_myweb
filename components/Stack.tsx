interface TechItem {
  name: string;
  slug?: string;
  icon?: string;
  url: string;
}

interface StackProps {
  t: (key: string) => string;
  techStack: readonly (readonly TechItem[])[];
}

function Chip({ tech }: { tech: TechItem }) {
  if (tech.slug) {
    return (
      <a
        className="chip"
        href={tech.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`https://cdn.simpleicons.org/${tech.slug}`}
          alt=""
          loading="lazy"
          onError={(e) => {
            const el = e.target as HTMLImageElement;
            const i = document.createElement('i');
            i.className = 'ph ph-cube';
            el.replaceWith(i);
          }}
        />
        {tech.name}
        <i className="ph ph-arrow-up-right chip__go"></i>
      </a>
    );
  }

  return (
    <a
      className="chip"
      href={tech.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={`ph ph-${tech.icon}`}></i>
      {tech.name}
      <i className="ph ph-arrow-up-right chip__go"></i>
    </a>
  );
}

export default function Stack({ t, techStack }: StackProps) {
  return (
    <section className="section section--alt section--tight" id="stack">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{t('stack.eyebrow')}</p>
          <h2 className="h-lg">{t('stack.heading')}</h2>
          <p className="lead">{t('stack.sub')}</p>
        </div>
      </div>

      <div className="stack__marquees reveal" data-d="1">
        <div className="marquee marquee--l">
          <div className="marquee__track">
            {techStack[0].map((tech) => (
              <Chip key={tech.name} tech={tech} />
            ))}
            {techStack[0].map((tech) => (
              <Chip key={`${tech.name}-2`} tech={tech} />
            ))}
          </div>
        </div>

        <div className="marquee marquee--r">
          <div className="marquee__track">
            {techStack[1].map((tech) => (
              <Chip key={tech.name} tech={tech} />
            ))}
            {techStack[1].map((tech) => (
              <Chip key={`${tech.name}-2`} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
