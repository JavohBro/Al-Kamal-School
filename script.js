/* ============================================================
   FENIX SCHOOL — landing page interactions (vanilla JS)
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
    { img: 'assets/marble-wall.webp', title: 'Стена Fenix', caption: 'Фирменный акцент в интерьере школы.' },
    { img: 'assets/hall-wings.webp', title: 'Актовое пространство', caption: 'Просторный зал для событий и мероприятий.' },
    { img: 'assets/tech-class.webp', title: 'Кабинет технологий', caption: 'Современное оснащение для практических занятий.' },
    { img: 'assets/art-class.webp', title: 'Творческий класс', caption: 'Яркая среда, которая вдохновляет учиться.' }
  ];

  var benefits = [
    'Сильную образовательную базу',
    'Поддержку опытных педагогов',
    'Комфортную школьную атмосферу',
    'Развитие навыков общения и мышления',
    'Подготовку к будущим возможностям'
  ];

  var steps = [
    { num: '01', title: 'Оставьте заявку', text: 'Заполните форму или позвоните нам — мы свяжемся с вами и ответим на вопросы.' },
    { num: '02', title: 'Знакомство со школой', text: 'Приезжайте на экскурсию, познакомьтесь с педагогами и атмосферой FENIX.' },
    { num: '03', title: 'Собеседование', text: 'Проведём знакомство с ребёнком и определим подходящий класс и направление.' },
    { num: '04', title: 'Зачисление', text: 'Оформляем документы — и добро пожаловать в FENIX SCHOOL.' }
  ];

  var reviews = [
    { dark: true, quote: 'Здесь ребёнок не просто учится — он растёт как личность. Замечаем уверенность и самостоятельность.', name: 'Оксана В.', role: 'мама ученика 8 класса', initials: 'ОВ' },
    { quote: 'Сильная программа по математике и английскому. Видим реальный прогресс каждый месяц.', name: 'Дмитрий К.', role: 'папа ученика 6 класса', initials: 'ДК' },
    { video: 'assets/hall-wings.webp', quote: 'Атмосфера тёплая, а условия — на высоте. Рекомендуем всем родителям.', name: 'Семья Юсуповых', role: 'родители ученицы 4 класса', initials: 'СЮ' },
    { quote: 'Дочь ходит в школу с удовольствием. Учителя внимательные, атмосфера тёплая.', name: 'Наргиза А.', role: 'мама ученицы 3 класса', initials: 'НА' },
    { quote: 'Отдельное спасибо за питание и комфорт — ребёнок всегда сыт и спокоен.', name: 'Малика Р.', role: 'мама ученика 2 класса', initials: 'МР' }
  ];

  var faqs = [
    { q: 'В какие классы можно поступить?', a: 'Мы принимаем учеников в 1–11 классы. Точные условия и наличие мест уточняйте у приёмной комиссии по телефону.' },
    { q: 'На каких языках ведётся обучение?', a: 'В FENIX SCHOOL есть русское и узбекское направления с углублённым вниманием к языкам и математике.' },
    { q: 'Организовано ли питание?', a: 'Да, для учеников предусмотрено полноценное питание в течение дня и комфортные условия обучения.' },
    { q: 'Как проходит поступление?', a: 'Оставьте заявку, приезжайте на знакомство со школой, пройдите короткое собеседование — и мы оформим зачисление.' },
    { q: 'Какой режим работы школы?', a: 'Школа работает с понедельника по субботу, с 08:00 до 17:00.' }
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

  /* ---------- RENDER: benefits ---------- */
  var bg = document.getElementById('benefitGrid');
  benefits.forEach(function (t, i) {
    var b = el('div', 'benefit reveal');
    b.style.transitionDelay = (i * 0.08) + 's';
    b.innerHTML = '<span class="tick">✓</span><p>' + esc(t) + '</p>';
    bg.appendChild(b);
  });

  /* ---------- RENDER: steps ---------- */
  var st = document.getElementById('steps');
  steps.forEach(function (s, i) {
    var e = el('div', 'step reveal');
    e.style.transitionDelay = (i * 0.1) + 's';
    e.innerHTML = '<span class="n">' + s.num + '</span><div><h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p></div>';
    st.appendChild(e);
  });

  /* ---------- RENDER: reviews ---------- */
  var ms = document.getElementById('masonry');
  reviews.forEach(function (r, i) {
    var card = el('div', 'review-card reveal' + (r.dark ? ' dark' : ''));
    card.style.transitionDelay = (i * 0.07) + 's';
    var html = '';
    if (r.video) {
      html += '<div class="video"><img src="' + r.video + '" alt="Экскурсия по школе">' +
        '<div class="ov"><span class="play">▶</span></div><span class="vlabel">Экскурсия по школе</span></div>';
    }
    html += '<p class="quote">' + esc(r.quote) + '</p>' +
      '<div class="who-row"><span class="avatar">' + esc(r.initials) + '</span>' +
      '<div><div class="nm">' + esc(r.name) + '</div><div class="rl">' + esc(r.role) + '</div></div></div>';
    card.innerHTML = html;
    ms.appendChild(card);
  });

  /* ---------- RENDER: FAQ ---------- */
  var fl = document.getElementById('faqList');
  faqs.forEach(function (f, i) {
    var item = el('div', 'faq-item reveal' + (i === 0 ? ' open' : ''));
    item.style.transitionDelay = (i * 0.06) + 's';
    item.innerHTML =
      '<button class="faq-q"><span>' + esc(f.q) + '</span><span class="faq-sign">+</span></button>' +
      '<div class="faq-a"><p>' + esc(f.a) + '</p></div>';
    item.querySelector('.faq-q').addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      [].forEach.call(fl.children, function (c) { c.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
    fl.appendChild(item);
  });

  /* ---------- FORM ---------- */
  var form = document.getElementById('applyForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('fName').value.trim() || 'родители';
    document.getElementById('successMsg').textContent =
      'Спасибо, ' + name + '! Мы свяжемся с вами по телефону в ближайшее время.';
    form.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
    /* TODO: отправка данных на сервер / Telegram / email */
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
