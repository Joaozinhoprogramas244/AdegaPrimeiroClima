const $ = (id) => document.getElementById(id);
const money = (value) => value.toLocaleString("pt-BR", {
  style: "currency", currency: "BRL"
});

const initialProducts = [
  { id: 1, name: "Cerveja Lager 350 ml", category: "Cervejas", price: 4.99, stock: 48, emoji: "🍺", featured: true },
  { id: 2, name: "Cerveja Premium 600 ml", category: "Cervejas", price: 12.90, stock: 24, emoji: "🍻", featured: true },
  { id: 3, name: "Vinho Tinto 750 ml", category: "Vinhos", price: 39.90, stock: 12, emoji: "🍷", featured: true },
  { id: 4, name: "Espumante 750 ml", category: "Vinhos", price: 59.90, stock: 8, emoji: "🥂", featured: false },
  { id: 5, name: "Destilado 1 L", category: "Destilados", price: 79.90, stock: 10, emoji: "🥃", featured: true },
  { id: 6, name: "Energético 269 ml", category: "Energéticos", price: 7.50, stock: 36, emoji: "⚡", featured: false },
  { id: 7, name: "Refrigerante 2 L", category: "Sem álcool", price: 10.90, stock: 20, emoji: "🥤", featured: false },
  { id: 8, name: "Água mineral 1,5 L", category: "Sem álcool", price: 4.00, stock: 30, emoji: "💧", featured: false },
  { id: 9, name: "Combo de bebidas", category: "Outros", price: 49.90, stock: 6, emoji: "🎁", featured: true },
  { id: 10, name: "Gelo ensacado", category: "Outros", price: 8.00, stock: 15, emoji: "🧊", featured: false }
];

function load(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

let products = load("adega_products_v1", initialProducts);
let cart = load("adega_cart_v1", []);
let orders = load("adega_orders_v1", []);
let activeCategory = "Todos";
let searchTerm = "";

function save() {
  localStorage.setItem("adega_products_v1", JSON.stringify(products));
  localStorage.setItem("adega_cart_v1", JSON.stringify(cart));
  localStorage.setItem("adega_orders_v1", JSON.stringify(orders));
}

function safeText(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  })[char]);
}

function normalizeProducts() {
  products = products.filter(p =>
    p && Number.isFinite(p.id) &&
    typeof p.name === "string" &&
    Number.isFinite(p.price) && p.price >= 0 &&
    Number.isFinite(p.stock) && p.stock >= 0
  );
}

normalizeProducts();

function renderCategories() {
  const categories = ["Todos", ...new Set(products.map(p => p.category))];
  if (!categories.includes(activeCategory)) activeCategory = "Todos";

  $("categoryFilters").innerHTML = categories.map(category => `
    <button class="filter-chip ${category === activeCategory ? "active" : ""}"
      data-category="${safeText(category)}">${safeText(category)}</button>
  `).join("");
}

function renderProducts() {
  let list = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm) ||
    p.category.toLowerCase().includes(searchTerm)
  );

  if (activeCategory !== "Todos") {
    list = list.filter(p => p.category === activeCategory);
  }

  const sort = $("sortSelect").value;
  if (sort === "priceAsc") list.sort((a, b) => a.price - b.price);
  if (sort === "priceDesc") list.sort((a, b) => b.price - a.price);
  if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  if (sort === "featured") list.sort((a, b) => Number(b.featured) - Number(a.featured));

  $("productTotal").textContent = `${list.length} produto(s)`;
  $("emptyProducts").classList.toggle("hidden", list.length > 0);

  $("productGrid").innerHTML = list.map(p => `
    <article class="product-card">
      <div class="product-art">
        ${p.featured ? '<span class="product-tag">DESTAQUE</span>' : ""}
        <span class="product-emoji">${safeText(p.emoji || "🍹")}</span>
      </div>
      <div class="product-info">
        <span class="product-category">${safeText(p.category)}</span>
        <h3>${safeText(p.name)}</h3>
        <div class="product-bottom">
          <span class="product-price">${money(p.price)}</span>
          <button class="add-button" data-add="${p.id}" ${p.stock < 1 ? "disabled" : ""}>
            ${p.stock < 1 ? "Esgotado" : "＋ Adicionar"}
          </button>
        </div>
        <div class="stock-label">${p.stock} unidade(s) disponível(is)</div>
      </div>
    </article>
  `).join("");
}

