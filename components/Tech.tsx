"use client";

interface TechItem {
  name: string;
  url: string;
  category: "frontend" | "backend" | "tools";
}

interface TechProps {
  t: (key: string) => string;
  techStack: readonly TechItem[];
}

export default function Tech({ t, techStack }: TechProps) {
  const marqueeItems = techStack.map((tech) => tech.name).join(" • ");

  return (
    <section
      id="tech"
      className="py-20 px-6 bg-white border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 animate-slide-in">
          <h2 className="text-5xl md:text-6xl font-bold">{t("tech.title")}</h2>
          <p className="text-xl text-gray-600">{t("tech.description")}</p>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden bg-gray-50 rounded-lg border border-gray-100 py-8">
          <div className="relative flex whitespace-nowrap">
            <div className="animate-marquee flex gap-8 pr-8">
              <span className="text-gray-400 font-medium">{marqueeItems}</span>
              <span className="text-gray-400 font-medium">{marqueeItems}</span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="space-y-4 animate-scale-in">
            <h3 className="text-lg font-semibold text-gray-900">
              {t("tech.frontend")}
            </h3>
            <div className="space-y-2">
              {techStack
                .filter((tech) => tech.category === "frontend")
                .map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-600 hover:text-accent transition-colors font-medium"
                  >
                    {tech.name} →
                  </a>
                ))}
            </div>
          </div>

          {/* Backend */}
          <div className="space-y-4 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-semibold text-gray-900">
              {t("tech.backend")}
            </h3>
            <div className="space-y-2">
              {techStack
                .filter((tech) => tech.category === "backend")
                .map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-600 hover:text-accent transition-colors font-medium"
                  >
                    {tech.name} →
                  </a>
                ))}
            </div>
          </div>

          {/* Tools */}
          <div className="space-y-4 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-semibold text-gray-900">
              {t("tech.tools")}
            </h3>
            <div className="space-y-2">
              {techStack
                .filter((tech) => tech.category === "tools")
                .map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-600 hover:text-accent transition-colors font-medium"
                  >
                    {tech.name} →
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
