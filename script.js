/* ============================================================
   MIS LIBROS PRO – SCRIPT.JS
   Full-featured PWA: Reading, Uploads, Cart, Stripe, Premium
   ============================================================ */

/* ---------- SERVICE WORKER ---------- */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js").catch(() => {});
}

/* ---------- CONFIG ---------- */
const BACKEND_URL = "https://mylibrary-github-io.onrender.com"; // Change for production
const STRIPE_PUBLISHABLE_KEY =
  "pk_test_51T6i5QDNfF7mRNXJyM1CENyH2peuc4dHkt3FqJ0bqtmx8bfLCrXRVvJ3YtfXNrKPvrmeoVRTlFP32yq1ocMEX9R600gu4Ed45g"; // Replace with your key

const FREE_READS_PER_DAY = 3;
const FREE_UPLOADS_MAX = 5;

/* ---------- DEFAULT BOOKS ---------- */
const DEFAULT_BOOKS = [
  {
    id: "d1",
    title: "El último suspiro",
    author: "Isabel Vargas",
    genre: "ficcion",
    type: "text",
    isDefault: true,
    cover: "cv-1",
    isNew: true,
    price: 50,
    content: `La noche en que todo cambió comenzó como cualquier otra. María estaba leyendo en su departamento cuando el teléfono sonó por tercera vez consecutiva.\n\n—Es él —susurró la voz al otro lado de la línea—. Ha vuelto.\n\nMaría dejó caer el libro. Sus manos temblaban. Hacía tres años que no escuchaba ese nombre. Tres años desde que creyó que todo había terminado para siempre.\n\nSalió a la calle. El aire de la madrugada le mordió la cara. Las farolas parpadeaban como si ellas también estuvieran nerviosas.\n\nEn la esquina, bajo la luz más débil, había una sombra que no debería estar ahí.\n\nMaría respiró hondo. Sus pies la llevaron hacia adelante, hacia la oscuridad, hacia la verdad que había estado huyendo durante tanto tiempo.\n\nEl último suspiro de esa noche no fue el de ella. Fue el del miedo.`,
  },
  {
    id: "d2",
    title: "Sombras del Ayer",
    author: "Carlos Reyes",
    genre: "ficcion",
    type: "text",
    isDefault: true,
    cover: "cv-2",
    isNew: true,
    price: 50,
    content: `La lluvia comenzó justo cuando ella cruzó el puente. No era una lluvia ordinaria, sino una de esas lluvias que parece venir desde la memoria misma.\n\nClara se detuvo en el borde del camino. Sus ojos recorrieron el paisaje que conocía desde los siete años, cuando su madre la trajo por primera vez a este lugar.\n\n—Este río guarda los secretos de la familia —le había dicho entonces su madre, con esa voz grave que siempre usaba cuando hablaba del pasado.\n\nAhora, tantos años después, Clara entendió lo que significaba. El río no guardaba secretos. Ella lo llevaba todo dentro.\n\nLa casa del abuelo todavía estaba en pie, aunque la naturaleza había comenzado a recuperar su territorio. Las enredaderas cubrían casi la mitad de la fachada.\n\nLas sombras del ayer no son oscuras. Son cálidas, como el sol de la tarde filtrado entre hojas viejas.`,
  },
  {
    id: "d3",
    title: "Tiempo Fracturado",
    author: "Lucía Mendoza",
    genre: "no-ficcion",
    type: "text",
    isDefault: true,
    cover: "cv-3",
    isNew: false,
    price: 50,
    content: `El tiempo no fluye como una corriente de agua. En realidad, según los últimos estudios en física cuántica, el tiempo puede existir en múltiples estados simultáneamente.\n\nElena descubrió esto por accidente en su laboratorio un martes de octubre. Estaba calibrando un instrumento cuando los resultados aparecieron en la pantalla: dos versiones del mismo experimento, ejecutándose en momentos diferentes, coexistiendo.\n\n—Es imposible —dijo en voz alta, aunque nadie la escuchaba.\n\nPero los datos no mentían. Durante las siguientes semanas, reproducción tras reproducción confirmó lo mismo: el tiempo se puede fraccionar.\n\nLa implicación más aterradora no fue la científica. Fue que si el tiempo puede romperse, ¿qué pasa con los recuerdos? ¿Con las personas que dejamos atrás en otro fragmento del presente?`,
  },
  {
    id: "d4",
    title: "Crónicas del Imperio",
    author: "Pedro Castillo",
    genre: "historia",
    type: "text",
    isDefault: true,
    cover: "cv-4",
    isNew: false,
    price: 50,
    content: `El Imperio Romano no cayó en un solo día. Cayó en siglos de decisiones, cada una más fatídica que la anterior.\n\nAlejandro, historiador de los últimos días del imperio, había pasado tres décadas estudiando los documentos del periodo de transición. Sus conclusiones fueron controvertidas desde el principio.\n\n—No fue una caída —argumentó en su famoso discurso—. Fue una transformación. El Imperio no desapareció. Se convirtió en algo diferente.\n\nLos pergaminos que encontró en una cueva de Córcega confirmaban su teoría. En ellos, un senador romano describía con detalle cómo las comunidades del norte no venían a destruir, sino a negociar.\n\nLa historia que conocemos es la historia de los ganadores. Pero la historia verdadera está escrita en los pergaminos que nadie quería leer.`,
  },
  {
    id: "d5",
    title: "Amanecer en Éfesis",
    author: "Sofía Luna",
    genre: "romance",
    type: "text",
    isDefault: true,
    cover: "cv-5",
    isNew: true,
    price: 50,
    content: `En la antigua ciudad de Éfesis, donde el mar se encontraba con los sueños, dos personas descubrieron que el amor no necesita tiempo para comenzar.\n\nMarina llegó al puerto un amanecer de marzo. Sus maletas olían a sal y a libros viejos. No conocía a nadie en esa ciudad, y eso era exactamente lo que quería.\n\nÉl estaba en el muelle, reparando una barca, cuando sus ojos se encontraron. No hubo relámpagos ni música. Solo un reconocimiento silencioso, como si ambos hubieran estado esperando ese momento sin saberlo.\n\n—Me llamo Andrés —dijo él, sin mirarla todavía, como si tuviera miedo de que la ilusión desapareciera.\n\n—Marina —respondió ella.\n\nEl amanecer en Éfesis ese año fue más hermoso que todos los anteriores. Como si el mundo entero se hubiera esforzado un poco más.`,
  },
  {
    id: "d6",
    title: "Código Rojo",
    author: "Miguel Torres",
    genre: "misterio",
    type: "text",
    isDefault: true,
    cover: "cv-6",
    isNew: false,
    price: 50,
    content: `Cuando el detective Ramírez llegó a la escena del crimen, lo primero que notó fue que no había sangre. En veinte años de carrera, nunca había visto algo así.\n\n—Esto no tiene sentido —murmuró mientras examinaba el cuerpo.\n\nLa víctima era un bioquímico de renombre. Sus colegas lo describían como obsesivo pero brillante. Nadie tenía un motivo obvio.\n\nEl código rojo, como llamó al archivo clasificado que encontró en el escritorio de la víctima, contenía información que podía cambiar todo.\n\nRamírez pasó tres noches sin dormir descifrando cada elemento. Cada respuesta generaba diez preguntas más.\n\nCuando finalmente entendió el código, deseó no haberlo hecho. Porque la verdad no estaba oculta por miedo. Estaba oculta por protección.\n\nAlgunos secretos existen no para engañar, sino para salvar.`,
  },
  {
    id: "d7",
    title: "Constelaciones",
    author: "Isabel Vargas",
    genre: "poesia",
    type: "text",
    isDefault: true,
    cover: "cv-7",
    isNew: true,
    price: 50,
    content: `La lluvia no cae.\nSube desde la tierra\nhacia los ojos abiertos\ndel cielo.\n\n—\n\nEl tiempo es un río\nque no tiene orillas,\nque nos lleva a donde\nya estuvimos\nantes de nacer.\n\n—\n\nEn la ventana\nun pájaro canta\nla única canción\nque no tiene nombre.\n\n—\n\nLas constelaciones\nno son dibujos en el cielo.\nSon preguntas\nque alguien hizo hace siglos\ny que el universo\naún está respondiendo.`,
  },
  {
    id: "d8",
    title: "Nave Perdida",
    author: "Lucía Mendoza",
    genre: "fantasia",
    type: "text",
    isDefault: true,
    cover: "cv-8",
    isNew: false,
    price: 50,
    content: `La nave Estrella Negra desapareció hace cincuenta años en un lugar donde los mapas decían "aquí no hay nada".\n\nToda la generación de marineros conocía la historia. Se contaba como advertencia: no navegues más allá del cabo de los Vientos.\n\nJen fue la primera en hacerlo.\n\nA los diecinueve años, con una brújula rota y un mapa dibujado por su abuelo, cruzó la línea que nadie se atrevía a cruzar.\n\nLo que encontró no fue el vacío. Fue un mundo flotante, suspendido entre nube y agua, donde el tiempo giraba hacia atrás.\n\nLa nave Estrella Negra estaba ahí, intacta. Y en su popa, tallado en madera antigua, había un mensaje:\n\n"No estamos perdidos. Estamos esperando a que alguien nos encuentre."\n\nJen sonrió. Su abuelo había tenido razón durante todo ese tiempo.`,
  },
  {
    id: "d9",
    title: "El Príncipe Pequeño",
    author: "Antoine de Saint-Exupéry",
    genre: "ficcion",
    type: "text",
    isDefault: true,
    cover: "cv-1",
    isNew: false,
    price: 50,
    content: `Había una vez un pequeño príncipe que vivía en un planeta muy pequeño. Su planeta era tan pequeño que apenas tenía espacio para una rosa y tres volcanes.\n\nEl príncipe cuidaba sus volcanes con mucho esmero. Los limpiaba todos los días, para que no se obstruyeran con cenizas.\n\nUn día, decidió viajar por el universo para conocer otros planetas y sus habitantes.\n\nPero lo más importante que aprendió fue esto: las cosas importantes se ven con el corazón. Lo esencial es invisible para los ojos.\n\nCuando regresó, el pequeño príncipe abrazó su rosa y le dijo: "Eres la más hermosa rosa del universo, no porque seas la más grande, sino porque eres la mía."`,
  },
  {
    id: "d10",
    title: "La Sombra del Viento",
    author: "Carlos Ruiz Zafón",
    genre: "misterio",
    type: "text",
    isDefault: true,
    cover: "cv-2",
    isNew: true,
    price: 50,
    content: `Barcelona, 1945. Un amanecer de invierno, un niño llamado Daniel Sempere descubrió el Cementerio de los Libros Olvidados.\n\nSu padre, librero de profesión, lo llevó de la mano entre los laberintos de estantes cubiertos de polvo.\n\n—Este lugar es un secreto que solo conocen algunos. Hoy tú eres uno de ellos.\n\nDaniel pasó horas explorando los pasillos hasta que un libro lo encontró a él: La Sombra del Viento, de Julián Carax.\n\nPero cuando intentó buscar más obras del autor, descubrió algo perturbador: alguien estaba cazando y destruyendo todos los libros de Carax en la ciudad.\n\nAlguien que no tenía nombre. Alguien que llevaba máscara.\n\nY ese alguien ahora sabía que Daniel tenía el último libro.`,
  },
  {
    id: "d11",
    title: "Cien Años de Soledad",
    author: "Gabriel García Márquez",
    genre: "novela",
    type: "text",
    isDefault: true,
    cover: "cv-3",
    isNew: false,
    price: 50,
    content: `Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo.\n\nMacondo era entonces una aldea de veinte casas de barro y cañabrava construida a la orilla de un río de aguas diáfanas que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehistóricos.\n\nEl mundo era tan reciente que muchas cosas carecían de nombre, y para mencionarlas había que señalarlas con el dedo.\n\nJosé Arcadio Buendía, que era el hombre más emprendedor que se vería jamás en la aldea, había dispuesto de tal manera las casas que desde todas podía llegarse al río y abastecerse de agua con igual esfuerzo.\n\nAsí comenzó la historia de los Buendía, una familia marcada por el destino, el amor, la guerra y la inevitable soledad.`,
  },
  {
    id: "d12",
    title: "El Alquimista",
    author: "Paulo Coelho",
    genre: "ficcion",
    type: "text",
    isDefault: true,
    cover: "cv-4",
    isNew: true,
    price: 50,
    content: `El pastor Santiago tenía un sueño recurrente: en las ruinas de una iglesia abandonada, junto a un sicómoro, había un tesoro enterrado.\n\nUn viejo sabio que decía ser el Rey de Salem le dijo que era una señal del universo.\n\n—Cuando quieres algo, todo el universo conspira para que puedas realizarlo.\n\nSantiago vendió su rebaño y comenzó el viaje hacia Egipto. En el camino aprendió a leer las señales, a entender el Alma del Mundo y a escuchar su corazón.\n\nConoció al alquimista en el desierto. El anciano le enseñó la verdad más profunda:\n\n—El tesoro que buscas en el exterior siempre estuvo dentro de ti. Pero tenías que hacer el viaje para descubrirlo.\n\nSantiago sonrió. El viento del desierto llevó su risa hasta las estrellas.`,
  },
  {
    id: "d13",
    title: "Rayuela",
    author: "Julio Cortázar",
    genre: "novela",
    type: "text",
    isDefault: true,
    cover: "cv-5",
    isNew: false,
    price: 50,
    content: `¿Encontraría a la Maga?\n\nTantas veces me había bastado asomarme, viniendo por la rue de Seine, al arco que da al Quai de Conti, y apenas la luz de ceniza y olivo que flota sobre el río me dejaba distinguir las formas, ya su silueta delgada se inscribía en el Pont des Arts.\n\nLa Maga no sabía que yo la buscaba. Ella nunca buscaba nada. Encontraba.\n\nEso era lo extraordinario: su capacidad de encontrar, de tropezar con lo bello sin buscarlo, de tocar el mundo con dedos que no conocían la torpeza.\n\nParis era nuestra rayuela. Saltábamos de cuadro en cuadro sin orden ni lógica, sin más regla que el deseo.\n\nY yo, que tanto me preocupaba por encontrar el cielo, tardé en darme cuenta de que ya estaba en él.`,
  },
  {
    id: "d14",
    title: "Ficciones",
    author: "Jorge Luis Borges",
    genre: "cuento",
    type: "text",
    isDefault: true,
    cover: "cv-6",
    isNew: true,
    price: 50,
    content: `La biblioteca de Babel existe desde siempre.\n\nEs una estructura de hexágonos infinitos. En cada hexágono hay veinte estantes, cada estante contiene treinta y dos libros, cada libro tiene cuatrocientas diez páginas.\n\nEn algún lugar de esa biblioteca existe el libro que explica todos los demás libros. En otro, el libro que predice tu muerte. En otro, el libro que contiene todas las mentiras posibles.\n\nHe pasado mi vida recorriendo sus galerías. He conocido a peregrinos que buscan el Catálogo de Catálogos. He visto a hombres que enlouquecieron de esperanza.\n\nYo ya no busco el libro perfecto. He comprendido algo más importante: la biblioteca no es el universo. El universo es la biblioteca.\n\nY nosotros somos sus palabras.`,
  },
];

