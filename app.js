/* ============================================================
   MIS LIBROS  –  APP.JS
   ============================================================ */

/* ---------- SERVICE WORKER ---------- */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

/* ============================================================
   DEFAULT BOOKS
   ============================================================ */
const DEFAULT_BOOKS = [

  /* ──────────── EDGAR ALLAN POE ──────────── */
  {
    id: 'poe1',
    title: 'El corazón delator',
    author: 'Edgar Allan Poe',
    genre: 'terror',
    type: 'text',
    isDefault: true,
    cover: 'cv-9',
    isNew: true,
    content:
`—Es verdad! —es horrible— y sin embargo creo que tengo que declarar todo. ¿Locura estaba? No. Nunca lo fui. Pero ¿cómo explicar la agudez de mis sentidos? No la tenía. Tenía.

Decidí entonces matar al viejo. Su ojo me irritaba; era como un buitre, pálido y azulado, como el de un muerto. Una de las noches —fue la octava— al abrir la puerta, tan delicadamente que no podía despertar al viejo, metí la cabeza por la rendija.

No podía ver nada. La oscuridad era completa. Así pasé noche tras noche. Hasta que la octava noche, el rayo de mi linterna cayó sobre el ojo del viejo. Estaba abierto —medio abierto— y frente a él yo no podía hacer nada sino actuar.

Lo maté. Luego descubrí el cadáver bajo las tablas del piso. Me pareció que todo salió perfectamente.

Pero entonces —entonces— los policías llegaron. Y yo escuché, bajo las tablas, un latido: pum, pum, pum. El corazón del viejo, latiendo todavía. El latido fue tan fuerte que al final no pude soportarlo más.

—¡Es él! —grite—. ¡Levanten las tablas! ¡Es su corazón! ¡El maldito corazón delator!`
  },

  {
    id: 'poe2',
    title: 'La caída de la casa Usher',
    author: 'Edgar Allan Poe',
    genre: 'terror',
    type: 'text',
    isDefault: true,
    cover: 'cv-11',
    isNew: true,
    content:
`En una tarde lúgubre y oscura del otoño, llegué a las puertas de la Casa Usher. La invitación de mi amigo Roderick me había llegado días antes, llena de angustia y desazón.

La casa era un edificio antiguo y sombrío. Sus paredes estaban cubiertas de musgo y sus ventanas parecían ojos vacíos que miraban desde la oscuridad. Un lago oscuro y estancado la reflejaba perfectamente, como si hubiera dos casas: una real y otra sumergida en el silencio.

Roderick estaba pálido, delgado, y sus ojos brillaban con una luz extraña. Su hermana, la dama Madeline, caminaba como un fantasma por los corredores, sin decir una palabra.

—Hay algo en esta casa —me dijo Roderick—. Algo que nos consume a los dos.

Después de días encerrados, la dama Madeline cayó enferma. La enterraron viva, en la cripta debajo de la casa.

Una noche, mientras la tormenta furiosa sacudía el exterior, escuché pasos en las escaleras. La puerta se abrió y ahí estaba Madeline, cubierta de sangre, con los ojos abiertos, cayendo sobre Roderick.

Ambos murieron. Y la casa, gemido a gemido, se hundió en el lago.`
  },

  {
    id: 'poe3',
    title: 'El cuervo',
    author: 'Edgar Allan Poe',
    genre: 'poesia',
    type: 'text',
    isDefault: true,
    cover: 'cv-6',
    isNew: false,
    content:
`Una vez, en una medianoche triste, mientras yo estaba débil y agotado,
pensando en los libros perdidos que yacían en el piso,
mientras el viento aullaba y los árboles se doblaban,
un golpeo suave y misterioso llegó a mi puerta.

—Solo esto —susurré— un visitante inesperado en esta noche oscura.
Solo esto, y nada más.

Abrí la puerta. No había nadie. Solo la oscuridad y el viento.
Pero cuando cerré la puerta, sobre el marco, un pájaro negro se posó.
Sus ojos brillaban como dos estrellas apagadas.

—¿Quién eres? —le pregunté.
—Nunca más —respondió el cuervo.

—¿Voy a olvidar mi dolor? —pregunté.
—Nunca más —respondió el cuervo.

—¿Voy a encontrar paz? —pregunté.
—Nunca más —respondió el cuervo.

Y así, en la oscuridad de esa noche eterna, el cuervo siguió diciendo
"Nunca más", mientras yo, encadenado al silencio, no podía escapar de su verdad.`
  },

  {
    id: 'poe4',
    title: 'El barril de amontillado',
    author: 'Edgar Allan Poe',
    genre: 'terror',
    type: 'text',
    isDefault: true,
    cover: 'cv-1',
    isNew: false,
    content:
`Durante medio siglo nadie conoció la verdad sobre lo que le hice a Montresor. Nadie la conocerá jamás. Solo yo lo sé, y lo cuento ahora porque ya no importa.

Me había burlado. Una y otra vez, Montresor me burlaba frente a todos. Era un orgullo que no podía tolerar. Decidí que la venganza sería perfecta: nadie la vería venir.

En la noche del carnaval, cuando todos estaban borrachos y celebrando, lo invité a ver mi bodega de vinos, oculta bajo las calles. Los pasillos se volvían más estrechos, más oscuros, más fríos.

—Hace frío aquí abajo —dijo Montresor, con miedo en la voz.
—Sí —respondí—. Es la humedad de las piedras antiguas.

Más abajo, más oscuro. Hasta que llegamos al fondo, donde había un arco estrecho en la pared. Lo encadene ahí, entre las piedras. Sus gritos retumbaban en el vacío.

Coloqué la última piedra. El último ladrillo. Y el grito de Montresor se convirtió en silencio.

Cincuenta años después, los cimientos siguen en pie. Y nadie sabe lo que yace detrás de la pared.`
  },

  {
    id: 'poe5',
    title: 'El sistema pendular',
    author: 'Edgar Allan Poe',
    genre: 'terror',
    type: 'text',
    isDefault: true,
    cover: 'cv-3',
    isNew: false,
    content:
`La oscuridad fue lo primero que noté cuando desperté. Mi cuerpo estaba atado a una mesa, inmóvil. No podía ver nada, solo sentir el frío de la piedra contra mi espalda.

Luego escuché el sonido: un zumbido rítmico, suave al principio, que se acercaba lentamente. Un péndulo, descolgado del techo, oscilaba arriba de mí. En su extremo, una cuchilla.

Cada swing lo acercaba más. Milímetros por milímetros.

Pasaron horas —o días, no lo sabía— mientras el péndulo bajaba. Cuando finalmente pude ver la cuchilla, la sangre se heló en mis venas. Era enorme, reluciente, y cortaba el aire con un sonido que nunca olvidaré.

Pero la mente piensa en los momentos más oscuros. Encontré una forma de escapar: la grasa en las cuerdas. Si el péndulo cortaba las cuerdas, yo sería libre.

Sí, la cuchilla cortó las cuerdas. Me liberé apenas a tiempo, con la cuchilla rozando mi pecho.

Pero al salir, descubrí que las paredes se cerraban hacia adentro. La trampa no había terminado.`
  },

  /* ──────────── H.P. LOVECRAFT ──────────── */
  {
    id: 'lh1',
    title: 'El llamado de Cthulhu',
    author: 'H.P. Lovecraft',
    genre: 'terror',
    type: 'text',
    isDefault: true,
    cover: 'cv-5',
    isNew: true,
    content:
`La cosa más miserable del mundo es vivir en el medio de una oscuridad que no podemos entender. Yo era un académico respectable, un investigador serio, hasta que encontré los papeles de mi abuelo.

En ellos, estaban dibujos: una criatura gigante, con alas y tentáculos, que dormía bajo las profundidades del océano. El nombre que mi abuelo había escrito una y otra vez en sus notas era: Cthulhu.

Los documentos hablaban de cultos secretos que adoraban a esta entidad, y de sueños que miles de personas alrededor del mundo estaban teniendo simultáneamente —sueños oscuros, de ciudades sumergidas bajo el mar.

Investigé durante meses. Encontré grabaciones de marineros que describían lo mismo: una isla que aparecía y desaparecía, un ruido desde el fondo del océano, una presencia antigua que dormía pero que soñaba.

Y entonces yo también empiezo a soñar. Cada noche, la misma visión: agua oscura, una ciudad de piedra y una sombra inmensa que se mueve en el abismo.

Ahora sé la verdad: los dioses no están muertos. Solo duermen. Y cuando se despiertan, todo lo que conocemos terminará.`
  },

  {
    id: 'lh2',
    title: 'En la cuesta de Dunwich',
    author: 'H.P. Lovecraft',
    genre: 'terror',
    type: 'text',
    isDefault: true,
    cover: 'cv-10',
    isNew: true,
    content:
`En el pueblo de Dunwich, anidado entre colinas oscuras y bosques antiguos, algo horrible nació en una primavera de 1913.

La madre era una mujer del pueblo, casi una salvaje según los vecinos. El padre —nadie lo conoció. Solo decían que era "algo que bajó de las colinas en la noche más oscura del año."

El niño creció más rápido de lo normal. A los tres años, ya hablaba. A los cinco, ya aterrorizaba al pueblo. Su voz tenía un eco extraño, como si viniera de dos gargantas a la vez.

Los vecinos notaron que las vacas del área morían sin explicación. Los perros aullaban todas las noches. Y en las colinas, bajo la luz de la luna, se escuchaban cantos en un idioma que nadie conocía.

El día que el niño desapareció fue un martes. No dejó rastro. Solo un olor a ozono, a lluvia eléctrica, y en el suelo de su habitación, una marca: cinco dedos grabados en la madera, cada uno del doble de tamaño normal.

Nadie habló del tema durante años. Hasta que los cánticos volvieron.`
  },

  {
    id: 'lh3',
    title: 'El color fuera del espacio',
    author: 'H.P. Lovecraft',
    genre: 'terror',
    type: 'text',
    isDefault: true,
    cover: 'cv-12',
    isNew: false,
    content:
`Llegó con un meteorito, en una granja perdida en las colinas de Massachusetts. Nadie la vio caer; solo encontraron el cráter por la mañana, perfecto como un círculo tallado por manos antiguas.

El color no tenía nombre. No era rojo, ni azul, ni verde. Era algo que los ojos no podían procesar, algo que los humanos no estaban diseñados para ver.

El agricultor que vivía cerca fue el primero en enfermarse. Sus cultivos se tornaron brillantes —demasiado brillantes—, como si emitieran luz. Las verduras crecían rápido, enormes, pero nadie podía comerlas.

Luego la familia empezó a cambiar. Los niños se volvieron silenciosos, mirando el cielo con ojos vacíos. La madre dejó de hablar. El padre caminaba por la noche, desnudo, hacia el cráter.

Los vecinos que se acercaron a la granja describieron lo mismo: al entrar, sentían que la realidad se disolvía. El aire brillaba con ese color sin nombre. Y en los ojos de los que vivían ahí, había algo que no era humano.

Un día, la granja amaneció vacía. Solo quedaba el cráter, brillando bajo el sol, esperando.`
  },

  {
    id: 'lh4',
    title: 'Phantoms en la niebla',
    author: 'H.P. Lovecraft',
    genre: 'terror',
    type: 'text',
    isDefault: true,
    cover: 'cv-2',
    isNew: false,
    content:
`La niebla llegó al puerto de Innsmouth un viernes por la noche. No era una niebla normal —era demasiado densa, demasiado uniforme, como si algo la estuviera generando desde adentro.

Los pescadores que salieron esa noche no regresaron. Sus barcos aparecieron al amanecer, intactos, en medio del puerto, pero vacíos. En las mesas de uno de ellos, estaba el diario del capitán. Las últimas líneas decían:

"Algo nos observa desde la niebla. No tiene forma que pueda describir. No tiene ojos, pero nos ve. No tiene voz, pero nos habla."

El pueblo entró en pánico. Las autoridades investigaron y no encontraron nada. Pero tres noches después, la niebla volvió.

Esta vez, los residentes que vivían cerca del puerto empezaron a cambiar. Su piel se tornó más pálida, casi transparente. Sus ojos se volvieron acuosos. Y por las noches, caminaban hacia el mar como sonámbulos.

El último testigo dijo que vio a los pueblerinos entrar al agua, uno por uno, sin hacer ruido. Y la niebla, lentamente, se retiró hacia las profundidades.

El puerto de Innsmouth hoy está vacío.`
  },

  {
    id: 'lh5',
    title: 'La sombra sobre Innsmouth',
    author: 'H.P. Lovecraft',
    genre: 'novela',
    type: 'text',
    isDefault: true,
    cover: 'cv-4',
    isNew: false,
    content:
`Llegué a Innsmouth como turista, por accidente. Ningún mapa moderno mostraba ese pueblo. Solo un cartel desvencijado en la carretera me indicó que existía.

El pueblo apestaba. No a muerte, sino a sal y a algo más antiguo. Las casas eran de piedra oscura y muchas estaban abandonadas. Las ventanas tenían un color extraño, como si estuvieran cubiertas por agua.

Los vecinos que me vieron entrar se detuvieron en seco. Cuando les pregunté por caminos, las mujeres miraban hacia abajo y los hombres sonreían con una sonrisa que no tenía nada de humano.

En la taberna, un viejo borracho me contó la historia del pueblo: hace siglos, los pescadores hicieron un pacto con "los moradores del mar." A cambio de abundancia, sus familias se transformarían en algo más antiguo, algo que no necesitaba tierra ni aire.

Esa noche, desde la ventana de mi habitación, vi el mar cambiar de color. Y desde las profundidades, figuras —medio humanas, medio algo más— emergieron lentamente, caminando hacia la costa.

No dormí esa noche. Y al amanecer, busqué la salida más rápida.

Solo después supe que esas figuras eran los vecinos. Transformados. Yendo a casa.`
  },

  /* ──────────── ORIGINALES ──────────── */
  {
    id: 'd1',
    title: 'El último suspiro',
    author: 'Isabel Vargas',
    genre: 'ficcion',
    type: 'text',
    isDefault: true,
    cover: 'cv-1',
    isNew: false,
    content:
`La noche en que todo cambió comenzó como cualquier otra. María estaba leyendo en su departamento cuando el teléfono sonó por tercera vez consecutiva.

—Es él —susurró la voz al otro lado de la línea—. Ha vuelto.

María dejó caer el libro. Sus manos temblaban. Hacía tres años que no escuchaba ese nombre. Tres años desde que creyó que todo había terminado para siempre.

Salió a la calle. El aire de la madrugada le mordió la cara. Las farolas parpadeaban como si ellas también estuvieran nerviosas.

En la esquina, bajo la luz más débil, había una sombra que no debería estar ahí.

María respiró hondo. Sus pies la llevaron hacia adelante, hacia la oscuridad, hacia la verdad que había estado huyendo durante tanto tiempo.

El último suspiro de esa noche no fue el de ella. Fue el del miedo.`
  },

  {
    id: 'd2',
    title: 'Sombras del Ayer',
    author: 'Carlos Reyes',
    genre: 'ficcion',
    type: 'text',
    isDefault: true,
    cover: 'cv-2',
    isNew: false,
    content:
`La lluvia comenzó justo cuando ella cruzó el puente. No era una lluvia ordinaria, sino una de esas lluvias que parece venir desde la memoria misma.

Clara se detuvo en el borde del camino. Sus ojos recorrieron el paisaje que conocía desde los siete años, cuando su madre la trajo por primera vez a este lugar.

—Este río guarda los secretos de la familia —le había dicho entonces su madre, con esa voz grave que siempre usaba cuando hablaba del pasado.

Ahora, tantos años después, Clara entendió lo que significaba. El río no guardaba secretos. Ella lo llevaba todo dentro.

La casa del abuelo todavía estaba en pie, aunque la naturaleza había comenzado a recuperar su territorio. Las enredaderas cubrían casi la mitad de la fachada.

Las sombras del ayer no son oscuras. Son cálidas, como el sol de la tarde filtrado entre hojas viejas.`
  },

  {
    id: 'd5',
    title: 'Amanecer en Éfesis',
    author: 'Sofía Luna',
    genre: 'romance',
    type: 'text',
    isDefault: true,
    cover: 'cv-5',
    isNew: false,
    content:
`En la antigua ciudad de Éfesis, donde el mar se encontraba con los sueños, dos personas descubrieron que el amor no necesita tiempo para comenzar.

Marina llegó al puerto un amanecer de marzo. Sus malaetas olían a sal y a libros viejos. No conocía a nadie en esa ciudad, y eso era exactamente lo que quería.

Él estaba en el muelle, reparando una barca, cuando sus ojos se encontraron. No hubo relámpagos ni música. Solo un reconocimiento silencioso, como si ambos hubieran estado esperando ese momento sin saberlo.

—Me llamo Andrés —dijo él, sin mirarla todavía, como si tuviera miedo de que la ilusión desapareciera.

—Marina —respondió ella.

En los días que siguieron, caminaron juntos por las ruinas antiguas. Cada columna rota les contaba una historia de amor que había sobrevivido siglos.

El amanecer en Éfesis ese año fue más hermoso que todos los anteriores. Como si el mundo entero se hubiera esforzado un poco más.`
  },

  {
    id: 'd6',
    title: 'Código Rojo',
    author: 'Miguel Torres',
    genre: 'misterio',
    type: 'text',
    isDefault: true,
    cover: 'cv-6',
    isNew: false,
    content:
`Cuando el detective Ramírez llegó a la escena del crimen, lo primero que notó fue que no había sangre. En veinte años de carrera, nunca había visto algo así.

—Esto no tiene sentido —murmuró mientras examinaba el cuerpo.

La víctima era un bioquímico de renombre. Sus colegas lo describían como obsesivo pero brillante. Nadie tenía un motivo obvio.

El código rojo, como llamó al archivo clasificado que encontró en el escritorio de la víctima, contenía información que podía cambiar todo. Fórmulas, coordenadas, nombres codificados.

Ramírez pasó tres noches sin dormir descifrando cada elemento. Cada respuesta generaba diez preguntas más.

Cuando finalmente entendió el código, deseó no haberlo hecho. Porque la verdad no estaba oculta por miedo. Estaba oculta por protección.

Algunos secretos existen no para engañar, sino para salvar.`
  },

  {
    id: 'd7',
    title: 'Constelaciones',
    author: 'Isabel Vargas',
    genre: 'poesia',
    type: 'text',
    isDefault: true,
    cover: 'cv-7',
    isNew: false,
    content:
`La lluvia no cae.
Sube desde la tierra
hacia los ojos abiertos
del cielo.

—

El tiempo es un río
que no tiene orillas,
que nos lleva a donde
ya estuvimos
antes de nacer.

—

En la ventana
un pájaro canta
la única canción
que no tiene nombre.

—

Las constelaciones
no son dibujos en el cielo.
Son preguntas
que alguien hizo hace siglos
y que el universo
aún está respondiendo.

—

No buscamos el amor.
El amor nos encuentra
cuando dejamos de huir
de nosotros mismos.

—

La noche no es oscura.
Es un tejido de estrellas
que alguien, hace mucho tiempo,
dejó encendidas
para que no nos perdieríamos
en el camino a casa.`
  },

  {
    id: 'd8',
    title: 'Nave Perdida',
    author: 'Lucía Mendoza',
    genre: 'fantasia',
    type: 'text',
    isDefault: true,
    cover: 'cv-8',
    isNew: false,
    content:
`La nave Estrella Negra desapareció hace cincuenta años en un lugar donde los mapas decían "aquí no hay nada".

Toda la generación de marineros conocía la historia. Se contaba como advertencia: no navegues más allá del cabo de los Vientos.

Jen fue la primera en hacerlo.

A los diecinueve años, con una brújula rota y un mapa dibujado por su abuelo, cruzó la línea que nadie se atrevía a cruzar.

Lo que encontró no fue el vacío. Fue un mundo flotante, suspendido entre nube y agua, donde el tiempo giraba hacia atrás.

La nave Estrella Negra estaba ahí, intacta. Y en su popa, tallado en madera antigua, había un mensaje:

"No estamos perdidos. Estamos esperando a que alguien nos encuentre."

Jen sonrió. Su abuelo había tenido razón durante todo ese tiempo.`
  }
];

