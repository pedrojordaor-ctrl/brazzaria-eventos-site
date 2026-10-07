/* =========================================================
   Brazzaria Eventos
   ========================================================= */

/* ---------- CONFIGURAÇÃO (editar aqui) ----------
   whatsapp: só números, com DDI 55 + DDD. Ex.: '5511999998888'
   instagram / email: deixe '' para esconder o link no rodapé. */
const CONFIG = {
  whatsapp: '5511945947705',
  instagram: 'https://instagram.com/brazzaria.co',
  email: '',                 // ex.: 'contato@brazzariaeventos.com.br'
};

/* Valores por pessoa (R$). Adicionais sem preço ficam "sob consulta". */
const MENUS = [
  {
    id: 'espetos', name: 'Espetos', price: 70,
    note: 'Um encontro ao redor da brasa. Espetos variados, servidos à vontade.',
    bovino: ['Picanha', 'Alcatra', 'Cupim', 'Fraldinha', 'Medalhão bovino com bacon'],
    suino: ['Linguiça toscana', 'Panceta', 'Lombo com bacon'],
    frango: ['Sobrecoxa', 'Meio da asa', 'Coração de galinha', 'Medalhão de frango com bacon'],
    mar: ['Camarão', 'Filé de tilápia'],
    vegetais: ['Queijo coalho', 'Pão de alho', 'Legumes na brasa', 'Abacaxi com canela'],
    guarnicoes: ['Arroz branco', 'Farofa temperada', 'Maionese caseira', 'Vinagrete', 'Salada verde'],
    info: 'A seleção de espetos é montada com você na proposta, conforme o perfil do evento.',
  },
  {
    id: 'basic', name: 'Basic', price: 75,
    note: 'O essencial, bem feito. Os clássicos do churrasco para reunir à vontade.',
    entradas: ['Pão de alho', 'Queijo coalho', 'Legumes na brasa'],
    cortes: ['Bife de chorizo', 'Bife ancho', 'Linguiça toscana', 'Sobrecoxa ou meio da asa de frango', 'Picanha suína', 'Coração de galinha'],
    guarnicoes: ['Arroz branco', 'Farofa temperada', 'Maionese caseira', 'Vinagrete', 'Salada verde'],
    sobremesas: ['Abacaxi caramelizado com açúcar e canela'],
  },
  {
    id: 'select', name: 'Select', price: 90,
    note: 'Mais cortes, mais sabor. Picanha e choripán entram na roda.',
    entradas: ['Pão de alho', 'Provoleta ou queijo coalho com mel', 'Legumes na brasa', 'Choripán com chimichurri'],
    cortes: ['Picanha', 'Bife de chorizo ou bife ancho', 'Linguiça toscana', 'Sobrecoxa ou meio da asa de frango', 'Panceta suína ou picanha suína', 'Coração de galinha'],
    guarnicoes: ['Arroz branco', 'Farofa temperada', 'Maionese caseira', 'Vinagrete', 'Salada verde'],
    sobremesas: ['Abacaxi caramelizado com açúcar e canela'],
  },
  {
    id: 'prime', name: 'Prime', price: 130,
    note: 'A brasa em outro nível: picanha, ancho ao gorgonzola e burguer.',
    entradas: ['Pão de alho', 'Provoleta ou queijo coalho com mel', 'Legumes na brasa', 'Choripán com chimichurri'],
    cortes: ['Picanha', 'Bife ancho ao gorgonzola', 'Bife de chorizo', 'Linguiça artesanal', 'Sobrecoxa ou meio da asa de frango', 'Panceta suína', 'Coração de galinha', 'Costela suína no barbecue'],
    guarnicoes: ['Arroz biro-biro', 'Farofa crocante com bacon', 'Maionese caseira com cebola caramelizada', 'Vinagrete', 'Salada verde'],
    burguer: ['Burguer na brasa'],
  },
  {
    id: 'premium', name: 'Premium', price: 170,
    note: 'Cada detalhe extraordinário. Picanha, cupim e carré de cordeiro.',
    entradas: ['Pão de alho', 'Provoleta ou queijo coalho com mel', 'Legumes na brasa', 'Choripán com chimichurri'],
    cortes: ['Picanha', 'Bife de chorizo', 'Cupim ou costela bovina', 'Linguiça artesanal', 'Sobrecoxa ou meio da asa de frango', 'Panceta suína', 'Coração de galinha', 'Costela suína no barbecue', 'Carré de cordeiro'],
    guarnicoes: ['Arroz biro-biro', 'Farofa crocante com bacon', 'Maionese caseira com cebola caramelizada', 'Vinagrete', 'Salada verde'],
    burguer: ['Burguer na brasa'],
  },
];