/* ---------- STATE ---------- */
let books = [];
let currentReading = null;
let readingProgress = {};
let settings = { theme: "dark", fontSize: "17" };
let deferredInstall = null;
let activeGenrePill = "all";
let cart = [];
let stripe = null;
let cardElement = null;
let pendingPaymentContext = null; // 'premium' | 'cart'
let selectedPlanAmount = 50;
let selectedPaymentMethod = 'card'; // 'card' | 'oxxo'

/* ---------- PREMIUM & LIMITS ---------- */
function isPremium() {
  return localStorage.getItem("mlibros_premium") === "true";
}
function activatePremium() {
  localStorage.setItem("mlibros_premium", "true");
  updatePremiumUI();
  showToast("🌟 ¡Bienvenido a Premium! Disfruta sin límites.", "success");
}
function updatePremiumUI() {
  const badge = document.getElementById("premiumBadge");
  const readsCounter = document.getElementById("readsCounter");
  if (isPremium()) {
    badge.style.display = "inline-flex";
    readsCounter.style.display = "none";
  } else {
    badge.style.display = "none";
    readsCounter.style.display = "flex";
    updateReadsCounterUI();
  }
}

/* Daily reads tracking */
function getTodayKey() {
  return "mlibros_reads_" + new Date().toISOString().slice(0, 10);
}
function getDailyReads() {
  const key = getTodayKey();
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch (e) {
    return [];
  }
}
function addDailyRead(bookId) {
  const key = getTodayKey();
  const reads = getDailyReads();
  if (!reads.includes(bookId)) {
    reads.push(bookId);
    localStorage.setItem(key, JSON.stringify(reads));
  }
}
function canReadBook(bookId) {
  if (isPremium()) return true;
  const reads = getDailyReads();
  if (reads.includes(bookId)) return true; // already read today, allow continue
  return reads.length < FREE_READS_PER_DAY;
}
function updateReadsCounterUI() {
  if (isPremium()) return;
  const reads = getDailyReads();
  const val = document.getElementById("readsVal");
  const counter = document.getElementById("readsCounter");
  if (val) val.textContent = reads.length;
  if (counter) {
    counter.classList.toggle(
      "limit-reached",
      reads.length >= FREE_READS_PER_DAY,
    );
  }
}