/* ============================================================
   STATE
   ============================================================ */
let books            = [];
let currentReading   = null;
let readingProgress  = {};
let settings         = { theme: 'dark', fontSize: '17' };
let activeGenrePill  = 'all';

/* ============================================================
   LOAD / SAVE  (localStorage)
   ============================================================ */
function loadData() {
  try {
    const b = localStorage.getItem('mlibros_books_v2');
    books = b ? JSON.parse(b) : [];
  } catch (e) { books = []; }

  if (books.length === 0) books = [...DEFAULT_BOOKS];

  try { currentReading  = JSON.parse(localStorage.getItem('mlibros_currentReading') || 'null'); } catch (e) { currentReading = null; }
  try { readingProgress = JSON.parse(localStorage.getItem('mlibros_progress')        || '{}');   } catch (e) { readingProgress = {}; }
  try {
    const s = localStorage.getItem('mlibros_settings');
    if (s) settings = { ...settings, ...JSON.parse(s) };
  } catch (e) { /* keep defaults */ }

  applyTheme();
}

function saveBooks()    { localStorage.setItem('mlibros_books_v2',          JSON.stringify(books));            }
function saveProgress() { localStorage.setItem('mlibros_progress',         JSON.stringify(readingProgress));  }
function saveSettings() { localStorage.setItem('mlibros_settings',         JSON.stringify(settings));         }
function saveCurrent()  { localStorage.setItem('mlibros_currentReading',   JSON.stringify(currentReading));   }

