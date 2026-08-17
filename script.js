/* ============================================================
   AL KAMAL SCHOOL — landing page interactions (vanilla JS)
   ============================================================ */
(function () {
  'use strict';

  /* ---------- DATA ---------- */
  var features = [
    { num: '01', title: 'Качественное образование', text: 'Программа направлена на глубокое понимание предметов и развитие практических навыков.' },
    { num: '02', title: 'Опытные преподаватели', text: 'Учителя помогают достигать высоких результатов и поддерживают на каждом этапе обучения.' },
    { num: '03', title: 'Современный подход', text: 'Эффективные методы обучения делают процесс интересным и продуктивным.' },
    { num: '04', title: 'Развитие личности', text: 'Развиваем знания, ответственность, уверенность, самостоятельность и лидерские качества.' }
  ];

  var directions = [
    {
      name: 'Русское направление',
      img: 'assets/tech-class.webp',
      title: 'Русское направление',
      desc: 'Обучение на русском языке с углублённым вниманием к ключевым предметам и современным методикам преподавания.',
      points: ['Обучение на русском языке', 'Углублённое внимание к английскому языку и математике', 'Современные методики преподавания'],
      quote: '«Дочь ходит в школу с удовольствием. Видим реальный прогресс в математике и английском».',
      author: 'Наргиза А. · мама ученицы 3 класса'
    },
    {
      name: 'Узбекское направление',
      img: 'assets/art-class.webp',
      title: 'Узбекское направление',
      desc: 'Обучение на узбекском языке с развитием академических навыков и подготовкой к будущим достижениям.',
      points: ['Обучение на узбекском языке', 'Развитие академических навыков', 'Подготовка к будущим достижениям'],
      quote: '«Сильная база и тёплая атмосфера. Ребёнок раскрылся и стал увереннее».',
      author: 'Малика Р. · мама ученика 2 класса'
    }
  ];

  var gallery = [
    { img: 'assets/reception.webp', title: 'Ресепшн и главный холл', caption: 'Светлое пространство встречает учеников и родителей.' },
    { img: 'assets/lobby-plants.webp', title: 'Зелёные зоны', caption: 'Живые растения и мягкий свет создают уют.' },
    { img: 'assets/corridor.webp', title: 'Просторные коридоры', caption: 'Современная навигация и продуманное освещение.' },
    { img: 'assets/hexagon-lounge.webp', title: 'Зоны отдыха', caption: 'Места для общения и перезагрузки между уроками.' },
    { img: 'assets/marble-wall.webp', title: 'Стена Al Kamal', caption: 'Фирменный акцент в интерьере школы.' },
    { img: 'assets/hall-wings.webp', title: 'Актовое пространство', caption: 'Просторный зал для событий и мероприятий.' },
    { img: 'assets/tech-class.webp', title: 'Кабинет технологий', caption: 'Современное оснащение для практических занятий.' },
    { img: 'assets/art-class.webp', title: 'Творческий класс', caption: 'Яркая среда, которая вдохновляет учиться.' }
  ];


  var steps = [
    { num: '01', title: 'Оставьте заявку', text: 'Заполните форму или позвоните нам — мы свяжемся с вами и ответим на вопросы.' },
    { num: '02', title: 'Знакомство со школой', text: 'Приезжайте на экскурсию, познакомьтесь с педагогами и атмосферой AL KAMAL.' },
    { num: '03', title: 'Собеседование', text: 'Проведём знакомство с ребёнком и определим подходящий класс и направление.' },
    { num: '04', title: 'Зачисление', text: 'Оформляем документы — и добро пожаловать в AL KAMAL SCHOOL.' }
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
    var grades = selectedGrades.slice().sort().map(function(g){ return g+' класс'; }).join(', ');

    document.getElementById('formSteps').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
    document.getElementById('successMsg').textContent =
      'Спасибо, ' + name + '! Мы свяжемся с вами в ближайшее время.';

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
