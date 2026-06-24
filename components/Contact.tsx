'use client';

import { FormEvent, useState } from 'react';
import { EnvelopeSimple, Phone, MapPin, GithubLogo, LinkedinLogo, PaperPlaneTilt } from '@phosphor-icons/react';

interface ContactProps {
  t: (key: string) => string;
}

const CONTACT = {
  email: 'hej@mathiasnielsen.dk',
  phone: '+45 12 34 56 78',
  github: 'https://github.com/',
  linkedin: 'https://linkedin.com/',
};

export default function Contact({ t }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const subject = encodeURIComponent(
      `${t('svc.heading')} - ${name || t('form.name')}`
    );
    const body = encodeURIComponent(
      `${t('form.name')}: ${name}\n${t('form.email')}: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="section section--alt" id="contact">
      <div className="container contact__grid">
        <div className="contact__info reveal">
          <p className="eyebrow">{t('contact.eyebrow')}</p>
          <h2 className="h-lg" style={{ marginTop: '14px' }}>
            {t('contact.heading')}
          </h2>
          <p className="lead" style={{ marginTop: '18px' }}>
            {t('contact.sub')}
          </p>

          <div className="contact__list">
            <div className="contact__item">
              <EnvelopeSimple size={22} />
              <span>
                <span className="lbl">{t('contact.lblEmail')}</span>
                <br />
                <a className="val" href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
              </span>
            </div>

            <div className="contact__item">
              <Phone size={22} />
              <span>
                <span className="lbl">{t('contact.lblPhone')}</span>
                <br />
                <a className="val" href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>
                  {CONTACT.phone}
                </a>
              </span>
            </div>

            <div className="contact__item">
              <MapPin size={22} />
              <span>
                <span className="lbl">{t('contact.lblLoc')}</span>
                <br />
                <span className="val">{t('contact.loc')}</span>
              </span>
            </div>
          </div>

          <div className="socials">
            <a href={CONTACT.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <GithubLogo size={20} />
            </a>
            <a href={CONTACT.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <LinkedinLogo size={20} />
            </a>
          </div>
        </div>

        <form className="form reveal" data-d="1" onSubmit={handleSubmit}>
          <div className="field--row">
            <div className="field">
              <label htmlFor="f-name">{t('form.name')}</label>
              <input
                id="f-name"
                name="name"
                type="text"
                required
                placeholder={t('form.namePh')}
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="f-email">{t('form.email')}</label>
              <input
                id="f-email"
                name="email"
                type="email"
                required
                placeholder={t('form.emailPh')}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="f-msg">{t('form.msg')}</label>
            <textarea
              id="f-msg"
              name="message"
              rows={5}
              required
              placeholder={t('form.msgPh')}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button className="btn btn--accent form__submit" type="submit">
            <span>{t('form.submit')}</span>
            <PaperPlaneTilt size={18} weight="bold" />
          </button>
          <p className="form__hint">{t('form.hint')}</p>
        </form>
      </div>
    </section>
  );
}
