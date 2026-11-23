const characters = [
  {
    id:'record', index:'01', law:'기록[記錄]', alter:'개서[改書]',
    before:'assets/characters/record_01.webp', after:'assets/characters/record_05.webp',
    subtitle:'진실을 보존하던 자 → 진실을 다시 쓰는 자',
    desc:'세계의 모든 진실과 역사를 기록하던 정율. 제0기록을 통해 서로 모순되는 수많은 세계가 동시에 실제였음을 확인한 뒤, 자신이 지켜온 단 하나의 진실이라는 개념을 잃었다.',
    fall:'진실이 하나가 아니라면 기록하는 자가 직접 세계의 진실을 정해도 된다는 결론에 도달했다.',
    power:'책과 문장을 통해 과거·기억·역사·사건의 결과를 다시 써 현실에 반영한다.',
    quote:'진실을 찾을 필요가 없었네. 내가 쓰면 되는 거였어.', comic:'record'
  },
  {
    id:'name', index:'02', law:'명명[命名]', alter:'말소[抹消]',
    before:'assets/characters/name_01.webp', after:'assets/characters/name_05.webp',
    subtitle:'이름을 부여하던 자 → 존재를 지우는 자',
    desc:'모든 존재에게 이름과 자리를 부여하던 정율. 같은 존재조차 세계마다 다른 이름과 삶을 가진다는 사실을 확인한 뒤, 이름과 정체성이 절대적이라는 믿음이 무너졌다.',
    fall:'이름이 존재를 설명하는 것이 아니라 존재를 규정하고 속박한다고 판단해 이름과 그에 연결된 기억 자체를 지우기 시작했다.',
    power:'이름을 말소해 관계·기록·기억 속 정체성을 함께 지운다.',
    quote:'이름은 너희를 지켜준 게 아니야. 속박하고 있었을 뿐이지.', comic:'name'
  },
  {
    id:'boundary', index:'03', law:'경계[境界]', alter:'침식[侵蝕]',
    before:'assets/characters/boundary_01.webp', after:'assets/characters/boundary_05.webp',
    subtitle:'세계를 나누던 자 → 모든 선을 녹이는 자',
    desc:'삶과 죽음, 인간과 신, 꿈과 현실 사이의 선을 유지하던 정율. 제0기록 속에서는 그러한 경계가 없거나 전혀 다른 위치에 존재하는 세계도 멀쩡히 유지되고 있었다.',
    fall:'자신이 보호라고 믿었던 경계가 오히려 서로 닿을 수 있는 존재들을 갈라놓는 감옥일 수 있다고 믿게 되었다.',
    power:'생과 사, 현실과 환상, 개체와 세계 사이의 경계를 침식시켜 서로 다른 영역을 하나로 섞는다.',
    quote:'전부 하나로 만들면 되잖아. 경계가 없다면 누구도 다시 분리되지 않을 테니까.', comic:'boundary'
  },
  {
    id:'causality', index:'04', law:'인과[因果]', alter:'역리[逆理]',
    before:'assets/characters/causality_01.webp', after:'assets/characters/causality_05.webp',
    subtitle:'원인과 결과를 잇던 자 → 결과를 먼저 정하는 자',
    desc:'모든 결과에는 원인이 있어야 한다는 질서를 지키던 정율. 그러나 제0기록에서는 같은 원인이 전혀 다른 결과를 만들고, 심지어 결과가 먼저 존재한 뒤 원인이 만들어지는 세계까지 발견했다.',
    fall:'인과가 절대 법칙이 아니라 세계가 결과를 정당화하기 위해 붙이는 순서일 뿐이라고 판단했다.',
    power:'원인을 기다리지 않고 원하는 결과를 먼저 확정한다. 이후 세계가 그 결과에 맞는 원인과 과정을 강제로 만들어낸다.',
    quote:'왜 원인을 기다렸지? 결과부터 정하면 돼.', comic:'causality'
  },
  {
    id:'price', index:'05', law:'대가[代價]', alter:'탐징[貪徵]',
    before:'assets/characters/price_01.webp', after:'assets/characters/price_05.webp',
    subtitle:'공정한 교환을 지키던 자 → 가치를 멋대로 거두는 자',
    desc:'기적과 욕망에는 반드시 그에 상응하는 대가가 있어야 한다고 믿던 정율. 제0기록에서는 같은 소원조차 기억·수명·사랑·재산 등 전혀 다른 값을 요구하거나 아무 대가도 필요하지 않았다.',
    fall:'공평한 대가라는 기준 자체가 보편적인 법칙이 아니었다는 사실을 받아들인 뒤, 가치의 기준을 오직 자신의 만족으로 바꾸었다.',
    power:'대상의 가치를 임의로 정하고 기억·수명·이름·사랑·재산 등 원하는 것을 원하는 만큼 징수한다.',
    quote:'가치는 내가 정해. 내가 만족할 때까지 전부 내놓아.', comic:'price'
  },
  {
    id:'finality', index:'06', law:'종결[終結]', alter:'영속[永續]',
    before:'assets/characters/finality_01.webp', after:'assets/characters/finality_05.webp',
    subtitle:'마지막을 부여하던 자 → 끝을 거부하는 자',
    desc:'죽음과 멸망, 시대와 이야기에 마지막을 부여하던 정율. 제0기록에는 이미 끝난 존재와 나라가 다른 세계에서 여전히 살아 움직이고 있었다.',
    fall:'끝은 절대적인 결론이 아니라 하나의 세계가 선택한 상태일 뿐이라고 판단해, 모든 종결 자체를 거부하기 시작했다.',
    power:'죽음·이별·전쟁·붕괴·고통 등 사건이 마지막 순간에 도달하지 못하도록 붙잡아 끝없이 지속시킨다.',
    quote:'이제 아무것도… 끝나지 않아.', comic:'finality'
  },
  {
    id:'choice', index:'07', law:'선택[選擇]', alter:'범람[氾濫]',
    before:'assets/characters/choice_01.webp', after:'assets/characters/choice_05.webp',
    subtitle:'하나의 가능성을 고르던 자 → 모든 가능성을 쏟아붓는 자',
    desc:'무수한 가능성 가운데 단 하나를 현실로 남겨 세계가 앞으로 나아가게 하던 정율. 제0기록에서는 자신이 버린 미래들 역시 다른 세계에서 완전한 현실로 존재했다.',
    fall:'버려진 가능성도 모두 진짜라면 하나만 선택할 이유가 없다고 믿게 되었고, 선택이라는 행위 자체를 포기했다.',
    power:'서로 모순되는 모든 가능성을 동시에 현실에 풀어놓아 여러 역사·결과·존재가 한 세계에서 겹쳐 존재하게 만든다.',
    quote:'왜 하나만 현실이어야 하지? 모든 가능성을 현실로 만들어줄게.', comic:'choice'
  }
];

