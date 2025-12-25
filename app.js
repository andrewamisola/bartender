let filter = 'all', search = '';
let outOfStock = JSON.parse(localStorage.getItem('outOfStock') || '[]');
let flavorFilter = new Set();

const grid = document.getElementById('grid');
const count = document.getElementById('count');
const modal = document.getElementById('modal');
const content = document.getElementById('modalContent');
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const categories = document.getElementById('categories');
const flavorTags = document.getElementById('flavorTags');
const flavorClear = document.getElementById('flavorClear');
const themeToggle = document.getElementById('themeToggle');
const closeBtn = document.getElementById('closeBtn');
const surpriseBtn = document.getElementById('surpriseBtn');
const kidToggle = document.getElementById('kidToggle');
const stockBtn = document.getElementById('stockBtn');
const stockPanel = document.getElementById('stockPanel');
const stockGrid = document.getElementById('stockGrid');
const stockClose = document.getElementById('stockClose');
const stockClear = document.getElementById('stockClear');
const stockTags = document.getElementById('stockTags');
const stockCount = document.getElementById('stockCount');
const toast = document.getElementById('toast');
let toastTimer;
let currentRecipe = null;

// Get all unique ingredients
function getAllIngredients() {
  const ingredients = new Set();
  RECIPES.forEach(r => {
    r.ingredients.forEach(i => {
      // Get base ingredient name (without "Fresh", measurements, etc.)
      let name = i.name
        .replace(/^Fresh\s+/i, '')
        .replace(/\s*\(.*\)/, '')
        .trim();
      ingredients.add(name);
    });
  });
  return Array.from(ingredients).sort();
}

// Render stock panel
function renderStockPanel() {
  const ingredients = getAllIngredients();
  stockGrid.innerHTML = ingredients.map(ing => `
    <button class="stock-item ${outOfStock.includes(ing) ? 'selected' : ''}" data-ing="${ing}">
      ${ing}
    </button>
  `).join('');
}

// Render stock tags in bar
function renderStockTags() {
  if (outOfStock.length === 0) {
    stockTags.innerHTML = '';
    stockBtn.classList.remove('has-items');
    stockCount.classList.remove('show');
  } else {
    stockTags.innerHTML = outOfStock.slice(0, 3).map(ing => `
      <span class="stock-tag" data-ing="${ing}">${ing} <span class="remove">×</span></span>
    `).join('') + (outOfStock.length > 3 ? `<span class="stock-tag">+${outOfStock.length - 3} more</span>` : '');
    stockBtn.classList.add('has-items');
    stockCount.textContent = outOfStock.length;
    stockCount.classList.add('show');
  }
}

// Check if recipe contains out of stock ingredient
function isAvailable(recipe) {
  if (outOfStock.length === 0) return true;
  return !recipe.ingredients.some(i => {
    const name = i.name.replace(/^Fresh\s+/i, '').replace(/\s*\(.*\)/, '').trim();
    return outOfStock.includes(name);
  });
}

// Stock panel toggle
stockBtn.onclick = () => {
  stockPanel.classList.add('open');
  renderStockPanel();
};

stockClose.onclick = () => {
  stockPanel.classList.remove('open');
};

// Toggle ingredient in stock panel
stockGrid.onclick = e => {
  if (!e.target.classList.contains('stock-item')) return;
  const ing = e.target.dataset.ing;

  if (outOfStock.includes(ing)) {
    outOfStock = outOfStock.filter(i => i !== ing);
    e.target.classList.remove('selected');
  } else {
    outOfStock.push(ing);
    e.target.classList.add('selected');
  }

  localStorage.setItem('outOfStock', JSON.stringify(outOfStock));
  renderStockTags();
  render();
};

// Remove from tag click
stockTags.onclick = e => {
  const tag = e.target.closest('.stock-tag');
  if (!tag || !tag.dataset.ing) return;

  outOfStock = outOfStock.filter(i => i !== tag.dataset.ing);
  localStorage.setItem('outOfStock', JSON.stringify(outOfStock));
  renderStockTags();
  renderStockPanel();
  render();
};