/* Upload limit */
function getUserWritingsCount() {
  return books.filter((b) => !b.isDefault).length;
}
function canUpload() {
  if (isPremium()) return true;
  return getUserWritingsCount() < FREE_UPLOADS_MAX;
}

/* ---------- LOAD / SAVE ---------- */
function loadData() {
  try {
    const b = localStorage.getItem("mlibros_books");
    books = b ? JSON.parse(b) : [];
  } catch (e) {
    books = [];
  }
  if (books.length === 0) books = [...DEFAULT_BOOKS];

  try {
    currentReading = JSON.parse(
      localStorage.getItem("mlibros_currentReading") || "null",
    );
  } catch (e) {
    currentReading = null;
  }
  try {
    readingProgress = JSON.parse(
      localStorage.getItem("mlibros_progress") || "{}",
    );
  } catch (e) {
    readingProgress = {};
  }
  try {
    const s = localStorage.getItem("mlibros_settings");
    if (s) settings = { ...settings, ...JSON.parse(s) };
  } catch (e) {}
  try {
    const c = localStorage.getItem("mlibros_cart");
    cart = c ? JSON.parse(c) : [];
  } catch (e) {
    cart = [];
  }

  applyTheme();
}
function saveBooks() {
  localStorage.setItem("mlibros_books", JSON.stringify(books));
}
function saveProgress() {
  localStorage.setItem("mlibros_progress", JSON.stringify(readingProgress));
}
function saveSettings() {
  localStorage.setItem("mlibros_settings", JSON.stringify(settings));
}
function saveCurrent() {
  localStorage.setItem(
    "mlibros_currentReading",
    JSON.stringify(currentReading),
  );
}
function saveCart() {
  localStorage.setItem("mlibros_cart", JSON.stringify(cart));
}

/* ---------- THEME ---------- */
function applyTheme() {
  document.documentElement.setAttribute("data-theme", settings.theme);
}

/* ---------- TOAST ---------- */
function showToast(msg, type = "") {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.className = "toast " + type;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 3200);
}

/* ---------- SIDEBAR ---------- */
function toggleSidebar() {
  const sb = document.getElementById("sidebar");
  const bd = document.getElementById("sbBackdrop");
  const mn = document.getElementById("main");
  const open = sb.classList.toggle("open");
  bd.classList.toggle("show", open);
  if (window.innerWidth > 600) mn.classList.toggle("pushed", open);
}
function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sbBackdrop").classList.remove("show");
  document.getElementById("main").classList.remove("pushed");
}

/* ---------- RENDER GRID ---------- */
function renderGrid() {
  const grid = document.getElementById("bookGrid");
  grid.innerHTML = "";
  let list = [...books];
  const q = document.getElementById("searchInput").value.trim().toLowerCase();
  if (q)
    list = list.filter(
      (b) =>
        b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q),
    );
  if (activeGenrePill && activeGenrePill !== "all") {
    list = list.filter((b) => b.genre === activeGenrePill);
  }
  list.forEach((b, i) => {
    grid.appendChild(createBookCard(b, i));
  });
}

