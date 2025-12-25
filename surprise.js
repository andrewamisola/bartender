const intro = document.getElementById('intro');
const reveal = document.getElementById('reveal');
const destiny = document.getElementById('destiny');
const modalContent = document.getElementById('modalContent');
const beginBtn = document.getElementById('beginBtn');
const drawBtn = document.getElementById('drawBtn');
const againBtn = document.getElementById('againBtn');
const homeBtn = document.getElementById('homeBtn');
const backBtn = document.getElementById('backBtn');
const portal = document.getElementById('portal');
const ritualClose = document.getElementById('ritualClose');

let outOfStock = JSON.parse(localStorage.getItem('outOfStock') || '[]');

function normalizeIngredient(name) {
  return name.replace(/^Fresh\s+/i, '').replace(/\s*\(.*\)/, '').trim();
}

function isAvailable(recipe) {
  if (outOfStock.length === 0) return true;
  return !recipe.ingredients.some(i => outOfStock.includes(normalizeIngredient(i.name)));
}

function buildFactParagraph(r) {
  const steps = r.instructions.join(' ').toLowerCase();
  const ingredients = r.ingredients.map(i => i.name.toLowerCase());
  const hasCitrus = ingredients.some(n => n.includes('lemon') || n.includes('lime') || n.includes('grapefruit') || n.includes('orange'));
  const hasBitters = ingredients.some(n => n.includes('bitters'));
  const hasBubbles = ingredients.some(n => n.includes('soda') || n.includes('tonic') || n.includes('ginger beer') || n.includes('champagne') || n.includes('prosecco') || n.includes('sparkling'));
  const hasCreamy = ingredients.some(n => n.includes('cream') || n.includes('coconut') || n.includes('irish cream'));
  const hasHerbal = ingredients.some(n => n.includes('chartreuse') || n.includes('vermouth') || n.includes('amaro') || n.includes('campari') || n.includes('aperol'));
  const method = steps.includes('shake') ? 'shaken'
    : steps.includes('stir') ? 'stirred'
    : 'built';

  let style = 'balanced and approachable';
  if (hasBubbles) style = 'long, fizzy, and refreshing';
  else if (hasCreamy) style = 'rich and silky';
  else if (hasHerbal || hasBitters) style = 'spirit-forward with layered bitterness';
  else if (hasCitrus) style = 'bright and citrus-forward';

  const serve = `It’s typically ${method} and served in a ${r.glass.toLowerCase()}, with ${r.garnish.toLowerCase()} adding aroma and lift.`;
  const profile = `Flavor-wise, it leans ${style}, and the ingredients work best when freshly measured and well chilled.`;
  return `${r.fact} ${serve} ${profile}`;
}

function pickRecipe() {
  const kidMode = localStorage.getItem('kidMode') === 'on';
  const available = RECIPES.filter(r => {
    const kidOnly = kidMode ? r.category === 'mocktails' : true;
    return isAvailable(r) && kidOnly;
  });
  if (available.length === 0) return null;
  const storedId = Number(localStorage.getItem('surpriseRecipeId'));
  const stored = available.find(r => r.id === storedId);
  if (stored) return stored;
  return available[Math.floor(Math.random() * available.length)];
}

function renderRecipe(r) {
  const glassIcon = getGlassIcon(r.glass);
  modalContent.innerHTML = `
    <h2>${r.name}</h2>
    <span class="tag">${formatCategory(r.category)}</span>
    <img src="${r.image}" alt="${r.name}" class="modal-img" onerror="this.src='https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop'">
    <h4>Ingredients</h4>
    <ul>${r.ingredients.map((i, idx) =>
      `<li style="animation-delay: ${idx * 0.08}s"><span class="amount">${i.amount}</span>${i.name}${i.alt ? `<span class="alt">${i.alt}</span>` : ''}</li>`
    ).join('')}</ul>
    <h4>Instructions</h4>
    <ol>${r.instructions.map((s, idx) =>
      `<li style="animation-delay: ${(r.ingredients.length + idx) * 0.08}s">${s}</li>`
    ).join('')}</ol>
    <h4>History / Fun Fact</h4>
    <p class="fact">${buildFactParagraph(r)}</p>
    <div class="meta">
      <div><span>Glass</span><strong class="glass-line">${glassIcon}${r.glass}</strong></div>
      <div><span>Garnish</span><strong>${r.garnish}</strong></div>
    </div>
  `;
}

