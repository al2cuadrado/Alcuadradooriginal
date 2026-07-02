/* (al)²cuadrado — interacciones compartidas */
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  /* ── Entrada de página ── */
  document.body.classList.add('page-in');

  /* ── Salida suave al navegar ── */
  if (!reduceMotion) {
    document.querySelectorAll('a[href]').forEach((a) => {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;
      a.addEventListener('click', (e) => {
        if (e.metaKey || e.ctrlKey || a.target === '_blank') return;
        e.preventDefault();
        document.body.classList.add('page-out');
        setTimeout(() => { location.href = href; }, 320);
      });
    });
  }

  /* ── Header sticky con estado de scroll ── */
  const header = document.querySelector('.site-header');
  const onScrollHeader = () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  };
  onScrollHeader();
  window.addEventListener('scroll', onScrollHeader, { passive: true });

  /* ── Menú hamburguesa (mobile) ── */
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const open = header.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });
    document.querySelectorAll('.main-nav a').forEach((a) => {
      a.addEventListener('click', () => header.classList.remove('nav-open'));
    });
  }

  /* ── Split de titulares en líneas animadas ── */
  document.querySelectorAll('[data-split]').forEach((el) => {
    const words = el.innerHTML.trim().split(/\s+(?![^<]*>)/);
    el.innerHTML = words
      .map((w) => `<span class="w"><span class="wi">${w}</span></span>`)
      .join(' ');
    el.classList.add('split-ready');
  });

  /* ── Reveal on scroll con stagger ── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .split-ready').forEach((el) => io.observe(el));

  // stagger automático dentro de grillas
  document.querySelectorAll('.packs-cards, .branding-cards, .work-grid, .servicios-list, .form-grid, .strip3, .marca-gallery').forEach((grid) => {
    Array.from(grid.children).forEach((child, i) => {
      child.classList.add('reveal');
      child.style.transitionDelay = `${Math.min(i * 0.08, 0.5)}s`;
      io.observe(child);
    });
  });

  /* ── Parallax de imágenes flotantes y fondos ── */
  const pxItems = [];
  document.querySelectorAll('.float-img, .ast, .sticker-flor, .sticker-negro, .somos-sticker').forEach((el, i) => {
    pxItems.push({ el, speed: 0.05 + (i % 4) * 0.035 });
    el.classList.add('parallax');
  });
  const heroBg = document.querySelector('.hero-home .hero-bg');
  let ticking = false;
  const parallax = () => {
    ticking = false;
    const vh = window.innerHeight;
    pxItems.forEach(({ el, speed }) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      const delta = (r.top + r.height / 2 - vh / 2) * speed;
      el.style.setProperty('--py', `${-delta}px`);
    });
    if (heroBg) heroBg.style.transform = `translateY(${window.scrollY * 0.25}px) scale(1.08)`;
  };
  if (!reduceMotion && !isTouch) {
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(parallax); ticking = true; }
    }, { passive: true });
    parallax();
  }

  /* ── Cursor personalizado (solo desktop) ── */
  if (!isTouch && !reduceMotion) {
    const dot = document.createElement('div');
    dot.id = 'cursor-dot';
    const ring = document.createElement('div');
    ring.id = 'cursor-ring';
    document.body.append(dot, ring);
    let mx = -100, my = -100, rx = -100, ry = -100;
    window.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });
    (function loop() {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll('a, button, summary, input, textarea, select').forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  /* ── Botones magnéticos ── */
  if (!isTouch && !reduceMotion) {
    document.querySelectorAll('.btn, .pill, .nav-wsp').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.22;
        const y = (e.clientY - r.top - r.height / 2) * 0.32;
        btn.style.setProperty('--mx', `${x}px`);
        btn.style.setProperty('--my', `${y}px`);
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.setProperty('--mx', '0px');
        btn.style.setProperty('--my', '0px');
      });
    });
  }

  /* ── Acordeón animado: cierra los demás y anima la altura ── */
  document.querySelectorAll('.acordeon details').forEach((d) => {
    const body = d.querySelector('.acordeon-body');
    if (!body) return;
    d.addEventListener('toggle', () => {
      if (d.open) {
        d.closest('.acordeon').querySelectorAll('details[open]').forEach((o) => {
          if (o !== d) o.open = false;
        });
        if (!reduceMotion) {
          body.style.maxHeight = '0px';
          body.style.opacity = '0';
          requestAnimationFrame(() => {
            body.style.maxHeight = body.scrollHeight + 40 + 'px';
            body.style.opacity = '1';
          });
        }
      }
    });
  });

  /* ── Formulario Web3Forms ── */
  document.querySelectorAll('form.al-form').forEach((form) => {
    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const ok = form.querySelector('.form-ok');
      const original = btn.textContent;
      btn.textContent = 'ENVIANDO…';
      btn.disabled = true;
      try {
        const data = Object.fromEntries(new FormData(form).entries());
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
        const json = await res.json();
        if (json.success) {
          form.reset();
          ok.textContent = '¡Gracias! Recibimos tu mensaje y te contactaremos pronto.';
        } else {
          ok.textContent = 'Hubo un problema al enviar. Escribinos a alcuadrado.st@gmail.com';
        }
      } catch {
        ok.textContent = 'Hubo un problema al enviar. Escribinos a alcuadrado.st@gmail.com';
      }
      ok.classList.add('show');
      btn.textContent = original;
      btn.disabled = false;
    });
  });
})();