/* ============================================================
   THEME
   ============================================================ */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', settings.theme);
}

/* ============================================================
   SIDEBAR
   ============================================================ */
function toggleSidebar() {
  const sb   = document.getElementById('sidebar');
  const bd   = document.getElementById('sbBackdrop');
  const mn   = document.getElementById('main');
  const open = sb.classList.toggle('open');
  bd.classList.toggle('show', open);
  if (window.innerWidth > 600) mn.classList.toggle('pushed', open);
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sbBackdrop').classList.remove('show');
  document.getElementById('main').classList.remove('pushed');
}

/* ============================================================
   RENDER GRID
   ============================================================ */
function renderGrid() {
  const grid = document.getElementById('bookGrid');
  grid.innerHTML = '';

  let list = [...books];

  // search filter
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  if (q) list = list.filter(b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q));

  // genre pill filter
  if (activeGenrePill && activeGenrePill !== 'all') {
    list = list.filter(b => b.genre === activeGenrePill);
  }

  list.forEach((b, i) => grid.appendChild(createBookCard(b, i)));
}

function createBookCard(b, i) {
  const card       = document.createElement('div');
  card.className   = 'book-card';

  const coverClass = b.cover || 'cv-' + ((i % 12) + 1);

  const bookSvg = b.type === 'pdf'
    ? `<svg viewBox="0 0 46 56" fill="none">
         <rect x="2" y="1" width="42" height="54" rx="4" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.5)" stroke-width="1.4"/>
         <text x="23" y="32" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">PDF</text>
       </svg>`
    : `<svg viewBox="0 0 46 56" fill="none">
         <rect x="2"  y="1" width="20" height="54" rx="3" fill="rgba(255,255,255,.22)" stroke="rgba(255,255,255,.5)" stroke-width="1"/>
         <rect x="24" y="1" width="20" height="54" rx="3" fill="rgba(255,255,255,.3)"  stroke="rgba(255,255,255,.5)" stroke-width="1"/>
         <line x1="6"  y1="10" x2="18" y2="10" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>
         <line x1="6"  y1="14" x2="15" y2="14" stroke="#fff" stroke-width="1"   stroke-linecap="round" opacity=".6"/>
         <line x1="28" y1="10" x2="40" y2="10" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>
         <line x1="28" y1="14" x2="37" y2="14" stroke="#fff" stroke-width="1"   stroke-linecap="round" opacity=".6"/>
       </svg>`;

  const newBadge = b.isNew     ? '<span class="bk-badge">NUEVO</span>'  : '';
  const ownBadge = !b.isDefault ? '<span class="bk-badge-own">Mío</span>' : '';

  card.innerHTML = `
    <div class="bk-cover ${coverClass}">
      ${bookSvg}
      ${newBadge}
      ${ownBadge}
    </div>
    <div class="bk-info">
      <p class="bk-title">${escapeHtml(b.title)}</p>
      <p class="bk-author">${escapeHtml(b.author)}</p>
    </div>`;

  card.addEventListener('click', () => openReader(b.id));
  return card;
}

