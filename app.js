/* ---------- SERVICE WORKER ---------- */
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js').catch(()=>{});
}

/* ---------- DEFAULT BOOKS ---------- */
const DEFAULT_BOOKS = [
  {
    id:'d1',title:'El último suspiro',author:'Isabel Vargas',
    genre:'ficcion',type:'text',isDefault:true,cover:'cv-1',isNew:true,
    content:`La noche en que todo cambió comenzó como cualquier otra. María estaba leyendo en su departamento cuando el teléfono sonó por tercera vez consecutiva.\n\n—Es él —susurró la voz al otro lado de la línea—. Ha vuelto.\n\nMaría dejó caer el libro. Sus manos temblaban. Hacía tres años que no escuchaba ese nombre. Tres años desde que creyó que todo había terminado para siempre.\n\nSalió a la calle. El aire de la madrugada le mordió la cara. Las farolas parpadeaban como si ellas también estuvieran nerviosas.\n\nEn la esquina, bajo la luz más débil, había una sombra que no debería estar ahí.\n\nMaría respiró hondo. Sus pies la llevaron hacia adelante, hacia la oscuridad, hacia la verdad que había estado huyendo durante tanto tiempo.\n\nEl último suspiro de esa noche no fue el de ella. Fue el del miedo.`
  },
  {
    id:'d2',title:'Sombras del Ayer',author:'Carlos Reyes',
    genre:'ficcion',type:'text',isDefault:true,cover:'cv-2',isNew:true,
    content:`La lluvia comenzó justo cuando ella cruzó el puente. No era una lluvia ordinaria, sino una de esas lluvias que parece venir desde la memoria misma.\n\nClara se detuvo en el borde del camino. Sus ojos recorrieron el paisaje que conocía desde los siete años, cuando su madre la trajo por primera vez a este lugar.\n\n—Este río guarda los secretos de la familia —le había dicho entonces su madre, con esa voz grave que siempre usaba cuando hablaba del pasado.\n\nAhora, tantos años después, Clara entendió lo que significaba. El río no guardaba secretos. Ella lo llevaba todo dentro.\n\nLa casa del abuelo todavía estaba en pie, aunque la naturaleza había comenzado a recuperar su territorio. Las enredaderas cubrían casi la mitad de la fachada.\n\nLas sombras del ayer no son oscuras. Son cálidas, como el sol de la tarde filtrado entre hojas viejas.`
  },
  {
    id:'d3',title:'Tiempo Fracturado',author:'Lucía Mendoza',
    genre:'no-ficcion',type:'text',isDefault:true,cover:'cv-3',isNew:false,
    content:`El tiempo no fluye como una corriente de agua. En realidad, según los últimos estudios en física cuántica, el tiempo puede existir en múltiples estados simultáneamente.\n\nElena descubrió esto por accidente en su laboratorio un martes de octubre. Estaba calibrando un instrumento cuando los resultados aparecieron en la pantalla: dos versiones del mismo experimento, ejecutándose en momentos diferentes, coexistiendo.\n\n—Es imposible —dijo en voz alta, aunque nadie la escuchaba.\n\nPero los datos no mentían. Durante las siguientes semanas, reproducción tras reproducción confirmó lo mismo: el tiempo se puede fraccionar.\n\nLa implicación más aterradora no fue la científica. Foi que si el tiempo puede romperse, ¿qué pasa con los recuerdos? ¿Con las personas que dejamos atrás en otro fragmento del presente?\n\nElena comenzó a buscar respuestas en un lugar inesperado: sus propios recuerdos de infancia, donde tiempo y memoria siempre se habían mezclado de formas que los adultos no podían explicar.`
  },
  {
    id:'d4',title:'Crónicas del Imperio',author:'Pedro Castillo',
    genre:'historia',type:'text',isDefault:true,cover:'cv-4',isNew:false,
    content:`El Imperio Romano no cayó en un solo día. Cayó en siglos de decisiones, cada una más fatídica que la anterior.\n\nAlejandro, historiador de los últimos días del empire, había pasado tres décadas estudiando los documentos del periodo de transición. Sus conclusiones fueron controvertidas desde el principio.\n\n—No fue una caída —argumentó en su famoso discurso—. Fue una transformación. El Imperio no desapareció. Se convirtió en algo diferente.\n\nLos pergamintos que encontró en una cueva de Córcega confirmaban su teoría. En ellos, un senador romano describía con detalle cómo las comunidades del norte no venían a destruir, sino a negociar.\n\nLa historia que conocemos es la historia de los ganadores. Pero la historia verdadera está escrita en los pergamintos que nadie quería leer.\n\nAlejandro siguió leyendo hasta el amanecer, cada página iluminando un pasado que el mundo había preferido olvidar.`
  },
  {
    id:'d5',title:'Amanecer en Éfesis',author:'Sofía Luna',
    genre:'romance',type:'text',isDefault:true,cover:'cv-5',isNew:true,
    content:`En la antigua ciudad de Éfesis, donde el mar se encontraba con los sueños, dos personas descubrieron que el amor no necesita tiempo para comenzar.\n\nMarina llegó al puerto un amanecer de marzo. Sus malaetas olían a sal y a libros viejos. No conocía a nadie en esa ciudad, y eso era exactamente lo que quería.\n\nÉl estaba en el muelle, reparando una barca, cuando sus ojos se encontraron. No hubo relámpagos ni música. Solo un reconocimiento silencioso, como si ambos hubieran estado esperando ese momento sin saberlo.\n\n—Me llamo Andrés —dijo él, sin mirarla todavía, como si tuviera miedo de que la ilusión desapareciera.\n\n—Marina —respondió ella.\n\nEn los días que siguieron, caminaron juntos por las ruinas antiguas. Cada columna rota les contaba una historia de amor que había sobrevivido siglos.\n\nEl amanecer en Éfesis ese año fue más hermoso que todos los anteriores. Como si el mundo entero se hubiera esforzado un poco más.`
  },
  {
    id:'d6',title:'Código Rojo',author:'Miguel Torres',
    genre:'misterio',type:'text',isDefault:true,cover:'cv-6',isNew:false,
    content:`Cuando el detective Ramírez llegó a la escena del crimen, lo primero que notó fue que no había sangre. En veinte años de carrera, nunca había visto algo así.\n\n—Esto no tiene sentido —murmuró mientras examinaba el cuerpo.\n\nLa víctima era un bioquímico de renombre. Sus colegas lo describían como obsesivo pero brillante. Nadie tenía un motivo obvio.\n\nEl código rojo, como llamó al archivo clasificado que encontró en el escritorio de la víctima, contenía información que podía cambiar todo. Fórmulas, coordenadas, nombres codificados.\n\nRamírez pasó tres noches sin dormir descifrando cada elemento. Cada respuesta generaba diez preguntas más.\n\nCuando finalmente entendió el código, deseó no haberlo hecho. Porque la verdad no estaba oculta por miedo. Estaba oculta por protección.\n\nAlgunos secretos existen no para engañar, sino para salvar.`
  },
  {
    id:'d7',title:'Constelaciones',author:'Isabel Vargas',
    genre:'poesia',type:'text',isDefault:true,cover:'cv-7',isNew:true,
    content:`La lluvia no cae.\nSube desde la tierra\nhacia los ojos abiertos\ndel cielo.\n\n—\n\nEl tiempo es un río\nque no tiene orillas,\nque nos lleva a donde\nya estuvimos\nantes de nacer.\n\n—\n\nEn la ventana\nun pájaro canta\nla única canción\nque no tiene nombre.\n\n—\n\nLas constelaciones\nno son dibujos en el cielo.\nSon preguntas\nque alguien hizo hace siglos\ny que el universo\naún está respondiendo.\n\n—\n\nNo buscamos el amor.\nEl amor nos encuentra\ncuando dejamos de huir\nde nosotros mismos.\n\n—\n\nLa noche no es oscura.\nEs un tejido de estrellas\nque alguien, hace mucho tiempo,\ndejó encendidas\npara que no nos perdieríamos\nen el camino a casa.`
  },
  {
    id:'d8',title:'Nave Perdida',author:'Lucía Mendoza',
    genre:'fantasia',type:'text',isDefault:true,cover:'cv-8',isNew:false,
    content:`La nave Estrella Negra desapareció hace cincuenta años en un lugar donde los mapas decían "aquí no hay nada".\n\nToda la generación de marineros conocía la historia. Se contaba como advertencia: no navegues más allá del cabo de los Vientos.\n\nJen fue la primera en hacerlo.\n\nA los diecinueve años, con una brújula rota y un mapa dibujado por su abuelo, cruzó la línea que nadie se atrevía a cruzar.\n\nLo que encontró no fue el vacío. Fue un mundo flotante, suspendido entre nube y agua, donde el tiempo giraba hacia atrás.\n\nLa nave Estrella Negra estaba ahí, intacta. Y en su popa, tallado en madera antigua, había un mensaje:\n\n"No estamos perdidos. Estamos esperando a que alguien nos encuentre."\n\nJen sonrió. Su abuelo había tenido razón durante todo ese tiempo.`
  },
  {
    id:'d9',title:'El Príncipe Pequeño',author:'Antoine de Saint-Exupéry',
    genre:'ficcion',type:'text',isDefault:true,cover:'cv-1',isNew:false,
    content:`Había una vez un pequeño príncipe que vivía en un planeta muy pequeño. Su planeta era tan pequeño que apenas tenía espacio para una rosa y tres volcanes.\n\nEl príncipe cuidaba sus volcanes con mucho esmero. Los limpiaba todos los días, para que no se obstruyeran con cenizas.\n\nUn día, decidió viajar por el universo para conocer otros planetas y sus habitantes. En cada planeta encontró personas muy diferentes.\n\nEn el primer planeta encontró a un rey que mandaba a todos sin excepción. "No me gusta desobedecer a nadie", dijo el rey con orgullo.\n\nPero lo más importante que aprendió fue esto: las cosas importantes se ven con el corazón. Lo esencial es invisible para los ojos.\n\nCuando regresó, el pequeño príncipe abrazó su rosa y le dijo: "Eres la más hermosa rosa del universo, no porque seas la más grande, sino porque eres la mía."`
  }
];

