import Image from "next/image";
import Link from "next/link";
import { BOOK_CALL_URL } from "@/lib/booking";

const portraitSrc =
  process.env.NEXT_PUBLIC_ABOUT_PORTRAIT_URL?.trim() || "/about/portrait.png";

export const metadata = {
  title: "About — Olga Vasilevsky | AI Fashion Artists / AUMI4 & Lead Agents Studio",
  description:
    "Paris-trained fashion designer and AI creative director. Editorial creative, premium web, brand systems, and AI agents for voice, leads, and automation.",
};

const sectionLabel =
  "text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400";

const btnPrimary =
  "inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center border-2 border-neutral-900 bg-neutral-900 px-5 py-3 text-center text-sm font-medium leading-snug text-white transition-colors hover:bg-neutral-800 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-white";

const btnSecondary =
  "inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center border-2 border-neutral-900 bg-transparent px-5 py-3 text-center text-sm font-medium leading-snug text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-100 dark:text-neutral-100 dark:hover:bg-white/10";

const AUMI4_BULLETS = [
  "Editorial-grade AI creative",
  "Campaign visuals and paid social assets",
  "Landing pages and premium web design",
  "Brand visual systems",
  "Content automation and brand voice infrastructure",
];

const LEAD_AGENTS_BULLETS = [
  "AI agents development",
  "Voice agents for calls, SMS, and WhatsApp",
  "Lead follow-up and qualification systems",
  "Automation that connects marketing, conversation, and conversion",
];

export default function About() {
  const year = new Date().getFullYear();
  const anchorNav = [
    { href: "#intro", label: "Intro" },
    { href: "#what-i-build", label: "What I build" },
    { href: "#approach", label: "Approach" },
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
            <Link
              href="/pricing"
              className={btnSecondary + " !min-h-0 !py-1.5 !px-3 !text-xs"}
            >
              Pricing
            </Link>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={btnPrimary + " !min-h-0 !py-1.5 !px-3 !text-xs"}
            >
              Book a call
            </a>
          </span>
        </div>
      </nav>

      <main className="container mx-auto max-w-4xl px-4 pb-28 pt-10 md:pb-20 md:pt-14">
        <section id="intro" className="scroll-mt-28">
          <p className={sectionLabel}>About</p>

          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,340px)] lg:items-start lg:gap-12">
            <div>
              <h1 className="text-3xl font-light leading-tight tracking-tight text-neutral-950 dark:text-neutral-50 md:text-4xl lg:text-[2.75rem]">
                Olga Vasilevsky
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                Paris-trained fashion designer, AI creative director, and
                founder building where editorial taste, commerce, and AI systems
                meet.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                Founder of{" "}
                <strong className="font-medium text-neutral-950 dark:text-neutral-50">
                  AI Fashion Artists / AUMI4
                </strong>
                . The second lane of my work is{" "}
                <strong className="font-medium text-neutral-950 dark:text-neutral-50">
                  Lead Agents Studio
                </strong>
                , focused on{" "}
                <strong className="font-medium text-neutral-950 dark:text-neutral-50">
                  AI agents development
                </strong>
                , voice systems, and business automation built to help companies
                respond faster, follow up better, and convert more of the demand
                they already generate.
              </p>
              <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-neutral-900 dark:text-neutral-100">
                I build creative and systems that are meant to be used, not just
                admired.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                Through{" "}
                <strong className="font-medium text-neutral-950 dark:text-neutral-50">
                  AI Fashion Artists / AUMI4
                </strong>
                , I create campaign visuals, launch imagery, premium web
                experiences, brand visual systems, and content engines for brands
                that need to look expensive and move fast.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                Through{" "}
                <strong className="font-medium text-neutral-950 dark:text-neutral-50">
                  Lead Agents Studio
                </strong>
                , I build AI agents, voice agents, and conversion workflows that
                close the gap between attention and action.
              </p>
              <div className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/pricing" className={btnPrimary}>
                  View packages &amp; buy
                </Link>
                <a
                  href={BOOK_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnSecondary}
                >
                  Book a scoping call
                </a>
              </div>
              <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
                Based in Haifa · English, French, Russian · working globally
              </p>
            </div>

            <figure className="mx-auto w-full max-w-[320px] lg:mx-0 lg:max-w-none">
              <div className="relative aspect-[3/4] overflow-hidden border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
                <Image
                  src={portraitSrc}
                  alt="Olga Vasilevsky — portrait"
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="(min-width: 1024px) 340px, 320px"
                  priority
                />
              </div>
            </figure>
          </div>
        </section>

        <section id="what-i-build" className="mt-20 scroll-mt-28">
          <p className={sectionLabel}>Capabilities</p>
          <h2 className="mt-3 text-2xl font-light tracking-tight text-neutral-950 dark:text-neutral-50 md:text-3xl">
            What I build
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="border border-neutral-200 p-6 dark:border-neutral-800">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-950 dark:text-neutral-50">
                AI Fashion Artists / AUMI4
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                {AUMI4_BULLETS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="border border-neutral-200 p-6 dark:border-neutral-800">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-950 dark:text-neutral-50">
                Lead Agents Studio
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                {LEAD_AGENTS_BULLETS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="approach" className="mt-20 scroll-mt-28">
          <p className={sectionLabel}>Background</p>
          <h2 className="mt-3 text-2xl font-light tracking-tight text-neutral-950 dark:text-neutral-50 md:text-3xl">
            Taste and operator logic
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            <p>
              My background started in Paris, where I trained in fashion design
              and developed the visual discipline that still shapes my work
              today. From there, I built and ran online stores, learned how
              brands actually grow, and started using AI not as decoration, but
              as infrastructure.
            </p>
            <p>
              The result is a way of working that combines taste with operator
              logic: strong visuals, clear systems, faster execution, and output
              that stays aligned with the brand.
            </p>
          </div>
        </section>

        <section
          id="cta"
          className="mt-20 scroll-mt-28 border border-neutral-200 p-8 dark:border-neutral-800"
        >
          <p className={sectionLabel}>Work with me</p>
          <h2 className="mt-3 text-2xl font-light tracking-tight text-neutral-950 dark:text-neutral-50 md:text-3xl">
            Closing the gap between attention and action
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            If you need stronger visuals, a sharper digital presence, or AI
            systems that make the business easier to buy from, that is the work
            I do.
          </p>
          <p className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">
            Email:{" "}
            <a
              href="mailto:partner@aifashionartists.com"
              className="font-medium text-neutral-950 underline underline-offset-4 dark:text-neutral-50"
            >
              partner@aifashionartists.com
            </a>
          </p>
          <div className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className={btnPrimary}>
              Contact form
            </Link>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={btnSecondary}
            >
              Book a call
            </a>
          </div>
          <p className="mt-8 text-sm text-neutral-500 dark:text-neutral-400">
            Olga Vasilevsky · AI Fashion Artists / AUMI4 · Lead Agents Studio
          </p>
        </section>

        <footer className="mt-16 border-t border-neutral-200 pt-8 dark:border-neutral-800">
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            &copy; {year} AUMI4. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