/* ============================================================
   READING BANNER
   ============================================================ */
function renderReadingBanner() {
  const titleEl = document.getElementById('rbTitle');
  const barEl   = document.getElementById('rbProg');
  const subEl   = document.getElementById('rbSub');
  const coverEl = document.getElementById('rbCover');

  if (currentReading) {
    const b = books.find(x => x.id === currentReading);
    if (b) {
      titleEl.textContent = b.title;
      const pct = readingProgress[b.id] || 0;
      barEl.style.width   = pct + '%';
      subEl.textContent   = Math.round(pct) + '% completado';
      const rect = coverEl.querySelector('rect');
      if (rect) rect.setAttribute('fill', getCoverColor(b.cover));
      return;
    }
  }

  titleEl.textContent = 'Sin libro abierto';
  barEl.style.width   = '0%';
  subEl.textContent   = '0% completado';
}

function getCoverColor(cls) {
  const map = {
    'cv-1':'#8b6914','cv-2':'#b8a060','cv-3':'#c9a856','cv-4':'#7a8a6a',
    'cv-5':'#6b7a8a','cv-6':'#9a7a5a','cv-7':'#8a7aaa','cv-8':'#6a8a7a',
    'cv-9':'#7a6a5a','cv-10':'#5a7a8a','cv-11':'#8a6a7a','cv-12':'#6a6a8a'
  };
  return map[cls] || '#3c3c50';
}

