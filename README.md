# 📚 MisLibros PWA Pro — con Google Gemini AI

PWA completa tipo Kindle + Wattpad con chatbot inteligente powered by **Google Gemini**, sistema Premium y pagos con Stripe.

---

## ✨ Stack de IA

| Antes | Ahora |
|-------|-------|
| OpenAI GPT-3.5 | **Google Gemini 1.5 Flash** ✨ |
| De pago ($) | **Gratis** con cuota generosa |

---

## 🚀 Instalación

### 1. Backend

```bash
cd server
npm install
cp .env.example .env
```

Edita `.env`:
```env
PORT=3001
STRIPE_SECRET_KEY=sk_test_...
GEMINI_API_KEY=AIzaSy...
```

```bash
npm start
```

### 2. Frontend

Sirve la carpeta raíz del proyecto con cualquier servidor local:

```bash
# Python
python3 -m http.server 5500

# Node
npx serve . -p 5500
```

Abre: `http://localhost:5500`

---

## 🔑 Obtener API Key de Gemini (GRATIS)

1. Ve a [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Inicia sesión con tu cuenta de Google
3. Clic en **"Create API key"**
4. Copia la clave que empieza con `AIzaSy...`
5. Pégala en `server/.env` → `GEMINI_API_KEY=AIzaSy...`

> **Cuota gratuita de Gemini 1.5 Flash:** 15 solicitudes/minuto, 1 millón de tokens/día. Más que suficiente para desarrollo y uso personal.

---

## 💳 Stripe (tarjeta de prueba)

Número: `4242 4242 4242 4242`  
Fecha: cualquier futura · CVC: cualquier 3 dígitos

---

## 📦 Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/health` | Estado del servidor |
| POST | `/create-payment-intent` | Pago con Stripe |
| POST | `/chat` | Chat con Gemini AI |
| POST | `/webhook` | Webhooks de Stripe |