const GROUPS = [
  ['bovino', 'Bovino'],
  ['suino', 'Suíno'],
  ['frango', 'Frango'],
  ['mar', 'Frutos do mar'],
  ['vegetais', 'Queijos e vegetais'],
  ['entradas', 'Entradas'],
  ['cortes', 'Cortes'],
  ['guarnicoes', 'Guarnições'],
  ['sobremesas', 'Sobremesa'],
  ['burguer', 'Burguer'],
];

/* Adicionais (todos sob consulta; entram na proposta final). */
const SERVICES = [
  { id: 'garcom', name: 'Garçom', desc: 'Serviço de mesa durante todo o evento.' },
  { id: 'copeiro', name: 'Copeiro', desc: 'Apoio no bar, copos e reposição.' },
  { id: 'bartender', name: 'Bartender', desc: 'Drinks e coquetéis no seu evento.' },
  { id: 'bebidas-soft', name: 'Bebidas soft', desc: 'Refrigerantes, sucos e água.' },
  { id: 'bebidas-cerveja', name: 'Cerveja e caipirinha', desc: 'Pacote de bebidas alcoólicas clássico.' },
  { id: 'bebidas-drinks', name: 'Drinks refinados', desc: 'Pacote de coquetelaria premium.' },
  { id: 'utensilios', name: 'Mesas, cadeiras e toalhas', desc: 'Estrutura e utensílios para os convidados.' },
  { id: 'recreacao', name: 'Recreação', desc: 'Matraka ou mágica para animar a festa.' },
  { id: 'seguranca', name: 'Segurança', desc: 'Equipe de segurança para o evento.' },
  { id: 'doces', name: 'Doces personalizados', desc: 'Um toque de confeitaria na celebração.' },
  { id: 'bolo', name: 'Bolo de celebração', desc: 'Tamanho e acabamento a combinar.' },
];

const MIN_BUFFET = 25;