/* ============================================================
   READER
   ============================================================ */
function openReader(id) {
  const b = books.find(x => x.id === id);
  if (!b) return;

  currentReading = id;
  saveCurrent();

  document.getElementById('readerTitle').textContent = b.title;

  const txtEl   = document.getElementById('readerTxt');
  const pdfWrap = document.getElementById('readerPdfWrap');
  const bodyEl  = document.getElementById('readerBody');

  if (b.type === 'pdf') {
    txtEl.parentElement.style.display = 'none';
    pdfWrap.style.display = 'flex';
    pdfWrap.innerHTML = `<object type="application/pdf" data="${b.pdfDataUrl}" style="width:100%;height:100%;border:none;"></object>`;
    if (!readingProgress[id]) readingProgress[id] = 10;
    saveProgress();
  } else {
    txtEl.parentElement.style.display = 'block';
    pdfWrap.style.display = 'none';
    txtEl.textContent      = b.content;
    txtEl.style.fontSize   = settings.fontSize + 'px';
    if (!readingProgress[id]) readingProgress[id] = 0;
  }

  showOverlay('modReader');
  renderReadingBanner();

  requestAnimationFrame(() => {
    if (b.type !== 'pdf') {
      bodyEl.scrollTop = 0;
      updateReaderProgress(id, bodyEl);
    }
  });
}

