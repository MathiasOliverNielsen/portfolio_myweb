"use client";

import { useState } from "react";

interface ContactProps {
  t: (key: string) => string;
}

export default function Contact({ t }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    const emailSubject = encodeURIComponent(
      subject || t("contact.email_subject")
    );
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${t("contact.email_text")}?subject=${emailSubject}&body=${emailBody}`;

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white border-t border-gray-100"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 animate-slide-in">
          <h2 className="text-5xl md:text-6xl font-bold">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-gray-600">{t("contact.description")}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                {t("contact.name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="Mathias Nielsen"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                {t("contact.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium">
              {t("contact.subject")}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              placeholder={t("contact.email_subject")}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium">
              {t("contact.message")}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-accent text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            {t("contact.send")}
          </button>
        </form>

        <div className="pt-8 border-t border-gray-100 space-y-4 text-center text-gray-600">
          <p>{t("contact.address")}</p>
          <a
            href="mailto:hej@mathiasnielsen.dk"
            className="block text-accent hover:text-accent/80 transition-colors font-medium"
          >
            {t("contact.email_text")}
          </a>
        </div>
      </div>
    </section>
  );
}