/* ---------- STATE ---------- */
let books = [];
let currentReading = null;
let readingProgress = {};
let settings = { theme:'dark', fontSize:'17' };
let deferredInstall = null;
let activeGenrePill = 'all'; // track active pill filter

/* ---------- LOAD / SAVE ---------- */
function loadData(){
  try{
    const b = localStorage.getItem('mlibros_books');
    books = b ? JSON.parse(b) : [];
  } catch(e){ books=[]; }
  if(books.length===0) books = [...DEFAULT_BOOKS];

  try{ currentReading = JSON.parse(localStorage.getItem('mlibros_currentReading')||'null'); } catch(e){ currentReading=null; }
  try{ readingProgress = JSON.parse(localStorage.getItem('mlibros_progress')||'{}'); } catch(e){ readingProgress={}; }
  try{
    const s = localStorage.getItem('mlibros_settings');
    if(s) settings = {...settings,...JSON.parse(s)};
  } catch(e){}
  applyTheme();
}
function saveBooks(){ localStorage.setItem('mlibros_books',JSON.stringify(books)); }
function saveProgress(){ localStorage.setItem('mlibros_progress',JSON.stringify(readingProgress)); }
function saveSettings(){ localStorage.setItem('mlibros_settings',JSON.stringify(settings)); }
function saveCurrent(){ localStorage.setItem('mlibros_currentReading',JSON.stringify(currentReading)); }

