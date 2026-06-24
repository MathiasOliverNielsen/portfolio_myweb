interface AboutProps {
  t: (key: string) => string;
}

export default function About({ t }: AboutProps) {
  return (
    <section className="section" id="about">
      <div className="container about__grid">
        <div>
          <p className="eyebrow reveal">{t('about.eyebrow')}</p>
          <h2 className="h-lg reveal" data-d="1" style={{ marginTop: '16px' }}>
            {t('about.heading')}
          </h2>
          <div className="about__photo reveal" data-d="2">
            <div className="photo__frame">
              <div style={{ background: '#f0f0f0', width: '100%', height: '100%', borderRadius: '18px' }} />
            </div>
          </div>
        </div>

        <div className="about__body">
          <p className="reveal" data-d="1">
            {t('about.p1')}
          </p>
          <p className="reveal" data-d="2">
            {t('about.p2')}
          </p>

          <div className="stats reveal" data-d="3">
            <div className="stat">
              <div className="stat__num">
                <span>{t('about.stat1n')}</span>
              </div>
              <div className="stat__label">{t('about.stat1l')}</div>
            </div>
            <div className="stat">
              <div className="stat__num">
                <span>{t('about.stat2n')}</span>
              </div>
              <div className="stat__label">{t('about.stat2l')}</div>
            </div>
            <div className="stat">
              <div className="stat__num">
                <span>{t('about.stat3n')}</span>
              </div>
              <div className="stat__label">{t('about.stat3l')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
