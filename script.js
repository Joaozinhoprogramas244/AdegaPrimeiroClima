(() => {
  "use strict";
  const WHATSAPP_NUMBER = ""; // Configure: DDI + DDD + número, somente dígitos. Ex.: 5511999999999
  const money = value => Number(value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const image = (id, width=500) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
  const seedProducts = [
    {id:1,name:'Heineken Lager 350 ml',brand:'Heineken',category:'Cervejas',price:5.99,description:'Cerveja lager puro malte',badge:'Popular',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Heineken%20beer%20bottle.jpg?width=600'},
    {id:2,name:'Heineken Long Neck 330 ml',brand:'Heineken',category:'Cervejas',price:7.99,description:'Long neck 330 ml',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Heineken%20beer%20bottle.jpg?width=600'},
    {id:3,name:'Heineken 0.0 330 ml',brand:'Heineken',category:'Sem álcool',price:6.99,description:'Cerveja sem álcool',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Heineken%200.0%20bottle.jpg?width=600'},
    {id:4,name:'Amstel Lager 350 ml',brand:'Amstel',category:'Cervejas',price:4.49,description:'Cerveja lager',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Amstel%20beer%20bottle.jpg?width=600'},
    {id:5,name:'Brahma Chopp 350 ml',brand:'Brahma',category:'Cervejas',price:3.99,description:'Cerveja pilsen',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Brahma%20beer%20can.jpg?width=600'},
    {id:6,name:'Brahma Duplo Malte 350 ml',brand:'Brahma',category:'Cervejas',price:4.49,description:'Duplo malte',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Brahma%20beer%20can.jpg?width=600'},
    {id:7,name:'Skol Pilsen 350 ml',brand:'Skol',category:'Cervejas',price:3.99,description:'Cerveja pilsen',badge:'Popular',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Skol%20beer%20can.jpg?width=600'},
    {id:8,name:'Antarctica Original 600 ml',brand:'Original',category:'Cervejas',price:10.99,description:'Garrafa 600 ml',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Cerveja%20Original%20Antarctica.jpg?width=600'},
    {id:9,name:'Budweiser 350 ml',brand:'Budweiser',category:'Cervejas',price:4.99,description:'American lager',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Budweiser%20beer%20bottle.jpg?width=600'},
    {id:10,name:'Corona Extra 330 ml',brand:'Corona',category:'Cervejas',price:7.99,description:'Cerveja importada',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Corona%20Extra%20beer%20bottle.jpg?width=600'},
    {id:11,name:'Stella Artois 330 ml',brand:'Stella Artois',category:'Cervejas',price:7.49,description:'Lager premium',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Stella%20Artois%20beer%20bottle.jpg?width=600'},
    {id:12,name:'Beck’s 330 ml',brand:'Beck’s',category:'Cervejas',price:6.99,description:'Pilsen alemã',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Becks%20beer%20bottle.jpg?width=600'},
    {id:13,name:'Spaten 350 ml',brand:'Spaten',category:'Cervejas',price:4.99,description:'Munich Helles',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Spaten%20beer%20bottle.jpg?width=600'},
    {id:14,name:'Eisenbahn Pilsen 350 ml',brand:'Eisenbahn',category:'Cervejas',price:4.99,description:'Pilsen puro malte',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Eisenbahn%20beer%20bottle.jpg?width=600'},
    {id:15,name:'Michelob Ultra 330 ml',brand:'Michelob Ultra',category:'Cervejas',price:7.49,description:'Lager leve',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Michelob%20Ultra%20beer%20bottle.jpg?width=600'},
    {id:16,name:'Smirnoff Vodka 998 ml',brand:'Smirnoff',category:'Destilados',price:39.9,description:'Vodka clássica',badge:'Popular',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Smirnoff%20vodka%20bottle.jpg?width=600'},
    {id:17,name:'Absolut Vodka 1 L',brand:'Absolut',category:'Destilados',price:89.9,description:'Vodka sueca',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Absolut%20Vodka%20bottle.jpg?width=600'},
    {id:18,name:'Cîroc Vodka 750 ml',brand:'Cîroc',category:'Destilados',price:169.9,description:'Vodka premium',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ciroc%20vodka%20bottle.jpg?width=600'},
    {id:19,name:'Skyy Vodka 980 ml',brand:'SKYY',category:'Destilados',price:49.9,description:'Vodka americana',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Skyy%20vodka%20bottle.jpg?width=600'},
    {id:20,name:'Grey Goose Vodka 750 ml',brand:'Grey Goose',category:'Destilados',price:189.9,description:'Vodka premium francesa',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Grey%20Goose%20vodka%20bottle.jpg?width=600'},
    {id:21,name:'Jack Daniel’s Old No. 7 1 L',brand:'Jack Daniel’s',category:'Whisky',price:149.9,description:'Tennessee whiskey',badge:'Destaque',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Jack%20Daniels%20Old%20No%207%20bottle.jpg?width=600'},
    {id:22,name:'Jack Daniel’s Honey 1 L',brand:'Jack Daniel’s',category:'Whisky',price:169.9,description:'Whiskey com licor de mel',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Jack%20Daniels%20Tennessee%20Honey%20bottle.jpg?width=600'},
    {id:23,name:'Johnnie Walker Red Label 1 L',brand:'Johnnie Walker',category:'Whisky',price:99.9,description:'Scotch whisky',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Johnnie%20Walker%20Red%20Label%20bottle.jpg?width=600'},
    {id:24,name:'Johnnie Walker Black Label 1 L',brand:'Johnnie Walker',category:'Whisky',price:169.9,description:'Blended Scotch 12 anos',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Johnnie%20Walker%20Black%20Label%20bottle.jpg?width=600'},
    {id:25,name:'Johnnie Walker Blue Label 750 ml',brand:'Johnnie Walker',category:'Whisky',price:999.9,description:'Blend premium',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Johnnie%20Walker%20Blue%20Label%20bottle.jpg?width=600'},
    {id:26,name:'Old Parr 12 anos 1 L',brand:'Old Parr',category:'Whisky',price:169.9,description:'Blended Scotch whisky',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Old%20Parr%20whisky%20bottle.jpg?width=600'},
    {id:27,name:'Chivas Regal 12 anos 1 L',brand:'Chivas Regal',category:'Whisky',price:159.9,description:'Blended Scotch 12 anos',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Chivas%20Regal%2012%20bottle.jpg?width=600'},
    {id:28,name:'Ballantine’s Finest 1 L',brand:'Ballantine’s',category:'Whisky',price:99.9,description:'Blended Scotch whisky',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ballantines%20Finest%20bottle.jpg?width=600'},
    {id:29,name:'Jameson Irish Whiskey 750 ml',brand:'Jameson',category:'Whisky',price:139.9,description:'Whiskey irlandês',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Jameson%20Irish%20whiskey%20bottle.jpg?width=600'},
    {id:30,name:'Jim Beam White 1 L',brand:'Jim Beam',category:'Whisky',price:119.9,description:'Kentucky bourbon',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Jim%20Beam%20bourbon%20bottle.jpg?width=600'},
    {id:31,name:'Tanqueray London Dry Gin 750 ml',brand:'Tanqueray',category:'Gin',price:119.9,description:'Gin clássico',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Tanqueray%20gin%20bottle.jpg?width=600'},
    {id:32,name:'Gordon’s London Dry Gin 750 ml',brand:'Gordon’s',category:'Gin',price:79.9,description:'Gin London Dry',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Gordons%20gin%20bottle.jpg?width=600'},
    {id:33,name:'Beefeater London Dry Gin 750 ml',brand:'Beefeater',category:'Gin',price:99.9,description:'Gin inglês',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Beefeater%20gin%20bottle.jpg?width=600'},
    {id:34,name:'Bombay Sapphire Gin 750 ml',brand:'Bombay Sapphire',category:'Gin',price:139.9,description:'Gin premium',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Bombay%20Sapphire%20bottle.jpg?width=600'},
    {id:35,name:'Hendrick’s Gin 750 ml',brand:'Hendrick’s',category:'Gin',price:229.9,description:'Gin com pepino e rosa',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Hendricks%20gin%20bottle.jpg?width=600'},
    {id:36,name:'Bacardi Carta Blanca 980 ml',brand:'Bacardi',category:'Rum',price:59.9,description:'Rum branco',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Bacardi%20Carta%20Blanca%20bottle.jpg?width=600'},
    {id:37,name:'Captain Morgan Spiced Gold 750 ml',brand:'Captain Morgan',category:'Rum',price:89.9,description:'Rum especiado',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Captain%20Morgan%20rum%20bottle.jpg?width=600'},
    {id:38,name:'Cachaça 51 965 ml',brand:'Cachaça 51',category:'Cachaças',price:16.9,description:'Cachaça brasileira',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Cachaca%2051%20bottle.jpg?width=600'},
    {id:39,name:'Velho Barreiro 910 ml',brand:'Velho Barreiro',category:'Cachaças',price:14.9,description:'Cachaça tradicional',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Velho%20Barreiro%20bottle.jpg?width=600'},
    {id:40,name:'José Cuervo Especial Gold 750 ml',brand:'José Cuervo',category:'Tequila',price:119.9,description:'Tequila gold',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Jose%20Cuervo%20Especial%20bottle.jpg?width=600'},
    {id:41,name:'Campari Bitter 748 ml',brand:'Campari',category:'Aperitivos e licores',price:69.9,description:'Aperitivo italiano',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Campari%20bottle.jpg?width=600'},
    {id:42,name:'Aperol 750 ml',brand:'Aperol',category:'Aperitivos e licores',price:69.9,description:'Aperitivo para spritz',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Aperol%20bottle.jpg?width=600'},
    {id:43,name:'Baileys Original 750 ml',brand:'Baileys',category:'Aperitivos e licores',price:119.9,description:'Licor cremoso',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Baileys%20Irish%20Cream%20bottle.jpg?width=600'},
    {id:44,name:'Licor 43 700 ml',brand:'Licor 43',category:'Aperitivos e licores',price:149.9,description:'Licor espanhol',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Licor%2043%20bottle.jpg?width=600'},
    {id:45,name:'Vinho Casillero del Diablo Cabernet 750 ml',brand:'Casillero del Diablo',category:'Vinhos',price:49.9,description:'Vinho tinto seco',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Casillero%20del%20Diablo%20Cabernet%20Sauvignon%20bottle.jpg?width=600'},
    {id:46,name:'Vinho Santa Helena Reservado 750 ml',brand:'Santa Helena',category:'Vinhos',price:34.9,description:'Vinho tinto',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Santa%20Helena%20wine%20bottle.jpg?width=600'},
    {id:47,name:'Espumante Chandon Brut 750 ml',brand:'Chandon',category:'Espumantes',price:99.9,description:'Espumante brut',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Chandon%20Brut%20bottle.jpg?width=600'},
    {id:48,name:'Espumante Salton Moscatel 750 ml',brand:'Salton',category:'Espumantes',price:39.9,description:'Espumante moscatel',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Salton%20Moscatel%20bottle.jpg?width=600'},
    {id:49,name:'Smirnoff Ice 275 ml',brand:'Smirnoff Ice',category:'Prontas para beber',price:6.99,description:'Bebida mista pronta',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Smirnoff%20Ice%20bottle.jpg?width=600'},
    {id:50,name:'Skol Beats Senses 269 ml',brand:'Skol Beats',category:'Prontas para beber',price:7.49,description:'Bebida mista pronta',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Skol%20Beats%20Senses%20can.jpg?width=600'},
    {id:51,name:'Red Bull Energy Drink 250 ml',brand:'Red Bull',category:'Energéticos',price:9.99,description:'Energético',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Red%20Bull%20can.jpg?width=600'},
    {id:52,name:'Monster Energy Original 473 ml',brand:'Monster',category:'Energéticos',price:10.99,description:'Energético',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Monster%20Energy%20can.jpg?width=600'},
    {id:53,name:'Coca-Cola Original 2 L',brand:'Coca-Cola',category:'Refrigerantes',price:11.99,description:'Refrigerante',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Coca-Cola%20bottle.jpg?width=600'},
    {id:54,name:'Coca-Cola Zero 2 L',brand:'Coca-Cola',category:'Refrigerantes',price:11.99,description:'Sem açúcar',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Coca-Cola%20Zero%20bottle.jpg?width=600'},
    {id:55,name:'Guaraná Antarctica 2 L',brand:'Guaraná Antarctica',category:'Refrigerantes',price:9.99,description:'Refrigerante brasileiro',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Guarana%20Antarctica%20bottle.jpg?width=600'},
    {id:56,name:'Fanta Laranja 2 L',brand:'Fanta',category:'Refrigerantes',price:9.49,description:'Refrigerante de laranja',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Fanta%20Orange%20bottle.jpg?width=600'},
    {id:57,name:'Água mineral sem gás 1,5 L',brand:'Água mineral',category:'Águas',price:3.99,description:'Água mineral',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Water%20bottle.jpg?width=600'},
    {id:58,name:'Água com gás 1,5 L',brand:'Água mineral',category:'Águas',price:4.49,description:'Água gaseificada',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Sparkling%20water%20bottle.jpg?width=600'},
    {id:59,name:'Tônica Antarctica 350 ml',brand:'Antarctica',category:'Refrigerantes',price:4.49,description:'Água tônica',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Schweppes%20tonic%20water%20can.jpg?width=600'},
    {id:60,name:'Combo cerveja + energético',brand:'Seleção da casa',category:'Combos',price:49.9,description:'Combo ilustrativo; confirme disponibilidade',badge:'',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Beverage%20bottles.jpg?width=600'}
  ];
  const $ = id => document.getElementById(id);
  const load = (key, fallback) => { try { const value = JSON.parse(localStorage.getItem(key)); return value ?? fallback; } catch { return fallback; } };
  let products = load("pc_products_v1", seedProducts);
  let cart = load("pc_cart_v1", []);
  let activeCategory = "";
  let toastTimer;
  const persist = () => { localStorage.setItem("pc_products_v1", JSON.stringify(products)); localStorage.setItem("pc_cart_v1", JSON.stringify(cart)); };
  const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  function toast(message) { const el=$("toast"); el.textContent=message; el.classList.add("show"); clearTimeout(toastTimer); toastTimer=setTimeout(()=>el.classList.remove("show"),2600); }
  function setModal(id, open) { $(id).hidden=!open; document.body.classList.toggle("locked",open || !$("ageGate").hidden); }
  function initAgeGate() {
    const accepted = sessionStorage.getItem("pc_age_confirmed")==="yes";
    $("ageGate").hidden=accepted; document.body.classList.toggle("locked",!accepted);
    $("ageYes").addEventListener("click",()=>{sessionStorage.setItem("pc_age_confirmed","yes");$("ageGate").hidden=true;document.body.classList.remove("locked");});
    $("ageNo").addEventListener("click",()=>{ $("ageTitle").textContent="Acesso não permitido"; $("ageGate").querySelector(".age-card>p:not(.eyebrow)").textContent="Você precisa ter 18 anos ou mais para acessar este catálogo."; $("ageGate").querySelector(".age-actions").innerHTML='<button class="btn btn-quiet" onclick="window.close()">Fechar página</button>'; });
  }
  function categories() { return [...new Set(products.map(p=>p.category).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"pt-BR")); }
  function renderFilters() {
    const select=$("categoryFilter"), current=select.value;
    select.innerHTML='<option value="">Todas as categorias</option>'+categories().map(c=>`<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join("");
    if(categories().includes(current)) select.value=current;
    $("categoryChips").innerHTML=[{name:"Tudo",value:""},...categories().map(c=>({name:c,value:c}))].map(c=>`<button class="chip ${activeCategory===c.value?"active":""}" data-category="${escapeHTML(c.value)}">${escapeHTML(c.name)}</button>`).join("");
  }
  function filteredProducts() {
    const q=$("searchInput").value.trim().toLocaleLowerCase("pt-BR");
    const category=$("categoryFilter").value || activeCategory;
    let list=products.filter(p=>(!category||p.category===category) && (!q||[p.name,p.brand,p.category,p.description].join(" ").toLocaleLowerCase("pt-BR").includes(q)));
    const sort=$("sortFilter").value;
    if(sort==="name") list.sort((a,b)=>a.name.localeCompare(b.name,"pt-BR"));
    if(sort==="priceAsc") list.sort((a,b)=>Number(a.price)-Number(b.price));
    if(sort==="priceDesc") list.sort((a,b)=>Number(b.price)-Number(a.price));
    return list;
  }
  function renderProducts() {
    renderFilters();
    const list=filteredProducts();
    $("productCount").textContent=list.length;
    $("productGrid").innerHTML=list.map(p=>`<article class="product-card"><div class="product-image"><img loading="lazy" src="${escapeHTML(p.image||"")}" alt="${escapeHTML(p.name)}" onerror="this.style.display='none';this.parentElement.style.background='#e5e8dc';this.parentElement.classList.add('image-unavailable')">${p.badge?`<span class="product-label">${escapeHTML(p.badge)}</span>`:""}</div><div class="product-info"><span class="product-category">${escapeHTML(p.category)}</span><h3>${escapeHTML(p.name)}</h3><p class="product-description">${escapeHTML(p.description||p.brand||"")}</p><div class="product-bottom"><span class="product-price">${money(p.price)}</span><button class="add-btn" data-add="${p.id}" aria-label="Adicionar ${escapeHTML(p.name)} à sacola">+</button></div></div></article>`).join("");
    $("emptyState").hidden=list.length!==0;
    $("productGrid").hidden=list.length===0;
    $("adminProducts").textContent=products.length;
  }
  function addToCart(id) {
    const product=products.find(p=>p.id===id); if(!product)return;
    const item=cart.find(i=>i.id===id); if(item)item.qty++;else cart.push({id,qty:1});
    persist();renderCart();toast(`${product.name} adicionado à sacola.`);
  }
  function changeQty(id,delta) {
    const item=cart.find(i=>i.id===id);if(!item)return;
    item.qty+=delta;if(item.qty<=0)cart=cart.filter(i=>i.id!==id);
    persist();renderCart();
  }
  function renderCart() {
    cart=cart.filter(i=>products.some(p=>p.id===i.id)&&i.qty>0);
    const count=cart.reduce((sum,i)=>sum+i.qty,0), total=cart.reduce((sum,i)=>{const p=products.find(p=>p.id===i.id);return sum+(p?Number(p.price)*i.qty:0)},0);
    $("cartCount").textContent=count;$("adminCart").textContent=count;$("cartTotal").textContent=money(total);
    $("cartItems").innerHTML=cart.length?cart.map(i=>{const p=products.find(p=>p.id===i.id);return `<div class="cart-item"><img src="${escapeHTML(p.image||"")}" alt=""><div><h3>${escapeHTML(p.name)}</h3><small>${money(p.price)} cada</small><div class="quantity"><button data-qty="${i.id}" data-delta="-1" aria-label="Diminuir quantidade">−</button><b>${i.qty}</b><button data-qty="${i.id}" data-delta="1" aria-label="Aumentar quantidade">+</button></div></div><button class="remove-item" data-remove="${i.id}" aria-label="Remover ${escapeHTML(p.name)}">×</button></div>`}).join(""):'<div class="cart-empty"><p style="font-size:28px">＋</p><b>Sua sacola está vazia</b><p>Adicione produtos do catálogo para começar.</p></div>';
    persist();
  }
  function checkout() {
    if(!cart.length){toast("Adicione um produto à sacola primeiro.");return;}
    if(!WHATSAPP_NUMBER){toast("Demonstração: configure o número do WhatsApp em script.js.");return;}
    const lines=cart.map(i=>{const p=products.find(p=>p.id===i.id);return `• ${p.name} x${i.qty} — ${money(p.price*i.qty)}`});
    const total=cart.reduce((s,i)=>s+products.find(p=>p.id===i.id).price*i.qty,0);
    const message=`Olá! Gostaria de consultar este pedido na Adega Primeiro Clima:\n\n${lines.join("\n")}\n\nTotal estimado: ${money(total)}\n\nPoderiam confirmar disponibilidade e entrega?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,"_blank","noopener");
  }
  function exportCatalog() {
    const blob=new Blob([JSON.stringify(products,null,2)],{type:"application/json"});
    const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="catalogo-adega-primeiro-clima.json";a.click();URL.revokeObjectURL(url);toast("Catálogo exportado.");
  }
  function importCatalog(file) {
    if(!file)return;
    const reader=new FileReader();
    reader.onload=()=>{try{const data=JSON.parse(reader.result);if(!Array.isArray(data)||!data.every(p=>p.name&&p.category&&Number.isFinite(Number(p.price))))throw Error("Formato inválido");products=data.map((p,i)=>({...p,id:Number(p.id)||Date.now()+i,price:Number(p.price)}));persist();renderProducts();renderCart();toast("Catálogo importado neste navegador.");}catch{toast("Arquivo inválido. Use um JSON exportado pelo painel.");}finally{$("importInput").value="";}};
    reader.readAsText(file);
  }
  document.addEventListener("click",e=>{
    const add=e.target.closest("[data-add]");if(add)addToCart(Number(add.dataset.add));
    const qty=e.target.closest("[data-qty]");if(qty)changeQty(Number(qty.dataset.qty),Number(qty.dataset.delta));
    const remove=e.target.closest("[data-remove]");if(remove){cart=cart.filter(i=>i.id!==Number(remove.dataset.remove));persist();renderCart();}
    const chip=e.target.closest("[data-category]");if(chip){activeCategory=chip.dataset.category;$("categoryFilter").value=activeCategory;renderProducts();}
  });
  $("searchInput").addEventListener("input",renderProducts);
  $("categoryFilter").addEventListener("change",()=>{activeCategory=$("categoryFilter").value;renderProducts();});
  $("sortFilter").addEventListener("change",renderProducts);
  $("cartOpen").addEventListener("click",()=>setModal("cartDrawer",true));
  $("cartClose").addEventListener("click",()=>setModal("cartDrawer",false));
  $("cartDrawer").addEventListener("click",e=>{if(e.target===$("cartDrawer"))setModal("cartDrawer",false);});
  $("checkoutBtn").addEventListener("click",checkout);
  $("adminOpen").addEventListener("click",()=>setModal("adminModal",true));
  $("adminClose").addEventListener("click",()=>setModal("adminModal",false));
  $("adminModal").addEventListener("click",e=>{if(e.target===$("adminModal"))setModal("adminModal",false);});
  $("exportBtn").addEventListener("click",exportCatalog);
  $("importInput").addEventListener("change",e=>importCatalog(e.target.files[0]));
  $("resetBtn").addEventListener("click",()=>{if(confirm("Restaurar o catálogo demonstrativo? Suas alterações locais serão perdidas.")){products=seedProducts.map(p=>({...p}));persist();renderProducts();renderCart();toast("Catálogo original restaurado.");}});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){setModal("cartDrawer",false);setModal("adminModal",false);}});
  $("year").textContent=new Date().getFullYear();
  initAgeGate();renderProducts();renderCart();
})();
