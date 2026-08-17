/* ============================================================
   AL KAMAL SCHOOL — landing page interactions (vanilla JS)
   ============================================================ */
(function () {
  'use strict';

  /* ---------- DATA ---------- */
  var features = [
    { num: '01', title: 'Sifatli ta\'lim', text: 'Dastur fanlarga chuqur tushunish va amaliy ko\'nikmalarni rivojlantirishga yo\'naltirilgan.' },
    { num: '02', title: 'Tajribali o\'qituvchilar', text: 'O\'qituvchilar yuqori natijalarga erishishga yordam beradi va ta\'limning har bir bosqichida qo\'llab-quvvatlaydi.' },
    { num: '03', title: 'Zamonaviy yondashuv', text: 'Samarali o\'qitish usullari jarayonni qiziqarli va unumli qiladi.' },
    { num: '04', title: 'Shaxsni rivojlantirish', text: 'Bilim, mas\'uliyat, ishonch, mustaqillik va yetakchilik fazilatlarini rivojlantiramiz.' }
  ];

  var directions = [
    {
      name: 'Rus yo\'nalishi',
      img: 'assets/tech-class.webp',
      title: 'Rus yo\'nalishi',
      desc: 'Rus tilida ta\'lim, asosiy fanlarga chuqur e\'tibor va zamonaviy o\'qitish metodikalari.',
      points: ['Rus tilida ta\'lim', 'Ingliz tili va matematikaga chuqur e\'tibor', 'Zamonaviy o\'qitish metodikalari'],
      quote: '«Qizim maktabga xursandchilik bilan boradi. Matematika va ingliz tilida haqiqiy rivojlanishni ko\'ryapmiz».',
      author: 'Nargiza A. · 3-sinf o\'quvchisining onasi'
    }
  ];

  var gallery = [
    { img: 'assets/reception.webp', title: 'Resepshn va asosiy hol', caption: 'Yorug\' makon o\'quvchilar va ota-onalarni kutib oladi.' },
    { img: 'assets/lobby-plants.webp', title: 'Yashil zonalar', caption: 'Tirik o\'simliklar va yumshoq yorug\'lik qulay muhit yaratadi.' },
    { img: 'assets/corridor.webp', title: 'Keng yo\'laklar', caption: 'Zamonaviy navigatsiya va o\'ylangan yoritish.' },
    { img: 'assets/hexagon-lounge.webp', title: 'Dam olish zonalari', caption: 'Darslar orasida muloqot va dam olish joylari.' },
    { img: 'assets/marble-wall.webp', title: 'Al Kamal devori', caption: 'Maktab interyerining o\'ziga xos aksenti.' },
    { img: 'assets/hall-wings.webp', title: 'Aktovy zal', caption: 'Tadbirlar va anjumanlar uchun keng maydon.' },
    { img: 'assets/tech-class.webp', title: 'Texnologiya sinfi', caption: 'Amaliy mashg\'ulotlar uchun zamonaviy jihozlar.' },
    { img: 'assets/art-class.webp', title: 'Ijodiy sinf', caption: 'O\'qishga ilhomlantiruvchi yorqin muhit.' }
  ];


  var steps = [
    { num: '01', title: 'Ariza qoldiring', text: 'Shaklni to\'ldiring yoki bizga qo\'ng\'iroq qiling — biz siz bilan bog\'lanamiz va savollarga javob beramiz.' },
    { num: '02', title: 'Maktab bilan tanishuv', text: 'Ekskursiyaga keling, o\'qituvchilar va AL KAMAL muhiti bilan tanishing.' },
    { num: '03', title: 'Suhbat', text: 'Bola bilan tanishamiz va unga mos sinf hamda yo\'nalishni aniqlaymiz.' },
    { num: '04', title: 'Qabul', text: 'Hujjatlarni rasmiylashtiramiz — AL KAMAL SCHOOL ga xush kelibsiz.' }
  ];



  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  /* ---------- RENDER: features ---------- */
  var fg = document.getElementById('featureGrid');
  features.forEach(function (f, i) {
    var card = el('div', 'feature-card reveal');
    card.style.transitionDelay = (i * 0.09) + 's';
    card.innerHTML =
      '<div class="feature-top"><span>' + f.num + '</span><div></div></div>' +
      '<h3>' + esc(f.title) + '</h3><p>' + esc(f.text) + '</p>';
    fg.appendChild(card);
  });

  /* ---------- RENDER: directions ---------- */
  var dirTabs = document.getElementById('dirTabs');
  var dirImg = document.getElementById('dirImg');
  var dirTitle = document.getElementById('dirTitle');
  var dirDesc = document.getElementById('dirDesc');
  var dirPoints = document.getElementById('dirPoints');
  var dirQuote = document.getElementById('dirQuote');
  var dirAuthor = document.getElementById('dirAuthor');

  function renderDir(idx) {
    var d = directions[idx];
    dirImg.style.opacity = '0';
    setTimeout(function () { dirImg.src = d.img; dirImg.alt = d.name; dirImg.style.opacity = '1'; }, 180);
    dirTitle.textContent = d.title;
    dirDesc.textContent = d.desc;
    dirPoints.innerHTML = '';
    d.points.forEach(function (p) {
      var row = el('div', 'dir-point');
      row.innerHTML = '<span class="tick">✓</span><span>' + esc(p) + '</span>';
      dirPoints.appendChild(row);
    });
    dirQuote.textContent = d.quote;
    dirAuthor.textContent = d.author;
    [].forEach.call(dirTabs.children, function (b, i) { b.classList.toggle('active', i === idx); });
  }
  directions.forEach(function (d, i) {
    var b = el('button', 'tab' + (i === 0 ? ' active' : ''), esc(d.name));
    b.addEventListener('click', function () { renderDir(i); });
    dirTabs.appendChild(b);
  });
  renderDir(0);

  /* ---------- RENDER: campus gallery ---------- */
  var galImg = document.getElementById('galImg');
  var galTitle = document.getElementById('galTitle');
  var galCaption = document.getElementById('galCaption');
  var galCount = document.getElementById('galCount');
  var thumbsWrap = document.getElementById('thumbs');
  var galIndex = 0;

  function renderGal(i) {
    galIndex = (i + gallery.length) % gallery.length;
    var g = gallery[galIndex];
    galImg.src = g.img; galImg.alt = g.title;
    galTitle.textContent = g.title;
    galCaption.textContent = g.caption;
    galCount.textContent = (galIndex + 1) + ' / ' + gallery.length;
    [].forEach.call(thumbsWrap.children, function (t, k) { t.classList.toggle('active', k === galIndex); });
  }
  gallery.forEach(function (g, i) {
    var t = el('button', 'thumb' + (i === 0 ? ' active' : ''));
    t.innerHTML = '<img src="' + g.img + '" alt="">';
    t.addEventListener('click', function () { renderGal(i); });
    thumbsWrap.appendChild(t);
  });
  renderGal(0);
  document.getElementById('galPrev').addEventListener('click', function () { renderGal(galIndex - 1); });
  document.getElementById('galNext').addEventListener('click', function () { renderGal(galIndex + 1); });


  /* ---------- RENDER: steps ---------- */
  var st = document.getElementById('steps');
  steps.forEach(function (s, i) {
    var e = el('div', 'step reveal');
    e.style.transitionDelay = (i * 0.1) + 's';
    e.innerHTML = '<span class="n">' + s.num + '</span><div><h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p></div>';
    st.appendChild(e);
  });



  /* ---------- FORM (step-by-step) ---------- */
  var stepName  = document.getElementById('stepName');
  var stepPhone = document.getElementById('stepPhone');
  var stepGrade = document.getElementById('stepGrade');
  var fName     = document.getElementById('fName');
  var fPhone    = document.getElementById('fPhone');
  var selectedGrades = [];

  function goToStep(hideEl, showEl) {
    hideEl.style.opacity = '0';
    hideEl.style.transition = 'opacity .25s';
    setTimeout(function () {
      hideEl.style.display = 'none';
      showEl.style.display = 'flex';
      showEl.classList.add('step-enter');
      var inp = showEl.querySelector('input');
      if (inp) setTimeout(function () { inp.focus(); }, 60);
    }, 250);
  }

  /* Phone formatting: prefix "+998 " then XXX XX XX */
  fPhone.value = '+998 ';
  fPhone.addEventListener('focus', function () {
    if (!fPhone.value.startsWith('+998 ')) fPhone.value = '+998 ';
  });
  fPhone.addEventListener('input', function () {
    var prefix = '+998 ';
    var raw = fPhone.value;
    if (!raw.startsWith(prefix)) { fPhone.value = prefix; return; }
    var digits = raw.slice(prefix.length).replace(/\D/g, '').slice(0, 9);
    var formatted = '';
    if (digits.length > 0) formatted += digits.slice(0, 2);
    if (digits.length > 2) formatted += ' ' + digits.slice(2, 5);
    if (digits.length > 5) formatted += ' ' + digits.slice(5, 7);
    if (digits.length > 7) formatted += ' ' + digits.slice(7, 9);
    fPhone.value = prefix + formatted;
  });
  fPhone.addEventListener('keydown', function (e) {
    var prefix = '+998 ';
    if ((e.key === 'Backspace' || e.key === 'Delete') && fPhone.value === prefix) {
      e.preventDefault();
    }
  });

  document.getElementById('btnName').addEventListener('click', function () {
    if (!fName.value.trim()) { fName.focus(); return; }
    goToStep(stepName, stepPhone);
  });
  fName.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') document.getElementById('btnName').click();
  });

  document.getElementById('btnPhone').addEventListener('click', function () {
    var digits = fPhone.value.replace(/\D/g, '');
    if (digits.length < 12) { fPhone.focus(); return; }
    goToStep(stepPhone, stepGrade);
  });
  fPhone.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') document.getElementById('btnPhone').click();
  });

  document.getElementById('gradeChips').addEventListener('click', function (e) {
    var chip = e.target.closest('.grade-chip');
    if (!chip) return;
    var grade = chip.getAttribute('data-grade');
    if (chip.classList.contains('selected')) {
      chip.classList.remove('selected');
      selectedGrades = selectedGrades.filter(function (g) { return g !== grade; });
    } else {
      chip.classList.add('selected');
      selectedGrades.push(grade);
    }
  });

  var SHEET_URL = 'https://script.google.com/macros/s/AKfycby_5xzzsi9jpV0Du_I3Pfnmed3JVu9XS1m9uurf_NNv9CeTwwWQxpT283jsEH3pePYj/exec';

  document.getElementById('btnGrade').addEventListener('click', function () {
    if (!selectedGrades.length) { return; }
    var name   = fName.value.trim();
    var phone  = fPhone.value.trim();
    var grades = selectedGrades.slice().sort().map(function(g){ return g+'-sinf'; }).join(', ');

    document.getElementById('formSteps').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
    document.getElementById('successMsg').textContent =
      'Rahmat, ' + name + '! Tez orada siz bilan bog\'lanamiz.';

    fetch(SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ name: name, phone: phone.replace('+998 ', ''), grades: grades })
    }).catch(function(err) { console.error('Sheet error:', err); });
  });

  /* ---------- REVEAL ON SCROLL ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
    reveals.forEach(function (r) { io.observe(r); });
  } else {
    reveals.forEach(function (r) { r.classList.add('in'); });
  }

  /* ---------- COUNTERS ---------- */
  function animateCount(node) {
    var to = parseInt(node.getAttribute('data-count'), 10);
    var prefix = node.getAttribute('data-prefix') || '';
    var start = null, dur = 900;
    function step(ts) {
      if (!start) start = ts;
      var t = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      node.textContent = prefix + Math.round(to * eased);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { animateCount(en.target); co.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { co.observe(c); });
  }

  /* ---------- NAV SHRINK + HERO PARALLAX ---------- */
  var nav = document.getElementById('nav');
  var heroParallax = document.getElementById('heroParallax');
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY || window.pageYOffset || 0;
      if (nav) nav.classList.toggle('shrink', y > 40);
      if (heroParallax) heroParallax.style.transform = 'translateY(' + Math.min(y * 0.14, 120) + 'px)';
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- MAGNETIC BUTTONS ---------- */
  if (window.matchMedia && window.matchMedia('(pointer:fine)').matches) {
    document.querySelectorAll('[data-magnetic]').forEach(function (b) {
      b.addEventListener('mousemove', function (ev) {
        var r = b.getBoundingClientRect();
        var dx = ev.clientX - (r.left + r.width / 2);
        var dy = ev.clientY - (r.top + r.height / 2);
        b.style.transform = 'translate(' + dx * 0.22 + 'px,' + dy * 0.28 + 'px) scale(1.04)';
      });
      b.addEventListener('mouseleave', function () { b.style.transform = ''; });
    });
  }
})();