const comics = [
  {id:'record', title:'기록 → 개서', eyebrow:'RECORD 01 / CORRUPTION COMPLETE', desc:'진실을 기록하던 법칙이 세계의 진실을 직접 다시 쓰기 시작한 순간.', image:'assets/webtoons/record_to_rewrite.webp'},
  {id:'name', title:'명명 → 말소', eyebrow:'RECORD 02 / CORRUPTION COMPLETE', desc:'이름을 부여하던 법칙이 존재와 정체성을 지우기 시작한 순간.', image:'assets/webtoons/name_to_erasure.webp'},
  {id:'boundary', title:'경계 → 침식', eyebrow:'RECORD 03 / CORRUPTION COMPLETE', desc:'서로를 지키던 경계가 세계를 가르는 감옥으로 뒤집힌 순간.', image:'assets/webtoons/boundary_to_erosion.webp'},
  {id:'causality', title:'인과 → 역리', eyebrow:'RECORD 04 / CORRUPTION COMPLETE', desc:'원인을 기다리던 법칙이 결과를 먼저 정하기 시작한 순간.', image:'assets/webtoons/causality_to_reverse_law.webp'},
  {id:'price', title:'대가 → 탐징', eyebrow:'RECORD 05 / CORRUPTION COMPLETE', desc:'공정한 교환을 지키던 법칙이 세상의 가치를 마음대로 징수하기 시작한 순간.', image:'assets/webtoons/price_to_tribute.webp'},
  {id:'finality', title:'종결 → 영속', eyebrow:'RECORD 06 / CORRUPTION COMPLETE', desc:'마지막을 부여하던 법칙이 모든 끝을 거부하기 시작한 순간.', image:'assets/webtoons/finality_to_eternity.webp'},
  {id:'choice', title:'선택 → 범람', eyebrow:'RECORD 07 / CORRUPTION COMPLETE', desc:'하나의 미래를 고르던 법칙이 모든 가능성을 동시에 현실로 풀어놓은 순간.', image:'assets/webtoons/choice_to_overflow.webp'}
];

const characterGrid = document.getElementById('character-grid');
characters.forEach(c => {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'record-card released reveal';
  card.dataset.character = c.id;
  card.innerHTML = `
    <div class="record-thumb">
      <img src="${c.before}" alt="${c.law} 타락 전 모습" loading="lazy">
      <span class="image-state before-state">BEFORE / 정율</span>
    </div>
    <div class="record-body">
      <span class="mini">ALTERER ${c.index}</span>
      <h3>${c.law}<span>→ ${c.alter}</span></h3>
      <p>${c.subtitle}</p>
      <small class="open-hint">상세 기록 열람 →</small>
    </div>
  `;
  characterGrid.appendChild(card);
});

