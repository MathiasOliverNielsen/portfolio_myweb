import { Language } from "@/lib/i18n";

interface FooterProps {
  t: (key: string) => string;
  language: Language;
}

export default function Footer({ t, language }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="font-semibold text-black">MON</h3>
            <p className="text-sm text-gray-600">
              {language === "da"
                ? "Freelance web developer fra Aalborg"
                : "Freelance web developer from Aalborg"}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-900">
              {language === "da" ? "Navigation" : "Navigation"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-600 hover:text-black">
                  {language === "da" ? "Om mig" : "About"}
                </a>
              </li>
              <li>
                <a href="#tech" className="text-gray-600 hover:text-black">
                  {language === "da" ? "Tech Stack" : "Tech Stack"}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-black">
                  {language === "da" ? "Ydelser" : "Services"}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-black">
                  {language === "da" ? "Kontakt" : "Contact"}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-900">
              {language === "da" ? "Sociale medier" : "Social"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-900">
              {language === "da" ? "Kontakt" : "Contact"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hej@mathiasnielsen.dk"
                  className="text-gray-600 hover:text-accent"
                >
                  hej@mathiasnielsen.dk
                </a>
              </li>
              <li className="text-gray-600">
                {language === "da" ? "Aalborg, Danmark" : "Aalborg, Denmark"}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <p>
              © {new Date().getFullYear()} Mathias Oliver Nielsen.{" "}
              {t("footer.rights")}
            </p>
            <p className="mt-4 md:mt-0">
              {language === "da"
                ? "Bygget med Next.js, React & Tailwind CSS"
                : "Built with Next.js, React & Tailwind CSS"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
