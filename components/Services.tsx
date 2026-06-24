interface ServicesProps {
  t: (key: string) => string;
}

const services = [
  {
    key: "web",
    icon: "🌐",
  },
  {
    key: "backend",
    icon: "⚙️",
  },
  {
    key: "consulting",
    icon: "💡",
  },
  {
    key: "optimization",
    icon: "⚡",
  },
];

export default function Services({ t }: ServicesProps) {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-white border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 animate-slide-in">
          <h2 className="text-5xl md:text-6xl font-bold">
            {t("services.title")}
          </h2>
          <p className="text-xl text-gray-600">{t("services.description")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.key}
              className="space-y-3 p-6 bg-gray-50 rounded-lg border border-gray-100 hover:border-accent hover:bg-white transition-all animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-3xl">{service.icon}</div>
              <h3 className="text-xl font-semibold">
                {t(`services.${service.key}`)}
              </h3>
              <p className="text-gray-600">
                {t(`services.${service.key}_desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
