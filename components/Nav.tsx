'use client';

import { useEffect, useState } from 'react';
import { Language } from '@/lib/i18n';

interface NavProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  layout: 'a' | 'b';
  setLayout: (layout: 'a' | 'b') => void;
  t: (key: string) => string;
}

export default function Nav({ language, setLanguage, layout, setLayout, t }: NavProps) {
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsStuck(window.scrollY > 8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`nav ${isStuck ? 'is-stuck' : ''}`}>
      <div className="container nav__inner">
        <a className="brand" href="#top">
          <span className="brand__mark" aria-hidden="true"></span>
          <span>Mathias Oliver Nielsen</span>
        </a>

        <nav className="nav__links">
          <a href="#about">{t('nav.about')}</a>
          <a href="#stack">{t('nav.stack')}</a>
          <a href="#services">{t('nav.services')}</a>
          <a href="#projects">{t('nav.projects')}</a>
          <a href="#contact">{t('nav.contact')}</a>
        </nav>

        <div className="nav__right">
          <div className="seg seg--lang" role="group" aria-label="Language">
            <button
              className={language === 'da' ? 'is-active' : ''}
              data-lang="da"
              onClick={() => setLanguage('da')}
              aria-pressed={language === 'da'}
            >
              DA
            </button>
            <button
              className={language === 'en' ? 'is-active' : ''}
              data-lang="en"
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
            >
              EN
            </button>
          </div>

          <a className="btn btn--dark btn--sm" href="#contact">
            {t('nav.cta')}
          </a>
        </div>
      </div>
    </header>
  );
}
