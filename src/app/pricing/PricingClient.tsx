"use client";

import Link from "next/link";
import { BOOK_CALL_URL } from "@/lib/booking";

const LINKS = {
  bookCall: BOOK_CALL_URL,
  buyScoping:
    process.env.NEXT_PUBLIC_BUY_SCOPING_CALL_URL ??
    "https://buy.stripe.com/aFadR84JWgYu6kXgOIaIM08",
  buyAudit:
    process.env.NEXT_PUBLIC_BUY_VISUAL_AUDIT_URL ??
    "https://buy.stripe.com/eVqeVc3FS23A38L0PKaIM09",
  buyEcom:
    process.env.NEXT_PUBLIC_BUY_ECOM_VISUAL_PACK_URL ??
    "https://buy.stripe.com/dRm6oG4JWdMi6kXfKEaIM0a",
  buyLookbook:
    process.env.NEXT_PUBLIC_BUY_LOOKBOOK_MINI_URL ??
    "https://buy.stripe.com/eVqeVcekw5fM5gTdCwaIM0b",
  buyPaidSocial:
    process.env.NEXT_PUBLIC_BUY_PAID_SOCIAL_TEST_PACK_URL ??
    "https://buy.stripe.com/5kQ7sKekw23A6kXaqkaIM0c",
  buyUgc:
    process.env.NEXT_PUBLIC_BUY_AI_UGC_STARTER_URL ??
    "https://buy.stripe.com/3cIcN45O0dMi10D8icaIM0d",
  buyLanding:
    process.env.NEXT_PUBLIC_BUY_LANDING_PAGE_STARTER_URL ??
    "https://buy.stripe.com/bJe00ifoA23A7p16a4aIM0e",
};

const btnPrimary =
  "inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center border-2 border-neutral-900 bg-neutral-900 px-5 py-3 text-center text-sm font-medium leading-snug text-white transition-colors hover:bg-neutral-800 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-white";

const btnSecondary =
  "inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center border-2 border-neutral-900 bg-transparent px-5 py-3 text-center text-sm font-medium leading-snug text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-100 dark:text-neutral-100 dark:hover:bg-white/10";

const btnCompact =
  "inline-flex min-h-[44px] w-full items-center justify-center border-2 border-neutral-900 bg-neutral-900 px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-white";

const sectionLabel = "text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400";