/* ---------- THEME ---------- */
function applyTheme(){ document.documentElement.setAttribute('data-theme',settings.theme); }

/* ---------- SIDEBAR TOGGLE ---------- */
function toggleSidebar(){
  const sb = document.getElementById('sidebar');
  const bd = document.getElementById('sbBackdrop');
  const mn = document.getElementById('main');
  const open = sb.classList.toggle('open');
  bd.classList.toggle('show', open);
  // Push main on wide screens
  if(window.innerWidth > 600) mn.classList.toggle('pushed', open);
}
function closeSidebar(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sbBackdrop').classList.remove('show');
  document.getElementById('main').classList.remove('pushed');
}

/* ---------- RENDER GRID ---------- */
function renderGrid(){
  const grid = document.getElementById('bookGrid');
  grid.innerHTML = '';
  let list = [...books];

  // search filter
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  if(q) list = list.filter(b=> b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q));

  // pill genre filter
  if(activeGenrePill && activeGenrePill !== 'all'){
    list = list.filter(b=> b.genre === activeGenrePill);
  }

  list.forEach((b,i)=>{
    grid.appendChild(createBookCard(b,i));
  });
}

function createBookCard(b, i){
  const card = document.createElement('div');
  card.className = 'book-card';
  card.style.animationDelay = (i*0.04)+'s';

  const coverClass = b.cover || 'cv-'+((i%8)+1);
  const bookSvg = b.type==='pdf'
    ? `<svg viewBox="0 0 46 56" fill="none"><rect x="2" y="1" width="42" height="54" rx="4" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.5)" stroke-width="1.4"/><text x="23" y="32" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">PDF</text></svg>`
    : `<svg viewBox="0 0 46 56" fill="none"><rect x="2" y="1" width="20" height="54" rx="3" fill="rgba(255,255,255,.22)" stroke="rgba(255,255,255,.5)" stroke-width="1"/><rect x="24" y="1" width="20" height="54" rx="3" fill="rgba(255,255,255,.3)" stroke="rgba(255,255,255,.5)" stroke-width="1"/><line x1="6" y1="10" x2="18" y2="10" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><line x1="6" y1="14" x2="15" y2="14" stroke="#fff" stroke-width="1" stroke-linecap="round" opacity=".6"/><line x1="28" y1="10" x2="40" y2="10" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><line x1="28" y1="14" x2="37" y2="14" stroke="#fff" stroke-width="1" stroke-linecap="round" opacity=".6"/></svg>`;

  const newBadge = b.isNew ? '<span class="bk-badge">NUEVO</span>' : '';
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

  card.addEventListener('click', ()=> openReader(b.id));
  return card;
}