// Clear all
stockClear.onclick = () => {
  outOfStock = [];
  localStorage.setItem('outOfStock', JSON.stringify(outOfStock));
  renderStockPanel();
  renderStockTags();
  render();
};


// Close panel when clicking outside
document.addEventListener('click', e => {
  if (stockPanel.classList.contains('open') &&
      !stockPanel.contains(e.target) &&
      !stockBtn.contains(e.target)) {
    stockPanel.classList.remove('open');
  }
});

// Init stock tags
renderStockTags();

// Flavor filters
if (flavorTags) {
  flavorTags.onclick = e => {
    if (!e.target.classList.contains('flavor-btn')) return;
    const flavor = e.target.dataset.flavor;
    if (flavorFilter.has(flavor)) {
      flavorFilter.delete(flavor);
      e.target.classList.remove('active');
    } else {
      flavorFilter.add(flavor);
      e.target.classList.add('active');
    }
    render();
  };
}

if (flavorClear) {
  flavorClear.onclick = () => {
    flavorFilter.clear();
    document.querySelectorAll('.flavor-btn').forEach(btn => btn.classList.remove('active'));
    render();
  };
}
// Surprise Me - random drink (respects out of stock)
surpriseBtn.onclick = () => {
  // Add shake animation
  surpriseBtn.classList.add('shake');
  setTimeout(() => surpriseBtn.classList.remove('shake'), 500);

  // Get available recipes only
  const available = RECIPES.filter(r => {
    const kidOnly = document.body.classList.contains('kid-mode') ? r.category === 'mocktails' : true;
    return isAvailable(r) && kidOnly;
  });

  if (available.length === 0) {
    showToast('All drinks contain out-of-stock ingredients. Clear some to see results.');
    return;
  }

  const randomIndex = Math.floor(Math.random() * available.length);
  const randomRecipe = available[randomIndex];
  localStorage.setItem('surpriseRecipeId', String(randomRecipe.id));
  window.location.href = 'surprise.html';
};

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

// Theme
const theme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', theme);
if (themeToggle) themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';

if (themeToggle) {
  themeToggle.onclick = () => {
    const t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
    themeToggle.textContent = t === 'dark' ? '☀️' : '🌙';
  };
}

// Kid mode (mocktails only + softer palette)
const kidMode = localStorage.getItem('kidMode') === 'on';
if (kidMode) {
  document.body.classList.add('kid-mode');
  kidToggle.classList.add('active');
  if (kidToggle.querySelector('.btn-text')) kidToggle.querySelector('.btn-text').textContent = 'Kid Mode On';
}

kidToggle.onclick = () => {
  const isOn = document.body.classList.toggle('kid-mode');
  localStorage.setItem('kidMode', isOn ? 'on' : 'off');
  kidToggle.classList.toggle('active', isOn);
  const label = isOn ? 'Kid Mode On' : 'Kid Mode';
  if (kidToggle.querySelector('.btn-text')) kidToggle.querySelector('.btn-text').textContent = label;
  render();
};

// Search with debounce
let debounceTimer;
searchInput.oninput = e => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    search = e.target.value.toLowerCase().trim();
    clearBtn.classList.toggle('show', search.length > 0);
    render();
  }, 150);
};

clearBtn.onclick = () => {
  searchInput.value = '';
  search = '';
  clearBtn.classList.remove('show');
  searchInput.focus();
  render();
};

// Categories with ripple effect
categories.onclick = e => {
  if (!e.target.classList.contains('cat-btn')) return;

  const ripple = document.createElement('span');
  ripple.style.cssText = `
    position: absolute;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s ease-out;
    pointer-events: none;
  `;
  const rect = e.target.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
  ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
  e.target.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);

  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  filter = e.target.dataset.cat;
  render();
};

// Add ripple keyframes
const style = document.createElement('style');
style.textContent = `@keyframes ripple { to { transform: scale(4); opacity: 0; } }`;
document.head.appendChild(style);

// Modal
closeBtn.onclick = () => closeModal();
modal.onclick = e => { if (e.target === modal) closeModal(); };
document.onkeydown = e => { if (e.key === 'Escape') closeModal(); };

