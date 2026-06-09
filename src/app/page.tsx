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

function ProductStudioOpening() {
  return (
    <div
      className="opening-prototype"
      aria-label="Harding Labs product studio opening animation prototype"
    >
      <svg
        className="opening-prototype__svg"
        viewBox="0 0 420 360"
        role="img"
        aria-labelledby="opening-title opening-desc"
      >
        <title id="opening-title">Harding Labs product nodes resolving</title>
        <desc id="opening-desc">
          A lightweight SVG animation showing Harding Labs resolving into
          connected StageSnap and product nodes.
        </desc>
        <defs>
          <linearGradient id="opening-line" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="52%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a5b4fc" />
          </linearGradient>
          <radialGradient id="opening-core" cx="50%" cy="50%" r="58%">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="52%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#2563eb" />
          </radialGradient>
        </defs>
        <g className="opening-prototype__links">
          <path d="M210 180 L106 111" />
          <path d="M210 180 L318 101" />
          <path d="M210 180 L327 248" />
          <path d="M210 180 L96 254" />
        </g>
        <g className="opening-prototype__rings">
          <circle cx="210" cy="180" r="112" />
          <circle cx="210" cy="180" r="72" />
        </g>
        <g className="opening-prototype__node opening-prototype__node--one">
          <circle cx="106" cy="111" r="23" />
          <text x="106" y="116">AI</text>
        </g>
        <g className="opening-prototype__node opening-prototype__node--two">
          <circle cx="318" cy="101" r="23" />
          <text x="318" y="106">UX</text>
        </g>
        <g className="opening-prototype__node opening-prototype__node--three">
          <circle cx="327" cy="248" r="28" />
          <text x="327" y="253">SS</text>
        </g>
        <g className="opening-prototype__node opening-prototype__node--four">
          <circle cx="96" cy="254" r="23" />
          <text x="96" y="259">GO</text>
        </g>
        <g className="opening-prototype__mark">
          <path d="M210 106 L274 143 V217 L210 254 L146 217 V143 Z" />
          <path d="M174 154 L210 175 L246 154" />
          <path d="M210 175 V221" />
          <path d="M174 206 L210 227 L246 206" />
        </g>
        <circle className="opening-prototype__core" cx="210" cy="180" r="10" />
      </svg>
      <div className="opening-prototype__label">
        <span>Harding Labs</span>
        <strong>StageSnap origin system</strong>
      </div>
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

      <main className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-20 pt-10 sm:px-10">
        <nav className="flex items-center justify-between text-sm text-slate-200/80">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center rounded-full border border-sky-400/40 bg-sky-400/10 p-1.5 shadow-[0_0_18px_rgba(56,189,248,0.35)]">
              <svg
                aria-hidden="true"
                className="h-4 w-4 text-sky-200"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2.5L20.5 7.5V16.5L12 21.5L3.5 16.5V7.5L12 2.5Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M7.5 9.5L12 12L16.5 9.5M12 12V17"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
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

        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
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
                Harding Labs is a product studio focused on building and launching AI products — from agent systems to generative imaging. StageSnap is our flagship release, transforming real estate photos into beautifully staged listings in about 30 seconds.
              </p>
            </div>
            <div
              className="animate-fade-up flex flex-col gap-4 sm:flex-row"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:shadow-cyan-500/50"
                href="https://stagesnap.xyz"
                target="_blank"
                rel="noreferrer"
              >
                Explore StageSnap
                <span className="transition group-hover:translate-x-1">→</span>
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

          <div className="relative">
            <div className="animate-float absolute -top-10 right-6 h-32 w-32 rounded-3xl bg-cyan-400/20 blur-2xl" />
            <div className="animate-float-delayed absolute bottom-0 left-0 h-36 w-36 rounded-full bg-indigo-500/30 blur-2xl" />
            <div className="glass animate-glow relative overflow-hidden rounded-3xl border border-white/10 p-8">
              <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-60" />
              <div className="relative flex flex-col gap-6">
                <ProductStudioOpening />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-200/60">
                      StageSnap
                    </p>
                    <h2 className="text-2xl font-semibold">
                      AI Real Estate Staging
                    </h2>
                  </div>
                  <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                    Live
                  </span>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-800/40 p-5">
                    <p className="text-sm text-slate-200/70">Before</p>
                    <img src="/images/stagesnap/before-1.png" alt="Before staging" className="mt-4 h-20 w-full rounded-xl object-cover" />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/20 via-cyan-500/10 to-indigo-500/20 p-5">
                    <p className="text-sm text-slate-100/80">After</p>
                    <img src="/images/stagesnap/after-1.png" alt="After staging" className="mt-4 h-20 w-full rounded-xl object-cover" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-200/70">
                  <span>Render time</span>
                  <span className="text-slate-100">~30 sec</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-200/60">
              About Harding Labs
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              A studio built to ship.
            </h2>
            <p className="text-base text-slate-200/75">
              Harding Labs exists to invent, build, and launch AI products. StageSnap is the flagship, and we&apos;re open to collaboration where there&apos;s clear synergy — but we&apos;re not a dev studio or agency for hire.
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

        <footer className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-200/60 sm:flex-row sm:items-center">
          <span>© 2026 Harding Labs. All rights reserved.</span>
          <span>Product studio • StageSnap • AI imaging</span>
        </footer>
      </main>
    </div>
  );
}