/* ---------- READING BANNER ---------- */
function renderReadingBanner(){
  const titleEl = document.getElementById('rbTitle');
  const barEl   = document.getElementById('rbProg');
  const subEl   = document.getElementById('rbSub');
  const coverEl = document.getElementById('rbCover');

  if(currentReading){
    const b = books.find(x=> x.id===currentReading);
    if(b){
      titleEl.textContent = b.title;
      const pct = readingProgress[b.id] || 0;
      barEl.style.width = pct+'%';
      subEl.textContent = Math.round(pct)+'% completado';
      // Update cover color in SVG
      const rect = coverEl.querySelector('rect');
      if(rect) rect.setAttribute('fill', getCoverColor(b.cover));
      return;
    }
  }
  titleEl.textContent = 'Sin libro abierto';
  barEl.style.width = '0%';
  subEl.textContent = '0% completado';
}

function getCoverColor(cls){
  const m={'cv-1':'#8b6914','cv-2':'#b8a060','cv-3':'#c9a856','cv-4':'#7a8a6a','cv-5':'#6b7a8a','cv-6':'#9a7a5a','cv-7':'#8a7aaa','cv-8':'#6a8a7a'};
  return m[cls]||'#3c3c50';
}

/* ---------- READER ---------- */
function openReader(id){
  const b = books.find(x=> x.id===id);
  if(!b) return;

  currentReading = id;
  saveCurrent();

  document.getElementById('readerTitle').textContent = b.title;
  const txtEl   = document.getElementById('readerTxt');
  const pdfWrap = document.getElementById('readerPdfWrap');
  const bodyEl  = document.getElementById('readerBody');

  if(b.type==='pdf'){
    txtEl.parentElement.style.display = 'none';
    pdfWrap.style.display = 'flex';
    pdfWrap.innerHTML = `<object type="application/pdf" data="${b.pdfDataUrl}" style="width:100%;height:100%;border:none;"></object>`;
    if(!readingProgress[id]) readingProgress[id] = 10;
    saveProgress();
  } else {
    txtEl.parentElement.style.display = 'block';
    pdfWrap.style.display = 'none';
    txtEl.textContent = b.content;
    txtEl.style.fontSize = settings.fontSize+'px';
    if(!readingProgress[id]) readingProgress[id] = 0;
  }

  showOverlay('modReader');
  renderReadingBanner();

  requestAnimationFrame(()=>{
    if(b.type!=='pdf'){
      bodyEl.scrollTop = 0;
      updateReaderProgress(id, bodyEl);
    }
  });
}

