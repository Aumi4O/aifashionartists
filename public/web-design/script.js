/* ═══════════════════════════════════════════
   DCIP-LA — Conceptual Animated Site
   ═══════════════════════════════════════════ */

// ── HERO CANVAS — geometric lines + nodes ──

(function heroSection() {
  const canvas = document.getElementById('heroCanvas');
  const ctx = canvas.getContext('2d');
  let w, h, nodes, mouse = { x: -1000, y: -1000 };

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }

  function initNodes() {
    nodes = [];
    const count = Math.floor(w * h / 18000);
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() < 0.15 ? 4 + Math.random() * 6 : 2 + Math.random() * 2,
        isLarge: Math.random() < 0.15
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // vertical lines (architectural)
    ctx.strokeStyle = 'rgba(0, 25, 255, 0.04)';
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i += 3) {
      const n = nodes[i];
      ctx.beginPath();
      ctx.moveTo(n.x, n.y);
      ctx.lineTo(n.x, h);
      ctx.stroke();
    }

    // connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 180;
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.15;
          ctx.strokeStyle = `rgba(0, 25, 255, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // nodes
    for (const n of nodes) {
      const dx = mouse.x - n.x;
      const dy = mouse.y - n.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const hover = dist < 100;

      ctx.fillStyle = n.isLarge
        ? `rgba(0, 25, 255, ${hover ? 1 : 0.7})`
        : `rgba(0, 25, 255, ${hover ? 0.6 : 0.25})`;
      ctx.beginPath();
      ctx.rect(n.x - n.r / 2, n.y - n.r / 2, n.r, n.r);
      ctx.fill();

      // mouse repulsion
      if (dist < 150) {
        const force = (150 - dist) / 150 * 0.5;
        n.vx -= (dx / dist) * force;
        n.vy -= (dy / dist) * force;
      }

      n.x += n.vx;
      n.y += n.vy;
      n.vx *= 0.99;
      n.vy *= 0.99;

      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
      n.x = Math.max(0, Math.min(w, n.x));
      n.y = Math.max(0, Math.min(h, n.y));
    }

    requestAnimationFrame(draw);
  }

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  window.addEventListener('resize', () => { resize(); initNodes(); });
  resize();
  initNodes();
  draw();

  // Inject hero person — simple <img>, CSS handles white-bg removal
  const heroEl = document.getElementById('heroPerson');
  const heroImg = document.createElement('img');
  heroImg.src = PEOPLE.HERO_IMG;
  heroImg.alt = '';
  heroImg.draggable = false;
  heroEl.appendChild(heroImg);
})();


// ── NETWORK CANVAS — interactive clickable graph ──

(function networkSection() {
  const canvas = document.getElementById('networkCanvas');
  const ctx = canvas.getContext('2d');
  const section = document.getElementById('network');
  const infoPanel = document.getElementById('nodeInfo');
  let w, h, graphNodes = [], mouse = { x: -1000, y: -1000 }, hoveredNode = null;

  const nodeData = [
    { label: 'LACMA', desc: 'Los Angeles County Museum of Art — 150,000+ objects spanning 6,000 years of artistic expression.' },
    { label: 'The Broad', desc: 'Contemporary art museum with 2,000 works of postwar and contemporary art.' },
    { label: 'Getty Center', desc: 'Art museum and research center with pre-20th century European art and photography.' },
    { label: 'MOCA', desc: 'Museum of Contemporary Art — dedicated exclusively to contemporary art since 1979.' },
    { label: 'Hammer Museum', desc: 'Art museum and cultural center at UCLA with 50,000+ artworks.' },
    { label: 'Huntington', desc: 'Library, art museum, and botanical gardens with rare books and manuscripts.' },
    { label: 'CAAM', desc: 'California African American Museum — history, art, and culture.' },
    { label: 'API Hub', desc: 'Central API gateway managing federated queries across all connected institutions.' },
    { label: 'Data Mesh', desc: 'Decentralized data architecture enabling institutional data sovereignty.' },
    { label: 'Search Index', desc: 'Unified search across 2.4M cultural records with semantic understanding.' },
    { label: 'Auth Layer', desc: 'Federated identity and access management for institutional partners.' },
    { label: 'Skirball', desc: 'Skirball Cultural Center — Jewish cultural institution exploring connections.' },
    { label: 'Archive.org', desc: 'Internet Archive partnership for long-term digital preservation.' },
    { label: 'JANM', desc: 'Japanese American National Museum — largest institution dedicated to Japanese American experience.' },
    { label: 'Autry Museum', desc: 'Stories of the American West — diverse perspectives of the region.' },
    { label: 'Preservation', desc: 'Digital preservation layer ensuring long-term accessibility of cultural data.' },
  ];

  function resize() {
    w = canvas.width = section.offsetWidth;
    h = canvas.height = section.offsetHeight;
    layoutNodes();
  }

  function layoutNodes() {
    graphNodes = [];
    const centerX = w / 2;
    const centerY = h / 2;

    // Hierarchical layout: center hub, inner ring (tech), outer ring (institutions)
    const techNodes = nodeData.slice(7, 11); // API Hub, Data Mesh, Search, Auth
    const preserveNodes = nodeData.slice(15);
    const institutions = [...nodeData.slice(0, 7), ...nodeData.slice(11, 15), ...preserveNodes];

    // Center node
    graphNodes.push({
      x: centerX, y: centerY - 40,
      tx: centerX, ty: centerY - 40,
      r: 14, ...nodeData[7], // API Hub at center
      ring: 'center'
    });

    // Inner tech ring
    const innerR = Math.min(w, h) * 0.18;
    const techAll = [nodeData[8], nodeData[9], nodeData[10], nodeData[15]];
    techAll.forEach((d, i) => {
      const angle = (i / techAll.length) * Math.PI * 2 - Math.PI / 2;
      graphNodes.push({
        x: centerX + Math.cos(angle) * innerR,
        y: centerY - 40 + Math.sin(angle) * innerR,
        tx: centerX + Math.cos(angle) * innerR,
        ty: centerY - 40 + Math.sin(angle) * innerR,
        r: 8, ...d,
        ring: 'inner'
      });
    });

    // Outer ring — institutions
    const outerR = Math.min(w, h) * 0.38;
    institutions.forEach((d, i) => {
      const angle = (i / institutions.length) * Math.PI * 2 - Math.PI / 3;
      const jitter = (Math.random() - 0.5) * 30;
      graphNodes.push({
        x: centerX + Math.cos(angle) * (outerR + jitter),
        y: centerY - 40 + Math.sin(angle) * (outerR + jitter),
        tx: centerX + Math.cos(angle) * (outerR + jitter),
        ty: centerY - 40 + Math.sin(angle) * (outerR + jitter),
        r: 5 + Math.random() * 3, ...d,
        ring: 'outer'
      });
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // Draw vertical drop lines
    ctx.strokeStyle = 'rgba(0, 25, 255, 0.04)';
    ctx.lineWidth = 1;
    for (const n of graphNodes) {
      ctx.beginPath();
      ctx.moveTo(n.x, n.y);
      ctx.lineTo(n.x, h);
      ctx.stroke();
    }

    // Draw connections from center to inner
    for (let i = 1; i < 5 && i < graphNodes.length; i++) {
      drawConnection(graphNodes[0], graphNodes[i], 0.2);
    }

    // Draw connections from inner to outer
    for (let i = 5; i < graphNodes.length; i++) {
      // Connect to 2 closest inner nodes
      const sorted = graphNodes.slice(0, 5).sort((a, b) => {
        const da = Math.hypot(a.x - graphNodes[i].x, a.y - graphNodes[i].y);
        const db = Math.hypot(b.x - graphNodes[i].x, b.y - graphNodes[i].y);
        return da - db;
      });
      drawConnection(sorted[0], graphNodes[i], 0.08);
      drawConnection(sorted[1], graphNodes[i], 0.05);
    }

    // Draw nodes
    hoveredNode = null;
    for (const n of graphNodes) {
      const dx = mouse.x - n.x;
      const dy = mouse.y - n.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const isHovered = dist < n.r + 15;

      if (isHovered) hoveredNode = n;

      // Gentle float
      n.x = n.tx + Math.sin(Date.now() / 3000 + n.tx) * 2;
      n.y = n.ty + Math.cos(Date.now() / 2500 + n.ty) * 2;

      // Node square
      const size = isHovered ? n.r * 1.5 : n.r;
      ctx.fillStyle = isHovered
        ? 'rgba(0, 25, 255, 1)'
        : n.ring === 'center'
          ? 'rgba(0, 25, 255, 0.9)'
          : n.ring === 'inner'
            ? 'rgba(0, 25, 255, 0.6)'
            : 'rgba(0, 25, 255, 0.35)';
      ctx.beginPath();
      ctx.rect(n.x - size / 2, n.y - size / 2, size, size);
      ctx.fill();

      // Label
      if (isHovered || n.ring === 'center') {
        ctx.fillStyle = 'rgba(0, 25, 255, 0.9)';
        ctx.font = `${n.ring === 'center' ? 11 : 10}px "SF Mono", "Courier New", monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(n.label, n.x, n.y - n.r - 8);
      }
    }

    canvas.style.cursor = hoveredNode ? 'pointer' : 'default';
    requestAnimationFrame(draw);
  }

  function drawConnection(a, b, alpha) {
    ctx.strokeStyle = `rgba(0, 25, 255, ${alpha})`;
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    // Slight curve
    const mx = (a.x + b.x) / 2 + (Math.random() - 0.5) * 0.5;
    const my = (a.y + b.y) / 2 - 20;
    ctx.moveTo(a.x, a.y);
    ctx.quadraticCurveTo(mx, my, b.x, b.y);
    ctx.stroke();
  }

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => { mouse.x = -1000; mouse.y = -1000; });

  canvas.addEventListener('click', () => {
    if (hoveredNode) {
      infoPanel.querySelector('.node-info-title').textContent = hoveredNode.label;
      infoPanel.querySelector('.node-info-desc').textContent = hoveredNode.desc;
      infoPanel.classList.remove('hidden');
      infoPanel.classList.add('visible');
    }
  });

  infoPanel.querySelector('.node-info-close').addEventListener('click', () => {
    infoPanel.classList.remove('visible');
    infoPanel.classList.add('hidden');
  });

  window.addEventListener('resize', resize);
  resize();
  draw();
})();


