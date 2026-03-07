import NetworkAnimation from "@/components/NetworkAnimation";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const highlights = [
  {
    title: "Applied AI, not hype",
    description:
      "We build and launch our own products that turn real-world workflows into durable, revenue-generating platforms.",
  },
  {
    title: "Products over services",
    description:
      "Harding Labs builds its own products, not client work. We stay focused on what we own and ship.",
  },
  {
    title: "StageSnap first",
    description:
      "StageSnap is our first product: AI staging that turns empty real estate photos into beautifully furnished listings.",
  },
];

const stack = [
  "Computer Vision",
  "Generative Imaging",
  "Product Strategy",
  "Launch Systems",
  "Workflow Automation",
  "Human-Centered UX",
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05070b] text-white">
      {/* Ambient background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-12 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-20 pt-10 sm:px-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between text-sm text-slate-200/80">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Harding Labs" className="h-6 w-6 rounded" />
            <span className="font-semibold tracking-[0.2em] text-slate-200">
              Harding Labs
            </span>
          </div>
          <div className="hidden items-center gap-6 sm:flex">
            <a
              className="transition hover:text-white"
              href="https://stagesnap.xyz"
              target="_blank"
              rel="noreferrer"
            >
              StageSnap
            </a>
            <a
              className="transition hover:text-white"
              href="https://davin.io"
              target="_blank"
              rel="noreferrer"
            >
              Davin
            </a>
          </div>
        </nav>

        {/* HERO SECTION - Above the fold */}
        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left side - Text content */}
          <div className="flex flex-col gap-8">
            <div
              className="animate-fade-up inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-200/80"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Shipping AI products from zero to launch
            </div>
            <div className="space-y-6">
              <h1
                className="animate-fade-up text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
                style={{ animationDelay: "0.2s" }}
              >
                We design, build, and ship AI-native applications.
              </h1>
              <p
                className="animate-fade-up text-balance text-lg text-slate-200/80 sm:text-xl"
                style={{ animationDelay: "0.3s" }}
              >
                Harding Labs is a product studio focused on building and launching AI products, from agent systems to generative imaging.
              </p>
            </div>
            <div
              className="animate-fade-up flex flex-col gap-4 sm:flex-row"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:shadow-cyan-500/50"
                href="#stagesnap"
              >
                See Our Work
                <span className="transition group-hover:translate-y-1">↓</span>
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:bg-white/5"
                href="https://davin.io"
                target="_blank"
                rel="noreferrer"
              >
                Meet Davin
              </a>
            </div>
          </div>

          {/* Right side - Network Animation */}
          <div
            className="animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <NetworkAnimation />
          </div>
        </section>

        {/* STAGESNAP SHOWCASE SECTION - Below the fold */}
        <section id="stagesnap" className="space-y-12 scroll-mt-20">
          {/* Section header */}
          <div className="space-y-4 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/80">
              Our Flagship Product
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
              StageSnap: AI Real Estate Staging
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-200/75">
              Transform empty or cluttered rooms into beautifully staged listings in ~30 seconds.
            </p>
          </div>

          {/* Before/After Sliders */}
          <div className="grid gap-8 lg:grid-cols-2">
            <BeforeAfterSlider
              beforeImage="/images/stagesnap/before-1.png"
              afterImage="/images/stagesnap/after-1.png"
            />
            <BeforeAfterSlider
              beforeImage="/images/stagesnap/before-2.png"
              afterImage="/images/stagesnap/after-2.png"
            />
          </div>

          {/* Stats and CTA */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-200/70">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>~30 sec render time</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>90% cost savings vs traditional staging</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Private preview</span>
              </div>
            </div>
            <a
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:shadow-cyan-500/50"
              href="https://stagesnap.xyz"
              target="_blank"
              rel="noreferrer"
            >
              Explore StageSnap
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-200/60">
              About Harding Labs
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              A studio built to ship.
            </h2>
            <p className="text-base text-slate-200/75">
              Harding Labs exists to invent, build, and launch AI products. StageSnap is the flagship, and we're open to collaboration where there's clear synergy, but we're not a dev studio or agency for hire.
            </p>
            <div className="flex flex-wrap gap-3">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100/80 transition hover:border-white/40 hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group animate-fade-up rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-200/75">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONNECT SECTION */}
        <section className="glass rounded-3xl border border-white/10 px-8 py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-200/60">
                Connect
              </p>
              <h2 className="text-2xl font-semibold">
                Ready to build what comes next?
              </h2>
              <p className="text-sm text-slate-200/70">
                Explore StageSnap or reach out if you see a clear product-aligned
                collaboration.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:bg-white/5"
                href="https://stagesnap.xyz"
                target="_blank"
                rel="noreferrer"
              >
                Visit stagesnap.xyz
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20"
                href="https://davin.io"
                target="_blank"
                rel="noreferrer"
              >
                Contact Davin
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-200/60 sm:flex-row sm:items-center">
          <span>© 2026 Harding Labs. All rights reserved.</span>
          <span>Product studio • StageSnap • AI imaging</span>
        </footer>
      </main>
    </div>
  );
}