function updateReaderProgress(id, el){
  const st=el.scrollTop, sh=el.scrollHeight, ch=el.clientHeight;
  let pct = ch>=sh ? 100 : (st/(sh-ch))*100;
  pct = Math.max(1, Math.min(100, pct));
  readingProgress[id] = pct;
  saveProgress();
  document.getElementById('readerProg').style.width = pct+'%';
  document.getElementById('readerPct').textContent = Math.round(pct)+' %';
  renderReadingBanner();
}

/* ---------- UPLOAD MODAL ---------- */
let selectedPdfDataUrl = null;

function openUploadModal(){
  document.getElementById('inpTitle').value='';
  document.getElementById('inpAuthor').value='';
  document.getElementById('selGenre').value='ficcion';
  document.getElementById('taContent').value='';
  selectedPdfDataUrl = null;
  document.getElementById('pdfChip').style.display='none';
  document.getElementById('pdfDrop').style.display='flex';
  setMode('text');
  switchTab('new');
  showOverlay('modUpload');
}

function setMode(m){
  document.querySelectorAll('.mode-btn').forEach(b=> b.classList.toggle('active', b.dataset.mode===m));
  document.getElementById('taContent').style.display = m==='text'?'block':'none';
  document.getElementById('pdfZone').style.display   = m==='pdf' ?'block':'none';
}

function switchTab(name){
  document.querySelectorAll('.mod-tab').forEach(t=> t.classList.toggle('active', t.dataset.tab===name));
  document.getElementById('paneNew').classList.toggle('active', name==='new');
  document.getElementById('paneManage').classList.toggle('active', name==='manage');
  if(name==='manage') renderManageList();
}

/* ---------- PDF ---------- */
function handlePdfFile(file){
  if(!file||file.type!=='application/pdf') return;
  const r = new FileReader();
  r.onload = e=>{
    selectedPdfDataUrl = e.target.result;
    document.getElementById('pdfName').textContent = file.name;
    document.getElementById('pdfChip').style.display='flex';
    document.getElementById('pdfDrop').style.display='none';
  };
  r.readAsDataURL(file);
}

/* ---------- SAVE ---------- */
function saveWriting(){
  const title  = document.getElementById('inpTitle').value.trim();
  const author = document.getElementById('inpAuthor').value.trim();
  const genre  = document.getElementById('selGenre').value;
  const isText = document.querySelector('.mode-btn.active').dataset.mode==='text';
  const content= document.getElementById('taContent').value.trim();

  if(!title){ alert('Por favor ingresa un título.'); return; }
  if(!author){ alert('Por favor ingresa un autor.'); return; }
  if(isText&&!content){ alert('Por favor ingresa contenido.'); return; }
  if(!isText&&!selectedPdfDataUrl){ alert('Por favor sube un PDF.'); return; }

  const book = {
    id:'u_'+Date.now(), title, author, genre,
    type: isText?'text':'pdf',
    isDefault:false, isNew:true,
    cover:'cv-'+((books.length%8)+1),
    content: isText?content:'',
    pdfDataUrl: isText?null:selectedPdfDataUrl
  };
  books.unshift(book);
  saveBooks();
  renderGrid();
  renderManageList();
  alert('✅ Escrito guardado exitosamente.');
  closeOverlay('modUpload');
}