function closeModal() {
  modal.style.animation = 'fadeOut 0.3s ease';
  setTimeout(() => {
    modal.classList.remove('open');
    modal.style.animation = '';
    document.body.style.overflow = '';
  }, 280);
}

function openModal(r) {
  currentRecipe = r;
  renderModal(r);

  // Reattach close button listener
  document.getElementById('closeBtn').onclick = () => closeModal();

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderModal(r) {
  document.querySelector('.modal-box').innerHTML = `
    <img src="${r.image}" alt="${r.name}" class="modal-img" onerror="this.src='https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop'">
    <button class="close-btn" id="closeBtn">×</button>
    <div id="modalContent">
      <h2>${r.name}</h2>
      <span class="tag">${formatCategory(r.category)}</span>
      <h4>Ingredients</h4>
      <ul>${r.ingredients.map((i, idx) =>
        `<li style="animation-delay: ${idx * 0.08}s"><span class="amount">${i.amount}</span>${i.name}${i.alt ? `<span class="alt">${i.alt}</span>` : ''}</li>`
      ).join('')}</ul>
      <h4>Instructions</h4>
      <ol>${r.instructions.map((s, idx) =>
        `<li style="animation-delay: ${(r.ingredients.length + idx) * 0.08}s">${s}</li>`
      ).join('')}</ol>
      ${r.fact ? `<h4>History / Fun Fact</h4><p class="fact">${buildFactParagraph(r)}</p>` : ''}
      <h4>Pairs Well With</h4>
      <div class="snack-list">${getSnackSuggestions(r).map(s => `<span class="snack-chip">${s}</span>`).join('')}</div>
      <div class="meta">
        <div><span>Glass</span><strong class="glass-line">${getGlassIcon(r.glass)}${r.glass}</strong></div>
        <div><span>Garnish</span><strong>${r.garnish}</strong></div>
      </div>
    </div>`;

  document.getElementById('closeBtn').onclick = () => closeModal();
}

function formatCategory(cat) {
  const names = {
    classic: 'Classic', tiki: 'Tiki', whiskey: 'Whiskey', vodka: 'Vodka',
    gin: 'Gin', tequila: 'Tequila', rum: 'Rum', mocktails: 'Mocktails',
    shots: 'Shots', wine: 'Wine'
  };
  return names[cat] || cat;
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

function getFlavorProfiles(r) {
  const names = r.ingredients.map(i => i.name.toLowerCase());
  const profiles = new Set();

  if (names.some(n => /syrup|grenadine|honey|orgeat|agave|cream|sugar|cocoa|chocolate/.test(n))) profiles.add('sweet');
  if (names.some(n => /lemon|lime|grapefruit|orange/.test(n) && n.includes('juice'))) profiles.add('tart');
  if (names.some(n => /campari|aperol|amaro|vermouth|bitters/.test(n))) profiles.add('bitter');
  if (names.some(n => /mezcal|smoky|peat|scotch/.test(n))) profiles.add('smoky');
  if (names.some(n => /cream|coconut|milk|irish cream|ice cream/.test(n))) profiles.add('creamy');
  if (names.some(n => /pineapple|orange|lemon|lime|berry|strawberry|grapefruit|apple|banana/.test(n))) profiles.add('fruity');
  if (names.some(n => /mint|basil|chartreuse|vermouth|amaro|herb/.test(n))) profiles.add('herbal');
  if (names.some(n => /ginger|cinnamon|hot sauce|spice/.test(n))) profiles.add('spicy');
  if (names.some(n => /soda|tonic|sparkling|ginger beer|champagne|prosecco|cola/.test(n))) profiles.add('fizzy');

  return [...profiles];
}

function getSnackSuggestions(r) {
  const profiles = getFlavorProfiles(r);
  const suggestions = new Set();
  const add = arr => arr.forEach(a => suggestions.add(a));

  if (profiles.includes('sweet')) add(['Brownie bites', 'Fruit skewers', 'Vanilla wafers']);
  if (profiles.includes('tart')) add(['Citrus-marinated olives', 'Goat cheese crostini', 'Salted nuts']);
  if (profiles.includes('bitter')) add(['Dark chocolate', 'Marcona almonds', 'Aged cheddar']);
  if (profiles.includes('smoky')) add(['Smoked almonds', 'BBQ sliders', 'Bacon-wrapped dates']);
  if (profiles.includes('creamy')) add(['Shortbread cookies', 'Mini cheesecake bites', 'Soft pretzels']);
  if (profiles.includes('fruity')) add(['Prosciutto melon', 'Brie & berries', 'Popcorn']);
  if (profiles.includes('herbal')) add(['Herb-marinated olives', 'Cucumber tea sandwiches', 'Pesto crostini']);
  if (profiles.includes('spicy')) add(['Chips & salsa', 'Spicy wings', 'Pickle chips']);
  if (profiles.includes('fizzy')) add(['Pretzel bites', 'Light popcorn', 'Crackers & hummus']);

  if (suggestions.size === 0) add(['Mixed nuts', 'Cheese board', 'Olives']);
  return [...suggestions].slice(0, 3);
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

// Render with staggered animations and images
function render() {
  const filtered = RECIPES.filter(r => {
    const matchCat = filter === 'all' || r.category === filter;
    const matchSearch = !search ||
      r.name.toLowerCase().includes(search) ||
      r.ingredients.some(i => i.name.toLowerCase().includes(search)) ||
      r.category.includes(search);
    const profiles = getFlavorProfiles(r);
    const matchFlavor = flavorFilter.size === 0 || [...flavorFilter].some(f => profiles.includes(f));
    const kidOnly = document.body.classList.contains('kid-mode') ? r.category === 'mocktails' : true;
    return matchCat && matchSearch && matchFlavor && isAvailable(r) && kidOnly;
  });

  count.textContent = `${filtered.length} recipe${filtered.length !== 1 ? 's' : ''} found`;

  if (filtered.length === 0) {
    const candidateCount = RECIPES.filter(r => {
      const matchCat = filter === 'all' || r.category === filter;
      const matchSearch = !search ||
        r.name.toLowerCase().includes(search) ||
        r.ingredients.some(i => i.name.toLowerCase().includes(search)) ||
        r.category.includes(search);
      const kidOnly = document.body.classList.contains('kid-mode') ? r.category === 'mocktails' : true;
      const profiles = getFlavorProfiles(r);
      const matchFlavor = flavorFilter.size === 0 || [...flavorFilter].some(f => profiles.includes(f));
      return matchCat && matchSearch && kidOnly && matchFlavor;
    }).length;

    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align:center; padding:4rem 1.5rem; color:var(--text2)">
        <p style="font-size:3rem; margin-bottom:1rem">🍹</p>
        <p style="font-size:1.3rem; font-weight:600">${candidateCount > 0 && outOfStock.length > 0 ? 'All matching drinks are out of stock' : 'No recipes found'}</p>
        <p style="font-size:0.95rem; margin-top:0.5rem">${candidateCount > 0 && outOfStock.length > 0 ? 'Clear some out-of-stock ingredients to see more results' : 'Try a different search or category'}</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map((r, idx) => `
    <div class="card" style="animation-delay: ${idx * 0.05}s" onclick="openModal(RECIPES.find(x=>x.id===${r.id}))">
      <img src="${r.image}" alt="${r.name}" class="card-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop'">
      <div class="card-body">
        <h3>${r.name}</h3>
        <span class="tag">${formatCategory(r.category)}</span>
        <p>${r.ingredients.slice(0,3).map(i=>i.name).join(', ')}${r.ingredients.length > 3 ? '...' : ''}</p>
        <div class="glass"><span>🍸</span> ${r.glass}</div>
      </div>
    </div>
  `).join('');
}

// Fade out animation
const fadeStyle = document.createElement('style');
fadeStyle.textContent = `@keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }`;
document.head.appendChild(fadeStyle);

// Initial render
render();

// Touch feedback
document.querySelectorAll('.card, .cat-btn, .theme-btn, .close-btn, .clear-btn').forEach(el => {
  el.addEventListener('touchstart', () => {}, {passive: true});
});
