/* Adega Primeiro Clima — GitHub Pages / frontend estático */
const WHATSAPP_NUMBER = ""; // Configure: DDI + DDD + número, somente dígitos. Ex.: 5511999999999
const ORIGINAL_PRODUCTS = window.ADEGA_PRODUCTS || [];
const FALLBACK_IMAGES = {
  "Cervejas":"https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=80",
  "Whisky":"https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=700&q=80",
  "Vodka":"https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=700&q=80",
  "Gin":"https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=700&q=80",
  "Tequila e Rum":"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=80",
  "Vinhos":"https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=80",
  "Espumantes":"https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=700&q=80",
  "Drinks prontos e Ice":"https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?auto=format&fit=crop&w=700&q=80",
  "Energéticos":"https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=700&q=80",
  "Refrigerantes e água":"https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=80",
  "Gelo e complementos":"https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?auto=format&fit=crop&w=700&q=80"
};
const $ = s => document.querySelector(s);
const money = n => Number(n||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const normalize = s => (s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();
let products = load("adega_products", ORIGINAL_PRODUCTS).map(p=>({...p,price:Number(p.price)||0,stock:Number(p.stock??20)}));
let cart = load("adega_cart", {});
let activeCategory = "Todos", searchTerm = "", sortMode = "featured", visibleCount = 24;
let imageQueue = [], imageBusy = 0, toastTimer;
function load(k, fallback){try{const v=localStorage.getItem(k);return v?JSON.parse(v):fallback}catch{return fallback}}
function save(){localStorage.setItem("adega_products",JSON.stringify(products));localStorage.setItem("adega_cart",JSON.stringify(cart))}
function showToast(msg){const el=$("#toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2400)}
function categories(){return ["Todos",...new Set(products.map(p=>p.category))]}
function renderFilters(){
  $("#filterRow").innerHTML=categories().map(c=>`<button class="filter-chip ${c===activeCategory?"active":""}" data-filter="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join("");
  $("#adminCategory").innerHTML=categories().filter(c=>c!=="Todos").map(c=>`<option>${escapeHtml(c)}</option>`).join("");
}
function escapeHtml(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function getFiltered(){
 let arr=products.filter(p=>(activeCategory==="Todos"||p.category===activeCategory)&&(!searchTerm||normalize([p.name,p.brand,p.category].join(" ")).includes(normalize(searchTerm))));
 if(sortMode==="name")arr.sort((a,b)=>a.name.localeCompare(b.name,"pt-BR"));
 if(sortMode==="price-low")arr.sort((a,b)=>a.price-b.price);
 if(sortMode==="price-high")arr.sort((a,b)=>b.price-a.price);
 if(sortMode==="featured")arr.sort((a,b)=>Number(b.featured)-Number(a.featured));
 return arr;
}
function renderProducts(){
 const all=getFiltered(), shown=all.slice(0,visibleCount);
 $("#resultCount").textContent=`${all.length} produto${all.length===1?"":"s"} encontrado${all.length===1?"":"s"}`;
 $("#loadMore").style.display=all.length>visibleCount?"inline-flex":"none";
 if(!shown.length){$("#productGrid").innerHTML='<div class="no-results">Não encontramos esse produto. Tente outra busca ou categoria.</div>';return}
 $("#productGrid").innerHTML=shown.map(p=>`<article class="product-card">
  <div class="product-photo"><img loading="lazy" data-product-image="${escapeHtml(p.id)}" data-search="${escapeHtml(p.search||p.brand+" "+p.name)}" data-brand="${escapeHtml(p.brand)}" data-name="${escapeHtml(p.name)}" data-category="${escapeHtml(p.category)}" src="${FALLBACK_IMAGES[p.category]||FALLBACK_IMAGES["Cervejas"]}" alt="${escapeHtml(p.brand+" "+p.name)}" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.hidden=false"><div class="photo-placeholder" hidden>🥤</div><span class="photo-note" data-photo-note="${escapeHtml(p.id)}">Imagem ilustrativa</span></div>
  <div class="product-info"><span class="product-category">${escapeHtml(p.category)}</span><h3>${escapeHtml(p.name)}</h3><div class="product-brand">${escapeHtml(p.brand)} • ${escapeHtml(p.size)}</div>
  <div class="product-bottom"><div class="product-price">${money(p.price)} <small>/ un.</small></div><button class="add-btn" data-add="${escapeHtml(p.id)}" aria-label="Adicionar ${escapeHtml(p.name)}">+</button></div><div class="stock-note">${p.stock>0?"Consulte disponibilidade":"Consulte reposição"}</div></div></article>`).join("");
 observeProductImages();
}
function observeProductImages(){
 const imgs=[...document.querySelectorAll("img[data-product-image]:not([data-checked])")];
 if(!("IntersectionObserver" in window)){imgs.forEach(img=>{img.dataset.checked="1";queueImage(img)});return}
 const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){io.unobserve(e.target);e.target.dataset.checked="1";queueImage(e.target)}}),{rootMargin:"250px"});
 imgs.forEach(img=>io.observe(img));
}
const CATEGORY_SEARCH = {
 "Cervejas":"beer",
 "Whisky":"whisky",
 "Vodka":"vodka",
 "Gin":"gin",
 "Tequila e Rum":"rum tequila",
 "Vinhos":"wine",
 "Espumantes":"sparkling wine",
 "Drinks prontos e Ice":"ready to drink cocktail",
 "Energéticos":"energy drink",
 "Refrigerantes e água":"soft drink water",
 "Gelo e complementos":"soft drink water"
};
const categoryPromises = new Map();
const categoryQueue = [];
let categoryRequestRunning = false;
let lastCategoryRequest = 0;
function queueImage(img){
 const category=img.dataset.category;
 ensureCategoryImages(category);
}
const categoryData = new Map();
function ensureCategoryImages(category){
 if(categoryPromises.has(category)){
   return categoryPromises.get(category).then(()=>applyCategoryMatches(category,categoryData.get(category)||[]));
 }
 const promise=new Promise(resolve=>{
   categoryQueue.push({category,resolve});
   processCategoryQueue();
 });
 categoryPromises.set(category,promise);
 return promise.then(()=>applyCategoryMatches(category,categoryData.get(category)||[]));
}
function processCategoryQueue(){
 if(categoryRequestRunning||!categoryQueue.length)return;
 const wait=Math.max(0,7500-(Date.now()-lastCategoryRequest));
 categoryRequestRunning=true;
 setTimeout(async()=>{
   const task=categoryQueue.shift();
   if(!task){categoryRequestRunning=false;return}
   try{await fetchCategoryImages(task.category)}catch(e){/* keep category fallback images */}
   task.resolve();
   lastCategoryRequest=Date.now();
   categoryRequestRunning=false;
   processCategoryQueue();
 },wait);
}
async function fetchCategoryImages(category){
 const cacheKey="adega_category_images_"+normalize(category);
 const cached=load(cacheKey,null);
 if(cached&&cached.savedAt&&Date.now()-cached.savedAt<7*24*60*60*1000){
   categoryData.set(category,cached.matches||[]);
   applyCategoryMatches(category,cached.matches||[]);
   return;
 }
 const term=CATEGORY_SEARCH[category]||"beverage";
 const url=`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(term)}&search_simple=1&action=process&json=1&page_size=100&fields=product_name,brands,image_front_url,image_url`;
 const response=await fetch(url,{headers:{"Accept":"application/json"}});
 if(!response.ok)throw new Error("Falha ao consultar catálogo de imagens");
 const data=await response.json();
 const matches=(data.products||[]).filter(x=>x.product_name&&(x.image_front_url||x.image_url)).map(x=>({
   name:x.product_name||"",brand:x.brands||"",url:x.image_front_url||x.image_url
 }));
 saveCache(cacheKey,{savedAt:Date.now(),matches});
 categoryData.set(category,matches);
 applyCategoryMatches(category,matches);
}
function productMatchScore(product,candidate){
 const brand=normalize(product.brand), name=normalize(product.name);
 const candidateBrand=normalize(candidate.brand), candidateName=normalize(candidate.name);
 const brandTokens=brand.split(" ").filter(x=>x.length>2);
 const nameTokens=name.split(" ").filter(x=>x.length>2);
 const brandScore=brandTokens.length?brandTokens.filter(x=>candidateBrand.includes(x)).length/brandTokens.length:0;
 const nameScore=nameTokens.length?nameTokens.filter(x=>candidateName.includes(x)).length/nameTokens.length:0;
 // Brand and product-name agreement are both required to avoid misleading variants.
 if(brandScore<0.5||nameScore<0.25)return 0;
 return brandScore*0.72+nameScore*0.28;
}
function applyCategoryMatches(category,matches){
 const categoryProducts=products.filter(p=>p.category===category);
 for(const product of categoryProducts){
   let best=null,bestScore=0;
   for(const candidate of matches){
     const score=productMatchScore(product,candidate);
     if(score>bestScore){bestScore=score;best=candidate}
   }
   // Avoid misleading product photos: require brand agreement and a reasonable name match.
   if(best&&bestScore>=0.58){
     const img=document.querySelector(`img[data-product-image="${CSS.escape(product.id)}"]`);
     if(img)applyProductImage(img,best.url,true);
   }
 }
}
function saveCache(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch{}}
function applyProductImage(img,url,exact){
 img.src=url;
 const note=document.querySelector(`[data-photo-note="${CSS.escape(img.dataset.productImage)}"]`);
 if(note)note.textContent=exact?"Foto do produto":"Imagem ilustrativa";
}
function renderCart(){
 const lines=Object.entries(cart).filter(([id,q])=>q>0).map(([id,q])=>({p:products.find(p=>p.id===id),q})).filter(x=>x.p);
 const count=lines.reduce((n,x)=>n+x.q,0), total=lines.reduce((n,x)=>n+x.p.price*x.q,0);
 $("#cartCount").textContent=count;$("#cartTotal").textContent=money(total);
 $("#cartItems").innerHTML=lines.length?lines.map(({p,q})=>`<div class="cart-line"><div><b>${escapeHtml(p.name)}</b><small>${escapeHtml(p.brand)} • ${money(p.price)} cada</small></div><div class="qty-controls"><button data-qty="${p.id}" data-delta="-1">−</button><b>${q}</b><button data-qty="${p.id}" data-delta="1">+</button></div></div>`).join(""):'<div class="empty-cart">Sua sacola está vazia.<br><br>Adicione bebidas para montar seu pedido.</div>';
 save();
}
function addToCart(id,delta=1){const p=products.find(x=>x.id===id);if(!p)return;if(delta>0&&p.stock<=0){showToast("Consulte a disponibilidade deste produto.");return}cart[id]=Math.max(0,(cart[id]||0)+delta);if(!cart[id])delete cart[id];renderCart();if(delta>0)showToast("Produto adicionado à sacola!")}
function openCart(){ $("#cartDrawer").classList.add("open");$("#scrim").classList.add("show");$("#cartDrawer").setAttribute("aria-hidden","false")}
function closeCart(){ $("#cartDrawer").classList.remove("open");$("#scrim").classList.remove("show");$("#cartDrawer").setAttribute("aria-hidden","true")}
function sendOrder(){
 const lines=Object.entries(cart).filter(([id,q])=>q>0).map(([id,q])=>({p:products.find(p=>p.id===id),q})).filter(x=>x.p);
 if(!lines.length){showToast("Adicione produtos antes de enviar.");return}
 if(!WHATSAPP_NUMBER){showToast("Configure o número de WhatsApp no script.js.");return}
 const total=lines.reduce((n,x)=>n+x.p.price*x.q,0);
 const message=["Olá! Quero fazer um pedido na Adega Primeiro Clima:","",...lines.map(x=>`${x.q}x ${x.p.brand} ${x.p.name} (${x.p.size}) — ${money(x.p.price*x.q)}`),"",`Subtotal estimado: ${money(total)}`,"Por favor, confirme disponibilidade, entrega e valor final."].join("\n");
 window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,"_blank","noopener");
}
function renderAdmin(){
 $("#adminStats").innerHTML=`<div><b>${products.length}</b><span>Produtos</span></div><div><b>${categories().length-1}</b><span>Categorias</span></div><div><b>${Object.values(cart).reduce((a,b)=>a+b,0)}</b><span>Itens na sacola</span></div>`;
 $("#adminProductList").innerHTML=products.slice().sort((a,b)=>a.name.localeCompare(b.name)).map(p=>`<div class="admin-product-row"><span>${escapeHtml(p.brand)} — ${escapeHtml(p.name)} <b>${money(p.price)}</b></span><button data-delete="${p.id}">Excluir</button></div>`).join("");
}
function openAdmin(){renderAdmin();$("#adminModal").classList.add("show")}
function closeAdmin(){$("#adminModal").classList.remove("show")}
function init(){
 $("#year").textContent=new Date().getFullYear();
 const age=localStorage.getItem("adega_age_ok");if(age==="yes")$("#ageGate").classList.add("hidden");
 $("#ageYes").onclick=()=>{localStorage.setItem("adega_age_ok","yes");$("#ageGate").classList.add("hidden")};
 $("#ageNo").onclick=()=>{document.body.innerHTML='<main style="min-height:100vh;display:grid;place-items:center;text-align:center;padding:30px"><h1> acesso não permitido </h1><p>Este conteúdo é destinado a maiores de 18 anos.</p></main>'};
 renderFilters();renderProducts();renderCart();
 $("#filterRow").addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(!b)return;activeCategory=b.dataset.filter;visibleCount=24;renderFilters();renderProducts()});
 $("#categoryTiles").addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(!b)return;activeCategory=b.dataset.category;visibleCount=24;renderFilters();renderProducts();$("#catalogo").scrollIntoView()});
 $("#productGrid").addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(b)addToCart(b.dataset.add)});
 $("#cartItems").addEventListener("click",e=>{const b=e.target.closest("[data-qty]");if(b)addToCart(b.dataset.qty,Number(b.dataset.delta))});
 $("#searchInput").addEventListener("input",e=>{searchTerm=e.target.value;visibleCount=24;renderProducts()});
 $("#sortSelect").onchange=e=>{sortMode=e.target.value;renderProducts()};
 $("#loadMore").onclick=()=>{visibleCount+=24;renderProducts()};
 $("#openCart").onclick=openCart;$("#closeCart").onclick=closeCart;$("#scrim").onclick=closeCart;
 $("#checkoutBtn").onclick=sendOrder;$("#clearCart").onclick=()=>{cart={};renderCart();showToast("Sacola esvaziada.")};
 $("#searchFocus").onclick=()=>{$("#searchInput").focus();$("#catalogo").scrollIntoView()};
 $("#mobileMenu").onclick=()=>{document.querySelector(".desktop-nav").style.display=document.querySelector(".desktop-nav").style.display==="flex"?"none":"flex";document.querySelector(".desktop-nav").style.cssText="display:flex;position:absolute;top:68px;left:0;right:0;background:#f8f8f3;padding:20px 6%;flex-direction:column;z-index:30"};
 $("#adminOpen").onclick=openAdmin;$("#adminClose").onclick=closeAdmin;$("#adminModal").addEventListener("click",e=>{if(e.target===$("#adminModal"))closeAdmin()});
 $("#productForm").onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);const name=f.get("name").trim(),brand=f.get("brand").trim();products.push({id:"custom"+Date.now(),name,brand,category:f.get("category"),price:Number(f.get("price")),size:f.get("size").trim(),stock:20,featured:false,search:brand+" "+name});save();renderFilters();renderProducts();renderAdmin();e.target.reset();showToast("Produto cadastrado neste navegador.")};
 $("#adminProductList").onclick=e=>{const b=e.target.closest("[data-delete]");if(!b)return;products=products.filter(p=>p.id!==b.dataset.delete);delete cart[b.dataset.delete];save();renderFilters();renderProducts();renderCart();renderAdmin()};
 $("#exportCatalog").onclick=()=>{const blob=new Blob([JSON.stringify(products,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="catalogo-adega-primeiro-clima.json";a.click();URL.revokeObjectURL(a.href)};
 $("#importCatalog").onchange=async e=>{const file=e.target.files[0];if(!file)return;try{const data=JSON.parse(await file.text());if(!Array.isArray(data)||!data.every(p=>p.name&&p.brand&&p.category))throw new Error();products=data.map((p,i)=>({...p,id:p.id||"import"+i,price:Number(p.price)||0,stock:Number(p.stock??20)}));save();renderFilters();renderProducts();renderAdmin();showToast("Catálogo importado.")}catch{showToast("Arquivo JSON inválido.")}e.target.value=""};
 $("#resetCatalog").onclick=()=>{if(confirm("Restaurar catálogo original? Suas alterações locais serão perdidas.")){products=ORIGINAL_PRODUCTS.map(p=>({...p}));save();renderFilters();renderProducts();renderAdmin();showToast("Catálogo original restaurado.")}};
 const wa=WHATSAPP_NUMBER?`https://wa.me/${WHATSAPP_NUMBER}`:"#";$("#footerWhatsapp").href=wa;$("#footerWhatsapp").onclick=e=>{if(!WHATSAPP_NUMBER){e.preventDefault();showToast("Configure o número de WhatsApp no script.js.")}};
}
document.addEventListener("DOMContentLoaded",init);
