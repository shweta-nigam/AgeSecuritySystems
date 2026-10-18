
export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_25%,rgba(37,99,235,0.16),transparent_38%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-32">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-4 py-2 text-xs font-medium tracking-wide text-blue-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            SECURITY BUILT AROUND YOU
          </div>

          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Confidence starts with{" "}
            <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-white bg-clip-text text-transparent">
              feeling secure.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            Smarter security solutions for the spaces, people, and
            things that matter most. Discover protection designed
            around your needs.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Discuss Your Requirements <span>↗</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 px-6 py-4 text-sm font-medium text-slate-200 transition hover:border-white/25 hover:bg-white/[0.04]"
            >
              Explore Solutions
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <span className="text-blue-300">✓</span> Tailored solutions
            </span>
            <span className="flex items-center gap-2">
              <span className="text-blue-300">✓</span> Professional guidance
            </span>
            <span className="flex items-center gap-2">
              <span className="text-blue-300">✓</span> Customer-focused service
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-6 rounded-[2rem] bg-blue-500/[0.08] blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1524] shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
              <div>
                <p className="text-sm font-semibold text-white">
                  Security overview
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  A clearer view of your space
                </p>
              </div>
              <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3 py-1.5 text-xs text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Illustrative
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 p-4">
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-400/10 text-lg text-blue-300">
                  ◉
                </div>
                <p className="mt-4 text-xs text-slate-500">Video monitoring</p>
                <p className="mt-1 text-sm font-medium text-white">Stay informed</p>
              </div>
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10 text-lg text-emerald-300">
                  ⌁
                </div>
                <p className="mt-4 text-xs text-slate-500">Access control</p>
                <p className="mt-1 text-sm font-medium text-white">Manage access</p>
              </div>
            </div>

            <div className="px-4 pb-4">
              <div className="relative flex min-h-52 flex-col justify-between overflow-hidden rounded-xl border border-blue-300/10 bg-gradient-to-br from-[#142642] via-[#101c30] to-[#0b1220] p-5">
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(147,197,253,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.2)_1px,transparent_1px)] [background-size:28px_28px]" />
                <div className="relative flex items-start justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-blue-200/70">
                    Protection, connected
                  </span>
                  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-blue-300" stroke="currentColor" strokeWidth="1.3">
                    <path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" />
                    <path d="m8.5 12 2.3 2.3 4.8-5" />
                  </svg>
                </div>
                <div className="relative mt-8">
                  <p className="text-2xl font-semibold tracking-tight text-white">
                    Designed for peace of mind.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    The right solution begins with understanding your space.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/[0.08] px-5 py-4">
              <p className="text-xs leading-5 text-slate-500">
                Concept preview only. No live cameras, monitoring, or
                connected security devices are shown here.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-3 hidden rounded-xl border border-white/10 bg-[#111c2e] px-4 py-3 shadow-xl sm:block">
            <p className="text-xs text-slate-400">Our approach</p>
            <p className="mt-1 text-sm font-medium text-white">
              Protection with purpose
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
