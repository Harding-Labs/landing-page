import NetworkAnimation from "@/components/NetworkAnimation";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Reveal from "@/components/Reveal";

const stats = [
  { value: "02", label: "Products live", detail: "Both taking payments today" },
  {
    value: "~30s",
    label: "Avg. delivery time",
    detail: "Same speed across every product we ship",
  },
  { value: "100%", label: "In-house", detail: "Design, models, billing, launch" },
];

const principles = [
  {
    number: "01",
    title: "We own what we ship",
    body: "Every product here is ours, end to end. We live with the results, so nothing goes out that we would not use ourselves.",
  },
  {
    number: "02",
    title: "Live means live",
    body: '"Launching soon" does not count around here. Both products take real payments from real users today, and this page says so only because they do.',
  },
  {
    number: "03",
    title: "Small on purpose",
    body: "We stay small enough that everyone touches the whole stack, from model pipelines to UX to billing. Decisions take minutes, and there is nowhere for quality to hide.",
  },
];

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#studio", label: "Studio" },
  { href: "#contact", label: "Contact" },
];

const ctaPrimary =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-teal-300 px-7 py-3 text-sm font-semibold text-[#04231e] transition hover:-translate-y-0.5 hover:bg-teal-200 hover:shadow-lg hover:shadow-teal-400/25";

const ctaSecondary =
  "group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:bg-white/5";

function ArrowUpRight() {
  return (
    <svg
      className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 12L12 4M12 4H5.5M12 4v6.5" />
    </svg>
  );
}

function SectionHeading({
  kicker,
  children,
}: {
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <p className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-teal-300/90">
        <span className="h-px w-8 bg-teal-300/60" />
        {kicker}
      </p>
      <h2 className="max-w-2xl text-balance text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
        {children}
      </h2>
    </div>
  );
}

function LiveBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-slate-100/85">
      <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
      {name}
    </span>
  );
}

