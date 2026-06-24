"use client";

import { Language } from "@/lib/i18n";

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export default function Header({ language, setLanguage, t }: HeaderProps) {
  const toggleLanguage = () => {
    setLanguage(language === "da" ? "en" : "da");
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-semibold text-black hover:text-accent transition-colors"
        >
          MON
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-sm text-gray-600 hover:text-black transition-colors"
          >
            {t("nav.about")}
          </a>
          <a
            href="#tech"
            className="text-sm text-gray-600 hover:text-black transition-colors"
          >
            {t("nav.tech")}
          </a>
          <a
            href="#services"
            className="text-sm text-gray-600 hover:text-black transition-colors"
          >
            {t("nav.services")}
          </a>
          <a
            href="#contact"
            className="text-sm text-gray-600 hover:text-black transition-colors"
          >
            {t("nav.contact")}
          </a>
        </div>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-black border border-gray-200 rounded-md transition-colors hover:border-gray-300"
          aria-label="Toggle language"
        >
          {language === "da" ? "EN" : "DA"}
        </button>
      </nav>
    </header>
  );
}
