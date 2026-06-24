import { Code, Pencil, Database, CompassTool } from '@phosphor-icons/react';

interface ServicesProps {
  t: (key: string) => string;
}

const services = [
  { icon: Code, key: 'svc.1' },
  { icon: Pencil, key: 'svc.2' },
  { icon: Database, key: 'svc.3' },
  { icon: CompassTool, key: 'svc.4' },
];

export default function Services({ t }: ServicesProps) {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{t('svc.eyebrow')}</p>
          <h2 className="h-lg">{t('svc.heading')}</h2>
          <p className="lead">{t('svc.sub')}</p>
        </div>

        <div className="cards">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <article
                key={svc.key}
                className="card reveal"
                data-d={idx + 1}
              >
                <div className="card__icon">
                  <Icon size={26} weight="bold" />
                </div>
                <h3 className="card__title">{t(`${svc.key}t`)}</h3>
                <p className="card__desc">{t(`${svc.key}d`)}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