function updateReaderProgress(id, el) {
  const st  = el.scrollTop;
  const sh  = el.scrollHeight;
  const ch  = el.clientHeight;
  let   pct = ch >= sh ? 100 : (st / (sh - ch)) * 100;
  pct = Math.max(1, Math.min(100, pct));

  readingProgress[id] = pct;
  saveProgress();

  document.getElementById('readerProg').style.width       = pct + '%';
  document.getElementById('readerPct').textContent        = Math.round(pct) + ' %';
  renderReadingBanner();
}

/* ============================================================
   UPLOAD MODAL
   ============================================================ */
let selectedPdfDataUrl = null;

function openUploadModal() {
  document.getElementById('inpTitle').value   = '';
  document.getElementById('inpAuthor').value  = '';
  document.getElementById('selGenre').value   = 'ficcion';
  document.getElementById('taContent').value  = '';
  selectedPdfDataUrl = null;
  document.getElementById('pdfChip').style.display = 'none';
  document.getElementById('pdfDrop').style.display = 'flex';
  setMode('text');
  switchTab('new');
  showOverlay('modUpload');
}

function setMode(m) {
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === m));
  document.getElementById('taContent').style.display = m === 'text' ? 'block' : 'none';
  document.getElementById('pdfZone').style.display   = m === 'pdf'  ? 'block' : 'none';
}

