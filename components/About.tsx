interface AboutProps {
  t: (key: string) => string;
}

export default function About({ t }: AboutProps) {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white border-t border-gray-100"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 animate-slide-in">
          <h2 className="text-5xl md:text-6xl font-bold">{t("about.title")}</h2>
        </div>

        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p className="animate-slide-in" style={{ animationDelay: "0.1s" }}>
            {t("about.intro")}
          </p>
          <p
            className="animate-slide-in"
            style={{ animationDelay: "0.2s" }}
          >
            {t("about.description")}
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 gap-8 pt-8"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="space-y-4 p-6 bg-gray-50 rounded-lg border border-gray-100">
            <h3 className="text-xl font-semibold">Frontend Development</h3>
            <p className="text-gray-600">
              Building responsive, interactive UIs with React and Next.js.
            </p>
          </div>
          <div className="space-y-4 p-6 bg-gray-50 rounded-lg border border-gray-100">
            <h3 className="text-xl font-semibold">Backend Solutions</h3>
            <p className="text-gray-600">
              Creating scalable APIs and databases with Node.js and PostgreSQL.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