// ── ARCHITECTURE CANVAS — blueprint lines + house structure ──

(function archSection() {
  const canvas = document.getElementById('archCanvas');
  const ctx = canvas.getContext('2d');
  const section = document.getElementById('architecture');
  let w, h;
  let beams = [];

  function resize() {
    w = canvas.width = section.offsetWidth;
    h = canvas.height = section.offsetHeight;
    initBeams();
  }

  function initBeams() {
    beams = [];
    const peakX = w / 2;
    const peakY = h * 0.12;
    const baseY = h * 0.72;
    const cols = 24;

    // Roof beams from peak
    for (let i = 0; i < cols; i++) {
      const t = i / (cols - 1);
      const baseX = w * 0.05 + t * w * 0.9;
      beams.push({
        x1: peakX, y1: peakY,
        x2: baseX, y2: baseY,
        phase: i * 0.3
      });
    }

    // Horizontal structural lines
    for (let j = 0; j < 6; j++) {
      const y = peakY + (baseY - peakY) * (j / 5);
      beams.push({
        x1: w * 0.05, y1: y,
        x2: w * 0.95, y2: y,
        phase: j * 0.5,
        isHorizontal: true
      });
    }

    // Vertical columns
    for (let i = 0; i < 12; i++) {
      const x = w * 0.08 + (w * 0.84) * (i / 11);
      beams.push({
        x1: x, y1: baseY,
        x2: x, y2: h,
        phase: i * 0.4,
        isVertical: true
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const t = Date.now() / 1000;

    for (const b of beams) {
      const pulse = Math.sin(t + b.phase) * 0.5 + 0.5;
      const alpha = b.isHorizontal ? 0.08 + pulse * 0.06
        : b.isVertical ? 0.05 + pulse * 0.03
        : 0.06 + pulse * 0.08;

      ctx.strokeStyle = `rgba(0, 25, 255, ${alpha})`;
      ctx.lineWidth = b.isHorizontal ? 0.8 : 0.6;
      ctx.beginPath();
      ctx.moveTo(b.x1, b.y1);
      ctx.lineTo(b.x2, b.y2);
      ctx.stroke();
    }

    // Junction nodes at intersections
    const peakX = w / 2;
    const peakY = h * 0.12;
    const baseY = h * 0.72;

    // Peak node
    ctx.fillStyle = 'rgba(0, 25, 255, 0.8)';
    ctx.fillRect(peakX - 5, peakY - 5, 10, 10);

    // Base nodes
    for (let i = 0; i < 24; i++) {
      const bx = w * 0.05 + (i / 23) * w * 0.9;
      const pulse = Math.sin(t * 2 + i * 0.4) * 0.3 + 0.5;
      ctx.fillStyle = `rgba(0, 25, 255, ${pulse})`;
      const s = 3 + pulse * 2;
      ctx.fillRect(bx - s / 2, baseY - s / 2, s, s);
    }

    // Bottom labels
    const labels = ['OBJECT STORE', 'METADATA', 'LINKED DATA', 'SEARCH ENGINE', 'AUTH/IDENTITY', 'CDN', 'ARCHIVAL NODE', 'ANALYTICS', 'PRESERVATION', 'API GATEWAY'];
    ctx.fillStyle = 'rgba(0, 25, 255, 0.35)';
    ctx.font = '9px "SF Mono", "Courier New", monospace';
    ctx.textAlign = 'center';
    labels.forEach((lbl, i) => {
      const x = w * 0.08 + (w * 0.84) * (i / (labels.length - 1));
      ctx.fillText(lbl, x, baseY + 20);
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
})();


// ── WALKING PEOPLE IN ARCHITECTURE SECTION — PNG silhouettes, CSS-tinted blue ──

(function walkingPeople() {
  const group = document.getElementById('walkersGroup');
  const walkers = [];

  const layout = [
    { imgIdx: 0, x: 5,  size: 100, speed: 0.25, dir: 1 },   // backpack
    { imgIdx: 1, x: 18, size: 110, speed: 0.15, dir: 1 },   // standing
    { imgIdx: 2, x: 32, size: 90,  speed: 0.28, dir: -1 },  // woman-bag
    { imgIdx: 3, x: 46, size: 95,  speed: 0.22, dir: 1 },   // women-pair
    { imgIdx: 4, x: 62, size: 100, speed: 0.12, dir: 1 },   // bicycle
    { imgIdx: 5, x: 78, size: 105, speed: 0.30, dir: -1 },  // man-coat
  ];

  layout.forEach(cfg => {
    const el = document.createElement('div');
    el.className = 'person-walker';

    const img = document.createElement('img');
    img.src = PEOPLE.GROUP_IMGS[cfg.imgIdx];
    img.draggable = false;
    img.style.height = cfg.size + 'px';
    img.style.width = 'auto';

    if (cfg.dir < 0) el.classList.add('facing-left');

    el.style.animationDuration = `${0.9 + Math.random() * 0.6}s`;
    el.style.animationDelay = `${Math.random() * 1}s`;

    el.appendChild(img);
    group.appendChild(el);
    walkers.push({ el, x: cfg.x, speed: cfg.speed, dir: cfg.dir });
  });

  function animate() {
    for (const w of walkers) {
      w.x += w.speed * w.dir * 0.015;
      if (w.x > 105) w.x = -8;
      if (w.x < -8) w.x = 105;
      w.el.style.left = `${w.x}%`;
    }
    requestAnimationFrame(animate);
  }

  animate();
})();


// ── BLUE CIRCLE INTERACTION ──

document.getElementById('blueCircle').addEventListener('click', function () {
  this.classList.add('clicked');
  setTimeout(() => this.classList.remove('clicked'), 600);
});


// ── SCROLL REVEALS ──

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));


// ── COUNTER ANIMATION ──

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const stat = entry.target;
      const target = parseInt(stat.dataset.count);
      const numEl = stat.querySelector('.stat-num');
      let current = 0;
      const duration = 2000;
      const start = Date.now();

      function tick() {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        current = Math.floor(eased * target);

        if (target >= 1000000) {
          numEl.textContent = (current / 1000000).toFixed(1) + 'M';
        } else if (target >= 1000) {
          numEl.textContent = Math.floor(current / 1000) + 'K';
        } else {
          numEl.textContent = current;
        }

        if (progress < 1) requestAnimationFrame(tick);
      }

      tick();
      counterObserver.unobserve(stat);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(el => counterObserver.observe(el));


// ── HERO SCROLL CLICK ──

document.querySelector('.hero-scroll').addEventListener('click', () => {
  document.getElementById('network').scrollIntoView({ behavior: 'smooth' });
});
