/* =========================================================
   NYA hero — light motion wiring
   - Ensures autoplay for muted videos on strict browsers
   - Adds a very subtle pointer parallax to a few layers
     (off when the user prefers reduced motion)
   - All parallax offsets are written to CSS custom properties
     on the stage so layers can compose them with their own
     existing transforms (sky drift, shadow drift, etc).
   ========================================================= */

(() => {
  const prefersReduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  /* ----- 1. Guarantee video playback (muted autoplay rules) ----- */
  document.querySelectorAll('video').forEach((v) => {
    v.muted = true;
    v.playsInline = true;
    const tryPlay = () => v.play().catch(() => {});
    if (v.readyState >= 2) tryPlay();
    else v.addEventListener('canplay', tryPlay, { once: true });

    if (prefersReduced) {
      // Reduced motion: freeze after one frame so the scene is
      // still photographic but completely static.
      v.addEventListener('loadeddata', () => v.pause(), { once: true });
    }
  });

  if (prefersReduced) return; // Skip parallax entirely.

  /* ----- 2. Subtle pointer parallax -----
     We publish two custom properties (`--mx`, `--my`) on the
     stage element; each layer opts in via a CSS rule that reads
     those vars at the layer's own depth multiplier. This keeps
     motion composition clean and lets per-layer animations
     (sky drift, shadow drift) keep working in parallel.        */
  const stage = document.getElementById('stage');
  if (!stage) return;

  stage.style.setProperty('--mx', '0px');
  stage.style.setProperty('--my', '0px');

  let tx = 0, ty = 0, cx = 0, cy = 0;
  let raf = 0;

  const MAX = parseFloat(
    getComputedStyle(document.documentElement)
      .getPropertyValue('--parallax-strength')
  ) || 6;

  const onMove = (e) => {
    const r = stage.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width  - 0.5;
    const ny = (e.clientY - r.top)  / r.height - 0.5;
    tx = nx * MAX;
    ty = ny * (MAX * 0.6);
    if (!raf) raf = requestAnimationFrame(tick);
  };

  const onLeave = () => {
    tx = ty = 0;
    if (!raf) raf = requestAnimationFrame(tick);
  };

  // Smooth easing so parallax feels almost subconscious.
  const tick = () => {
    cx += (tx - cx) * 0.06;
    cy += (ty - cy) * 0.06;
    stage.style.setProperty('--mx', `${(-cx).toFixed(2)}px`);
    stage.style.setProperty('--my', `${(-cy).toFixed(2)}px`);
    if (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05) {
      raf = requestAnimationFrame(tick);
    } else {
      raf = 0;
    }
  };

  stage.addEventListener('pointermove', onMove, { passive: true });
  stage.addEventListener('pointerleave', onLeave, { passive: true });

  /* ----- 3. Gentle scroll reveals for below-the-fold sections.
     Each `.reveal` fades + rises a few pixels as it enters the
     viewport, then stays settled. We unobserve on first entry so
     re-scrolling past it doesn't re-trigger motion. */
  const revealTargets = document.querySelectorAll('.reveal');
  if (revealTargets.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('is-in');
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('is-in'));
  }

  /* ----- 4. Pause the two videos once the hero scrolls out of
     view — they're decorative, and paused videos save battery
     + decoder work on the rest of the page. */
  const hero = document.querySelector('.hero');
  if (hero && 'IntersectionObserver' in window) {
    const vids = hero.querySelectorAll('video');
    const hio = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          vids.forEach((v) => {
            if (en.isIntersecting) v.play().catch(() => {});
            else v.pause();
          });
        });
      },
      { threshold: 0.05 }
    );
    hio.observe(hero);
  }
})();