function createBookCard(b, i) {
  const card = document.createElement("div");
  card.className = "book-card";
  card.style.animationDelay = i * 0.04 + "s";
  const coverClass = b.cover || "cv-" + ((i % 8) + 1);
  const bookSvg =
    b.type === "pdf"
      ? `<svg viewBox="0 0 46 56" fill="none"><rect x="2" y="1" width="42" height="54" rx="4" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.5)" stroke-width="1.4"/><text x="23" y="32" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">PDF</text></svg>`
      : `<svg viewBox="0 0 46 56" fill="none"><rect x="2" y="1" width="20" height="54" rx="3" fill="rgba(255,255,255,.22)" stroke="rgba(255,255,255,.5)" stroke-width="1"/><rect x="24" y="1" width="20" height="54" rx="3" fill="rgba(255,255,255,.3)" stroke="rgba(255,255,255,.5)" stroke-width="1"/><line x1="6" y1="10" x2="18" y2="10" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><line x1="6" y1="14" x2="15" y2="14" stroke="#fff" stroke-width="1" stroke-linecap="round" opacity=".6"/><line x1="28" y1="10" x2="40" y2="10" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><line x1="28" y1="14" x2="37" y2="14" stroke="#fff" stroke-width="1" stroke-linecap="round" opacity=".6"/></svg>`;

  const newBadge = b.isNew ? '<span class="bk-badge">NUEVO</span>' : "";
  const ownBadge = !b.isDefault ? '<span class="bk-badge-own">Mío</span>' : "";
  const price = b.price || 50;
  const priceLabel = price < 100 ? `${price}¢` : '$' + (price / 100).toFixed(2);
  const inCart = cart.some((c) => c.id === b.id);

  card.innerHTML = `
    <div class="bk-cover ${coverClass}">
      ${bookSvg}
      ${newBadge}
      ${ownBadge}
    </div>
    <div class="bk-info">
      <p class="bk-title">${escapeHtml(b.title)}</p>
      <p class="bk-author">${escapeHtml(b.author)}</p>
      <div class="bk-footer">
        <span class="bk-price">${priceLabel}</span>
        <button class="bk-cart-btn ${inCart ? "in-cart" : ""}" data-id="${b.id}" title="${inCart ? "Ya en el carrito" : "Añadir al carrito"}">
          ${inCart ? "✓" : "🛒"}
        </button>
      </div>
    </div>`;

  // Click on card body → open reader (not the cart button)
  card.addEventListener("click", (e) => {
    if (!e.target.closest(".bk-cart-btn")) openReader(b.id);
  });

  // Cart button
  card.querySelector(".bk-cart-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    if (!inCart) {
      addToCart(b);
      renderGrid(); // refresh to update button state
    } else {
      showToast("Este libro ya está en el carrito.", "");
    }
  });

  return card;
}

/* ---------- READING BANNER ---------- */
function renderReadingBanner() {
  const titleEl = document.getElementById("rbTitle");
  const barEl = document.getElementById("rbProg");
  const subEl = document.getElementById("rbSub");
  const coverEl = document.getElementById("rbCover");

  if (currentReading) {
    const b = books.find((x) => x.id === currentReading);
    if (b) {
      titleEl.textContent = b.title;
      const pct = readingProgress[b.id] || 0;
      barEl.style.width = pct + "%";
      subEl.textContent = Math.round(pct) + "% completado";
      const rect = coverEl.querySelector("rect");
      if (rect) rect.setAttribute("fill", getCoverColor(b.cover));
      return;
    }
  }
  titleEl.textContent = "Sin libro abierto";
  barEl.style.width = "0%";
  subEl.textContent = "0% completado";
}

function getCoverColor(cls) {
  const m = {
    "cv-1": "#8b6914",
    "cv-2": "#b8a060",
    "cv-3": "#c9a856",
    "cv-4": "#7a8a6a",
    "cv-5": "#6b7a8a",
    "cv-6": "#9a7a5a",
    "cv-7": "#8a7aaa",
    "cv-8": "#6a8a7a",
  };
  return m[cls] || "#3c3c50";
}

/* ---------- READER ---------- */
function openReader(id) {
  // Check daily limit
  if (!canReadBook(id)) {
    showLimitModal(
      "📖",
      "Límite diario de lectura",
      `Has alcanzado el límite de ${FREE_READS_PER_DAY} libros gratuitos por día. Hazte Premium para leer sin límites.`,
      "reading",
    );
    return;
  }

  const b = books.find((x) => x.id === id);
  if (!b) return;

  // Track this read
  addDailyRead(id);
  updateReadsCounterUI();

  currentReading = id;
  saveCurrent();

  document.getElementById("readerTitle").textContent = b.title;
  const txtEl = document.getElementById("readerTxt");
  const pdfWrap = document.getElementById("readerPdfWrap");
  const bodyEl = document.getElementById("readerBody");

  if (b.type === "pdf") {
    txtEl.parentElement.style.display = "none";
    pdfWrap.style.display = "flex";
    pdfWrap.innerHTML = `<object type="application/pdf" data="${b.pdfDataUrl}" style="width:100%;height:100%;border:none;"></object>`;
    if (!readingProgress[id]) readingProgress[id] = 10;
    saveProgress();
  } else {
    txtEl.parentElement.style.display = "block";
    pdfWrap.style.display = "none";
    txtEl.textContent = b.content;
    txtEl.style.fontSize = settings.fontSize + "px";
    if (!readingProgress[id]) readingProgress[id] = 0;
  }

  showOverlay("modReader");
  renderReadingBanner();

  requestAnimationFrame(() => {
    if (b.type !== "pdf") {
      bodyEl.scrollTop = 0;
      updateReaderProgress(id, bodyEl);
    }
  });
}

function updateReaderProgress(id, el) {
  const st = el.scrollTop,
    sh = el.scrollHeight,
    ch = el.clientHeight;
  let pct = ch >= sh ? 100 : (st / (sh - ch)) * 100;
  pct = Math.max(1, Math.min(100, pct));
  readingProgress[id] = pct;
  saveProgress();
  document.getElementById("readerProg").style.width = pct + "%";
  document.getElementById("readerPct").textContent = Math.round(pct) + " %";
  renderReadingBanner();
}

/* ---------- LIMIT MODAL ---------- */
function showLimitModal(icon, title, msg, context) {
  document.getElementById("limitIcon").textContent = icon;
  document.getElementById("limitTitle").textContent = title;
  document.getElementById("limitMsg").textContent = msg;
  pendingPaymentContext = context;
  showOverlay("modLimit");
}

/* ---------- CART ---------- */
function updateCartUI() {
  const count = cart.length;
  const badge = document.getElementById("cartCount");
  if (count > 0) {
    badge.textContent = count;
    badge.style.display = "flex";
  } else {
    badge.style.display = "none";
  }
}

function openCartModal() {
  const content = document.getElementById("cartContent");
  const checkoutBtn = document.getElementById("btnCartCheckout");

  if (cart.length === 0) {
    content.innerHTML =
      '<p class="cart-empty-msg">🛒 Tu carrito está vacío.<br>Agrega escritos desde la biblioteca.</p>';
    checkoutBtn.style.display = "none";
  } else {
    const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);
    content.innerHTML = `
      <div class="cart-list">
        ${cart
          .map(
            (item, idx) => `
          <div class="cart-item">
            <div class="ci-cover">📚</div>
            <div class="ci-info">
              <p class="ci-title">${escapeHtml(item.title)}</p>
              <p class="ci-price">${item.price < 100 ? item.price + '¢ USD' : '$' + (item.price / 100).toFixed(2)}</p>
            </div>
            <button class="ci-remove" data-idx="${idx}" title="Eliminar">✕</button>
          </div>
        `,
          )
          .join("")}
      </div>
      <div class="cart-total">
        <span class="cart-total-lbl">Total</span>
        <span class="cart-total-val">${total < 100 ? total + '¢ USD' : '$' + (total / 100).toFixed(2)}</span>
      </div>`;

    content.querySelectorAll(".ci-remove").forEach((btn) => {
      btn.addEventListener("click", () => {
        cart.splice(parseInt(btn.dataset.idx), 1);
        saveCart();
        updateCartUI();
        openCartModal();
      });
    });
    checkoutBtn.style.display = "block";
  }
  showOverlay("modCart");
}

