'use client';

import { useState, useEffect } from 'react';
import { Language, translations, rotatingWords, ghostDivider, techStack } from '@/lib/i18n';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import GhostDivider from '@/components/GhostDivider';
import About from '@/components/About';
import Stack from '@/components/Stack';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [language, setLanguage] = useState<Language>('da');
  const [layout, setLayout] = useState<'a' | 'b'>('b');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = (localStorage.getItem('pf_lang') as Language | null) || 'da';
    const savedLayout = (localStorage.getItem('pf_layout') as 'a' | 'b' | null) || 'b';
    setLanguage(savedLang);
    setLayout(savedLayout);

    // Add js-anim class to html for entrance animations
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('js-anim');
    }

    // Setup reveal animations on scroll
    const els = [...document.querySelectorAll('.reveal')] as Element[];
    let ticking = false;

    const check = () => {
      ticking = false;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      for (let i = els.length - 1; i >= 0; i--) {
        const el = els[i];
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.9 && r.bottom > 0) {
          el.classList.add('in');
          els.splice(i, 1);
        }
      }
      if (!els.length) window.removeEventListener('scroll', onScroll);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(check);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    check();

    // Watchdog: if animations are frozen, remove js-anim
    setTimeout(() => {
      const probe = document.querySelector('.reveal.in');
      if (probe && getComputedStyle(probe).opacity === '0') {
        document.documentElement.classList.remove('js-anim');
      }
    }, 1400);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('pf_lang', language);
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('pf_layout', layout);
      document.body.dataset.layout = layout;
    }
  }, [layout, mounted]);

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  if (!mounted) return null;

  return (
    <>
      <Nav language={language} setLanguage={setLanguage} layout={layout} setLayout={setLayout} t={t} />
      <main>
        <Hero t={t} layout={layout} rotatingWords={rotatingWords[language]} />
        <GhostDivider items={ghostDivider} />
        <About t={t} />
        <Stack t={t} techStack={techStack} />
        <Services t={t} />
        <Projects t={t} />
        <Testimonials t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} language={language} />
    </>
  );
}
