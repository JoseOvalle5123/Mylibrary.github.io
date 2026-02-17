#  Mis Libros – PWA

Una aplicación web progresiva (PWA) para gestionar y leer tu biblioteca digital personal.

## Características

- **Biblioteca con libros reales**: 8 obras predeterminadas (El Príncipe Pequeño, La Metamorfosis, Cien Años de Soledad, El Alquimista, etc.)
- **Subir escritos propios**: texto plano o archivos PDF
- **Editar y borrar** escritos personales
- **Lector integrado** con seguimiento de progreso por scroll
- **Filtros**: por Genero y por Autor
- **Búsqueda** en tiempo real
- **Tema oscuro / claro**
- **Instalable** como app nativa (PWA)
- **Funciona offline** gracias al Service Worker

## Hostear en GitHub Pages

1. Crea un repositorio nuevo en GitHub (ej: `mis-libros`)
2. Sube todos los archivos de esta carpeta a la raíz del repositorio
3. Ve a **Settings → Pages**
4. Selecciona `main` como rama y `/` (root) como carpeta
5. Guarda → GitHub te dará una URL como: `https://tu-usuario.github.io/mis-libros/`

## Estructura

```
mis-libros/
├── index.html        ← Shell principal
├── style.css         ← Estilos completos
├── app.js            ← Toda la lógica
├── sw.js             ← Service Worker (offline)
├── manifest.json     ← Configuración PWA
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

## Datos

Todos los datos del usuario (escritos subidos, progreso, configuración) se guardan en **localStorage** del navegador, por lo que persisten sin necesidad de servidor.