const PACKAGES = [
      {
        name: "Scoping Session",
        price: "$250",
        tag: "Best first step for custom projects",
        description:
          "A focused strategy call that turns a vague need into a clear plan.",
        includes: [
          "45-minute video call",
          "offer / launch / asset review",
          "one-page scope note",
          "recommended next step",
          "credited toward any project above $3,500",
        ],
        timeline: "Booked to calendar",
        cta: "Buy Scoping Session",
        href: LINKS.buyScoping,
        note: "Best when you know you need help, but not yet which package.",
      },
      {
        name: "Brand & Visual Audit",
        price: "$850",
        tag: "Best for diagnosing what is off-brand",
        description:
          "A fast audit of your current site, social, and creative system with a clear visual direction and action plan.",
        includes: [
          "audit of website, social, ads, and current visual language",
          "one curated visual direction board",
          "priority fixes",
          "roadmap for what to change first",
        ],
        timeline: "3 business days",
        cta: "Buy the Audit",
        href: LINKS.buyAudit,
      },
      {
        name: "E-commerce Visual Pack",
        price: "$1,250",
        tag: "Best for PDP and collection content",
        description:
          "Clean, high-conversion product and lifestyle visuals built from your real SKUs and references.",
        includes: [
          "12 AI stills",
          "channel-ready crops / ratios",
          "grounded in your product references",
          "2 revision rounds",
        ],
        timeline: "5–7 business days",
        cta: "Buy Visual Pack",
        href: LINKS.buyEcom,
      },
      {
        name: "Lookbook Mini",
        price: "$1,600",
        tag: "Best for drops, edits, and mini launches",
        description:
          "Editorial-grade imagery for a capsule, homepage refresh, campaign edit, or launch teaser set.",
        includes: [
          "8 campaign / editorial images",
          "one coherent art direction",
          "channel-ready exports",
          "2 revision rounds",
        ],
        timeline: "5–7 business days",
        cta: "Buy Lookbook Mini",
        href: LINKS.buyLookbook,
      },
      {
        name: "Paid Social Test Pack",
        price: "$1,950",
        tag: "Best for Meta, TikTok, and short-form ad testing",
        description:
          "A compact creative testing system with multiple angles, statics, and motion built for rapid ad iteration.",
        includes: [
          "3 creative angles",
          "12 static assets",
          "2 simple motion loops",
          "platform-ready sizing",
        ],
        timeline: "7–10 business days",
        cta: "Buy Test Pack",
        href: LINKS.buyPaidSocial,
        popular: true,
      },
      {
        name: "AI UGC / Avatar Starter",
        price: "$2,400",
        tag: "Best for founder-lite or creator-style content without traditional shoots",
        description:
          "Fast short-form video content using AI avatar / UGC-style production for paid social, organic content, or offer pages.",
        includes: [
          "3 short videos",
          "1 avatar",
          "1 language",
          "captions included",
          "one concept family",
        ],
        timeline: "7–10 business days",
        cta: "Buy UGC Starter",
        href: LINKS.buyUgc,
      },
      {
        name: "Landing Page Starter",
        price: "$3,200",
        tag: "Best for one focused offer page",
        description:
          "A premium landing page with strong offer structure, clear messaging, and conversion-ready design and build.",
        includes: [
          "one landing page",
          "5–6 sections",
          "responsive design",
          "Framer or Webflow build",
          "basic form integration",
          "2 revision rounds",
        ],
        timeline: "10–14 business days",
        cta: "Buy Landing Page Starter",
        href: LINKS.buyLanding,
      },
];

const CUSTOM_CARDS = [
      {
        title: "Brand Visual System",
        price: "From $3,500",
        text: "We build the visual grammar behind your brand so future creative becomes faster, cleaner, and more consistent.",
        bullets: [
          "master prompt library",
          "trained visual references",
          "brand rules for lighting, color, angle, styling, and background",
          "internal documentation and handoff",
        ],
      },
      {
        title: "Content Engine Retainer",
        price: "From $2,500 / month",
        text: "Ongoing production for launches, evergreen content, ads, site updates, and channel-ready asset flow.",
        bullets: [
          "monthly content planning",
          "recurring production",
          "creative variation loop",
          "delivery across key channels",
        ],
      },
      {
        title: "Campaign Creative System",
        price: "From $6,000",
        text: "A concept-to-launch system for brands that need hero visuals plus the variations required to actually run a campaign.",
        bullets: [
          "campaign brief",
          "multiple creative territories",
          "hero assets + test variants",
          "rollout across paid, social, email, PDP, and homepage",
        ],
      },
      {
        title: "Premium Web Design",
        price: "From $6,500",
        text: "Brand sites and offer pages that look expensive, communicate clearly, and convert without feeling like cheap CRO templates.",
        bullets: [
          "offer architecture",
          "copy direction",
          "premium UI",
          "responsive build",
          "launch support",
        ],
      },
      {
        title: "Brand Voice Systems & Agents",
        price: "From $4,500 setup",
        text: "Custom brand voice logic, prompts, automations, and internal AI workflows for teams that want consistent output beyond design alone.",
        bullets: [
          "brand voice system",
          "prompt infrastructure",
          "workflow logic",
          "team-ready documentation",
          "optional monthly optimization",
        ],
      },
];

