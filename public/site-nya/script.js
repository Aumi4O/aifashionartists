(function () {
    const header = document.getElementById('siteHeader');
    const menuBtn = document.getElementById('menuBtn');
    const menuOverlay = document.getElementById('menuOverlay');
    const yearEl = document.getElementById('year');

    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Header becomes opaque / bordered after slight scroll
    const onScroll = () => {
        if (!header) return;
        if (window.scrollY > 12) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Menu overlay toggle
    if (menuBtn && menuOverlay) {
        const toggleMenu = (force) => {
            const willOpen = typeof force === 'boolean'
                ? force
                : !menuOverlay.classList.contains('is-open');
            menuOverlay.classList.toggle('is-open', willOpen);
            menuOverlay.setAttribute('aria-hidden', String(!willOpen));
            menuBtn.classList.toggle('is-open', willOpen);
            menuBtn.setAttribute('aria-expanded', String(willOpen));
            document.body.style.overflow = willOpen ? 'hidden' : '';
        };

        menuBtn.addEventListener('click', () => toggleMenu());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') toggleMenu(false);
        });

        // Close overlay when clicking any menu link
        menuOverlay.querySelectorAll('a').forEach((a) => {
            a.addEventListener('click', () => toggleMenu(false));
        });
    }

    // If hero video fails to load / has no source, keep placeholder visible.
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        const source = heroVideo.querySelector('source');
        const hide = () => heroVideo.style.opacity = '0';
        const show = () => heroVideo.style.opacity = '1';

        heroVideo.style.transition = 'opacity 0.6s ease';
        heroVideo.style.opacity = '0';

        heroVideo.addEventListener('loadeddata', show);
        heroVideo.addEventListener('error', hide);

        // If no source or empty src, hide video so placeholder shows.
        if (!source || !source.getAttribute('src')) {
            hide();
        } else {
            // Probe the file existence — if 404, keep hidden.
            fetch(source.getAttribute('src'), { method: 'HEAD' })
                .then((r) => { if (!r.ok) hide(); })
                .catch(() => hide());
        }
    }

    // Pre-fill reservation bar with sensible default dates (tomorrow / +4 days)
    const arriveEl = document.getElementById('r-arrive');
    const departEl = document.getElementById('r-depart');
    if (arriveEl && departEl) {
        const fmt = (d) => d.toISOString().slice(0, 10);
        const today = new Date();
        const arrive = new Date(today);
        arrive.setDate(today.getDate() + 1);
        const depart = new Date(today);
        depart.setDate(today.getDate() + 4);
        arriveEl.value = fmt(arrive);
        departEl.value = fmt(depart);
        arriveEl.min = fmt(today);
        departEl.min = fmt(arrive);
        arriveEl.addEventListener('change', () => {
            departEl.min = arriveEl.value;
            if (departEl.value && departEl.value <= arriveEl.value) {
                const d = new Date(arriveEl.value);
                d.setDate(d.getDate() + 3);
                departEl.value = fmt(d);
            }
        });
    }

    // Category tile click — for now just visually mark as selected
    document.querySelectorAll('.cat-tile').forEach((tile) => {
        tile.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.cat-tile').forEach((t) => t.classList.remove('is-active'));
            tile.classList.add('is-active');
        });
    });

    // Subtle fade-in on scroll for individual cards / headings
    if ('IntersectionObserver' in window) {
        const revealTargets = document.querySelectorAll(
            '.reserve-form, .featured-heading, .feature-card, .categories-intro, .cat-group, .seasonal-intro, .season-card, .world-title, .world-card, .newsletter-inner'
        );
        revealTargets.forEach((el) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(14px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        });
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
        revealTargets.forEach((el) => io.observe(el));
    }
})();