function addToCart(book) {
  if (cart.find((i) => i.id === book.id)) {
    showToast("Este libro ya está en el carrito.", "");
    return;
  }
  const price = book.price || 50;
  cart.push({ id: book.id, title: book.title, author: book.author, price });
  saveCart();
  updateCartUI();
  showToast(`📚 "${book.title}" añadido al carrito.`, "success");
}

/* ---------- STRIPE INIT ---------- */
async function initStripe() {
  if (stripe) return;
  try {
    // Load Stripe.js dynamically
    await loadScript("https://js.stripe.com/v3/");
    if (typeof Stripe === "undefined") return;
    stripe = Stripe(STRIPE_PUBLISHABLE_KEY);
  } catch (e) {
    console.warn("Stripe could not be loaded:", e);
  }
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

function mountCardElement() {
  if (!stripe) return;
  const elements = stripe.elements();
  cardElement = elements.create("card", {
    style: {
      base: {
        color: "#eae8f0",
        fontFamily: "Segoe UI, sans-serif",
        fontSize: "15px",
        "::placeholder": { color: "#8a88a0" },
      },
      invalid: { color: "#e74c3c" },
    },
  });
  cardElement.mount("#cardElement");
}

async function openPaymentModal(context) {
  pendingPaymentContext = context || pendingPaymentContext || "premium";

  const payErrorEl = document.getElementById("payError");
  const payTitleEl = document.getElementById("paymentTitle");
  const plansEl = document.querySelector(".payment-plans");

  if (payErrorEl) payErrorEl.textContent = "";

  if (pendingPaymentContext === "cart") {
    const total = cart.reduce((sum, i) => sum + (i.price || 0), 0);
    selectedPlanAmount = total;
    if (payTitleEl) payTitleEl.textContent = "💳 Pagar Carrito";
    if (plansEl) plansEl.style.display = "none";
  } else {
    if (payTitleEl) payTitleEl.textContent = "⭐ Activar Premium";
    if (plansEl) plansEl.style.display = "grid";
    selectedPlanAmount = 50;
  }

  closeOverlay("modLimit");
  closeOverlay("modCart");
  showOverlay("modPayment");

  // Reset payment method tabs
  selectedPaymentMethod = 'card';
  document.querySelectorAll('.pm-tab').forEach(t => t.classList.toggle('active', t.dataset.method === 'card'));
  const cardSec = document.getElementById('cardSection');
  const oxxoSec = document.getElementById('oxxoSection');
  if (cardSec) cardSec.style.display = 'block';
  if (oxxoSec) oxxoSec.style.display = 'none';
  const btnPay = document.getElementById('btnPay');
  if (btnPay) btnPay.textContent = '💳 Pagar ahora';

  await initStripe();
  if (stripe) {
    setTimeout(() => {
      const cardEl = document.getElementById("cardElement");
      if (cardEl) {
        cardEl.innerHTML = "";
        mountCardElement();
      }
    }, 300);
  }
}

async function processPayment() {
  const btn = document.getElementById("btnPay");
  const errEl = document.getElementById("payError");
  errEl.textContent = "";

  if (!stripe) {
    errEl.textContent = "Stripe no está configurado. Revisa el README.";
    return;
  }

  // Validate OXXO fields
  if (selectedPaymentMethod === 'oxxo') {
    const name = document.getElementById('oxxoName')?.value.trim();
    const email = document.getElementById('oxxoEmail')?.value.trim();
    if (!name) { errEl.textContent = 'Por favor ingresa tu nombre completo.'; return; }
    if (!email || !email.includes('@')) { errEl.textContent = 'Por favor ingresa un correo válido.'; return; }
  } else {
    if (!cardElement) { errEl.textContent = 'Stripe no está configurado.'; return; }
  }

  btn.disabled = true;
  btn.textContent = "⏳ Procesando…";

  try {
    const res = await fetch(`${BACKEND_URL}/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: selectedPlanAmount,
        currency: "mxn",
        payment_method_type: selectedPaymentMethod
      }),
    });

    if (!res.ok) throw new Error("Error al crear el intento de pago.");
    const { clientSecret } = await res.json();

    if (selectedPaymentMethod === 'oxxo') {
      // OXXO payment flow
      const name = document.getElementById('oxxoName').value.trim();
      const email = document.getElementById('oxxoEmail').value.trim();

      const { paymentIntent, error } = await stripe.confirmOxxoPayment(clientSecret, {
        payment_method: {
          billing_details: { name, email }
        }
      });

      if (error && error.type !== 'payment_intent_next_action_required') {
        errEl.textContent = error.message;
      } else {
        // Show OXXO voucher instructions
        showOxxoSuccess(paymentIntent);
      }

    } else {
      // Card payment flow (Visa, Mastercard, Spin by OXXO)
      const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      if (error) {
        errEl.textContent = error.message;
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        onPaymentSuccess();
      }
    }

  } catch (e) {
    errEl.textContent = e.message || "Error de conexión con el servidor.";
  } finally {
    btn.disabled = false;
    btn.textContent = selectedPaymentMethod === 'oxxo' ? '🏪 Generar voucher OXXO' : '💳 Pagar ahora';
  }
}

function showOxxoSuccess(paymentIntent) {
  closeOverlay("modPayment");
  const nextAction = paymentIntent?.next_action?.oxxo_display_details;
  const expiresAt = nextAction?.expires_after ? new Date(nextAction.expires_after * 1000).toLocaleString('es-MX') : '24 horas';
  const reference = nextAction?.number || 'Ver email para el número de referencia';

  const content = document.getElementById("paymentContent");
  const payTitleEl = document.getElementById("paymentTitle");
  if (payTitleEl) payTitleEl.textContent = '🏪 Voucher OXXO Generado';
  if (content) content.innerHTML = `
    <div class="pay-success-msg">
      <div class="prem-icon">🏪</div>
      <h3>¡Voucher Generado!</h3>
      <p style="font-size:.85rem;color:var(--txt2);margin:8px 0;">Número de referencia:</p>
      <p style="font-size:1.1rem;font-weight:800;color:var(--blue);letter-spacing:.1em;">${reference}</p>
      <p style="font-size:.78rem;color:var(--txt3);margin-top:8px;">Válido hasta: ${expiresAt}</p>
      <p style="font-size:.82rem;color:var(--txt2);margin-top:12px;">Paga en cualquier tienda OXXO. Al confirmar el pago, tu cuenta se activará automáticamente.</p>
    </div>`;
  showOverlay("modPayment");
}

function onPaymentSuccess() {
  closeOverlay("modPayment");

  if (pendingPaymentContext === "cart") {
    cart = [];
    saveCart();
    updateCartUI();
    showToast("✅ ¡Compra completada! Gracias por tu compra.", "success");
  } else {
    activatePremium();
  }

 
 // Show success inside modal briefly
  const content = document.getElementById("paymentContent");
  const payTitleEl2 = document.getElementById("paymentTitle");
  const originalContent = content.innerHTML;
  const originalTitle = payTitleEl2 ? payTitleEl2.textContent : "";
  const successTitle = pendingPaymentContext === "cart" ? "¡Compra Exitosa!" : "¡Eres Premium!";
  const successMsg = pendingPaymentContext === "cart" ? "Tu pedido ha sido procesado correctamente." : "Ya puedes leer y subir sin límites. ¡Disfruta!";
  if (payTitleEl2) payTitleEl2.textContent = successTitle;
  content.innerHTML = `
    <div class="pay-success-msg">
      <div class="prem-icon">🌟</div>
      <h3>${successTitle}</h3>
      <p>${successMsg}</p>
    </div>`;
  showOverlay("modPayment");
  setTimeout(() => {
    closeOverlay("modPayment");
    content.innerHTML = originalContent;
    if (payTitleEl2) payTitleEl2.textContent = originalTitle;
    document.querySelectorAll(".plan-card").forEach((card) => {
      card.addEventListener("click", () => {
        document.querySelectorAll(".plan-card").forEach((c) => c.classList.remove("selected"));
        card.classList.add("selected");
        selectedPlanAmount = parseInt(card.dataset.amount);
      });
    });
  }, 2500);
  pendingPaymentContext = null;
}

/* ---------- UPLOAD MODAL ---------- */
let selectedPdfDataUrl = null;

function openUploadModal() {
  document.getElementById("inpTitle").value = "";
  document.getElementById("inpAuthor").value = "";
  document.getElementById("selGenre").value = "ficcion";
  document.getElementById("taContent").value = "";
  document.getElementById("inpPrice").value = "2.99";
  selectedPdfDataUrl = null;
  document.getElementById("pdfChip").style.display = "none";
  document.getElementById("pdfDrop").style.display = "flex";
  setMode("text");
  switchTab("new");
  showOverlay("modUpload");
}

function setMode(m) {
  document
    .querySelectorAll(".mode-btn")
    .forEach((b) => b.classList.toggle("active", b.dataset.mode === m));
  document.getElementById("taContent").style.display =
    m === "text" ? "block" : "none";
  document.getElementById("pdfZone").style.display =
    m === "pdf" ? "block" : "none";
}

function switchTab(name) {
  document
    .querySelectorAll(".mod-tab")
    .forEach((t) => t.classList.toggle("active", t.dataset.tab === name));
  document.getElementById("paneNew").classList.toggle("active", name === "new");
  document
    .getElementById("paneManage")
    .classList.toggle("active", name === "manage");
  if (name === "manage") renderManageList();
}

/* ---------- PDF ---------- */
function handlePdfFile(file) {
  if (!file || file.type !== "application/pdf") return;
  const r = new FileReader();
  r.onload = (e) => {
    selectedPdfDataUrl = e.target.result;
    document.getElementById("pdfName").textContent = file.name;
    document.getElementById("pdfChip").style.display = "flex";
    document.getElementById("pdfDrop").style.display = "none";
  };
  r.readAsDataURL(file);
}

/* ---------- SAVE WRITING ---------- */
function saveWriting() {
  // Check upload limit
  if (!canUpload()) {
    closeOverlay("modUpload");
    showLimitModal(
      "✍️",
      "Límite de escritos",
      `Ya subiste ${FREE_UPLOADS_MAX} escritos gratis. Activa Premium para subir escritos ilimitados.`,
      "upload",
    );
    return;
  }

  const title = document.getElementById("inpTitle").value.trim();
  const author = document.getElementById("inpAuthor").value.trim();
  const genre = document.getElementById("selGenre").value;
  const isText =
    document.querySelector(".mode-btn.active").dataset.mode === "text";
  const content = document.getElementById("taContent").value.trim();
  const priceVal = Math.round(
    (parseFloat(document.getElementById("inpPrice").value) || 2.99) * 100,
  );

  if (!title) {
    showToast("Por favor ingresa un título.", "error");
    return;
  }
  if (!author) {
    showToast("Por favor ingresa un autor.", "error");
    return;
  }
  if (isText && !content) {
    showToast("Por favor ingresa contenido.", "error");
    return;
  }
  if (!isText && !selectedPdfDataUrl) {
    showToast("Por favor sube un PDF.", "error");
    return;
  }

  const book = {
    id: "u_" + Date.now(),
    title,
    author,
    genre,
    type: isText ? "text" : "pdf",
    isDefault: false,
    isNew: true,
    cover: "cv-" + ((books.length % 8) + 1),
    price: priceVal,
    content: isText ? content : "",
    pdfDataUrl: isText ? null : selectedPdfDataUrl,
  };
  books.unshift(book);
  saveBooks();
  renderGrid();
  renderManageList();
  showToast("✅ Escrito guardado exitosamente.", "success");
  closeOverlay("modUpload");
}

/* ---------- MANAGE ---------- */
function renderManageList() {
  const el = document.getElementById("manageList");
  const userBooks = books.filter((b) => !b.isDefault);
  if (!userBooks.length) {
    el.innerHTML =
      '<p class="empty-txt">No tienes escritos personales aún.</p>';
    return;
  }
  const count = userBooks.length;
  const limitInfo = isPremium()
    ? ""
    : `<p style="font-size:.78rem;color:var(--txt2);margin-bottom:12px;">📊 ${count}/${FREE_UPLOADS_MAX} escritos gratuitos usados</p>`;
  el.innerHTML =
    limitInfo +
    userBooks
      .map(
        (b) => `
    <div class="manage-item">
      <div class="mi-info">
        <p class="mi-title">${escapeHtml(b.title)}</p>
        <p class="mi-meta">${escapeHtml(b.author)} · ${genreLabel(b.genre)} · ${b.type === "pdf" ? "PDF" : "Texto"}</p>
      </div>
      <div class="mi-acts">
        <button class="mi-btn edit-btn" data-id="${b.id}" title="Editar">✏️</button>
        <button class="mi-btn del" data-id="${b.id}" title="Borrar">🗑️</button>
      </div>
    </div>
  `,
      )
      .join("");

  el.querySelectorAll(".edit-btn").forEach((btn) =>
    btn.addEventListener("click", () => openEditModal(btn.dataset.id)),
  );
  el.querySelectorAll(".mi-btn.del").forEach((btn) =>
    btn.addEventListener("click", () => deleteBook(btn.dataset.id)),
  );
}

/* ---------- EDIT ---------- */
function openEditModal(id) {
  const b = books.find((x) => x.id === id);
  if (!b) return;
  document.getElementById("editId").value = id;
  document.getElementById("editTitle").value = b.title;
  document.getElementById("editAuthor").value = b.author;
  document.getElementById("editGenre").value = b.genre;
  document.getElementById("editTA").value = b.content || "";
  document.getElementById("editTA").style.display =
    b.type === "pdf" ? "none" : "block";
  showOverlay("modEdit");
}
function saveEdit() {
  const id = document.getElementById("editId").value;
  const b = books.find((x) => x.id === id);
  if (!b) return;
  b.title = document.getElementById("editTitle").value.trim() || b.title;
  b.author = document.getElementById("editAuthor").value.trim() || b.author;
  b.genre = document.getElementById("editGenre").value;
  if (b.type === "text") b.content = document.getElementById("editTA").value;
  saveBooks();
  renderGrid();
  renderManageList();
  closeOverlay("modEdit");
  showToast("✅ Escrito editado.", "success");
}

/* ---------- DELETE ---------- */
function deleteBook(id) {
  if (!confirm("¿Estás seguro de borrar este escrito?")) return;
  books = books.filter((b) => b.id !== id);
  if (currentReading === id) {
    currentReading = null;
    saveCurrent();
  }
  delete readingProgress[id];
  saveBooks();
  saveProgress();
  renderGrid();
  renderManageList();
  renderReadingBanner();
}

/* ---------- GENRE / AUTHOR MODALS ---------- */
function openGenresModal() {
  const map = {};
  books.forEach((b) => {
    map[b.genre] = (map[b.genre] || 0) + 1;
  });
  const el = document.getElementById("generosList");
  el.innerHTML = Object.entries(map)
    .map(
      ([g, c]) => `
    <div class="filter-item" data-genre="${g}">
      <span class="fi-name">${genreLabel(g)}</span>
      <span class="fi-cnt">${c}</span>
    </div>
  `,
    )
    .join("");
  el.querySelectorAll(".filter-item").forEach((item) => {
    item.addEventListener("click", () => {
      closeOverlay("modGeneros");
      activeGenrePill = item.dataset.genre;
      syncPills();
      renderGrid();
    });
  });
  showOverlay("modGeneros");
}

function openAutoresModal() {
  const map = {};
  books.forEach((b) => {
    map[b.author] = (map[b.author] || 0) + 1;
  });
  const el = document.getElementById("autoresList");
  el.innerHTML = Object.entries(map)
    .map(
      ([a, c]) => `
    <div class="filter-item" data-author="${a}">
      <span class="fi-name">${escapeHtml(a)}</span>
      <span class="fi-cnt">${c}</span>
    </div>
  `,
    )
    .join("");
  el.querySelectorAll(".filter-item").forEach((item) => {
    item.addEventListener("click", () => {
      closeOverlay("modAutores");
      const author = item.dataset.author;
      activeGenrePill = "all";
      syncPills();
      renderGridFiltered((b) => b.author === author);
    });
  });
  showOverlay("modAutores");
}

function renderGridFiltered(fn) {
  const grid = document.getElementById("bookGrid");
  grid.innerHTML = "";
  books.filter(fn).forEach((b, i) => grid.appendChild(createBookCard(b, i)));
}

function syncPills() {
  document.querySelectorAll(".pill").forEach((p) => {
    p.classList.toggle("active", p.dataset.genre === activeGenrePill);
  });
}

/* ---------- SETTINGS ---------- */
function openSettings() {
  document.getElementById("selTheme").value = settings.theme;
  document.getElementById("selFont").value = settings.fontSize;
  showOverlay("modSettings");
}
function doSaveSettings() {
  settings.theme = document.getElementById("selTheme").value;
  settings.fontSize = document.getElementById("selFont").value;
  saveSettings();
  applyTheme();
  closeOverlay("modSettings");
  showToast("⚙️ Configuración guardada.", "success");
}

/* ---------- OVERLAY HELPERS ---------- */
function showOverlay(id) {
  document.getElementById(id).classList.add("show");
}
function closeOverlay(id) {
  document.getElementById(id).classList.remove("show");
}

/* ---------- UTILS ---------- */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function genreLabel(g) {
  const m = {
    ficcion: "Ficción",
    "no-ficcion": "No Ficción",
    poesia: "Poesía",
    cuento: "Cuento Corto",
    novela: "Novela",
    otro: "Otro",
    misterio: "Misterio",
    historia: "Historia",
    romance: "Romance",
    fantasia: "Fantasía",
  };
  return m[g] || g;
}

/* ---------- BIND ALL EVENTS ---------- */
document.addEventListener("DOMContentLoaded", () => {
  loadData();

  // ── Hamburger ──
  document.getElementById("btnHamb").addEventListener("click", toggleSidebar);
  document.getElementById("sbBackdrop").addEventListener("click", closeSidebar);

  // ── Sidebar nav ──
  document.querySelectorAll(".sb-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".sb-item")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const page = btn.dataset.page;
      closeSidebar();
      if (page === "inicio") {
        activeGenrePill = "all";
        syncPills();
        renderGrid();
      } else if (page === "generos") {
        openGenresModal();
      } else if (page === "autores") {
        openAutoresModal();
      } else if (page === "misescritos") {
        openUploadModal();
        switchTab("manage");
      } else if (page === "carrito") {
        openCartModal();
      } else if (page === "premium") {
        openPaymentModal("premium");
      }
    });
  });

  // ── Upload buttons ──
  document.getElementById("btnUploadSb").addEventListener("click", () => {
    closeSidebar();
    openUploadModal();
  });
  document
    .getElementById("btnUploadTop")
    .addEventListener("click", openUploadModal);

  // ── Search ──
  document
    .getElementById("searchInput")
    .addEventListener("input", () => renderGrid());

  // ── Settings ──
  document
    .getElementById("btnSettings")
    .addEventListener("click", openSettings);
  document
    .getElementById("closeSettings")
    .addEventListener("click", () => closeOverlay("modSettings"));
  document
    .getElementById("btnSaveSett")
    .addEventListener("click", doSaveSettings);

  // ── Upload modal ──
  document
    .getElementById("closeUpload")
    .addEventListener("click", () => closeOverlay("modUpload"));
  document
    .querySelectorAll(".mode-btn")
    .forEach((btn) =>
      btn.addEventListener("click", () => setMode(btn.dataset.mode)),
    );
  document
    .querySelectorAll(".mod-tab")
    .forEach((btn) =>
      btn.addEventListener("click", () => switchTab(btn.dataset.tab)),
    );

  // PDF
  const pdfDrop = document.getElementById("pdfDrop");
  const pdfInput = document.getElementById("inpPdf");
  pdfDrop.addEventListener("click", () => pdfInput.click());
  pdfInput.addEventListener("change", (e) => handlePdfFile(e.target.files[0]));
  pdfDrop.addEventListener("dragover", (e) => {
    e.preventDefault();
    pdfDrop.classList.add("over");
  });
  pdfDrop.addEventListener("dragleave", () => pdfDrop.classList.remove("over"));
  pdfDrop.addEventListener("drop", (e) => {
    e.preventDefault();
    pdfDrop.classList.remove("over");
    handlePdfFile(e.dataTransfer.files[0]);
  });
  document.getElementById("pdfRm").addEventListener("click", () => {
    selectedPdfDataUrl = null;
    pdfInput.value = "";
    document.getElementById("pdfChip").style.display = "none";
    document.getElementById("pdfDrop").style.display = "flex";
  });
  document.getElementById("btnSave").addEventListener("click", saveWriting);

  // ── Edit modal ──
  document
    .getElementById("closeEdit")
    .addEventListener("click", () => closeOverlay("modEdit"));
  document.getElementById("btnSaveEdit").addEventListener("click", saveEdit);

  // ── Reader ──
  document.getElementById("closeReader").addEventListener("click", () => {
    closeOverlay("modReader");
    renderReadingBanner();
  });
  document.getElementById("readerBody").addEventListener("scroll", function () {
    if (currentReading) {
      const b = books.find((x) => x.id === currentReading);
      if (b && b.type !== "pdf") updateReaderProgress(currentReading, this);
    }
  });

  // ── Genre / Author close ──
  document
    .getElementById("closeGeneros")
    .addEventListener("click", () => closeOverlay("modGeneros"));
  document
    .getElementById("closeAutores")
    .addEventListener("click", () => closeOverlay("modAutores"));

  // ── Reading banner click ──
  document.getElementById("readingBanner").addEventListener("click", () => {
    if (currentReading) openReader(currentReading);
  });

  // ── Genre pills ──
  document.querySelectorAll(".pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      activeGenrePill = pill.dataset.genre;
      syncPills();
      renderGrid();
    });
  });

  // ── Explore strip ──
  document
    .getElementById("btnExplore")
    .addEventListener("click", openUploadModal);

  // ── Limit modal ──
  document
    .getElementById("closeLimit")
    .addEventListener("click", () => closeOverlay("modLimit"));
  document
    .getElementById("closeLimitCancel")
    .addEventListener("click", () => closeOverlay("modLimit"));
  document
    .getElementById("btnLimitPay")
    .addEventListener("click", () => openPaymentModal(pendingPaymentContext));

  // ── Cart ──
  document.getElementById("btnCart").addEventListener("click", openCartModal);
  document
    .getElementById("closeCart")
    .addEventListener("click", () => closeOverlay("modCart"));
  document
    .getElementById("btnCartCheckout")
    .addEventListener("click", () => openPaymentModal("cart"));

  // ── Payment modal ──
  document
    .getElementById("closePayment")
    .addEventListener("click", () => closeOverlay("modPayment"));
  document.getElementById("btnPay").addEventListener("click", processPayment);

  // Plan cards
  document.querySelectorAll(".plan-card").forEach((card) => {
    card.addEventListener("click", () => {
      document
        .querySelectorAll(".plan-card")
        .forEach((c) => c.classList.remove("selected"));
      card.classList.add("selected");
      selectedPlanAmount = parseInt(card.dataset.amount);
    });
  });

  // Payment method tabs (Card / OXXO)
  document.querySelectorAll('.pm-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.pm-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      selectedPaymentMethod = tab.dataset.method;

      const cardSec = document.getElementById('cardSection');
      const oxxoSec = document.getElementById('oxxoSection');
      const btnPay  = document.getElementById('btnPay');

      if (selectedPaymentMethod === 'oxxo') {
        if (cardSec) cardSec.style.display = 'none';
        if (oxxoSec) oxxoSec.style.display = 'block';
        if (btnPay)  btnPay.textContent = '🏪 Generar voucher OXXO';
      } else {
        if (cardSec) cardSec.style.display = 'block';
        if (oxxoSec) oxxoSec.style.display = 'none';
        if (btnPay)  btnPay.textContent = '💳 Pagar ahora';
      }
    });
  });

  // ── Backdrop close on all overlays ──
  document.querySelectorAll(".overlay").forEach((ov) => {
    ov.addEventListener("click", (e) => {
      if (e.target === ov) ov.classList.remove("show");
    });
  });

  // ── PWA Install ──
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredInstall = e;
    document.getElementById("installBar").style.display = "flex";
  });
  document.getElementById("btnInstall").addEventListener("click", () => {
    if (deferredInstall) {
      deferredInstall.prompt();
      deferredInstall = null;
    }
    document.getElementById("installBar").style.display = "none";
  });
  document.getElementById("instDismiss").addEventListener("click", () => {
    document.getElementById("installBar").style.display = "none";
  });

  // ── INITIAL RENDER ──
  renderGrid();
  renderReadingBanner();
  updatePremiumUI();
  updateCartUI();
});

/* ===== CHATBOT — ChatGPT REAL ===== */
let chatHistory = []; // stores {role, content} for context
let isChatLoading = false;

function toggleChat() {
  const chat = document.getElementById("chatContainer");
  const isOpen = chat.style.display === "flex";
  chat.style.display = isOpen ? "none" : "flex";
  if (
    !isOpen &&
    document.getElementById("chatMessages").children.length === 0
  ) {
    appendBotMessage(
      "👋 ¡Hola! Soy tu asistente literario con IA. Puedo recomendarte libros, hablar de autores, ayudarte a escribir o responder cualquier duda sobre la app. ¿En qué te ayudo?",
    );
  }
}

function appendUserMessage(text) {
  const chat = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.className = "chat-msg user";
  div.innerHTML = `<strong>Tú:</strong> ${escapeHtml(text)}`;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function appendBotMessage(text) {
  const chat = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.className = "chat-msg bot";
  div.innerHTML = `<strong>📚 Asistente:</strong> ${escapeHtml(text)}`;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function appendTypingIndicator() {
  const chat = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.className = "chat-msg bot typing-indicator";
  div.id = "typingIndicator";
  div.innerHTML = `<strong>📚 Asistente:</strong> <span class="dots"><span>.</span><span>.</span><span>.</span></span>`;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function removeTypingIndicator() {
  const el = document.getElementById("typingIndicator");
  if (el) el.remove();
}

async function sendMessage() {
  if (isChatLoading) return;
  const input = document.getElementById("userInput");
  const msg = input.value.trim();
  if (!msg) return;

  input.value = "";
  appendUserMessage(msg);

  isChatLoading = true;
  const sendBtn = document.querySelector(".chat-input button");
  if (sendBtn) {
    sendBtn.disabled = true;
    sendBtn.textContent = "...";
  }

  appendTypingIndicator();

  try {
    const res = await fetch(`${BACKEND_URL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg, history: chatHistory }),
    });

    const data = await res.json();
    removeTypingIndicator();

    if (!res.ok) {
      appendBotMessage(
        `⚠️ ${data.error || "Error al conectar con el asistente."}`,
      );
    } else {
      // Save to history for context
      chatHistory.push({ role: "user", content: msg });
      chatHistory.push({ role: "assistant", content: data.reply });
      // Keep history manageable
      if (chatHistory.length > 20) chatHistory = chatHistory.slice(-20);
      appendBotMessage(data.reply);
    }
  } catch (err) {
    removeTypingIndicator();
    appendBotMessage(
      "⚠️ No se pudo conectar con el servidor. Asegúrate de que el backend esté corriendo en localhost:3001.",
    );
  } finally {
    isChatLoading = false;
    if (sendBtn) {
      sendBtn.disabled = false;
      sendBtn.textContent = "Enviar";
    }
  }
}