/* ---------- Helpers ---------- */

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const brl = (v, cents = false) => v.toLocaleString('pt-BR', {
  style: 'currency', currency: 'BRL',
  minimumFractionDigits: cents ? 2 : 0, maximumFractionDigits: cents ? 2 : 0,
});
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const waLink = (text) => `https://wa.me/${CONFIG.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

document.documentElement.classList.add('js');

/* ---------- Links de contato ---------- */

$$('[data-wa]').forEach((a) => {
  a.href = waLink('Olá! Vim pelo site e quero saber mais sobre os eventos da Brazzaria.');
  a.target = '_blank';
  a.rel = 'noopener';
});
if (CONFIG.instagram) Object.assign($('[data-instagram]'), { href: CONFIG.instagram, hidden: false, target: '_blank', rel: 'noopener' });
if (CONFIG.email) Object.assign($('[data-email]'), { href: `mailto:${CONFIG.email}`, hidden: false });
$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

/* Outros formatos: WhatsApp já com o formato escolhido e espaço para detalhar */
const formatMessage = (name) => [
  `Olá! Me interessei pelo formato *${name}* da Brazzaria para o meu evento.`,
  '',
  'Sobre a festa:',
  '• Tipo de evento: ',
  '• Data: ',
  '• Cidade / bairro: ',
  '• Convidados: ',
  '',
  'Mais detalhes: ',
].join('\n');
$('[data-format]').forEach((a) => {
  a.href = waLink(formatMessage(a.dataset.format));
  a.target = '_blank';
  a.rel = 'noopener';
});

/* ---------- Header / nav ---------- */

const header = $('.header');
const nav = $('#nav');
const burger = $('.burger');
const mobilebar = $('.mobilebar');
const simSection = $('#orcamento');

const setMenu = (open) => {
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  nav.classList.toggle('is-open', open);
  header.classList.toggle('menu-open', open);
};
burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

let simVisible = false;
const onScroll = () => {
  const y = window.scrollY;
  header.classList.toggle('is-scrolled', y > 20);
  mobilebar.classList.toggle('is-on', y > window.innerHeight * 0.6);
  mobilebar.classList.toggle('is-sim', simVisible);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

new IntersectionObserver(([entry]) => {
  simVisible = entry.isIntersecting;
  onScroll();
}, { threshold: 0.05 }).observe(simSection);

/* ---------- Reveal ---------- */

const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) {
      en.target.classList.add('is-in');
      revealObs.unobserve(en.target);
    }
  });
}, { rootMargin: '0px 0px -8% 0px' });
$$('.reveal').forEach((el, i) => {
  el.style.transitionDelay = el.closest('.steps') ? `${(i % 4) * 90}ms` : '';
  revealObs.observe(el);
});

/* ---------- Cardápios (tabs) ---------- */

const tabsEl = $('.menus__tabs');
const panelEl = $('.menus__panel');

tabsEl.innerHTML = MENUS.map((m, i) => `
  <button class="tab" role="tab" id="tab-${m.id}" aria-controls="menu-panel"
    aria-selected="false" tabindex="-1" data-menu="${m.id}">
    <span class="tab__name">${m.name}</span>
    <span class="tab__price"><b>${brl(m.price)}</b> /pessoa</span>
  </button>`).join('');
panelEl.id = 'menu-panel';

function renderPanel(id) {
  const idx = MENUS.findIndex((m) => m.id === id);
  const m = MENUS[idx];
  const prev = idx > 1 ? MENUS[idx - 1] : null; // Basic é a base; destacamos o que entra a partir do Select

  $$('.tab', tabsEl).forEach((t) => {
    const on = t.dataset.menu === id;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
  });
  panelEl.setAttribute('aria-labelledby', `tab-${id}`);

  const groups = GROUPS.filter(([k]) => m[k]?.length).map(([k, label]) => `
        <div class="group group--${k}">
          <h4>${label}</h4>
          <ul>${m[k].map((item) => {
            const isNew = prev && !(prev[k] || []).includes(item);
            return `<li${isNew ? ' class="is-new"' : ''}>${esc(item)}</li>`;
          }).join('')}</ul>
        </div>`).join('');
  const info = m.info ? `<p class="panel__info">${esc(m.info)}</p>` : '';

  panelEl.innerHTML = `
    <div class="panel__side">
      <span class="panel__tier">Cardápio ${String(idx + 1).padStart(2, '0')} de 05</span>
      <h3 class="panel__name">${m.name}</h3>
      <p class="panel__note">${esc(m.note)}</p>
      <div class="panel__price">
        <b><small>R$</small>${m.price}</b>
        <span>por pessoa</span>
      </div>
      <a class="btn btn--ember" href="#orcamento" data-pick="${m.id}">Simular com o ${m.name}</a>
    </div>
    <div class="panel__groups">${groups}${info}</div>`;

  panelEl.classList.remove('panel-enter');
  void panelEl.offsetWidth;
  panelEl.classList.add('panel-enter');
}

tabsEl.addEventListener('click', (e) => {
  const t = e.target.closest('.tab');
  if (!t) return;
  renderPanel(t.dataset.menu);
  t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
});
tabsEl.addEventListener('keydown', (e) => {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
  e.preventDefault();
  const tabs = $$('.tab', tabsEl);
  let i = tabs.findIndex((t) => t.getAttribute('aria-selected') === 'true');
  if (e.key === 'ArrowRight') i = (i + 1) % tabs.length;
  if (e.key === 'ArrowLeft') i = (i - 1 + tabs.length) % tabs.length;
  if (e.key === 'Home') i = 0;
  if (e.key === 'End') i = tabs.length - 1;
  renderPanel(tabs[i].dataset.menu);
  tabs[i].focus();
});
panelEl.addEventListener('click', (e) => {
  const pick = e.target.closest('[data-pick]');
  if (!pick) return;
  const input = $(`#sim-menus input[value="${pick.dataset.pick}"]`);
  if (input) { input.checked = true; form.format.value = 'buffet'; update(); }
});

renderPanel('select');

/* ---------- Simulador ---------- */

const form = $('#sim-form');
const simMenus = $('#sim-menus');
const simServices = $('#sim-services');

simMenus.innerHTML = MENUS.map((m) => `
  <label class="choice choice--menu">
    <input type="radio" name="menu" value="${m.id}"${m.id === 'select' ? ' checked' : ''}>
    <span class="choice__body">
      <b>${m.name}</b>
      <span class="price"><strong>${brl(m.price)}</strong> /pessoa</span>
    </span>
  </label>`).join('');