function formatCategory(cat) {
  const names = {
    classic: 'Classic', tiki: 'Tiki', whiskey: 'Whiskey', vodka: 'Vodka',
    gin: 'Gin', tequila: 'Tequila', rum: 'Rum', mocktails: 'Mocktails',
    shots: 'Shots', wine: 'Wine'
  };
  return names[cat] || cat;
}

function getGlassIcon(glass) {
  const g = glass.toLowerCase();
  if (g.includes('martini')) return glassSVG('martini');
  if (g.includes('coupe')) return glassSVG('coupe');
  if (g.includes('highball')) return glassSVG('highball');
  if (g.includes('rocks')) return glassSVG('rocks');
  if (g.includes('hurricane')) return glassSVG('hurricane');
  if (g.includes('champagne')) return glassSVG('flute');
  if (g.includes('wine')) return glassSVG('wine');
  if (g.includes('shot')) return glassSVG('shot');
  if (g.includes('mug')) return glassSVG('mug');
  if (g.includes('julep')) return glassSVG('julep');
  if (g.includes('bowl')) return glassSVG('bowl');
  return glassSVG('rocks');
}

function glassSVG(type) {
  const base = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  const svgStart = '<svg class="glass-icon" viewBox="0 0 64 64" aria-hidden="true">';
  const svgEnd = '</svg>';
  const shapes = {
    martini: `<path ${base} d="M10 8h44L32 34 10 8z"/><path ${base} d="M32 34v16"/><path ${base} d="M24 58h16"/>`,
    coupe: `<path ${base} d="M18 10h28c0 10-6 18-14 18s-14-8-14-18z"/><path ${base} d="M32 28v16"/><path ${base} d="M22 58h20"/>`,
    highball: `<rect ${base} x="20" y="8" width="24" height="44" rx="4"/><path ${base} d="M20 50h24"/>`,
    rocks: `<rect ${base} x="18" y="14" width="28" height="30" rx="4"/>`,
    hurricane: `<path ${base} d="M24 8h16c0 8-4 14-8 16-4-2-8-8-8-16z"/><path ${base} d="M28 24h8c0 10-2 18-4 20-2-2-4-10-4-20z"/><path ${base} d="M24 58h16"/>`,
    flute: `<rect ${base} x="28" y="6" width="8" height="30" rx="3"/><path ${base} d="M32 36v16"/><path ${base} d="M24 58h16"/>`,
    wine: `<path ${base} d="M22 8h20c0 10-4 18-10 20-6-2-10-10-10-20z"/><path ${base} d="M32 28v18"/><path ${base} d="M22 58h20"/>`,
    shot: `<rect ${base} x="24" y="14" width="16" height="26" rx="3"/>`,
    mug: `<rect ${base} x="20" y="10" width="20" height="34" rx="4"/><path ${base} d="M40 16h6c4 0 4 22 0 22h-6"/>`,
    julep: `<rect ${base} x="22" y="10" width="20" height="34" rx="6"/><path ${base} d="M18 14h28"/>`,
    bowl: `<path ${base} d="M16 20h32c0 10-6 18-16 18s-16-8-16-18z"/><path ${base} d="M32 38v14"/><path ${base} d="M22 58h20"/>`
  };
  return `${svgStart}${shapes[type] || shapes.rocks}${svgEnd}`;
}

function goHome() {
  window.location.href = 'index.html';
}

beginBtn.onclick = () => {
  intro.style.display = 'none';
  reveal.classList.add('open');
  reveal.setAttribute('aria-hidden', 'false');
};

backBtn.onclick = () => goHome();

homeBtn.onclick = () => goHome();

againBtn.onclick = () => {
  localStorage.removeItem('surpriseRecipeId');
  destiny.classList.remove('open');
  reveal.classList.add('open');
};

if (ritualClose) {
  ritualClose.onclick = () => {
    goHome();
  };
}

drawBtn.onclick = () => {
  const recipe = pickRecipe();
  if (!recipe) {
    reveal.querySelector('.oracle').textContent = 'The bar is silent. Everything is out of stock.';
    return;
  }
  drawBtn.disabled = true;
  drawBtn.textContent = 'Mixing...';
  if (portal) portal.classList.add('mixing');
  setTimeout(() => {
    renderRecipe(recipe);
    reveal.classList.remove('open');
    destiny.classList.add('open');
    destiny.setAttribute('aria-hidden', 'false');
    drawBtn.disabled = false;
    drawBtn.textContent = 'Choose Your Drink';
    if (portal) portal.classList.remove('mixing');
  }, 1500);
};
