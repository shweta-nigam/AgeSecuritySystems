
export default function CTASection() {
  return (
    <section id="contact" className="bg-[#080d18] px-5 py-16 sm:px-8 sm:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-300/15 bg-gradient-to-br from-[#142440] via-[#101b30] to-[#0d1524] px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
        <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-px w-1/2 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />

        <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              Let's talk security
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Your requirements.{" "}
              <span className="text-blue-200">Our next conversation.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Tell us what you need to protect, and let's explore
              the solutions that make sense for your space.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="mailto:YOUR_EMAIL@example.com?subject=Security%20Enquiry"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Send an Enquiry <span>↗</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 px-6 py-4 text-sm font-medium text-slate-200 transition hover:bg-white/[0.05]"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