/* ---------- MANAGE ---------- */
function renderManageList(){
  const el = document.getElementById('manageList');
  const userBooks = books.filter(b=> !b.isDefault);
  if(!userBooks.length){
    el.innerHTML='<p class="empty-txt">No tienes escritos personales aún.</p>';
    return;
  }
  el.innerHTML = userBooks.map(b=>`
    <div class="manage-item">
      <div class="mi-info">
        <p class="mi-title">${escapeHtml(b.title)}</p>
        <p class="mi-meta">${escapeHtml(b.author)} · ${genreLabel(b.genre)} · ${b.type==='pdf'?'PDF':'Texto'}</p>
      </div>
      <div class="mi-acts">
        <button class="mi-btn edit-btn" data-id="${b.id}" title="Editar">✏️</button>
        <button class="mi-btn del" data-id="${b.id}" title="Borrar">🗑️</button>
      </div>
    </div>
  `).join('');

  el.querySelectorAll('.edit-btn').forEach(btn=> btn.addEventListener('click',()=> openEditModal(btn.dataset.id)));
  el.querySelectorAll('.mi-btn.del').forEach(btn=> btn.addEventListener('click',()=> deleteBook(btn.dataset.id)));
}

/* ---------- EDIT ---------- */
function openEditModal(id){
  const b = books.find(x=> x.id===id);
  if(!b) return;
  document.getElementById('editId').value    = id;
  document.getElementById('editTitle').value = b.title;
  document.getElementById('editAuthor').value= b.author;
  document.getElementById('editGenre').value = b.genre;
  document.getElementById('editTA').value    = b.content||'';
  document.getElementById('editTA').style.display = b.type==='pdf'?'none':'block';
  showOverlay('modEdit');
}
function saveEdit(){
  const id = document.getElementById('editId').value;
  const b  = books.find(x=> x.id===id);
  if(!b) return;
  b.title  = document.getElementById('editTitle').value.trim()||b.title;
  b.author = document.getElementById('editAuthor').value.trim()||b.author;
  b.genre  = document.getElementById('editGenre').value;
  if(b.type==='text') b.content = document.getElementById('editTA').value;
  saveBooks(); renderGrid(); renderManageList();
  closeOverlay('modEdit');
  alert('✅ Escrito editado.');
}

/* ---------- DELETE ---------- */
function deleteBook(id){
  if(!confirm('¿Estás seguro de borrar este escrito?')) return;
  books = books.filter(b=> b.id!==id);
  if(currentReading===id){ currentReading=null; saveCurrent(); }
  delete readingProgress[id];
  saveBooks(); saveProgress();
  renderGrid(); renderManageList(); renderReadingBanner();
}

/* ---------- GENRE / AUTHOR MODALS ---------- */
function openGenresModal(){
  const map={};
  books.forEach(b=>{ map[b.genre]=(map[b.genre]||0)+1; });
  const el = document.getElementById('generosList');
  el.innerHTML = Object.entries(map).map(([g,c])=>`
    <div class="filter-item" data-genre="${g}">
      <span class="fi-name">${genreLabel(g)}</span>
      <span class="fi-cnt">${c}</span>
    </div>
  `).join('');
  el.querySelectorAll('.filter-item').forEach(item=>{
    item.addEventListener('click',()=>{
      closeOverlay('modGeneros');
      activeGenrePill = item.dataset.genre;
      syncPills();
      renderGrid();
    });
  });
  showOverlay('modGeneros');
}

function openAutoresModal(){
  const map={};
  books.forEach(b=>{ map[b.author]=(map[b.author]||0)+1; });
  const el = document.getElementById('autoresList');
  el.innerHTML = Object.entries(map).map(([a,c])=>`
    <div class="filter-item" data-author="${a}">
      <span class="fi-name">${escapeHtml(a)}</span>
      <span class="fi-cnt">${c}</span>
    </div>
  `).join('');
  el.querySelectorAll('.filter-item').forEach(item=>{
    item.addEventListener('click',()=>{
      closeOverlay('modAutores');
      // filter grid by author
      const author = item.dataset.author;
      activeGenrePill = 'all';
      syncPills();
      renderGridFiltered(b=> b.author===author);
    });
  });
  showOverlay('modAutores');
}

