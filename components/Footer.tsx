import { Language } from '@/lib/i18n';

interface FooterProps {
  t: (key: string) => string;
  language: Language;
}

export default function Footer({ t, language }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="brand" href="#top">
          <span className="brand__mark" aria-hidden="true"></span>
          <span>Mathias Oliver Nielsen</span>
        </a>
        <p className="footer__meta">
          © <span>{year}</span> Mathias Oliver Nielsen · <span>{t('footer.made')}</span>
        </p>
      </div>
    </footer>
  );
}