const comicGrid = document.getElementById('comic-grid');
comics.forEach(c => {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'comic-card reveal';
  card.dataset.openComic = c.id;
  card.innerHTML = `
    <div class="comic-thumb"><img src="${c.image}" alt="${c.title}" loading="lazy"></div>
    <div class="comic-body">
      <small>${c.eyebrow}</small>
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
    </div>
  `;
  comicGrid.appendChild(card);
});

const characterDialog = document.getElementById('character-dialog');
const characterModalContent = document.getElementById('character-modal-content');

const originalState = {
  record: {
    role:'세계의 모든 진실과 역사를 기록하고 보존하던 정율.',
    quote:'기록된 것은 사라지지 않아. 진실은 반드시 남아야 하니까.'
  },
  name: {
    role:'모든 존재에게 이름을 부여하고, 그 이름으로 존재와 자리를 확정하던 정율.',
    quote:'이름은 존재가 이 세계에 있었다는 가장 분명한 증명이야.'
  },
  boundary: {
    role:'삶과 죽음, 인간과 신, 꿈과 현실 사이의 선을 유지하던 정율.',
    quote:'경계는 서로를 갈라놓기 위해서가 아니라 서로를 지키기 위해 존재해.'
  },
  causality: {
    role:'모든 결과에 원인을 연결하고 사건의 순서와 질서를 유지하던 정율.',
    quote:'우연은 없어. 모든 결과에는 반드시 원인이 있어.'
  },
  price: {
    role:'기적과 욕망에 상응하는 값을 부여해 세계의 공정한 교환을 유지하던 정율.',
    quote:'무언가를 얻었다면 그만큼 내놓아야 해. 그래야 공평하니까.'
  },
  finality: {
    role:'죽음과 멸망, 시대와 이야기에 마지막을 부여하던 정율.',
    quote:'끝이 있기 때문에 삶과 이야기는 비로소 완성되는 거야.'
  },
  choice: {
    role:'무수한 가능성 가운데 하나를 현실로 남겨 세계를 앞으로 나아가게 하던 정율.',
    quote:'가능성은 무수하지만 현실이 될 수 있는 건 하나뿐이야.'
  }
};

function renderCharacterState(c, corrupted=false){
  const original = originalState[c.id];
  const visual = characterModalContent.querySelector('[data-character-visual]');
  const image = characterModalContent.querySelector('[data-character-image]');
  const state = characterModalContent.querySelector('[data-character-state]');
  const hint = characterModalContent.querySelector('[data-character-hint]');
  const eyebrow = characterModalContent.querySelector('[data-character-eyebrow]');
  const title = characterModalContent.querySelector('[data-character-title]');
  const desc = characterModalContent.querySelector('[data-character-desc]');
  const quote = characterModalContent.querySelector('[data-character-quote]');
  const details = characterModalContent.querySelector('[data-character-details]');
  const action = characterModalContent.querySelector('[data-toggle-label]');

  visual.classList.toggle('is-after', corrupted);
  image.classList.add('state-swap');
  image.src = corrupted ? c.after : c.before;
  image.alt = corrupted ? `${c.alter} 완전 타락 후 모습` : `${c.law} 타락 전 모습`;
  requestAnimationFrame(() => requestAnimationFrame(() => image.classList.remove('state-swap')));

  state.textContent = corrupted ? `AFTER / ${c.alter}` : `BEFORE / ${c.law}`;
  hint.innerHTML = corrupted
    ? `<span>개찬 완료</span><b>↺</b><strong>이미지를 눌러 타락 전 기록 복원</strong>`
    : `<span>정율 상태</span><b>→</b><strong>이미지를 눌러 개찬 후 기록 해제</strong>`;
  eyebrow.textContent = corrupted ? `ALTERER ${c.index} / CORRUPTION COMPLETE` : `LAW ${c.index} / ORIGINAL STATE`;
  title.innerHTML = corrupted ? `${c.law}<span>→ ${c.alter}</span>` : `${c.law}<span class="before-title">ORIGINAL LAW</span>`;
  desc.textContent = corrupted ? c.desc : original.role;
  quote.textContent = corrupted ? `“${c.quote}”` : `“${original.quote}”`;
  details.innerHTML = corrupted
    ? `<div><small>타락 계기</small><p>${c.fall}</p></div><div><small>개찬 권능</small><p>${c.power}</p></div>`
    : `<div><small>정율 역할</small><p>${original.role}</p></div><div><small>기록 상태</small><p>개찬 이전의 원본 정율 기록. 이미지 자체를 눌러 개찬 후 상태를 열람할 수 있다.</p></div>`;
  action.textContent = corrupted ? '타락 전 모습으로' : '개찬 후 모습 보기';
  visual.setAttribute('aria-pressed', corrupted ? 'true' : 'false');
  visual.dataset.corrupted = corrupted ? 'true' : 'false';
}