function renderGridFiltered(fn){
  const grid = document.getElementById('bookGrid');
  grid.innerHTML='';
  books.filter(fn).forEach((b,i)=> grid.appendChild(createBookCard(b,i)));
}

function syncPills(){
  document.querySelectorAll('.pill').forEach(p=>{
    p.classList.toggle('active', p.dataset.genre===activeGenrePill);
  });
}

/* ---------- SETTINGS ---------- */
function openSettings(){
  document.getElementById('selTheme').value = settings.theme;
  document.getElementById('selFont').value  = settings.fontSize;
  showOverlay('modSettings');
}
function doSaveSettings(){
  settings.theme    = document.getElementById('selTheme').value;
  settings.fontSize = document.getElementById('selFont').value;
  saveSettings(); applyTheme();
  closeOverlay('modSettings');
}

/* ---------- OVERLAY HELPERS ---------- */
function showOverlay(id){ document.getElementById(id).classList.add('show'); }
function closeOverlay(id){ document.getElementById(id).classList.remove('show'); }

/* ---------- UTILS ---------- */
function escapeHtml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function genreLabel(g){
  const m={ficcion:'Ficción','no-ficcion':'No Ficción',poesia:'Poesía',cuento:'Cuento Corto',novela:'Novela',otro:'Otro',misterio:'Misterio',historia:'Historia',romance:'Romance',fantasia:'Fantasía'};
  return m[g]||g;
}