const FAQS = [
      {
        q: "Can you match our brand look without copying references too literally?",
        a: "Yes. The goal is not imitation. The goal is a repeatable visual system that feels true to your brand while remaining clean, distinctive, and usable.",
      },
      {
        q: "Can you work from our real products?",
        a: "Yes. We use your product angles, references, and brand constraints so details remain accurate.",
      },
      {
        q: "What do we receive?",
        a: "Depending on the package: high-resolution images, channel-ready ratios, motion files, page builds, prompt notes, documentation, and usage summaries. Source files are available when included or added.",
      },
      {
        q: "What about rights and usage?",
        a: "Usage is clarified before production. Standard package usage is defined up front. Premium, global, or expanded buyout rights are priced separately when needed.",
      },
      {
        q: "How fast can we start?",
        a: "Fixed packages can start as soon as inputs are received. Strategic or system-level work usually begins with a scoping call.",
      },
      {
        q: "Do you only do fashion?",
        a: "The strongest fit is fashion, beauty, accessories, and premium lifestyle. The common thread is visual sensitivity plus commercial pressure.",
      },
      {
        q: "Do you build websites too?",
        a: "Yes. We design and build focused landing pages, premium brand sites, and offer pages structured for conversion.",
      },
      {
        q: "Do you also build brand voice systems and AI agents?",
        a: "Yes. For teams that want consistency beyond visuals, we build voice systems, prompt logic, and internal AI workflows.",
      },
      {
        q: "What should I buy first?",
        a: "If your need is clear, buy a fixed package. If the need is bigger, messier, or tied to multiple channels, book a scoping call first.",
      },
      {
        q: "Can we start small and expand later?",
        a: "Absolutely. That is often the best way to start. A fixed-scope package can become the first move inside a larger system.",
      },
];