simServices.innerHTML = SERVICES.map((s) => `
  <label class="choice">
    <input type="checkbox" name="services" value="${s.id}">
    <span class="choice__body"><b>${s.name}</b><small>${s.desc}</small></span>
  </label>`).join('');

const guestsInput = form.guests;
const guestsRange = form.guestsRange;
const guestsHint = $('#guests-hint');

const clampGuests = (v) => Math.min(500, Math.max(1, Math.round(Number(v) || 0)));
function setGuests(v, from) {
  const n = clampGuests(v);
  if (from !== 'input') guestsInput.value = n;
  guestsRange.value = Math.min(n, Number(guestsRange.max));
  guestsRange.style.setProperty('--p', `${((guestsRange.value - 1) / (guestsRange.max - 1)) * 100}%`);
  update();
}
guestsInput.addEventListener('input', () => setGuests(guestsInput.value, 'input'));
guestsInput.addEventListener('blur', () => setGuests(guestsInput.value));
guestsRange.addEventListener('input', () => setGuests(guestsRange.value));
$$('.stepper button').forEach((b) => b.addEventListener('click', () => {
  const step = Number(b.dataset.step);
  const cur = clampGuests(guestsInput.value);
  setGuests(step > 0 ? Math.floor(cur / 5) * 5 + 5 : Math.ceil(cur / 5) * 5 - 5);
}));

form.addEventListener('input', (e) => { if (!['guests', 'guestsRange'].includes(e.target.name)) update(); });
form.addEventListener('submit', (e) => e.preventDefault());

function readState() {
  const fd = new FormData(form);
  return {
    format: fd.get('format'),
    type: fd.get('type'),
    date: parseDate(fd.get('date')),
    city: (fd.get('city') || '').trim(),
    guests: clampGuests(fd.get('guests')),
    hours: Number(fd.get('hours')),
    menu: MENUS.find((m) => m.id === fd.get('menu')),
    services: fd.getAll('services').map((id) => SERVICES.find((s) => s.id === id)),
    name: (fd.get('name') || '').trim(),
  };
}

function calc(s) {
  const pending = [];
  let total = null;
  if (s.format === 'chef') {
    pending.push('Churrasqueiro exclusivo');
  } else if (s.guests < MIN_BUFFET) {
    pending.push(`Buffet para menos de ${MIN_BUFFET} convidados`);
  } else {
    total = s.guests * s.menu.price;
  }
  if (s.hours > 4) pending.push(`${s.hours - 4} hora${s.hours > 5 ? 's' : ''} adicional${s.hours > 5 ? 'is' : ''}`);
  s.services.forEach((sv) => pending.push(sv.name));
  return { total, pending };
}

const parseDate = (v) => {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec((v || '').trim());
  if (!m) return '';
  const [d, mo, y] = m.slice(1).map(Number);
  const dt = new Date(y, mo - 1, d);
  return dt.getFullYear() === y && dt.getMonth() === mo - 1 && dt.getDate() === d ? m[0] : '';
};

function buildMessage(s, r) {
  const lines = [
    'Olá! Quero um orçamento da Brazzaria Eventos.',
    '',
    `• Formato: ${s.format === 'chef' ? 'Churrasqueiro exclusivo' : 'Buffet completo'}`,
    `• Evento: ${s.type}`,
    s.date && `• Data: ${s.date}`,
    s.city && `• Local: ${s.city}`,
    `• Convidados: ${s.guests}`,
    `• Duração: ${s.hours} horas`,
    s.format === 'buffet' && `• Cardápio: ${s.menu.name} (${brl(s.menu.price)}/pessoa)`,
    s.services.length && `• Adicionais: ${s.services.map((x) => x.name).join(', ')}`,
    r.total !== null && `\nEstimativa do cardápio no site: ${brl(r.total, true)}`,
    s.name && `\nMeu nome: ${s.name}`,
  ];
  return lines.filter(Boolean).join('\n');
}

const sumTotal = $('#sum-total');
const sumPer = $('#sum-per');
const sumList = $('#sum-list');
const sumPending = $('#sum-pending');
const sumSend = $('#sum-send');
const mbSend = $('#mb-send');
const mbTotal = $('#mb-total');
let lastMessage = '';