export default function Home() {
  return (
    <div className="dot-grid relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <a href="#top" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Harding Labs" className="h-7 w-7 rounded" />
            <span className="text-sm font-semibold tracking-[0.18em] uppercase">
              Harding Labs
            </span>
          </a>
          <div className="flex items-center gap-6 text-sm text-slate-200/70">
            <div className="hidden items-center gap-6 sm:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  className="transition hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              className="group inline-flex items-center gap-1.5 rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-1.5 text-xs font-semibold text-teal-200 transition hover:border-teal-300/60 hover:bg-teal-300/20"
              href="https://davin.io"
              target="_blank"
              rel="noreferrer"
            >
              Meet Davin
              <ArrowUpRight />
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="relative scroll-mt-24 overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <NetworkAnimation />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl" />

        <div className="pointer-events-none relative mx-auto flex min-h-[88dvh] w-full max-w-6xl flex-col justify-center px-6 py-24 sm:px-10">
          <div className="pointer-events-auto max-w-4xl space-y-8">
            <div
              className="animate-fade-up flex flex-wrap items-center gap-3"
              style={{ animationDelay: "0.1s" }}
            >
              <LiveBadge name="StageSnap · live" />
              <LiveBadge name="Vibecation · live" />
            </div>

            <h1
              className="animate-fade-up text-balance text-[2.6rem] font-medium leading-[1.05] sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "0.2s" }}
            >
              We build and ship AI products that feel like{" "}
              <em className="font-serif italic text-teal-300">magic</em>.
            </h1>

            <p
              className="animate-fade-up max-w-xl text-pretty text-base leading-relaxed text-slate-200/75 sm:text-lg"
              style={{ animationDelay: "0.3s" }}
            >
              Harding Labs is an independent product studio led by Davin
              Harding. Two products are live and taking payments right now. Try
              them and see what 30 seconds of AI can do to a photo or a trip.
            </p>

            <div
              className="animate-fade-up flex flex-col gap-3 pt-2 sm:flex-row"
              style={{ animationDelay: "0.4s" }}
            >
              <a className={ctaPrimary} href="#work">
                See the work
              </a>
              <a
                className={ctaSecondary}
                href="https://davin.io"
                target="_blank"
                rel="noreferrer"
              >
                About the founder
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/[0.06]">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 divide-white/[0.06] max-sm:divide-y sm:grid-cols-3 sm:divide-x">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80}>
              <div className="space-y-1.5 px-6 py-8 sm:px-8 sm:py-10">
                <p className="font-serif text-4xl text-teal-300 sm:text-5xl">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold">{stat.label}</p>
                <p className="text-xs leading-relaxed text-slate-200/55">
                  {stat.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <main className="relative mx-auto w-full max-w-6xl px-6 sm:px-10">
        <section id="work" className="pt-24 sm:pt-32">
          <Reveal>
            <SectionHeading kicker="The work">
              Shipped, live, and{" "}
              <em className="font-serif italic text-teal-300">
                earning its keep
              </em>
              .
            </SectionHeading>
          </Reveal>

          <div id="stagesnap" className="mt-16 scroll-mt-20 sm:mt-20">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                <div className="space-y-6">
                  <p className="flex items-baseline gap-4">
                    <span className="font-serif text-2xl text-white/25">01</span>
                    <span className="text-xs uppercase tracking-[0.25em] text-teal-300/90">
                      StageSnap · stagesnap.xyz
                    </span>
                  </p>
                  <h3 className="text-balance text-2xl font-medium leading-snug sm:text-3xl">
                    Real staging takes hours. StageSnap takes 30 seconds.
                  </h3>
                  <p className="text-pretty text-base leading-relaxed text-slate-200/70">
                    Bad listing photos usually are not anyone&apos;s fault. Sellers
                    and FSBO hosts shoot their own rooms, and high-volume
                    agents and brokerages rarely have hours to spare getting
                    every photo pixel-perfect before a listing goes live.
                    StageSnap closes that gap: declutter a lived-in room,
                    empty it out, or furnish it with generative AI in about 30
                    seconds, versus the 2 to 4 hours a real staging job takes.
                  </p>
                  <p className="text-sm text-slate-200/50">
                    Drag the sliders. Those are real outputs, not mockups.
                  </p>
                  <a
                    className={ctaPrimary}
                    href="https://stagesnap.xyz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Try StageSnap
                    <ArrowUpRight />
                  </a>
                </div>
                <div className="grid gap-5">
                  <BeforeAfterSlider
                    beforeImage="/images/stagesnap/before-1.png"
                    afterImage="/images/stagesnap/after-1.png"
                    beforeLabel="Original"
                    afterLabel="StageSnap"
                  />
                  <BeforeAfterSlider
                    beforeImage="/images/stagesnap/before-2.png"
                    afterImage="/images/stagesnap/after-2.png"
                    beforeLabel="Original"
                    afterLabel="StageSnap"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <div
            id="vibecation"
            className="mt-24 border-t border-white/[0.06] pt-24 sm:mt-32 sm:pt-32"
          >
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                <div className="space-y-6">
                  <p className="flex items-baseline gap-4">
                    <span className="font-serif text-2xl text-white/25">02</span>
                    <span className="text-xs uppercase tracking-[0.25em] text-teal-300/90">
                      Vibecation · vibecation.xyz
                    </span>
                  </p>
                  <h3 className="text-balance text-2xl font-medium leading-snug sm:text-3xl">
                    Your Instagram already knows your next trip.
                  </h3>
                  <p className="text-pretty text-base leading-relaxed text-slate-200/70">
                    Drop your handle and Vibecation reads your grid: the
                    colors, the places, the pace. Thirty seconds later you get
                    a Travel DNA profile, three destinations that match it, and
                    a $7 day-by-day plan you can refine with Polo, the built-in
                    trip agent.
                  </p>
                  <p className="text-sm text-slate-200/50">
                    That is the actual product, not a mockup.
                  </p>
                  <a
                    className={ctaPrimary}
                    href="https://vibecation.xyz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Try Vibecation
                    <ArrowUpRight />
                  </a>
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src="/images/vibecation/landing.png"
                    alt="Vibecation Travel DNA share card with matched destinations"
                    className="block h-auto max-h-[34rem] w-full object-cover object-top"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="studio"
          className="mt-24 border-t border-white/[0.06] pt-24 sm:mt-32 sm:pt-32"
        >
          <Reveal>
            <SectionHeading kicker="The studio">
              How we{" "}
              <em className="font-serif italic text-teal-300">work</em>.
            </SectionHeading>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] lg:grid-cols-3">
            {principles.map((principle, index) => (
              <Reveal key={principle.number} delay={index * 100} className="h-full">
                <div className="flex h-full flex-col gap-5 bg-[#0a0e0d] p-8 transition-colors hover:bg-[#0d1211] sm:p-10">
                  <span className="font-serif text-3xl text-teal-300/70">
                    {principle.number}
                  </span>
                  <h3 className="text-lg font-semibold">{principle.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-200/65">
                    {principle.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-24 border-t border-white/[0.06] pt-24 sm:mt-32 sm:pt-32">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <SectionHeading kicker="From the founder">
                Why this studio{" "}
                <em className="font-serif italic text-teal-300">exists</em>.
              </SectionHeading>
              <div className="space-y-6 text-pretty text-base leading-relaxed text-slate-200/75 sm:text-lg">
                <p>
                  I started Harding Labs after watching too many good AI demos
                  die before they became products. The gap was never the model.
                  It was everything around it: the UX, the billing, the launch,
                  the follow-through.
                </p>
                <p>
                  So that is what this studio does. I set the direction, and
                  we build the whole thing and put it in front of paying
                  users. StageSnap and Vibecation are the proof so far. If you
                  are hiring, or building something adjacent, and want to know
                  how any of it works under the hood, ask me. I like talking
                  about the unglamorous parts.
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <div>
                    <p className="font-serif text-xl italic text-white">
                      Davin Harding
                    </p>
                    <p className="text-sm text-slate-200/55">
                      Founder, Harding Labs
                    </p>
                  </div>
                  <a
                    className="group ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-teal-300 transition hover:text-teal-200"
                    href="https://davin.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    davin.io
                    <ArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="pb-8 pt-24 sm:pt-32">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-teal-400/[0.12] via-transparent to-transparent px-8 py-14 sm:px-14 sm:py-20">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-400/15 blur-3xl" />
              <div className="relative max-w-2xl space-y-6">
                <h2 className="text-balance text-3xl font-medium leading-tight sm:text-5xl">
                  Say{" "}
                  <em className="font-serif italic text-teal-300">hello</em>.
                </h2>
                <p className="text-pretty text-base leading-relaxed text-slate-200/75 sm:text-lg">
                  Hiring for an AI product role, exploring a collaboration, or
                  just curious how something here was built? Reach out. Email
                  gets answered fastest.
                </p>
                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <a
                    className={ctaPrimary}
                    href="https://davin.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Contact Davin
                    <ArrowUpRight />
                  </a>
                  <a
                    className={ctaSecondary}
                    href="https://stagesnap.xyz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    stagesnap.xyz
                    <ArrowUpRight />
                  </a>
                  <a
                    className={ctaSecondary}
                    href="https://vibecation.xyz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    vibecation.xyz
                    <ArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <footer className="overflow-hidden border-t border-white/[0.06] pb-10 pt-12">
          <div className="flex flex-col items-start justify-between gap-4 text-xs text-slate-200/55 sm:flex-row sm:items-center">
            <span>© 2026 Harding Labs. All rights reserved.</span>
            <div className="flex items-center gap-5">
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
                davin.io
              </a>
            </div>
          </div>
          <p
            aria-hidden
            className="text-outline mt-10 select-none whitespace-nowrap text-center text-[13vw] font-semibold leading-none tracking-tight sm:text-[10vw]"
          >
            HARDING LABS
          </p>
        </footer>
      </main>
    </div>
  );
}
