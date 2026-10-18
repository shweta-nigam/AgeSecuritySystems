
const services = [
  {
    number: "01",
    title: "CCTV & Video Surveillance",
    description:
      "Explore camera systems for monitoring entrances, workspaces, and important areas of your property.",
    tag: "VISIBILITY",
    symbol: "◉",
  },
  {
    number: "02",
    title: "Access Control Systems",
    description:
      "Manage entry to selected areas with access solutions suited to your premises and requirements.",
    tag: "ACCESS",
    symbol: "⌁",
  },
  {
    number: "03",
    title: "Intrusion Detection",
    description:
      "Consider alarm and detection solutions designed to help identify unauthorized entry.",
    tag: "ALERTS",
    symbol: "⌖",
  },
  {
    number: "04",
    title: "Integrated Security",
    description:
      "Explore ways to bring compatible security technologies together into a more coordinated solution.",
    tag: "INTEGRATION",
    symbol: "⎔",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#080d18]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              What we offer
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Security solutions for{" "}
              <span className="text-slate-400">real-world needs.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-400">
            From individual systems to connected solutions, find the
            right starting point for your security requirements.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#101a2b] to-[#0b1220] p-6 transition duration-300 hover:border-blue-400/30 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/[0.04] blur-2xl transition group-hover:bg-blue-500/[0.1]" />

              <div className="relative flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-300/15 bg-blue-400/[0.07] text-2xl text-blue-300">
                  {service.symbol}
                </div>
                <span className="text-xs tracking-[0.15em] text-slate-600">
                  {service.number}
                </span>
              </div>

              <div className="relative mt-8">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-blue-300/80">
                  {service.tag}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition group-hover:text-blue-300"
                >
                  Discuss this solution <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs leading-6 text-slate-600">
          Service categories are illustrative placeholders. Keep only the
          solutions that AgeSecuritySystems actually provides.
        </p>
      </div>
    </section>
  );
}
