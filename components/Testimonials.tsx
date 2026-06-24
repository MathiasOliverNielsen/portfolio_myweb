interface TestimonialsProps {
  t: (key: string) => string;
}

const testimonials = [
  { key: 'test.1' },
  { key: 'test.2' },
];

export default function Testimonials({ t }: TestimonialsProps) {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{t('test.eyebrow')}</p>
          <h2 className="h-lg">{t('test.heading')}</h2>
          <p className="lead">{t('test.sub')}</p>
        </div>

        <div className="quotes">
          {testimonials.map((test, idx) => (
            <figure key={test.key} className="quote reveal" data-d={idx + 1}>
              <div className="quote__mark">&ldquo;</div>
              <blockquote className="quote__text">
                {t(`${test.key}q`)}
              </blockquote>
              <figcaption className="quote__who">
                <span className="quote__avatar">
                  {t(`${test.key}n`)[0]}
                </span>
                <span>
                  <span className="quote__name">
                    {t(`${test.key}n`)}
                  </span>
                  <br />
                  <span className="quote__role">
                    {t(`${test.key}r`)}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
