"use client";

import { useEffect, useState } from "react";

interface HeroProps {
  t: (key: string) => string;
}

const words = ["app", "server", "environment"];

export default function Hero({ t }: HeroProps) {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
          {t("hero.greeting")}
        </h1>

        <div className="text-5xl md:text-6xl lg:text-7xl font-bold">
          <span className="text-gray-600">{t("hero.tagline")}</span>
          <div className="relative inline-block ml-3 min-h-[1.2em]">
            {words.map((word, idx) => (
              <span
                key={word}
                className={`absolute text-accent font-bold transition-opacity duration-1000 ${
                  idx === currentWord ? "opacity-100" : "opacity-0"
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          {t("hero.location")}
        </p>

        <div className="pt-8">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-accent text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            {t("contact.send")}
          </a>
        </div>
      </div>
    </section>
  );
}
