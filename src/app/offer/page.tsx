export const metadata = {
  title: "Offer — Professional Visual Systems | AUMI4",
  description:
    "We build professional, brand‑safe visual systems that ship client‑ready work at scale—every time.",
};

export default function OfferPage() {
  return (
    <main className="container mx-auto px-4 pb-24 pt-10 md:pt-16">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-light tracking-tight">
          If your visuals don’t move the numbers, they’re decoration.
        </h1>
        <p className="mt-3 text-neutral-700">
          We build professional, brand‑safe visual systems that ship client‑ready work at
          scale—every time.
        </p>
        <div className="flex gap-3 mt-5 flex-wrap">
          <a className="rounded-md border px-4 py-2" href="mailto:partner@aifashionartists.com">
            Book a Scoping Call
          </a>
          <a className="rounded-md border px-4 py-2" href="#deliverables-pricing">
            See Deliverables &amp; Pricing
          </a>
        </div>
      </header>

      <section id="why-this-matters" className="mt-10 max-w-3xl">
        <h2 className="text-xl font-medium">Why this matters (in one breath)</h2>
        <p className="mt-2 text-neutral-800">
          Your audience doesn’t reward experiments. They reward clarity, consistency, and speed. We
          turn raw AI outputs into campaign‑ready visuals, automated content engines, and
          launch‑level creative tied directly to engagement, conversion, and cost per asset.
        </p>
      </section>

      <section id="deliverables-pricing" className="mt-10 max-w-3xl">
        <h2 className="text-xl font-medium">The Offer—Plain and Simple</h2>
        <p className="mt-2">Choose one system or combine all three.</p>

        <article className="mt-6">
          <h3 className="text-lg font-medium">1) Brand Visual System Implementation</h3>
          <p className="mt-1">
            <strong>Build your always‑on, on‑brand visual engine.</strong>
          </p>
          <h4 className="mt-3 font-medium">What you get</h4>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>A Master Prompt Library encoded with your brand standards</li>
            <li>Trained brand references for consistent results</li>
            <li>Quality gates for color, typography, logo use, and specs</li>
            <li>Playbooks + training so your team can run it without guesswork</li>
          </ul>
          <h4 className="mt-3 font-medium">Why it pays</h4>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>Unlimited on‑brand variations at marginal cost</li>
            <li>Consistency across every touchpoint</li>
          </ul>
          <p className="mt-1 italic">Typical investment: $3,000–$8,000 depending on scope and rights</p>
        </article>

        <article className="mt-6">
          <h3 className="text-lg font-medium">2) Content Production Automation (Monthly Retainer)</h3>
          <p className="mt-1">
            <strong>Your content calendar, generated and ready to publish.</strong>
          </p>
          <h4 className="mt-3 font-medium">What you get</h4>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>Living content calendar tied to business goals and launch moments</li>
            <li>Generation workflows for product, lifestyle, and editorial assets</li>
            <li>Performance loop: A/B variants, winners scaled, losers retired</li>
            <li>QA on every file across formats and channels</li>
          </ul>
          <h4 className="mt-3 font-medium">Why it pays</h4>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>Reliable volume without hiring sprees</li>
            <li>Measured improvements to engagement and conversion</li>
          </ul>
          <p className="mt-1 italic">Typical retainer: $2,000–$5,000/month</p>
        </article>

        <article className="mt-6">
          <h3 className="text-lg font-medium">3) Campaign Creative Systems</h3>
          <p className="mt-1">
            <strong>Concept‑to‑launch creative with testable variations.</strong>
          </p>
          <h4 className="mt-3 font-medium">What you get</h4>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>A strategic brief tied to a commercial goal</li>
            <li>Multiple creative territories you can test quickly</li>
            <li>A/B asset sets for ads, PDP, email, social, and OOH</li>
            <li>Optimization protocols to improve mid‑flight</li>
          </ul>
          <h4 className="mt-3 font-medium">Why it pays</h4>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>Faster launches, more shots on goal, better ROAS via iteration</li>
          </ul>
          <p className="mt-1 italic">Typical project: $5,000–$15,000</p>
        </article>
      </section>

      <section id="cta" className="mt-12 max-w-3xl">
        <h2 className="text-xl font-medium">If you skimmed, read this</h2>
        <p className="mt-2">
          We don’t sell AI tricks. We install a visual system that produces on‑brand, ready‑to‑ship
          creative at scale—and ties it to outcomes you can measure.
        </p>
        <div className="flex gap-3 mt-4">
          <a className="rounded-md border px-4 py-2" href="mailto:partner@aifashionartists.com">
            Reserve Your Slot
          </a>
        </div>
      </section>
    </main>
  );
}


