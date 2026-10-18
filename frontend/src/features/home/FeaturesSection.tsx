
const benefits = [
  {
    number: "01",
    title: "Built around your needs",
    description:
      "Solutions begin with understanding your property, priorities, and specific security requirements.",
  },
  {
    number: "02",
    title: "Technology that works for you",
    description:
      "Explore practical security technologies selected for your environment and everyday use.",
  },
  {
    number: "03",
    title: "Support you can approach",
    description:
      "Get clear guidance when evaluating options, planning installations, or choosing a suitable solution.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="why-us" className="border-y border-white/[0.06] bg-[#0b1220]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
            A better approach to security
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Protection should feel{" "}
            <span className="text-slate-400">straightforward.</span>
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-slate-400">
            Good security is about more than equipment. It is about
            finding the right fit, understanding your options, and
            making confident decisions.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.number}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-blue-400/[0.035] sm:p-8"
            >
              <span className="text-sm font-medium tracking-widest text-blue-300">
                {benefit.number}
              </span>
              <h3 className="mt-8 text-xl font-semibold text-white">
                {benefit.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {benefit.description}
              </p>
              <div className="mt-8 h-px w-12 bg-blue-400/50 transition-all group-hover:w-20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