function toggleCharacterState(){
  const visual = characterModalContent.querySelector('[data-character-visual]');
  if (!visual) return;
  const c = characters.find(x => x.id === visual.dataset.characterId);
  if (!c) return;
  renderCharacterState(c, visual.dataset.corrupted !== 'true');
}

function openCharacter(id){
  const c = characters.find(x => x.id === id);
  if (!c) return;
  characterModalContent.innerHTML = `
    <div class="character-modal-layout">
      <button class="character-modal-visual character-image-toggle" type="button" data-character-visual data-character-id="${c.id}" data-corrupted="false" aria-pressed="false" aria-label="${c.law} 개찬 전후 이미지 전환">
        <img data-character-image src="${c.before}" alt="${c.law} 타락 전 모습">
        <span class="modal-state before-modal-state" data-character-state>BEFORE / ${c.law}</span>
        <div class="visual-transition-note" data-character-hint><span>정율 상태</span><b>→</b><strong>이미지를 눌러 개찬 후 기록 해제</strong></div>
        <span class="corruption-flash" aria-hidden="true"></span>
      </button>
      <div class="character-modal-copy">
        <p class="eyebrow" data-character-eyebrow>LAW ${c.index} / ORIGINAL STATE</p>
        <h2 data-character-title>${c.law}<span class="before-title">ORIGINAL LAW</span></h2>
        <p data-character-desc>${originalState[c.id].role}</p>
        <div class="quote" data-character-quote>“${originalState[c.id].quote}”</div>
        <div class="detail-list" data-character-details>
          <div><small>정율 역할</small><p>${originalState[c.id].role}</p></div>
          <div><small>기록 상태</small><p>개찬 이전의 원본 정율 기록. 이미지 자체를 눌러 개찬 후 상태를 열람할 수 있다.</p></div>
        </div>
        <div class="modal-actions">
          <button class="btn btn-primary" data-toggle-character-state data-toggle-label>개찬 후 모습 보기</button>
          <button class="btn" data-modal-comic="${c.comic}">타락 웹툰 열람</button>
          <button class="btn" data-close-modal>닫기</button>
        </div>
      </div>
    </div>
  `;
  characterDialog.showModal();
}

const comicDialog = document.getElementById('comic-dialog');
const comicModalImage = document.getElementById('comic-modal-image');
const comicModalTitle = document.getElementById('comic-modal-title');

function openComic(id){
  const c = comics.find(x => x.id === id);
  if (!c) return;
  comicModalTitle.textContent = c.title;
  comicModalImage.src = c.image;
  comicModalImage.alt = `${c.title} 웹툰`;
  comicDialog.showModal();
}

document.addEventListener('click', e => {
  const char = e.target.closest('[data-character]');
  if (char) openCharacter(char.dataset.character);

  const openComicBtn = e.target.closest('[data-open-comic]');
  if (openComicBtn) openComic(openComicBtn.dataset.openComic);

  const toggleVisual = e.target.closest('[data-character-visual], [data-toggle-character-state]');
  if (toggleVisual) toggleCharacterState();

  const fromModal = e.target.closest('[data-modal-comic]');
  if (fromModal){
    characterDialog.close();
    openComic(fromModal.dataset.modalComic);
  }

  if (e.target.closest('[data-close-modal]')) characterDialog.close();
  if (e.target.closest('[data-close-comic]')) comicDialog.close();
});

[characterDialog, comicDialog].forEach(dialog => {
  dialog.addEventListener('click', e => {
    if (e.target === dialog) dialog.close();
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.site-nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
nav.addEventListener('click', e => {
  if (e.target.matches('a')) nav.classList.remove('open');
});

// Single-screen hash routing
const validViews = new Set(['home','world','laws','alterers','archive','status']);
function currentViewFromHash(){
  const raw = (location.hash || '#home').slice(1);
  return validViews.has(raw) ? raw : 'home';
}
function showView(view){
  document.querySelectorAll('.view').forEach(el => {
    const active = el.dataset.view === view;
    el.classList.toggle('active', active);
    if(active){
      el.classList.remove('route-fade');
      void el.offsetWidth;
      el.classList.add('route-fade');
    }
  });
  document.body.classList.toggle('home-mode', view === 'home');
  document.querySelectorAll('.site-nav a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${view}`);
  });
  window.scrollTo({top:0, left:0, behavior:'auto'});
}
function route(){ showView(currentViewFromHash()); }
window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);

document.addEventListener('click', e => {
  const routeLink = e.target.closest('a[href^="#"]');
  if(!routeLink) return;
  const target = routeLink.getAttribute('href').slice(1);
  if(validViews.has(target)) document.querySelector('.site-nav')?.classList.remove('open');
});