/* ---------- BIND ALL EVENTS ---------- */
document.addEventListener('DOMContentLoaded', ()=>{
  loadData();

  // ── Hamburger ──
  document.getElementById('btnHamb').addEventListener('click', toggleSidebar);
  document.getElementById('sbBackdrop').addEventListener('click', closeSidebar);

  // ── Sidebar nav ──
  document.querySelectorAll('.sb-item').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.sb-item').forEach(b=> b.classList.remove('active'));
      btn.classList.add('active');
      const page = btn.dataset.page;
      closeSidebar();
      if(page==='inicio'){
        activeGenrePill='all'; syncPills(); renderGrid();
      } else if(page==='generos'){
        openGenresModal();
      } else if(page==='autores'){
        openAutoresModal();
      } else if(page==='misescritos'){
        openUploadModal(); switchTab('manage');
      }
    });
  });

  // ── Upload buttons (sidebar + top) ──
  document.getElementById('btnUploadSb').addEventListener('click', ()=>{ closeSidebar(); openUploadModal(); });
  document.getElementById('btnUploadTop').addEventListener('click', openUploadModal);

  // ── Search ──
  document.getElementById('searchInput').addEventListener('input', ()=> renderGrid());

  // ── Settings ──
  document.getElementById('btnSettings').addEventListener('click', openSettings);
  document.getElementById('closeSettings').addEventListener('click', ()=> closeOverlay('modSettings'));
  document.getElementById('btnSaveSett').addEventListener('click', doSaveSettings);

  // ── Upload modal ──
  document.getElementById('closeUpload').addEventListener('click', ()=> closeOverlay('modUpload'));
  document.querySelectorAll('.mode-btn').forEach(btn=> btn.addEventListener('click', ()=> setMode(btn.dataset.mode)));
  document.querySelectorAll('.mod-tab').forEach(btn=> btn.addEventListener('click', ()=> switchTab(btn.dataset.tab)));

  // PDF
  const pdfDrop  = document.getElementById('pdfDrop');
  const pdfInput = document.getElementById('inpPdf');
  pdfDrop.addEventListener('click', ()=> pdfInput.click());
  pdfInput.addEventListener('change', e=> handlePdfFile(e.target.files[0]));
  pdfDrop.addEventListener('dragover', e=>{ e.preventDefault(); pdfDrop.classList.add('over'); });
  pdfDrop.addEventListener('dragleave', ()=> pdfDrop.classList.remove('over'));
  pdfDrop.addEventListener('drop', e=>{ e.preventDefault(); pdfDrop.classList.remove('over'); handlePdfFile(e.dataTransfer.files[0]); });
  document.getElementById('pdfRm').addEventListener('click', ()=>{
    selectedPdfDataUrl=null; pdfInput.value='';
    document.getElementById('pdfChip').style.display='none';
    document.getElementById('pdfDrop').style.display='flex';
  });
  document.getElementById('btnSave').addEventListener('click', saveWriting);

  // ── Edit modal ──
  document.getElementById('closeEdit').addEventListener('click', ()=> closeOverlay('modEdit'));
  document.getElementById('btnSaveEdit').addEventListener('click', saveEdit);

  // ── Reader ──
  document.getElementById('closeReader').addEventListener('click', ()=>{ closeOverlay('modReader'); renderReadingBanner(); });
  document.getElementById('readerBody').addEventListener('scroll', function(){
    if(currentReading){
      const b = books.find(x=> x.id===currentReading);
      if(b && b.type!=='pdf') updateReaderProgress(currentReading, this);
    }
  });

  // ── Genre / Author close ──
  document.getElementById('closeGeneros').addEventListener('click', ()=> closeOverlay('modGeneros'));
  document.getElementById('closeAutores').addEventListener('click', ()=> closeOverlay('modAutores'));

  // ── Reading banner click ──
  document.getElementById('readingBanner').addEventListener('click', ()=>{
    if(currentReading) openReader(currentReading);
  });

  // ── Genre pills ──
  document.querySelectorAll('.pill').forEach(pill=>{
    pill.addEventListener('click', ()=>{
      activeGenrePill = pill.dataset.genre;
      syncPills();
      renderGrid();
    });
  });

  // ── Explore strip ──
  document.getElementById('btnExplore').addEventListener('click', openUploadModal);

  // ── Backdrop close on all overlays ──
  document.querySelectorAll('.overlay').forEach(ov=>{
    ov.addEventListener('click', e=>{ if(e.target===ov) ov.classList.remove('show'); });
  });

  // ── PWA Install ──
  window.addEventListener('beforeinstallprompt', e=>{
    e.preventDefault(); deferredInstall=e;
    document.getElementById('installBar').style.display='flex';
  });
  document.getElementById('btnInstall').addEventListener('click', ()=>{
    if(deferredInstall){ deferredInstall.prompt(); deferredInstall=null; }
    document.getElementById('installBar').style.display='none';
  });
  document.getElementById('instDismiss').addEventListener('click', ()=>{
    document.getElementById('installBar').style.display='none';
  });

  // ── INITIAL RENDER ──
  renderGrid();
  renderReadingBanner();
});


/* ===== CHATBOT LOGIC ===== */
function toggleChat(){
  const chat = document.getElementById('chatContainer');
  chat.style.display = chat.style.display === 'flex' ? 'none' : 'flex';
}

function sendMessage(){
  const input = document.getElementById('userInput');
  const msg = input.value.trim();
  if(!msg) return;

  const chat = document.getElementById('chatMessages');
  chat.innerHTML += `<div><strong>Tú:</strong> ${msg}</div>`;
  input.value = "";

  const reply = generateRecommendation(msg);
  chat.innerHTML += `<div><strong>Bot:</strong> ${reply}</div>`;
  chat.scrollTop = chat.scrollHeight;
}

function generateRecommendation(message){
  message = message.toLowerCase();

  let genreMatch = DEFAULT_BOOKS.find(book => 
    message.includes(book.genre) ||
    message.includes(book.title.toLowerCase()) ||
    message.includes(book.author.toLowerCase())
  );

  if(genreMatch){
    return `Te recomiendo "${genreMatch.title}" de ${genreMatch.author}. 📚`;
  }

  if(message.includes("nuevo") || message.includes("reciente")){
    let newest = DEFAULT_BOOKS.find(book => book.isNew);
    if(newest){
      return `El libro más reciente es "${newest.title}" de ${newest.author}. ✨`;
    }
  }

  return "Cuéntame qué género te gusta (ficcion, romance, misterio, etc.) y te recomiendo uno 😉";
}