function renderCart() {
  cart = cart.filter(item =>
    products.some(p => p.id === item.id) &&
    Number.isInteger(item.qty) && item.qty > 0
  );

  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => {
    const p = products.find(product => product.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);

  $("cartCount").textContent = count;
  $("cartTotal").textContent = money(total);
  $("metricCart").textContent = count;

  $("cartItems").innerHTML = cart.length ? cart.map(item => {
    const p = products.find(product => product.id === item.id);
    if (!p) return "";
    return `
      <div class="cart-item">
        <div>
          <h3>${safeText(p.name)}</h3>
          <small>${money(p.price)} por unidade</small>
          <div class="quantity">
            <button data-qty="${p.id}" data-change="-1">−</button>
            <span>${item.qty}</span>
            <button data-qty="${p.id}" data-change="1"
              ${item.qty >= p.stock ? "disabled" : ""}>+</button>
          </div>
        </div>
        <strong>${money(p.price * item.qty)}</strong>
      </div>
    `;
  }).join("") : '<p class="empty">Sua sacola está vazia.</p>';

  save();
}

function renderAdmin() {
  $("metricProducts").textContent = products.length;
  $("metricStock").textContent = products.reduce((sum, p) => sum + p.stock, 0);

  $("adminProducts").innerHTML = products.map(p => `
    <div class="admin-product">
      <span>${safeText(p.name)}</span>
      <span>${money(p.price)}</span>
      <label>Estoque
        <input type="number" min="0" max="100000" step="1"
          value="${p.stock}" data-stock="${p.id}" aria-label="Estoque de ${safeText(p.name)}">
      </label>
      <button class="btn-outline" data-delete="${p.id}">Excluir</button>
    </div>
  `).join("");

  $("orderHistory").innerHTML = orders.length ? orders.map(order => `
    <div class="order-row">
      <span>Pedido #${order.id}</span>
      <span>${safeText(order.date)}</span>
      <strong>${money(order.total)}</strong>
      <span>${safeText(order.status)}</span>
    </div>
  `).join("") : '<p class="muted">Nenhum pedido registrado nesta demonstração.</p>';
}

function renderAll() {
  renderCategories();
  renderProducts();
  renderCart();
  renderAdmin();
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product || product.stock < 1) return;

  const item = cart.find(i => i.id === id);
  if (item) {
    if (item.qty >= product.stock) {
      alert("Quantidade máxima disponível atingida.");
      return;
    }
    item.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }

  $("checkoutMessage").textContent = "";
  renderCart();
}

$("confirmAge").addEventListener("click", () => {
  sessionStorage.setItem("adega_age_confirmed", "yes");
  $("ageGate").classList.add("hidden");
  document.body.classList.remove("locked");
});

$("denyAge").addEventListener("click", () => {
  $("ageGate").innerHTML = `
    <div class="age-card">
      <h2>Acesso não permitido</h2>
      <p>Esta loja é destinada exclusivamente a maiores de 18 anos.</p>
    </div>
  `;
});

if (sessionStorage.getItem("adega_age_confirmed") === "yes") {
  $("ageGate").classList.add("hidden");
} else {
  document.body.classList.add("locked");
}

$("searchInput").addEventListener("input", event => {
  searchTerm = event.target.value.trim().toLocaleLowerCase("pt-BR");
  renderProducts();
});

$("sortSelect").addEventListener("change", renderProducts);

$("categoryFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderCategories();
  renderProducts();
});

$("productGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(Number(button.dataset.add));
});

$("cartButton").addEventListener("click", () => {
  $("cartOverlay").classList.remove("hidden");
});

$("closeCart").addEventListener("click", () => {
  $("cartOverlay").classList.add("hidden");
});

$("cartOverlay").addEventListener("click", event => {
  if (event.target === $("cartOverlay")) {
    $("cartOverlay").classList.add("hidden");
  }
});