function switchTab(name) {
  document.querySelectorAll('.mod-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
  document.getElementById('paneNew').classList.toggle('active',    name === 'new');
  document.getElementById('paneManage').classList.toggle('active', name === 'manage');
  if (name === 'manage') renderManageList();
}

/* ---------- PDF ---------- */
function handlePdfFile(file) {
  if (!file || file.type !== 'application/pdf') return;
  const r = new FileReader();
  r.onload = e => {
    selectedPdfDataUrl = e.target.result;
    document.getElementById('pdfName').textContent     = file.name;
    document.getElementById('pdfChip').style.display   = 'flex';
    document.getElementById('pdfDrop').style.display   = 'none';
  };
  r.readAsDataURL(file);
}

/* ---------- SAVE new writing ---------- */
function saveWriting() {
  const title   = document.getElementById('inpTitle').value.trim();
  const author  = document.getElementById('inpAuthor').value.trim();
  const genre   = document.getElementById('selGenre').value;
  const isText  = document.querySelector('.mode-btn.active').dataset.mode === 'text';
  const content = document.getElementById('taContent').value.trim();

  if (!title)                        { alert('Por favor ingresa un título.');    return; }
  if (!author)                       { alert('Por favor ingresa un autor.');     return; }
  if ( isText  && !content)          { alert('Por favor ingresa contenido.');    return; }
  if (!isText  && !selectedPdfDataUrl) { alert('Por favor sube un PDF.');        return; }

  const book = {
    id:         'u_' + Date.now(),
    title, author, genre,
    type:       isText ? 'text' : 'pdf',
    isDefault:  false,
    isNew:      true,
    cover:      'cv-' + ((books.length % 12) + 1),
    content:    isText ? content : '',
    pdfDataUrl: isText ? null    : selectedPdfDataUrl
  };

  books.unshift(book);
  saveBooks();
  renderGrid();
  renderManageList();
  alert('✅ Escrito guardado exitosamente.');
  closeOverlay('modUpload');
}

/* ============================================================
   MANAGE LIST
   ============================================================ */
function renderManageList() {
  const el        = document.getElementById('manageList');
  const userBooks = books.filter(b => !b.isDefault);

  if (!userBooks.length) {
    el.innerHTML = '<p class="empty-txt">No tienes escritos personales aún.</p>';
    return;
  }

  el.innerHTML = userBooks.map(b => `
    <div class="manage-item">
      <div class="mi-info">
        <p class="mi-title">${escapeHtml(b.title)}</p>
        <p class="mi-meta">${escapeHtml(b.author)} · ${genreLabel(b.genre)} · ${b.type === 'pdf' ? 'PDF' : 'Texto'}</p>
      </div>
      <div class="mi-acts">
        <button class="mi-btn edit-btn" data-id="${b.id}" title="Editar">✏️</button>
        <button class="mi-btn del"      data-id="${b.id}" title="Borrar">🗑️</button>
      </div>
    </div>
  `).join('');

  el.querySelectorAll('.edit-btn').forEach(btn => btn.addEventListener('click', () => openEditModal(btn.dataset.id)));
  el.querySelectorAll('.mi-btn.del').forEach(btn => btn.addEventListener('click', () => deleteBook(btn.dataset.id)));
}

/* ============================================================
   EDIT
   ============================================================ */
function openEditModal(id) {
  const b = books.find(x => x.id === id);
  if (!b) return;

  document.getElementById('editId').value     = id;
  document.getElementById('editTitle').value  = b.title;
  document.getElementById('editAuthor').value = b.author;
  document.getElementById('editGenre').value  = b.genre;
  document.getElementById('editTA').value     = b.content || '';
  document.getElementById('editTA').style.display = b.type === 'pdf' ? 'none' : 'block';
  showOverlay('modEdit');
}

function saveEdit() {
  const id = document.getElementById('editId').value;
  const b  = books.find(x => x.id === id);
  if (!b) return;

  b.title  = document.getElementById('editTitle').value.trim()  || b.title;
  b.author = document.getElementById('editAuthor').value.trim() || b.author;
  b.genre  = document.getElementById('editGenre').value;
  if (b.type === 'text') b.content = document.getElementById('editTA').value;

  saveBooks();
  renderGrid();
  renderManageList();
  closeOverlay('modEdit');
  alert('✅ Escrito editado.');
}

/* ============================================================
   DELETE
   ============================================================ */
function deleteBook(id) {
  if (!confirm('¿Estás seguro de borrar este escrito?')) return;

  books = books.filter(b => b.id !== id);
  if (currentReading === id) { currentReading = null; saveCurrent(); }
  delete readingProgress[id];

  saveBooks();
  saveProgress();
  renderGrid();
  renderManageList();
  renderReadingBanner();
}

/* ============================================================
   GENRE  /  AUTHOR  MODALS
   ============================================================ */
function openGenresModal() {
  const map = {};
  books.forEach(b => { map[b.genre] = (map[b.genre] || 0) + 1; });

  const el = document.getElementById('generosList');
  el.innerHTML = Object.entries(map).map(([g, c]) => `
    <div class="filter-item" data-genre="${g}">
      <span class="fi-name">${genreLabel(g)}</span>
      <span class="fi-cnt">${c}</span>
    </div>
  `).join('');

  el.querySelectorAll('.filter-item').forEach(item => {
    item.addEventListener('click', () => {
      closeOverlay('modGeneros');
      activeGenrePill = item.dataset.genre;
      syncPills();
      renderGrid();
    });
  });

  showOverlay('modGeneros');
}

function openAutoresModal() {
  const map = {};
  books.forEach(b => { map[b.author] = (map[b.author] || 0) + 1; });

  const el = document.getElementById('autoresList');
  el.innerHTML = Object.entries(map).map(([a, c]) => `
    <div class="filter-item" data-author="${a}">
      <span class="fi-name">${escapeHtml(a)}</span>
      <span class="fi-cnt">${c}</span>
    </div>
  `).join('');

  el.querySelectorAll('.filter-item').forEach(item => {
    item.addEventListener('click', () => {
      closeOverlay('modAutores');
      activeGenrePill = 'all';
      syncPills();
      renderGridFiltered(b => b.author === item.dataset.author);
    });
  });

  showOverlay('modAutores');
}

function renderGridFiltered(fn) {
  const grid = document.getElementById('bookGrid');
  grid.innerHTML = '';
  books.filter(fn).forEach((b, i) => grid.appendChild(createBookCard(b, i)));
}

function syncPills() {
  document.querySelectorAll('.pill').forEach(p => {
    p.classList.toggle('active', p.dataset.genre === activeGenrePill);
  });
}

/* ============================================================
   SETTINGS
   ============================================================ */
function openSettings() {
  document.getElementById('selTheme').value = settings.theme;
  document.getElementById('selFont').value  = settings.fontSize;
  showOverlay('modSettings');
}

function doSaveSettings() {
  settings.theme    = document.getElementById('selTheme').value;
  settings.fontSize = document.getElementById('selFont').value;
  saveSettings();
  applyTheme();
  closeOverlay('modSettings');
}

/* ============================================================
   OVERLAY HELPERS
   ============================================================ */
function showOverlay(id)  { document.getElementById(id).classList.add('show');    }
function closeOverlay(id) { document.getElementById(id).classList.remove('show'); }

/* ============================================================
   UTILS
   ============================================================ */
function escapeHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function genreLabel(g) {
  const map = {
    ficcion:'Ficción', 'no-ficcion':'No Ficción', poesia:'Poesía',
    cuento:'Cuento Corto', novela:'Novela', otro:'Otro',
    misterio:'Misterio', historia:'Historia', romance:'Romance',
    fantasia:'Fantasía', terror:'Terror'
  };
  return map[g] || g;
}

/* ============================================================
   BIND ALL EVENTS  –  runs once on DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  loadData();

  /* ── Hamburger ── */
  document.getElementById('btnHamb').addEventListener('click', toggleSidebar);
  document.getElementById('sbBackdrop').addEventListener('click', closeSidebar);

  /* ── Sidebar nav items ── */
  document.querySelectorAll('.sb-item').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sb-item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      closeSidebar();

      switch (btn.dataset.page) {
        case 'inicio':
          activeGenrePill = 'all';
          syncPills();
          renderGrid();
          break;
        case 'generos':
          openGenresModal();
          break;
        case 'autores':
          openAutoresModal();
          break;
        case 'misescritos':
          openUploadModal();
          switchTab('manage');
          break;
      }
    });
  });

  /* ── Upload buttons ── */
  document.getElementById('btnUploadSb').addEventListener('click', () => { closeSidebar(); openUploadModal(); });
  document.getElementById('btnUploadTop').addEventListener('click', openUploadModal);

  /* ── Search ── */
  document.getElementById('searchInput').addEventListener('input', () => renderGrid());

  /* ── Settings ── */
  document.getElementById('btnSettings').addEventListener('click', openSettings);
  document.getElementById('closeSettings').addEventListener('click', () => closeOverlay('modSettings'));
  document.getElementById('btnSaveSett').addEventListener('click', doSaveSettings);

  /* ── Upload modal internals ── */
  document.getElementById('closeUpload').addEventListener('click', () => closeOverlay('modUpload'));
  document.querySelectorAll('.mode-btn').forEach(btn => btn.addEventListener('click', () => setMode(btn.dataset.mode)));
  document.querySelectorAll('.mod-tab').forEach(btn  => btn.addEventListener('click', () => switchTab(btn.dataset.tab)));

  /* PDF drag-drop */
  const pdfDrop  = document.getElementById('pdfDrop');
  const pdfInput = document.getElementById('inpPdf');

  pdfDrop.addEventListener('click',    ()  => pdfInput.click());
  pdfInput.addEventListener('change',  e   => handlePdfFile(e.target.files[0]));
  pdfDrop.addEventListener('dragover', e   => { e.preventDefault(); pdfDrop.classList.add('over'); });
  pdfDrop.addEventListener('dragleave', () => pdfDrop.classList.remove('over'));
  pdfDrop.addEventListener('drop',     e   => { e.preventDefault(); pdfDrop.classList.remove('over'); handlePdfFile(e.dataTransfer.files[0]); });

  document.getElementById('pdfRm').addEventListener('click', () => {
    selectedPdfDataUrl = null;
    pdfInput.value     = '';
    document.getElementById('pdfChip').style.display = 'none';
    document.getElementById('pdfDrop').style.display = 'flex';
  });

  document.getElementById('btnSave').addEventListener('click', saveWriting);

  /* ── Edit modal ── */
  document.getElementById('closeEdit').addEventListener('click', () => closeOverlay('modEdit'));
  document.getElementById('btnSaveEdit').addEventListener('click', saveEdit);

  /* ── Reader ── */
  document.getElementById('closeReader').addEventListener('click', () => { closeOverlay('modReader'); renderReadingBanner(); });
  document.getElementById('readerBody').addEventListener('scroll', function () {
    if (currentReading) {
      const b = books.find(x => x.id === currentReading);
      if (b && b.type !== 'pdf') updateReaderProgress(currentReading, this);
    }
  });

  /* ── Genre / Author close ── */
  document.getElementById('closeGeneros').addEventListener('click', () => closeOverlay('modGeneros'));
  document.getElementById('closeAutores').addEventListener('click', () => closeOverlay('modAutores'));

  /* ── Reading banner click ── */
  document.getElementById('readingBanner').addEventListener('click', () => {
    if (currentReading) openReader(currentReading);
  });

  /* ── Genre pills ── */
  document.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', () => {
      activeGenrePill = pill.dataset.genre;
      syncPills();
      renderGrid();
    });
  });

  /* ── Explore strip ── */
  document.getElementById('btnExplore').addEventListener('click', openUploadModal);

  /* ── Backdrop click closes any overlay ── */
  document.querySelectorAll('.overlay').forEach(ov => {
    ov.addEventListener('click', e => { if (e.target === ov) ov.classList.remove('show'); });
  });

  /* ── PWA Install prompt ── */
  let installPromptEvent = null;
  
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    installPromptEvent = e;
    console.log('beforeinstallprompt fired');
    
    // Show notification if not dismissed
    if (sessionStorage.getItem('pwa_dismissed') !== 'true') {
      document.getElementById('installNotification').style.display = 'flex';
    }
  });
  
  // Install button click
  document.getElementById('btnInstallPWA').addEventListener('click', async () => {
    if (!installPromptEvent) {
      alert('La instalación no está disponible en este momento.');
      return;
    }
    
    installPromptEvent.prompt();
    const { outcome } = await installPromptEvent.userChoice;
    
    console.log(`User response: ${outcome}`);
    installPromptEvent = null;
    document.getElementById('installNotification').style.display = 'none';
  });
  
  // Dismiss button click
  document.getElementById('installDismiss').addEventListener('click', () => {
    document.getElementById('installNotification').style.display = 'none';
    sessionStorage.setItem('pwa_dismissed', 'true');
  });
  
  // Also hide notification when app is installed
  window.addEventListener('appinstalled', () => {
    console.log('PWA installed successfully');
    document.getElementById('installNotification').style.display = 'none';
  });
  
  // Force show notification after 3 seconds for testing (remove in production)
  setTimeout(() => {
    if (sessionStorage.getItem('pwa_dismissed') !== 'true' && !window.matchMedia('(display-mode: standalone)').matches) {
      // Show notification even if beforeinstallprompt hasn't fired yet
      document.getElementById('installNotification').style.display = 'flex';
    }
  }, 3000);

  /* ── INITIAL RENDER ── */
  renderGrid();
  renderReadingBanner();
});