function update() {
  const s = readState();
  const r = calc(s);
  const isChef = s.format === 'chef';

  simMenus.classList.toggle('is-disabled', isChef);
  $('#chef-note').hidden = !isChef;

  const small = !isChef && s.guests < MIN_BUFFET;
  guestsHint.classList.toggle('is-warn', small);
  guestsHint.textContent = small
    ? `Abaixo de ${MIN_BUFFET} convidados o buffet é sob consulta. Envie mesmo assim que a gente avalia.`
    : `Buffet a partir de ${MIN_BUFFET} convidados. Grupos menores, sob consulta.`;

  if (r.total !== null) {
    sumTotal.textContent = brl(r.total);
    sumTotal.classList.remove('is-consult');
    sumPer.textContent = `${brl(s.menu.price)} por pessoa · ${s.guests} convidados`;
  } else {
    sumTotal.textContent = 'Sob consulta';
    sumTotal.classList.add('is-consult');
    sumPer.textContent = isChef ? 'Valor do profissional sob proposta' : 'A gente monta uma proposta para você';
  }

  const rows = [
    ['Formato', isChef ? 'Churrasqueiro' : 'Buffet completo'],
    ['Evento', s.type],
    s.date && ['Data', s.date],
    ['Convidados', s.guests],
    ['Duração', `${s.hours}h`],
    !isChef && ['Cardápio', s.menu.name],
  ].filter(Boolean);
  sumList.innerHTML = rows.map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join('');

  sumPending.hidden = r.pending.length === 0;
  $('ul', sumPending).innerHTML = r.pending.map((p) => `<li>${esc(p)}</li>`).join('');

  lastMessage = buildMessage(s, r);
  sumSend.href = waLink(lastMessage);
  mbSend.href = sumSend.href;
  mbTotal.textContent = sumTotal.textContent;
}

$('#sum-copy').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(lastMessage);
    toast('Resumo copiado');
  } catch {
    toast('Não foi possível copiar');
  }
});

let toastTimer;
function toast(msg) {
  const t = $('.toast');
  t.textContent = msg;
  t.classList.add('is-on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('is-on'), 2200);
}

// Máscara dd/mm/aaaa no campo de data
form.date.addEventListener('input', () => {
  const digits = form.date.value.replace(/\D/g, '').slice(0, 8);
  form.date.value = digits.replace(/^(\d{2})(\d)/, '$1/$2').replace(/^(\d{2}\/\d{2})(\d)/, '$1/$2');
});
setGuests(50);

/* ---------- Brasas no hero ---------- */

(function embers() {
  const canvas = $('.hero__embers');
  if (!canvas || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const ctx = canvas.getContext('2d');
  const hero = $('.hero');
  let w, h, dpr, parts = [], running = true, raf;

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  const spawn = () => {
    const desktop = w > 900;
    const cx = desktop ? w * 0.72 : w * 0.5;
    return {
      x: cx + (Math.random() - 0.5) * (desktop ? w * 0.35 : w * 0.8),
      y: h * (desktop ? 0.75 : 0.45) + Math.random() * h * 0.25,
      r: Math.random() * 1.6 + 0.4,
      vy: Math.random() * 0.6 + 0.25,
      vx: (Math.random() - 0.5) * 0.25,
      life: 0,
      max: 160 + Math.random() * 220,
      hue: 18 + Math.random() * 26,
      wob: Math.random() * Math.PI * 2,
    };
  };
  const count = () => (w > 900 ? 55 : 28);

  const tick = () => {
    if (!running) return;
    ctx.clearRect(0, 0, w, h);
    while (parts.length < count()) parts.push(spawn());
    ctx.globalCompositeOperation = 'lighter';
    parts.forEach((p, i) => {
      p.life++;
      p.wob += 0.03;
      p.x += p.vx + Math.sin(p.wob) * 0.25;
      p.y -= p.vy;
      const t = p.life / p.max;
      const a = t < 0.15 ? t / 0.15 : 1 - (t - 0.15) / 0.85;
      ctx.beginPath();
      ctx.fillStyle = `hsla(${p.hue}, 100%, ${55 + p.r * 8}%, ${Math.max(a, 0) * 0.85})`;
      ctx.shadowColor = `hsla(${p.hue}, 100%, 55%, 1)`;
      ctx.shadowBlur = 8;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      if (p.life >= p.max || p.y < -10) parts[i] = spawn();
    });
    raf = requestAnimationFrame(tick);
  };

  resize();
  window.addEventListener('resize', resize);
  new IntersectionObserver(([en]) => {
    running = en.isIntersecting;
    cancelAnimationFrame(raf);
    if (running) tick();
  }).observe(hero);
})();
