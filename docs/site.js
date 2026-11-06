(function () {
  try { history.scrollRestoration = 'manual'; } catch (e) {}
  (function startTop() {
    var h = (location.hash || '').slice(1), target = h && h !== 'ar' && h !== 'en' && h.indexOf('pkg-') !== 0 ? document.getElementById(h) : null;
    if (target) return;
    var html = document.documentElement, prev = html.style.scrollBehavior; html.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0); window.addEventListener('load', function () { window.scrollTo(0, 0); html.style.scrollBehavior = prev; });
  })();
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;
  var ICON = {
    check: '<path d="M5 12l5 5 9-10"/>',
    car: '<path d="M5 16l1.6-5.2A2 2 0 0 1 8.5 9.4h7a2 2 0 0 1 1.9 1.4L19 16"/><rect x="3" y="15" width="18" height="4" rx="1.5"/><circle cx="7.5" cy="19" r="1.4"/><circle cx="16.5" cy="19" r="1.4"/>',
    box: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5l8 4.5 8-4.5M12 12v9"/>',
    cart: '<path d="M3 4h2l2.4 11h10.8L21 8H7"/><circle cx="9.5" cy="19.5" r="1.4"/><circle cx="17.5" cy="19.5" r="1.4"/>',
    cal: '<rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M21 20H3"/>',
    alert: '<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17.5v.01"/>',
    doc: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
    scan: '<path d="M4 8V5h3M20 8V5h-3M4 16v3h3M20 16v3h-3M7 12h10"/>',
    cash: '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/>'
  };
  function svg(name) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICON[name] || ICON.check) + '</svg>'; }
  function isAr() { return root.lang === 'ar'; }
  var hooks = [];

  /* ---------- language ---------- */
  function applyLang(l) {
    var ar = l === 'ar';
    root.lang = ar ? 'ar' : 'en'; root.dir = ar ? 'rtl' : 'ltr';
    document.querySelectorAll('img[data-ar-src]').forEach(function (im) {
      if (!im.getAttribute('data-en-src')) im.setAttribute('data-en-src', im.getAttribute('src'));
      im.setAttribute('src', ar ? im.getAttribute('data-ar-src') : im.getAttribute('data-en-src'));
    });
    document.querySelectorAll('[alt][data-ar]').forEach(function (el) {
      if (!el.hasAttribute('data-en')) el.setAttribute('data-en', el.getAttribute('alt'));
      el.setAttribute('alt', ar ? el.getAttribute('data-ar') : el.getAttribute('data-en'));
    });
    document.querySelectorAll('[aria-label][data-ar]').forEach(function (el) {
      if (!el.hasAttribute('data-en')) el.setAttribute('data-en', el.getAttribute('aria-label'));
      el.setAttribute('aria-label', ar ? el.getAttribute('data-ar') : el.getAttribute('data-en'));
    });
    document.querySelectorAll('option[data-ar]').forEach(function (o) {
      if (!o.hasAttribute('data-en')) o.setAttribute('data-en', o.textContent);
      o.textContent = ar ? o.getAttribute('data-ar') : o.getAttribute('data-en');
    });
    document.querySelectorAll('[data-ph-ar]').forEach(function (el) {
      if (!el.hasAttribute('data-ph-en')) el.setAttribute('data-ph-en', el.getAttribute('placeholder') || '');
      el.setAttribute('placeholder', ar ? el.getAttribute('data-ph-ar') : el.getAttribute('data-ph-en'));
    });
    hooks.forEach(function (h) { h(); });
    if (window.AZS) AZS.set('l', root.lang); else try { localStorage.setItem('azuum-lang', root.lang); } catch (e) {}
  }
  document.querySelectorAll('[data-lang-toggle]').forEach(function (b) { b.addEventListener('click', function () { applyLang(isAr() ? 'en' : 'ar'); }); });

  /* ---------- theme ---------- */
  var saved = window.AZS ? AZS.get('t') : null; if (saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved);
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function effTheme() { var cur = root.getAttribute('data-theme'); var dark = cur ? cur === 'dark' : !!(mq && mq.matches); root.setAttribute('data-eff', dark ? 'dark' : 'light'); return dark; }
  effTheme(); if (mq && mq.addEventListener) mq.addEventListener('change', effTheme);
  document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
    b.addEventListener('click', function () {
      var next = effTheme() ? 'light' : 'dark'; root.setAttribute('data-theme', next); effTheme();
      if (window.AZS) AZS.set('t', next); else try { localStorage.setItem('azuum-theme', next); } catch (e) {}
    });
  });

  /* ---------- mobile menu ---------- */
  var mb = document.querySelector('.menu-btn'), nav = document.querySelector('.nav');
  if (mb && nav) mb.addEventListener('click', function () { var o = nav.classList.toggle('open'); mb.setAttribute('aria-expanded', o ? 'true' : 'false'); });
  var ind = nav && nav.querySelector('.nav-ind'), curL = nav && nav.querySelector('a[aria-current="page"]');
  function moveInd(el) {
    if (!ind) return;
    if (!el || getComputedStyle(ind).display === 'none') { ind.style.opacity = 0; return; }
    var nr = nav.getBoundingClientRect(), r = el.getBoundingClientRect();
    var nl = (r.left - nr.left) + 'px'; if (ind.style.left && ind.style.left !== nl && !reduce) { ind.classList.add('moving'); clearTimeout(ind._mt); ind._mt = setTimeout(function () { ind.classList.remove('moving'); }, 260); }
    ind.style.left = nl; ind.style.width = r.width + 'px'; ind.style.opacity = 1;
    nav.querySelectorAll('a').forEach(function (a) { a.classList.toggle('hot-l', a === el); });
  }
  if (nav && ind) {
    nav.querySelectorAll('a:not(.nav-cta)').forEach(function (a) { a.addEventListener('mouseenter', function () { moveInd(a); }); a.addEventListener('focus', function () { moveInd(a); }); });
    nav.addEventListener('mouseleave', function () { moveInd(curL); });
    window.addEventListener('resize', function () { moveInd(curL); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { moveInd(curL); });
    setTimeout(function () { moveInd(curL); }, 60);
    hooks.push(function () { setTimeout(function () { moveInd(curL); }, 30); });
  }
  var topEl = document.querySelector('.top');
  if (topEl) { var sc = function () { topEl.classList.toggle('scrolled', window.scrollY > 24); }; sc(); window.addEventListener('scroll', sc, { passive: true }); }
  document.addEventListener('click', function (e) { if (nav && nav.classList.contains('open') && !nav.contains(e.target) && !mb.contains(e.target)) { nav.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); } });

  /* ---------- video modal ---------- */
  var dlg = document.getElementById('vmodal'), vid = document.getElementById('vplayer');
  function openVideo() {
    if (!dlg) return;
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
    try { var p = vid.play(); if (p && p.catch) p.catch(function () {}); } catch (e) {}
  }
  function closeVideo() { if (!dlg) return; try { vid.pause(); } catch (e) {} if (dlg.close) dlg.close(); else dlg.removeAttribute('open'); }
  document.querySelectorAll('[data-video-open]').forEach(function (b) { b.addEventListener('click', openVideo); });
  document.querySelectorAll('[data-video-close]').forEach(function (b) { b.addEventListener('click', closeVideo); });
  if (dlg) {
    dlg.addEventListener('click', function (e) { if (e.target === dlg) closeVideo(); });
    dlg.addEventListener('close', function () { try { vid.pause(); } catch (e) {} });
  }

  /* ---------- reel stage ---------- */
  var reel = document.querySelector('[data-reel]');
  if (reel) {
    var figs = reel.querySelectorAll('.screens figure'), tabs = document.querySelectorAll('.reel-tabs button'),
        pops = reel.querySelector('.pops'), label = reel.querySelector('[data-reel-label]'), stage = document.querySelector('.stage');
    var i = 0, timer = null, DUR = 3800, paused = false;
    function render(n, quiet) {
      figs.forEach(function (f, k) { f.classList.toggle('is-on', k === n); f.classList.toggle('is-off', k !== n && f.classList.contains('was')); f.classList.toggle('was', k === n); });
      tabs.forEach(function (t, k) { t.classList.toggle('is-on', k === n); t.classList.toggle('is-done', k < n); t.setAttribute('aria-selected', k === n ? 'true' : 'false'); });
      var data = JSON.parse(figs[n].getAttribute(isAr() ? 'data-pops-ar' : 'data-pops'));
      pops.innerHTML = data.map(function (p) { return '<div class="pop ' + (p[3] || '') + '"' + (quiet ? ' style="animation-duration:0s,5s"' : '') + '><span class="dot">' + svg(p[0]) + '</span><span><small>' + p[1] + '</small>' + p[2] + '</span></div>'; }).join('');
      if (label) label.textContent = figs[n].getAttribute(isAr() ? 'data-label-ar' : 'data-label');
    }
    function go(n) { i = (n + figs.length) % figs.length; render(i); schedule(); }
    function schedule() { clearTimeout(timer); if (!reduce && !paused) timer = setTimeout(function () { go(i + 1); }, DUR); }
    tabs.forEach(function (t, k) { t.addEventListener('click', function () { go(k); }); });
    stage.style.setProperty('--dur', DUR + 'ms');
    stage.addEventListener('mouseenter', function () { paused = true; stage.classList.add('paused'); clearTimeout(timer); });
    stage.addEventListener('mouseleave', function () { paused = false; stage.classList.remove('paused'); schedule(); });
    document.addEventListener('visibilitychange', function () { if (document.hidden) clearTimeout(timer); else schedule(); });
    if (!reduce) stage.addEventListener('pointermove', function (e) {
      var r = stage.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      reel.style.setProperty('--ry', (x * 8).toFixed(2) + 'deg'); reel.style.setProperty('--rx', (12 - y * 6).toFixed(2) + 'deg');
    });
    hooks.push(function () { render(i, true); });
    render(0); schedule();
  }

  /* ---------- hero status rail ---------- */
  var rail = document.querySelectorAll('[data-rail] .st');
  if (rail.length && !reduce) { var ri = 0; setInterval(function () { rail.forEach(function (s, k) { s.classList.toggle('on', k === ri); }); ri = (ri + 1) % rail.length; }, 1400); }

  /* ---------- lifecycle track ---------- */
  document.querySelectorAll('[data-track]').forEach(function (tr) {
    var steps = tr.querySelectorAll('.step'), n = 0;
    function set(k) { steps.forEach(function (s, j) { s.classList.toggle('on', j === k); s.classList.toggle('done', j < k); }); tr.style.setProperty('--prog', (k / (steps.length - 1) * 100).toFixed(1) + '%'); }
    set(reduce ? steps.length - 1 : 0);
    if (!reduce) setInterval(function () { n = (n + 1) % steps.length; set(n); }, 1300);
  });

  /* ---------- cycling list ---------- */
  document.querySelectorAll('[data-cycle]').forEach(function (ol) {
    var li = ol.querySelectorAll('li'), n = 0;
    if (li[0]) li[0].classList.add('on');
    if (!reduce) setInterval(function () { li.forEach(function (x) { x.classList.remove('on'); }); n = (n + 1) % li.length; li[n].classList.add('on'); }, 1500);
  });

  /* ---------- scroll tilt (screens rest tilted back, camera low) ---------- */
  var tilts = Array.prototype.slice.call(document.querySelectorAll('[data-tilt]'));
  function onScroll() {
    var vh = window.innerHeight;
    tilts.forEach(function (el) {
      var r = el.getBoundingClientRect(), c = r.top + r.height / 2, p = Math.max(0, Math.min(1, (c - vh * .55) / (vh * .75)));
      el.style.setProperty('--tilt', (p * 20).toFixed(2) + 'deg'); el.style.setProperty('--lift', (p * 30).toFixed(1) + 'px'); el.style.setProperty('--sc', (1 - p * .06).toFixed(3));
    });
  }
  if (tilts.length && !reduce) { onScroll(); window.addEventListener('scroll', function () { requestAnimationFrame(onScroll); }, { passive: true }); window.addEventListener('resize', onScroll); }

  /* ---------- hover tilt on cards ---------- */
  if (!reduce) document.querySelectorAll('.mod, .pkg').forEach(function (c) {
    c.addEventListener('pointermove', function (e) { var r = c.getBoundingClientRect(); c.style.setProperty('--ty', (((e.clientX - r.left) / r.width - .5) * 8).toFixed(2) + 'deg'); c.style.setProperty('--tx', (-((e.clientY - r.top) / r.height - .5) * 8).toFixed(2) + 'deg'); });
    c.addEventListener('pointerleave', function () { c.style.setProperty('--ty', '0deg'); c.style.setProperty('--tx', '0deg'); });
  });

  /* ---------- hotspots ---------- */
  document.querySelectorAll('[data-hotspots]').forEach(function (box) {
    var btns = document.querySelectorAll('[data-for="' + box.id + '"] .note-btn'), tip = box.querySelector('.hot-tip'), hots = box.querySelectorAll('.hot'), n = 0, t = null;
    function show(k) {
      n = k; var h = hots[k], ar = isAr(); btns.forEach(function (b, j) { b.classList.toggle('on', j === k); });
      tip.innerHTML = '<b>' + h.getAttribute(ar ? 'data-t-ar' : 'data-t') + '</b>' + h.getAttribute(ar ? 'data-d-ar' : 'data-d');
      tip.setAttribute('dir', ar ? 'rtl' : 'ltr');
      var x = parseFloat(h.style.left), y = parseFloat(h.style.top);
      tip.style.left = Math.min(x, 70) + '%'; tip.style.top = 'calc(' + y + '% + 22px)'; tip.style.transform = x > 70 ? 'translateX(-60%)' : 'none';
    }
    function auto() { clearInterval(t); if (!reduce) t = setInterval(function () { show((n + 1) % hots.length); }, 3200); }
    hots.forEach(function (h, k) { h.addEventListener('click', function () { show(k); auto(); }); });
    btns.forEach(function (b, k) { b.addEventListener('click', function () { show(k); auto(); }); });
    hooks.push(function () { show(n); });
    show(0); auto();
  });

  /* ---------- profit & loss switch ---------- */
  var sw = document.querySelector('[data-pl-switch]');
  if (sw) {
    var bars = document.querySelectorAll('[data-pl] .pl-row'), state = document.querySelector('[data-pl-state]');
    function upd() {
      var on = sw.checked, ar = isAr();
      bars.forEach(function (r) {
        var v = parseFloat(r.getAttribute(on ? 'data-on' : 'data-off'));
        r.querySelector('.b i').style.width = Math.abs(v) / parseFloat(r.getAttribute('data-max')) * 100 + '%';
        r.querySelector('span:last-child').textContent = r.getAttribute((on ? 'data-ton' : 'data-toff') + (ar ? '-ar' : ''));
      });
      state.textContent = on
        ? (ar ? 'التحصيلات والمصروفات مرتبطة: الربح يعكس المال الداخل والخارج فعلاً.' : 'Collections and expenses connected: profit reflects real cash in and out.')
        : (ar ? 'غير مرتبطة: تعرض اللوحة الأعمال المفوترة فقط قبل حركة المال.' : 'Disconnected: the dashboard shows billed work only, before cash moves.');
    }
    sw.addEventListener('change', upd); hooks.push(upd); upd();
  }

  /* ---------- role matrix highlight ---------- */
  var mx = document.querySelector('[data-matrix]');
  if (mx && !reduce) {
    var rows = mx.querySelectorAll('tbody tr'), m = 0;
    setInterval(function () { rows.forEach(function (r) { r.classList.remove('hl'); }); rows[m].classList.add('hl'); m = (m + 1) % rows.length; }, 1800);
  }

  /* ---------- layer stack tilt ---------- */
  var lw = document.querySelector('.layers');
  if (lw && !reduce) {
    var layers = lw.querySelectorAll('.layer');
    function lt() { var r = lw.getBoundingClientRect(), p = Math.max(0, Math.min(1, (r.top + r.height / 2 - innerHeight * .5) / innerHeight)); layers.forEach(function (l, k) { l.style.setProperty('--lt', (p * (18 + k * 3)).toFixed(1) + 'deg'); }); }
    lt(); addEventListener('scroll', function () { requestAnimationFrame(lt); }, { passive: true });
  }

  /* ---------- module subnav ---------- */
  var sub = document.querySelectorAll('.subnav a');
  if (sub.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) sub.forEach(function (a) { var on = a.getAttribute('href') === '#' + e.target.id; a.classList.toggle('on', on); if (on) { var sn = a.parentNode; sn.scrollTo({ left: a.offsetLeft - sn.clientWidth / 2 + a.offsetWidth / 2, behavior: reduce ? 'auto' : 'smooth' }); } }); }); }, { rootMargin: '-40% 0px -55% 0px' });
    document.querySelectorAll('.mod-sec').forEach(function (s) { io.observe(s); });
  }

  /* ---------- demo form ---------- */
  var form = document.querySelector('[data-demo-form]');
  if (form) {
    var pk = (location.hash || '').replace('#pkg-', ''), sel = document.getElementById('f-pkg');
    if (sel && location.hash.indexOf('#pkg-') === 0) Array.prototype.forEach.call(sel.options, function (o) { if (o.value.toLowerCase() === pk) sel.value = o.value; });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (form.querySelector('#f-name').value || '').trim().split(' ')[0], ar = isAr();
      var out = document.querySelector('[data-form-done]'); out.hidden = false;
      out.textContent = ar
        ? 'شكراً' + (name ? ' ' + name : '') + '. تم ملء بياناتك، لكن هذا النموذج التجريبي غير مرتبط بالبريد بعد، لذلك لم يُرسل شيء. سيقوم فريق Azuum بربطه قبل إطلاق الموقع.'
        : 'Thanks' + (name ? ', ' + name : '') + '. Your details are filled in, but this preview form is not connected to email yet, so nothing was sent. The Azuum team will connect it before the site goes live.';
      out.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
    });
  }


  /* ---------- onboarding journey: dotted arrows + travelling glow ---------- */
  document.querySelectorAll('[data-onboard]').forEach(function (wrap) {
    var svgEl = wrap.querySelector('.ob-lines'), steps = wrap.querySelectorAll('.ob-step'), NS = 'http://www.w3.org/2000/svg', paths = [], runner = null, raf = null;
    function edge(c, a, b, ux, uy) { var t = 1 / Math.sqrt((ux * ux) / (a * a) + (uy * uy) / (b * b)); return [c[0] + ux * (t + 10), c[1] + uy * (t + 10)]; }
    function draw() {
      svgEl.querySelectorAll('path.ob-path, circle.runner').forEach(function (n) { n.remove(); }); paths = [];
      var wr = wrap.getBoundingClientRect();
      var ovals = Array.prototype.map.call(steps, function (s) { var r = s.querySelector('.ob-oval').getBoundingClientRect(); return { c: [r.left - wr.left + r.width / 2, r.top - wr.top + r.height / 2], a: r.width / 2, b: r.height / 2 }; });
      for (var k = 0; k < ovals.length - 1; k++) {
        var A = ovals[k], B = ovals[k + 1], dx = B.c[0] - A.c[0], dy = B.c[1] - A.c[1], d = Math.hypot(dx, dy) || 1, ux = dx / d, uy = dy / d;
        var p0 = edge(A.c, A.a, A.b, ux, uy), p1 = edge(B.c, B.a, B.b, -ux, -uy);
        var p = document.createElementNS(NS, 'path'), dd;
        if (Math.abs(dx) < A.a * .8 && dy > 0) {
          /* same column: go around the outside so the arrow never crosses the step text */
          var centered = Math.abs(A.c[0] - wr.width / 2) < wr.width * .15;
          var side = centered ? (k % 2 ? -1 : 1) : (A.c[0] < wr.width / 2 ? -1 : 1), room = side > 0 ? wr.width - (A.c[0] + A.a) : A.c[0] - A.a, kk = side * Math.max(22, Math.min(70, room - 6));
          var q0 = [A.c[0] + side * (A.a + 6), A.c[1]], q1 = [B.c[0] + side * (B.a + 10), B.c[1]];
          dd = 'M' + q0[0].toFixed(1) + ' ' + q0[1].toFixed(1) + ' C' + (q0[0] + kk).toFixed(1) + ' ' + q0[1].toFixed(1) + ' ' + (q1[0] + kk).toFixed(1) + ' ' + q1[1].toFixed(1) + ' ' + q1[0].toFixed(1) + ' ' + q1[1].toFixed(1);
        } else {
          var bend = Math.min(70, d * .22) * (k % 2 ? 1 : -1), mx = (p0[0] + p1[0]) / 2 - uy * bend, my = (p0[1] + p1[1]) / 2 + ux * bend;
          dd = 'M' + p0[0].toFixed(1) + ' ' + p0[1].toFixed(1) + ' Q' + mx.toFixed(1) + ' ' + my.toFixed(1) + ' ' + p1[0].toFixed(1) + ' ' + p1[1].toFixed(1);
        }
        p.setAttribute('class', 'ob-path'); p.setAttribute('marker-end', 'url(#ob-head)'); p.setAttribute('d', dd);
        svgEl.appendChild(p); paths.push(p);
      }
      if (!reduce) { runner = document.createElementNS(NS, 'circle'); runner.setAttribute('class', 'runner'); runner.setAttribute('r', '7'); svgEl.appendChild(runner); }
    }
    var seg = 0, t0 = null, SEG = 1300, HOLD = 700;
    function tick(ts) {
      if (!runner || !paths.length) { raf = requestAnimationFrame(tick); return; }
      if (t0 === null) t0 = ts;
      var e = ts - t0, p = paths[seg];
      if (e < SEG) { var L = p.getTotalLength(), q = p.getPointAtLength(L * (1 - Math.pow(1 - e / SEG, 2))); runner.setAttribute('cx', q.x); runner.setAttribute('cy', q.y); runner.style.opacity = 1; }
      else { runner.style.opacity = 0; steps.forEach(function (s, i) { s.classList.toggle('on', i === seg + 1); }); paths.forEach(function (pp, i) { pp.classList.toggle('done', i <= seg); }); }
      if (e > SEG + HOLD) { seg = (seg + 1) % paths.length; t0 = ts; if (seg === 0) paths.forEach(function (pp) { pp.classList.remove('done'); }); }
      raf = requestAnimationFrame(tick);
    }
    draw(); if (!reduce) { steps[0].classList.add('on'); raf = requestAnimationFrame(tick); }
    var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(draw, 120); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
    window.addEventListener('load', draw);
    hooks.push(function () { setTimeout(draw, 30); });
    if (!reduce) steps.forEach(function (s) { var o = s.querySelector('.ob-oval');
      s.addEventListener('pointermove', function (e) { var r = o.getBoundingClientRect(); o.style.setProperty('--ty', (((e.clientX - r.left) / r.width - .5) * 14).toFixed(1) + 'deg'); o.style.setProperty('--tx', (-((e.clientY - r.top) / r.height - .5) * 14).toFixed(1) + 'deg'); });
      s.addEventListener('pointerleave', function () { o.style.setProperty('--ty', '0deg'); o.style.setProperty('--tx', '0deg'); }); });
  });


  /* ---------- mobile app demos ---------- */
  function TT(en, ar) { return '<span class="i-en">' + en + '</span><span class="i-ar" lang="ar">' + ar + '</span>'; }
  var SV = { ok: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>', bad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>' };
  var staff = document.querySelector('[data-staff]');
  if (staff) {
    var loc = 'in', tim = 'in', inside = true, running = false, start = 0, iv = null;
    var rowL = staff.querySelector('[data-row-loc]'), rowT = staff.querySelector('[data-row-time]'), btn = staff.querySelector('[data-checkin]'), msg = staff.querySelector('[data-msg]'), tm = staff.querySelector('[data-timer]'), geo = staff.querySelector('.geo');
    function fmt(s) { var h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = s % 60; return [h, m, x].map(function (v) { return (v < 10 ? '0' : '') + v; }).join(':'); }
    function rend() {
      var okL = loc === 'in', okT = tim === 'in';
      geo.classList.toggle('out', !okL);
      rowL.innerHTML = '<span class="st-ic ' + (okL ? 'ok' : 'bad') + '">' + (okL ? SV.ok : SV.bad) + '</span><span><b>' + (okL ? TT('Inside the workshop', 'داخل الورشة') : TT('Away from the office', 'خارج مقر العمل')) + '</b><small>' + (okL ? TT('Location verified', 'تم التحقق من الموقع') : TT('The app only works inside the workshop', 'التطبيق يعمل داخل الورشة فقط')) + '</small></span>';
      rowT.innerHTML = '<span class="st-ic ' + (okT ? 'ok' : 'bad') + '">' + (okT ? SV.ok : SV.bad) + '</span><span><b>' + (okT ? TT('Working hours', 'ساعات العمل') : TT('Outside working hours', 'خارج ساعات العمل')) + '</b><small dir="ltr">' + (okT ? '08:30 AM · 8:00 AM – 5:00 PM' : '09:45 PM · 8:00 AM – 5:00 PM') + '</small></span>';
      if (running) { btn.disabled = false; btn.classList.add('out'); btn.innerHTML = TT('Check out', 'تسجيل الانصراف'); return; }
      btn.classList.remove('out'); btn.innerHTML = TT('Check in', 'تسجيل الحضور'); btn.disabled = !(okL && okT);
      msg.className = 'ph-msg' + (okL && okT ? '' : ' bad');
      msg.innerHTML = !okL ? TT('Check-in is blocked: you are away from the workshop.', 'تسجيل الحضور ممنوع: أنت خارج الورشة.') : !okT ? TT('Check-in is blocked outside working hours.', 'تسجيل الحضور ممنوع خارج ساعات العمل.') : TT('You can check in now.', 'يمكنك تسجيل الحضور الآن.');
    }
    btn.addEventListener('click', function () {
      if (!running) { running = true; start = Date.now(); clearInterval(iv); iv = setInterval(function () { tm.textContent = fmt(Math.floor((Date.now() - start) / 1000)); }, 500); msg.className = 'ph-msg ok'; msg.innerHTML = TT('Checked in at 08:30 AM. Your time is being calculated.', 'تم تسجيل الحضور 08:30 ص. يتم حساب وقتك الآن.'); }
      else { running = false; clearInterval(iv); msg.className = 'ph-msg ok'; msg.innerHTML = TT('Checked out. Time today: ', 'تم تسجيل الانصراف. وقت اليوم: ') + '<span dir="ltr">' + tm.textContent + '</span>'; }
      rend(); if (!running) msg.className = 'ph-msg ok';
    });
    document.querySelectorAll('[data-loc]').forEach(function (b) { b.addEventListener('click', function () { loc = b.getAttribute('data-loc'); document.querySelectorAll('[data-loc]').forEach(function (x) { x.classList.toggle('on', x === b); }); if (running && loc === 'out') { running = false; clearInterval(iv); } rend(); }); });
    document.querySelectorAll('[data-time]').forEach(function (b) { b.addEventListener('click', function () { tim = b.getAttribute('data-time'); document.querySelectorAll('[data-time]').forEach(function (x) { x.classList.toggle('on', x === b); }); if (running && tim === 'out') { running = false; clearInterval(iv); } rend(); }); });
    rend();
  }
  var cust = document.querySelector('[data-cust]');
  if (cust) {
    var lis = cust.querySelectorAll('[data-li]'), tot = cust.querySelector('[data-total]'), cm = cust.querySelector('[data-cmsg]');
    function sum() {
      var s = 0, n = 0; lis.forEach(function (l) { if (l.classList.contains('yes')) { s += parseFloat(l.getAttribute('data-price')); n++; } });
      tot.textContent = '$' + s.toFixed(2);
      var dec = cust.querySelectorAll('.li.yes, .li.no').length;
      cm.className = 'ph-msg ok';
      cm.innerHTML = dec ? TT('Sent to the workshop: ' + n + ' of ' + lis.length + ' lines approved.', 'أُرسلت إلى الورشة: تمت الموافقة على ' + n + ' من ' + lis.length + ' بنود.') : '';
    }
    lis.forEach(function (l) {
      l.querySelector('.li-yes').addEventListener('click', function () { l.classList.remove('no'); l.classList.toggle('yes'); sum(); });
      l.querySelector('.li-no').addEventListener('click', function () { l.classList.remove('yes'); l.classList.toggle('no'); sum(); });
    });
    cust.querySelector('[data-approve-all]').addEventListener('click', function () { lis.forEach(function (l) { l.classList.remove('no'); l.classList.add('yes'); }); sum(); });
    sum(); cm.innerHTML = TT('Tap ✓ to approve or – to decline each line.', 'اضغط ✓ للموافقة أو – للرفض لكل بند.'); cm.className = 'ph-msg';
  }
  var wl = document.querySelector('[data-wl]');
  if (wl || document.querySelector('[data-wl-name]')) {
    var nameIn = document.getElementById('wl-name');
    function initials(s) { var w = s.trim().split(/\s+/).filter(Boolean); return ((w[0] || '')[0] || '') + ((w[1] || '')[0] || (w[0] || '')[1] || ''); }
    function setName() {
      var def = isAr() ? 'ورشتك' : 'Your Garage', v = nameIn && nameIn.value.trim() ? nameIn.value.trim() : def;
      document.querySelectorAll('[data-wl-name]').forEach(function (e) { e.textContent = v; });
      document.querySelectorAll('[data-wl-initials]').forEach(function (e) { e.textContent = initials(v).toUpperCase(); });
    }
    if (nameIn) nameIn.addEventListener('input', setName);
    hooks.push(function () { if (nameIn && (nameIn.value === 'Your Garage' || nameIn.value === 'ورشتك')) nameIn.value = isAr() ? 'ورشتك' : 'Your Garage'; setName(); });
    document.querySelectorAll('[data-color]').forEach(function (b) { b.addEventListener('click', function () { root.style.setProperty('--app', b.getAttribute('data-color')); document.querySelectorAll('[data-color]').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); }); }); });
    var inv = document.querySelector('[data-inv]');
    document.querySelectorAll('[data-tpl]').forEach(function (b) { b.addEventListener('click', function () { inv.className = 'inv tpl-' + b.getAttribute('data-tpl'); document.querySelectorAll('[data-tpl]').forEach(function (x) { x.classList.toggle('on', x === b); }); }); });
    setName();
  }

  /* ---------- phones spin in from behind when they come into view ---------- */
  var phones = document.querySelectorAll('.phone2');
  if (phones.length && !reduce && 'IntersectionObserver' in window) {
    var pio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return; var ph = e.target; pio.unobserve(ph);
        var d = ph.closest('.duo-b') ? 250 : 0;
        setTimeout(function () {
          ph.classList.add('phone-in');
          ph.addEventListener('animationend', function done(ev) { if (ev.target !== ph) return; ph.classList.remove('phone-in'); ph.removeEventListener('animationend', done); });
        }, d);
      });
    }, { rootMargin: '0px 0px 12% 0px', threshold: 0 });
    phones.forEach(function (p) { pio.observe(p); });
  }

  /* ---------- package swipe row: dots ---------- */
  var pk = document.querySelector('[data-pkgs]'), dots = document.querySelector('[data-pkg-dots]');
  if (pk && dots) {
    var cards = pk.querySelectorAll('.pkg');
    cards.forEach(function (c, k) { var d = document.createElement('button'); d.setAttribute('aria-label', 'Package ' + (k + 1)); d.addEventListener('click', function () { pk.scrollTo({ left: c.offsetLeft - (pk.clientWidth - c.offsetWidth) / 2, behavior: reduce ? 'auto' : 'smooth' }); }); dots.appendChild(d); });
    function curDot() { var mid = pk.scrollLeft + pk.clientWidth / 2, best = 0, bd = 1e9; cards.forEach(function (c, k) { var d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid); if (d < bd) { bd = d; best = k; } }); dots.querySelectorAll('button').forEach(function (d, k) { d.classList.toggle('on', k === best); }); }
    pk.addEventListener('scroll', function () { requestAnimationFrame(curDot); }, { passive: true });
    var rec = pk.querySelector('.pkg.rec');
    function centerRec() { if (rec && pk.scrollWidth > pk.clientWidth + 4) pk.scrollLeft = rec.offsetLeft - (pk.clientWidth - rec.offsetWidth) / 2; curDot(); }
    setTimeout(centerRec, 50); window.addEventListener('resize', curDot); hooks.push(function () { setTimeout(centerRec, 40); });
  }

  /* ---------- back to top ---------- */
  var tt = document.querySelector('[data-to-top]');
  if (tt) {
    var prog = tt.querySelector('.tt-prog'), C = 2 * Math.PI * 21;
    function ttUpd() {
      var max = document.documentElement.scrollHeight - innerHeight, y = window.scrollY, p = max > 0 ? Math.min(1, y / max) : 0;
      tt.classList.toggle('show', y > innerHeight * .6); prog.style.strokeDashoffset = (C * (1 - p)).toFixed(1);
    }
    window.addEventListener('scroll', function () { requestAnimationFrame(ttUpd); }, { passive: true }); window.addEventListener('resize', ttUpd); ttUpd();
    tt.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); var f = document.querySelector('.brand'); if (f) setTimeout(function () { f.focus({ preventScroll: true }); }, reduce ? 0 : 700); });
  }

  /* ---------- phone action dock ---------- */
  var dock = document.querySelector('[data-dock]');
  if (dock) {
    var onContact = !!document.querySelector('[data-demo-form]'), foot = document.querySelector('footer');
    function dUpd() {
      var nearFoot = foot && foot.getBoundingClientRect().top < innerHeight - 40;
      dock.classList.toggle('show', !onContact && window.scrollY > innerHeight * .7 && !nearFoot);
    }
    window.addEventListener('scroll', function () { requestAnimationFrame(dUpd); }, { passive: true }); dUpd();
  }

  if (isAr()) applyLang('ar');
})();