$("cartItems").addEventListener("click", event => {
  const button = event.target.closest("[data-qty]");
  if (!button) return;

  const id = Number(button.dataset.qty);
  const change = Number(button.dataset.change);
  const item = cart.find(i => i.id === id);
  const product = products.find(p => p.id === id);
  if (!item || !product) return;

  const next = item.qty + change;
  if (next <= 0) {
    cart = cart.filter(i => i.id !== id);
  } else if (next <= product.stock) {
    item.qty = next;
  }
  renderCart();
});

$("adminButton").addEventListener("click", () => {
  $("adminPanel").classList.remove("hidden");
  renderAdmin();
  $("adminPanel").scrollIntoView({ behavior: "smooth" });
});

$("closeAdmin").addEventListener("click", () => {
  $("adminPanel").classList.add("hidden");
  $("catalogo").scrollIntoView({ behavior: "smooth" });
});

$("productForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = $("newName").value.trim();
  const category = $("newCategory").value;
  const price = Number($("newPrice").value);
  const stock = Number($("newStock").value);
  const emoji = $("newEmoji").value.trim() || "🍹";

  if (!name || !Number.isFinite(price) || price <= 0 ||
      price > 100000 || !Number.isInteger(stock) ||
      stock < 0 || stock > 100000) {
    alert("Confira o nome, preço e estoque informados.");
    return;
  }

  products.push({
    id: products.reduce((max, p) => Math.max(max, p.id), 0) + 1,
    name, category, price, stock, emoji, featured: false
  });

  save();
  event.target.reset();
  $("newEmoji").value = "🍹";
  renderAll();
  alert("Produto cadastrado!");
});

$("adminProducts").addEventListener("change", event => {
  const input = event.target.closest("[data-stock]");
  if (!input) return;

  const id = Number(input.dataset.stock);
  const stock = Number(input.value);
  const product = products.find(p => p.id === id);

  if (!product || !Number.isInteger(stock) || stock < 0 || stock > 100000) {
    alert("Informe uma quantidade válida.");
    renderAdmin();
    return;
  }

  product.stock = stock;
  save();
  renderAll();
});

$("adminProducts").addEventListener("click", event => {
  const button = event.target.closest("[data-delete]");
  if (!button) return;

  const id = Number(button.dataset.delete);
  const product = products.find(p => p.id === id);
  if (!product) return;

  if (!confirm(`Excluir "${product.name}" do catálogo?`)) return;

  products = products.filter(p => p.id !== id);
  cart = cart.filter(item => item.id !== id);
  save();
  renderAll();
});

$("checkoutButton").addEventListener("click", () => {
  if (!cart.length) {
    $("checkoutMessage").textContent = "Adicione produtos antes de solicitar um pedido.";
    return;
  }

  const lines = cart.map(item => {
    const p = products.find(product => product.id === item.id);
    return p ? `${p.name} x${item.qty}` : "";
  }).filter(Boolean);

  const total = cart.reduce((sum, item) => {
    const p = products.find(product => product.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);

  const summary = `Pedido demonstrativo:\n${lines.join("\n")}\nTotal estimado: ${money(total)}`;

  if (!confirm(`${summary}\n\nRegistrar este pedido de teste?`)) return;

  for (const item of cart) {
    const product = products.find(p => p.id === item.id);
    if (!product || item.qty > product.stock) {
      alert("O estoque mudou. Revise sua sacola antes de continuar.");
      renderAll();
      return;
    }
  }

  for (const item of cart) {
    products.find(p => p.id === item.id).stock -= item.qty;
  }

  orders.unshift({
    id: Date.now(),
    date: new Date().toLocaleString("pt-BR"),
    total,
    status: "Teste local"
  });

  cart = [];
  save();
  renderAll();
  $("checkoutMessage").textContent =
    "Pedido de demonstração registrado neste navegador. Nenhum pagamento ou entrega foi realizado.";
});

$("exportProducts").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(products, null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "produtos-adega.json";
  link.click();
  URL.revokeObjectURL(url);
});

$("year").textContent = new Date().getFullYear();
renderAll();