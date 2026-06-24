"use client";

import { useState, useEffect } from "react";
import { Language, translations, techStack } from "@/lib/i18n";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tech from "@/components/Tech";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [language, setLanguage] = useState<Language>("da");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved && (saved === "da" || saved === "en")) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("lang", language);
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header language={language} setLanguage={setLanguage} t={t} />
      <main className="flex-1">
        <Hero t={t} />
        <About t={t} />
        <Tech t={t} techStack={techStack} />
        <Services t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} language={language} />
    </div>
  );
}
