'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react';

interface HeroProps {
  t: (key: string) => string;
  layout: 'a' | 'b';
  rotatingWords: string[];
}

export default function Hero({ t, layout, rotatingWords }: HeroProps) {
  const [currentWord, setCurrentWord] = useState(0);
  const [wordClass, setWordClass] = useState('');

  useEffect(() => {
    const rotSpeed = 2400;
    const isReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

    const interval = setInterval(() => {
      if (!isReduced) {
        setWordClass('is-out');
        setTimeout(() => {
          setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
          setWordClass('is-in');
        }, 340);
      } else {
        setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
      }
    }, rotSpeed);

    return () => clearInterval(interval);
  }, [rotatingWords]);

  return (
    <section className="hero" id="top">
      <div className="hero__blob" aria-hidden="true"></div>
      <div className="container hero__inner">
        <div className="hero__main">
          <span className="badge reveal">
            <span className="badge__dot"></span>
            <span>{t('hero.badge')}</span>
          </span>

          <p className="eyebrow reveal" data-d="1" style={{ marginTop: '22px' }}>
            {t('hero.eyebrow')}
          </p>

          <h1 className="h-xl hero__title reveal" data-d="2">
            <span>{t('hero.pre')}</span>
            <span className="rotator">
              <span className={`rotator__word ${wordClass}`} id="rotword">
                {rotatingWords[currentWord]}
              </span>
              <span className="rotator__caret" aria-hidden="true"></span>
            </span>
          </h1>

          <p className="lead hero__sub reveal" data-d="3">
            {t('hero.sub')}
          </p>

          <div className="hero__cta reveal" data-d="4">
            <a className="btn btn--accent" href="#contact">
              <span>{t('hero.cta1')}</span>
              <ArrowRight size={18} weight="bold" />
            </a>
            <a className="btn btn--ghost" href="#stack">
              {t('hero.cta2')}
            </a>
          </div>
        </div>

        {layout === 'b' && (
          <aside className="hero__aside reveal" data-d="2">
            <div className="codecard">
              <div className="codecard__bar">
                <i style={{ background: '#FF5F56' }}></i>
                <i style={{ background: '#FFBD2E' }}></i>
                <i style={{ background: '#27C93F' }}></i>
                <span className="codecard__file">portfolio.tsx</span>
              </div>
              <div className="codecard__body">
                <div>
                  <span className="ln">1</span>
                  <span className="tok-key">const</span> <span className="tok-var">dev</span> = {'{'}{'}'}
                </div>
                <div>
                  <span className="ln">2</span>
                  &nbsp;&nbsp;<span className="tok-fn">navn</span>: <span className="tok-str">'Mathias O. Nielsen'</span>,
                </div>
                <div>
                  <span className="ln">3</span>
                  &nbsp;&nbsp;<span className="tok-fn">by</span>: <span className="tok-str">'Aalborg'</span>,
                </div>
                <div>
                  <span className="ln">4</span>
                  &nbsp;&nbsp;<span className="tok-fn">stack</span>: [<span className="tok-str">'Next'</span>, <span className="tok-str">'TS'</span>, <span className="tok-str">'SQL'</span>],
                </div>
                <div>
                  <span className="ln">5</span>
                  &nbsp;&nbsp;<span className="tok-fn">ledig</span>: <span className="tok-key">true</span>,
                </div>
                <div>
                  <span className="ln">6</span>
                  {'}'}
                </div>
                <div>
                  <span className="ln">7</span>
                </div>
                <div>
                  <span className="ln">8</span>
                  <span className="tok-com">// bygger ting der bare virker</span>
                </div>
              </div>
            </div>
          </aside>
        )}
      </div>
    </section>
  );
}