export default function PricingClient() {
  const anchorNav = [
    { href: "#services", label: "What we do" },
    { href: "#buy-now", label: "Buy now" },
    { href: "#custom", label: "Custom" },
    { href: "#why-us", label: "Why us" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <nav
        aria-label="Page sections"
        className="sticky top-14 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/90"
      >
        <div className="container mx-auto flex flex-wrap items-center gap-x-5 gap-y-2 px-4 py-2.5 text-xs text-neutral-700 dark:text-neutral-300">
          {anchorNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap border-b-2 border-transparent hover:border-neutral-900 dark:hover:border-neutral-100"
            >
              {item.label}
            </a>
          ))}
          <span className="ml-auto hidden gap-2 sm:flex">
            <a href="#buy-now" className={btnSecondary + " !min-h-0 !py-1.5 !px-3 !text-xs"}>
              See packages
            </a>
            <a
              href={LINKS.bookCall}
              className={btnPrimary + " !min-h-0 !py-1.5 !px-3 !text-xs"}
            >
              Book a call
            </a>
          </span>
        </div>
      </nav>

      <main className="container mx-auto max-w-4xl px-4 pb-28 pt-10 md:pb-20 md:pt-14">
        {/* Hero */}
        <section className="max-w-3xl">
          <p className={sectionLabel}>AI fashion creative systems</p>
          <h1 className="mt-4 text-3xl font-light leading-tight tracking-tight text-neutral-950 dark:text-neutral-50 md:text-4xl lg:text-[2.75rem]">
            AI fashion creative that looks editorial and sells like advertising.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            For fashion, beauty, and lifestyle brands that need campaign-ready
            visuals, AI UGC, avatars, landing pages, and brand-safe content
            systems without agency drag.
          </p>

          {/* Two-line button stack: clear, high-contrast */}
          <div className="mt-8 flex max-w-md flex-col gap-3">
            <a href="#buy-now" className={btnPrimary}>
              <span className="flex flex-col items-center gap-0.5">
                <span>Buy a fixed-scope package</span>
                <span className="text-xs font-normal opacity-90">
                  Stripe checkout — see options below
                </span>
              </span>
            </a>
            <a href={LINKS.bookCall} className={btnSecondary}>
              <span className="flex flex-col items-center gap-0.5">
                <span>Book a scoping call</span>
                <span className="text-xs font-normal opacity-80">
                  For custom or multi-channel work
                </span>
              </span>
            </a>
          </div>

          <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
            Paris-trained fashion design. Real SKU integration. Brand-safe visual
            systems. Fast global delivery.
          </p>
          <div className="mt-6 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <p>You do not need more random prompts.</p>
            <p>
              You need a repeatable visual system that protects taste, speeds
              production, and gives your team assets they can actually ship.
            </p>
          </div>
          <ul className="mt-6 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
            <li>Editorial eye, retail clarity</li>
            <li>Built for launches, paid media, PDP, email, and social</li>
            <li>Fixed packages for speed, custom systems for scale</li>
          </ul>
        </section>

        {/* Problem */}
        <section id="services" className="mt-20 scroll-mt-28">
          <p className={sectionLabel}>Why most AI creative fails</p>
          <h2 className="mt-3 text-2xl font-light tracking-tight text-neutral-950 dark:text-neutral-50 md:text-3xl">
            More content demand should not mean weaker creative.
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-300">
            Most brands are under pressure to produce more assets across more
            channels in less time. What usually happens instead is this: the
            visuals get cheaper, the brand gets blurrier, and the team spends
            more time fixing output than shipping it.
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
            <li>The creative looks “AI” instead of premium.</li>
            <li>The brand starts drifting from asset to asset.</li>
            <li>Launches need too many formats for traditional production timelines.</li>
            <li>Internal teams get buried in revisions, resizing, and content coordination.</li>
            <li>Agencies are too slow for daily content needs.</li>
            <li>Cheap operators can generate volume, but not taste, consistency, or trust.</li>
          </ul>
          <p className="mt-6 max-w-2xl text-sm font-medium text-neutral-900 dark:text-neutral-100">
            If the visuals do not support conversion, clarity, and speed, they are
            not an asset. They are overhead.
          </p>
        </section>

        {/* Solution cards */}
        <section className="mt-20">
          <p className={sectionLabel}>What we install</p>
          <h2 className="mt-3 text-2xl font-light tracking-tight text-neutral-950 dark:text-neutral-50 md:text-3xl">
            A visual engine behind every image, ad, page, and launch.
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-300">
            AIFashionArtists combines art direction, AI production, web execution,
            and content systems into one offer. You get premium creative that is
            easier to order, easier to repeat, and easier to scale.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {
                t: "Brand visual systems",
                b: "We codify your brand language into a repeatable visual system so every output feels unmistakably yours.",
              },
              {
                t: "Campaign creative",
                b: "Launch visuals, paid media variants, hero assets, and testable creative territories built to move from concept to deployment fast.",
              },
              {
                t: "AI UGC, avatars & motion",
                b: "Short-form video, avatar-based content, and lightweight motion assets designed for paid social, landing pages, and ongoing content.",
              },
              {
                t: "Web design & offer pages",
                b: "Luxury-looking pages with commercial structure, clear offer logic, and conversion-first messaging.",
              },
              {
                t: "Content automation",
                b: "Systems for recurring content production so launches, drops, and evergreen content stop relying on chaos.",
              },
              {
                t: "Brand voice systems & agents",
                b: "Voice, prompts, workflows, and internal AI systems that help your team create on-brand copy and assets without reinventing the process every week.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="border border-neutral-200 bg-neutral-50/50 p-5 dark:border-neutral-800 dark:bg-neutral-900/40"
              >
                <h3 className="text-base font-medium text-neutral-950 dark:text-neutral-50">
                  {c.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {c.b}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Who */}
        <section className="mt-20">
          <p className={sectionLabel}>Who we work best with</p>
          <h2 className="mt-3 text-2xl font-light tracking-tight text-neutral-950 dark:text-neutral-50 md:text-3xl">
            Built for brands that care how it looks and whether it sells.
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-900 dark:text-neutral-100">
                Good fit
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                <li>Fashion brands</li>
                <li>Beauty brands</li>
                <li>Accessories and jewelry brands</li>
                <li>Premium DTC brands</li>
                <li>Launch-driven teams</li>
                <li>Founders who want premium output without bloated agency timelines</li>
                <li>Teams that need both taste and systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-900 dark:text-neutral-100">
                Not a fit
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                <li>Brands looking for the cheapest possible content</li>
                <li>Teams that want generic prompt output with no review</li>
                <li>Projects with no clear product, offer, or visual direction</li>
                <li>Buyers who need endless unpaid revisions</li>
                <li>Brands that do not care about consistency, rights, or channel readiness</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-sm font-medium text-neutral-900 dark:text-neutral-100">
            We are not selling AI tricks. We are building brand-safe creative operations.
          </p>
        </section>

        {/* Buy now */}
        <section id="buy-now" className="mt-20 scroll-mt-28">
          <p className={sectionLabel}>Buy now</p>
          <h2 className="mt-3 text-2xl font-light tracking-tight text-neutral-950 dark:text-neutral-50 md:text-3xl">
            Start with something clear, fixed, and easy to approve.
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-300">
            Prefer to start small? Good. These packages are built for speed and
            clarity. Fixed-scope packages designed for immediate purchase through
            Stripe. Ideal when the problem is clear and you want speed without a
            discovery marathon.
          </p>

          <div className="mt-10 space-y-8">
            {PACKAGES.map((pkg) => (
              <article
                key={pkg.name}
                className="relative border border-neutral-200 p-6 dark:border-neutral-800"
              >
                {pkg.popular ? (
                  <span className="absolute right-4 top-4 border border-neutral-900 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-900 dark:border-neutral-100 dark:text-neutral-100">
                    Most popular
                  </span>
                ) : null}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-medium text-neutral-950 dark:text-neutral-50">
                    {pkg.name}
                  </h3>
                  <p className="text-2xl font-light tabular-nums text-neutral-950 dark:text-neutral-50">
                    {pkg.price}
                  </p>
                </div>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  {pkg.tag}
                </p>
                <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
                  {pkg.description}
                </p>
                <h4 className="mt-4 text-xs font-semibold uppercase tracking-wide text-neutral-900 dark:text-neutral-100">
                  Includes
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                  {pkg.includes.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                  <span className="font-medium text-neutral-900 dark:text-neutral-100">
                    Timeline:{" "}
                  </span>
                  {pkg.timeline}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={pkg.href}
                    target={pkg.href.startsWith("http") ? "_blank" : undefined}
                    rel={pkg.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={btnCompact + " sm:max-w-xs"}
                  >
                    <span className="flex flex-col items-center">
                      <span>{pkg.cta}</span>
                      <span className="text-[11px] font-normal opacity-90">
                        Secure checkout
                      </span>
                    </span>
                  </a>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Clear scope, revisions, and usage defined before production.
                    {pkg.note ? ` ${pkg.note}` : ""}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Add-ons */}
        <section className="mt-20">
          <p className={sectionLabel}>Optional add-ons</p>
          <h2 className="mt-3 text-2xl font-light tracking-tight text-neutral-950 dark:text-neutral-50 md:text-3xl">
            Add only what improves the outcome.
          </h2>
          <ul className="mt-6 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
            <li>Extra 5 stills — $350</li>
            <li>Extra AI UGC video — $300</li>
            <li>Extra language / localization — $150 per video</li>
            <li>Hero motion loop — $450</li>
            <li>Rush delivery — +25%</li>
            <li>Source file pack — $300</li>
            <li>Premium / global buyout rights — custom</li>
          </ul>
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            No hidden upsells. If a package needs expanded rights, extra volume,
            or rush handling, it is priced clearly before production starts.
          </p>
        </section>

        {/* Custom */}
        <section id="custom" className="mt-20 scroll-mt-28">
          <p className={sectionLabel}>Custom solutions</p>
          <h2 className="mt-3 text-2xl font-light tracking-tight text-neutral-950 dark:text-neutral-50 md:text-3xl">
            When the problem is strategic, custom beats cheap.
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-300">
            If one deliverable will not solve the real problem, start with a
            scoping call. These offers are for brands that need a bigger system, a
            launch framework, or ongoing creative operations.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {CUSTOM_CARDS.map((c) => (
              <div
                key={c.title}
                className="flex flex-col border border-neutral-200 p-5 dark:border-neutral-800"
              >
                <h3 className="text-lg font-medium text-neutral-950 dark:text-neutral-50">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  {c.price}
                </p>
                <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
                  {c.text}
                </p>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <a
                  href={LINKS.bookCall}
                  className={btnSecondary + " mt-6"}
                >
                  <span className="flex flex-col items-center">
                    <span>Book a call</span>
                    <span className="text-[11px] font-normal opacity-80">
                      Discuss scope &amp; timeline
                    </span>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Why us */}
        <section id="why-us" className="mt-20 scroll-mt-28">
          <p className={sectionLabel}>Why AIFashionArtists</p>
          <h2 className="mt-3 text-2xl font-light tracking-tight text-neutral-950 dark:text-neutral-50 md:text-3xl">
            Because premium output is not enough. It has to be usable.
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-300">
            A beautiful image that cannot scale, cannot align with your offer, or
            cannot survive real channel demands is still a production problem.
            Our edge is not just taste. It is taste translated into repeatable,
            commercial output.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                t: "Editorial eye, retail clarity",
                b: "The work is designed to feel premium and sellable at the same time.",
              },
              {
                t: "Real products, not fantasy placeholders",
                b: "We work from your product angles and references so details stay true.",
              },
              {
                t: "Systems, not random one-off outputs",
                b: "We codify the visual language so future content is easier to produce.",
              },
              {
                t: "Built for actual deployment",
                b: "Assets are prepared for pages, ads, social, launches, and testing, not just moodboards.",
              },
              {
                t: "Fast enough for modern content demand",
                b: "You get premium-looking work without traditional production drag.",
              },
              {
                t: "Clear boundaries, clear deliverables",
                b: "Scope, rights, revisions, and delivery are defined before production begins.",
              },
            ].map((r) => (
              <div key={r.t}>
                <h3 className="text-base font-medium text-neutral-950 dark:text-neutral-50">
                  {r.t}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {r.b}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mt-20">
          <p className={sectionLabel}>How we work</p>
          <h2 className="mt-3 text-2xl font-light tracking-tight text-neutral-950 dark:text-neutral-50 md:text-3xl">
            A simple process that keeps quality high and decisions clean.
          </h2>
          <ol className="mt-8 list-decimal space-y-6 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
            <li>
              <span className="font-medium text-neutral-900 dark:text-neutral-100">
                Scope —{" "}
              </span>
              We identify the offer, channels, constraints, and visual goal.
            </li>
            <li>
              <span className="font-medium text-neutral-900 dark:text-neutral-100">
                Systemize —{" "}
              </span>
              We define the visual direction, references, and rules that keep
              output consistent.
            </li>
            <li>
              <span className="font-medium text-neutral-900 dark:text-neutral-100">
                Produce —{" "}
              </span>
              We generate, refine, retouch, and structure deliverables around the
              actual use case.
            </li>
            <li>
              <span className="font-medium text-neutral-900 dark:text-neutral-100">
                Ship —{" "}
              </span>
              You receive channel-ready assets, documented choices, and a next-step
              path if you want to scale.
            </li>
          </ol>
          <p className="mt-6 text-sm font-medium text-neutral-900 dark:text-neutral-100">
            Less chaos. Better assets. Faster approvals.
          </p>
        </section>

        {/* Founder */}
        <section className="mt-20">
          <p className={sectionLabel}>Founder</p>
          <h2 className="mt-3 text-2xl font-light tracking-tight text-neutral-950 dark:text-neutral-50 md:text-3xl">
            Paris-trained fashion taste. Operator-built systems.
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-300">
            AIFashionArtists is led by Olga Vasilevsky, a Paris-trained fashion
            designer and creative director who combines editorial sensibility with
            e-commerce and content-ops discipline. The studio was built to solve a
            modern brand problem: how to create premium visual output at speed
            without sacrificing consistency, product truth, or commercial focus.
          </p>
          <ul className="mt-6 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
            <li>fashion design training in Paris</li>
            <li>experience building and operating online stores</li>
            <li>AI-assisted visual systems for brand consistency</li>
            <li>
              capable of campaign visuals, content engines, offer pages, and
              ongoing production logic
            </li>
          </ul>
          <div className="mt-8 flex max-w-md flex-col gap-3">
            <a href={LINKS.bookCall} className={btnPrimary}>
              Book a scoping call
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-20 scroll-mt-28">
          <p className={sectionLabel}>FAQ</p>
          <h2 className="mt-3 text-2xl font-light tracking-tight text-neutral-950 dark:text-neutral-50 md:text-3xl">
            Questions serious buyers usually ask.
          </h2>
          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
            No mystery. No bloated process. Just defined scope and strong output.
          </p>
          <div className="mt-8 divide-y divide-neutral-200 border border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
            {FAQS.map((item) => (
              <details key={item.q} className="group px-4 py-1">
                <summary className="cursor-pointer list-none py-3 text-sm font-medium text-neutral-950 outline-none marker:content-none dark:text-neutral-50 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-3">
                    {item.q}
                    <span className="shrink-0 text-neutral-400 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="pb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-20 border border-neutral-200 p-8 dark:border-neutral-800">
          <p className={sectionLabel}>Start here</p>
          <h2 className="mt-3 text-2xl font-light tracking-tight text-neutral-950 dark:text-neutral-50 md:text-3xl">
            Buy the smallest thing that solves today&apos;s problem.
          </h2>
          <p className="mt-2 text-2xl font-light tracking-tight text-neutral-950 dark:text-neutral-50 md:text-3xl">
            Book a call if the problem is bigger than one deliverable.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-neutral-700 dark:text-neutral-300">
            If you already know what you need, choose a package and move. If you
            need help structuring the right solution, book a scoping call and we
            will define the fastest path to a clean, premium outcome.
          </p>
          <div className="mt-8 flex max-w-md flex-col gap-3">
            <a href="#buy-now" className={btnPrimary}>
              <span className="flex flex-col items-center">
                <span>See buy-now packages</span>
                <span className="text-xs font-normal opacity-90">
                  Fixed prices above
                </span>
              </span>
            </a>
            <a href={LINKS.bookCall} className={btnSecondary}>
              <span className="flex flex-col items-center">
                <span>Book a scoping call</span>
                <span className="text-xs font-normal opacity-80">
                  Calendar link or email
                </span>
              </span>
            </a>
          </div>
          <p className="mt-6 text-xs text-neutral-500 dark:text-neutral-400">
            Clear scope. Clear pricing. Clear deliverables. No generic agency fog.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-neutral-200 pt-10 text-sm dark:border-neutral-800">
          <p className="font-medium text-neutral-950 dark:text-neutral-50">
            AIFashionArtists / AUMI4
          </p>
          <p className="mt-2 max-w-xl text-neutral-600 dark:text-neutral-400">
            AI fashion creative, campaign systems, AI UGC, offer pages, and
            brand-safe visual operations.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/offer" className="underline underline-offset-4">
              Offer
            </Link>
            <Link href="/about" className="underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="underline underline-offset-4">
              Contact
            </Link>
            <a
              href={LINKS.bookCall}
              className="underline underline-offset-4"
            >
              Book a call
            </a>
          </div>
          <p className="mt-8 text-xs text-neutral-500 dark:text-neutral-400">
            All work begins with defined scope, inputs, and usage terms. Custom
            rights and expanded production are priced separately where needed.
          </p>
        </footer>
      </main>

      {/* Mobile sticky CTA — two buttons, two lines of intent */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white/95 p-3 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95 md:hidden"
        role="region"
        aria-label="Quick actions"
      >
        <div className="mx-auto flex max-w-lg gap-2">
          <a href="#buy-now" className={btnPrimary + " flex-1 !min-h-[48px] !text-xs"}>
            <span className="flex flex-col leading-tight">
              <span>Buy a package</span>
              <span className="font-normal opacity-90">View prices</span>
            </span>
          </a>
          <a
            href={LINKS.bookCall}
            className={btnSecondary + " flex-1 !min-h-[48px] !text-xs"}
          >
            <span className="flex flex-col leading-tight">
              <span>Book a call</span>
              <span className="font-normal opacity-80">Scoping</span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
