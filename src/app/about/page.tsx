export const metadata = {
  title: "Olga Vasilevsky — AI Fashion Artist & Creative Director | AUMI4",
  description:
    "Paris-trained AI Fashion Artist & Creative Director. Campaign-ready images and short motion for luxury and DTC brands. Founder of AUMI4. Minimum engagement $3,000.",
};

export default function About() {
  const year = new Date().getFullYear();
  return (
    <main className="container mx-auto px-4 pb-24 pt-10 md:pt-16">
      <div className="rich mx-auto">
      <header>
        <h1>Olga Vasilevsky — Paris‑Trained AI Fashion Artist &amp; Creative Director</h1>
        <p>
          <strong>AI fashion images that look editorial and sell like ads.</strong> Paris <em>Bac in Fashion Design
          (LISSA)</em>. Founder of <strong>AUMI4</strong>, an AI‑automated fashion studio turning brand DNA into consistent,
          high‑performing visuals—fast, on‑brand, and at campaign quality.
        </p>
      </header>

      <section id="what-i-create" aria-labelledby="what-i-create-h2">
        <h2 id="what-i-create-h2">What I Create</h2>
        <p>
          I develop campaign key visuals for launches and homepages; paid‑social suites for Meta, TikTok, and YouTube
          with multi‑variant creative for rapid testing; e‑commerce alternates for PDPs and collection pages; lookbooks
          and capsule drops from teaser to close; AI muses and virtual stylists your brand can own; and short motion
          loops for hero sections and ads.
        </p>
      </section>

      <section id="why-brands-hire-me" aria-labelledby="why-h2">
        <h2 id="why-h2">Why Brands Hire Me</h2>
        <p>
          Editorial eye, retail clarity. I integrate real SKUs so details—hardware, stitching, silhouettes, and
          colorways—remain accurate. I codify a repeatable style system (lighting, angle, color language, background
          rules) so every asset reads unmistakably you. Taste is guided by testing, delivering controlled variation so
          performance decides the winner. Outputs are clean, unique, and rights‑clear.
        </p>
      </section>

      <section id="aumi4" aria-labelledby="aumi4-h2">
        <h2 id="aumi4-h2">AUMI4 — The Engine Behind the Art</h2>
        <p>
          AUMI4 is my AI‑powered studio where art direction and operations run as one: content, posting, SEO, copy,
          listing sync, email, and ads. You get faster creative cycles, consistent aesthetics, and feedback loops that
          sharpen each drop while protecting brand discipline.
        </p>
      </section>

      <section id="bio" aria-labelledby="bio-h2">
        <h2 id="bio-h2">My Path</h2>
        <p>
          I trained in Paris with a Bac in Fashion Design (LISSA), then built and ran multiple online stores. I
          automated growth end to end—Surfer‑driven SEO, content, social, and ads—letting data choose the next best
          creative move daily. In 2025 I focused that operating system on fashion imagery. Today I combine couture‑level
          taste with an operator’s discipline to deliver visuals that are beautiful, repeatable, and commercially sound.
          Based in Haifa; working globally in English, Français, Русский.
        </p>
      </section>

      <section id="process" aria-labelledby="process-h2">
        <h2 id="process-h2">How We’ll Work</h2>
        <p>
          We align on the story and non‑negotiables, codify a style system for consistency, produce with controlled AI
          generation and precision retouching grounded in your real products, and deliver high‑resolution images—and
          motion when helpful—in channel‑ready ratios with documentation for repeatability.
        </p>
      </section>

      <section id="deliverables" aria-labelledby="deliverables-h2">
        <h2 id="deliverables-h2">Deliverables</h2>
        <p>
          High‑res PNG/JPG; layered PSD on request; prompt notes and settings for continuity; usage summary aligned
          with your channels and territories.
        </p>
      </section>

      {/* Pricing section intentionally removed before publish */}

      <section id="faqs" aria-labelledby="faqs-h2">
        <h2 id="faqs-h2">FAQs</h2>
        <article>
          <h3>Can you match our brand look?</h3>
          <p>Yes—without derivative cloning. I build a repeatable style system specifically for your brand.</p>
        </article>
        <article>
          <h3>Can you feature our real products?</h3>
          <p>Yes. I work from your product angles so details remain true.</p>
        </article>
        <article>
          <h3>What about motion?</h3>
          <p>Short hero loops and ad‑ready cuts are available when motion elevates the story.</p>
        </article>
        <article>
          <h3>Do we get source files?</h3>
          <p>Layered PSD and prompt notes are available on request. You own the agreed usage.</p>
        </article>
      </section>

      <section id="cta" aria-labelledby="cta-h2">
        <h2 id="cta-h2">Let’s Make Images That Move Product</h2>
        <p>
          If you’re launching a collection, scaling paid spend, or refreshing your site, I’ll deliver art‑direction‑level
          visuals that are fast, consistent, and on brand. Email: <a className="underline" href="mailto:olga@aifashionartists.com">olga@aifashionartists.com</a>.
        </p>
        <p>
          <strong>Priority</strong> is given to launch‑critical briefs and premium retainer partners.
        </p>
        <p>
          <em>Olga Vasilevsky — AUMI4 | AI Fashion Artist &amp; Creative Director</em>
        </p>
      </section>

      <footer>
        <p>&copy; {year} AUMI4. All rights reserved.</p>
      </footer>
      </div>
    </main>
  );
}


