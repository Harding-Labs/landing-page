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
    title: "Two products live",
    description:
      "StageSnap stages real estate photos with generative AI. Vibecation turns an Instagram grid into Travel DNA and a day-by-day trip plan.",
  },
];

const stack = [
  "Computer Vision",
  "Generative Imaging",
  "Agentic Systems",
  "Product Strategy",
  "Launch Systems",
  "Workflow Automation",
  "Human-Centered UX",
];

const stagesnapMetrics = [
  { label: "~30 sec render time", accent: "cyan" as const },
  { label: "90% cost savings vs traditional staging", accent: "cyan" as const },
  { label: "Private preview", accent: "emerald" as const },
];

const vibecationMetrics = [
  { label: "~30 sec Travel DNA", accent: "cyan" as const },
  { label: "$7 / trip unlock", accent: "cyan" as const },
  { label: "Live", accent: "emerald" as const },
];

function MetricRow({
  metrics,
}: {
  metrics: { label: string; accent: "cyan" | "emerald" }[];
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-200/70">
      {metrics.map((metric) => (
        <div key={metric.label} className="flex items-center gap-2">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              metric.accent === "emerald" ? "bg-emerald-400" : "bg-cyan-400"
            }`}
          />
          <span>{metric.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05070b] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-12 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative flex min-h-[100dvh] flex-col">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <NetworkAnimation />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#05070b]/60 via-transparent to-[#05070b]/60" />

        <nav className="pointer-events-none relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-10 text-sm text-slate-200/80 sm:px-10">
          <div className="pointer-events-auto flex items-center gap-2">
            <img src="/logo.png" alt="Harding Labs" className="h-6 w-6 rounded" />
            <span className="font-semibold tracking-[0.2em] text-slate-200">
              Harding Labs
            </span>
          </div>
          <div className="pointer-events-auto hidden items-center gap-6 sm:flex">
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
              href="https://vibecation.xyz"
              target="_blank"
              rel="noreferrer"
            >
              Vibecation
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

        <section className="pointer-events-none relative z-10 flex flex-1 items-center justify-center px-6">
          <div className="pointer-events-auto max-w-3xl space-y-4 text-center sm:space-y-8">
            <div
              className="animate-fade-up mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-200/80"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              AI products from zero to launch
            </div>
            <div className="space-y-4 sm:space-y-6">
              <h1
                className="animate-fade-up text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-6xl"
                style={{ animationDelay: "0.2s" }}
              >
                We design, build, and ship AI-native applications.
              </h1>
              <p
                className="animate-fade-up text-balance text-base text-slate-200/80 sm:text-lg lg:text-xl"
                style={{ animationDelay: "0.3s" }}
              >
                Harding Labs builds and launches AI-native apps. StageSnap stages
                real estate photos; Vibecation turns Instagram into Travel DNA
                and trip plans.
              </p>
            </div>
            <div
              className="animate-fade-up flex flex-col justify-center gap-4 sm:flex-row"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:shadow-cyan-500/50"
                href="#products"
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
        </section>

        <div className="pointer-events-none relative z-10 flex justify-center pb-4 sm:pb-8">
          <a
            href="#products"
            className="pointer-events-auto animate-bounce text-slate-200/60 transition hover:text-slate-200"
            aria-label="Scroll to products section"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col px-6 pb-20 sm:px-10">
        <div id="products" className="scroll-mt-20">
          <section id="stagesnap" className="mt-24 space-y-12 scroll-mt-20">
            <div className="space-y-4 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/80">
                Products
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
                StageSnap: AI Real Estate Staging
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-200/75">
                Transform empty or cluttered rooms into beautifully staged
                listings in ~30 seconds.
              </p>
            </div>

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

            <div className="flex flex-col items-center gap-6">
              <MetricRow metrics={stagesnapMetrics} />
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

          <section id="vibecation" className="mt-24 space-y-12 scroll-mt-20">
            <div className="space-y-4 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/80">
                Products
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
                Vibecation: Instagram → Travel DNA
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-200/75">
                Drop an Instagram @ and get your Travel DNA in ~30 seconds:
                traveler archetype, three matched destinations, and a $7
                day-by-day trip you can refine with Polo.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-rose-500/5 to-orange-400/10 p-3 sm:p-4">
              <img
                src="/images/vibecation/landing.png"
                alt="Vibecation Travel DNA share card with matched destinations"
                className="mx-auto h-auto max-h-[32rem] w-full rounded-2xl object-cover object-top"
              />
            </div>

            <div className="flex flex-col items-center gap-6">
              <MetricRow metrics={vibecationMetrics} />
              <a
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:shadow-cyan-500/50"
                href="https://vibecation.xyz"
                target="_blank"
                rel="noreferrer"
              >
                Explore Vibecation
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
            </div>
          </section>
        </div>

        <section className="mt-24 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-200/60">
              About Harding Labs
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              A studio built to ship.
            </h2>
            <p className="text-base text-slate-200/75">
              Harding Labs exists to invent, build, and launch AI products.
              StageSnap and Vibecation are live. We&apos;re open to collaboration
              where there&apos;s clear synergy, but we&apos;re not a dev studio
              or agency for hire.
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

        <section className="glass mt-24 rounded-3xl border border-white/10 px-8 py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-200/60">
                Connect
              </p>
              <h2 className="text-2xl font-semibold">
                Ready to build what comes next?
              </h2>
              <p className="text-sm text-slate-200/70">
                Try StageSnap or Vibecation, or reach out if you see a clear
                product-aligned collaboration.
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
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:bg-white/5"
                href="https://vibecation.xyz"
                target="_blank"
                rel="noreferrer"
              >
                Visit vibecation.xyz
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

        <footer className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-200/60 sm:flex-row sm:items-center">
          <span>© 2026 Harding Labs. All rights reserved.</span>
          <span>Product studio · StageSnap · Vibecation</span>
        </footer>
      </main>
    </div>
  );
}
