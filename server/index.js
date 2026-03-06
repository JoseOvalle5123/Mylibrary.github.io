/* ============================================================
   MIS LIBROS PRO – SERVER/INDEX.JS
   Node.js + Express + Stripe + Google Gemini AI
   ============================================================ */

require('dotenv').config();

const express = require('express');
const cors    = require('cors');
const Stripe  = require('stripe');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const genAI  = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const app  = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: [
    'https://joseovalle5123.github.io',
    'https://mylibrary-github-io.onrender.com', 
    'http://localhost:5500',
    'http://127.0.0.1:5500',
    'http://localhost:3000'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.options('*', cors());
app.use(express.json());

/* ── Health check ── */
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), service: 'MisLibros PRO API', ai: process.env.GEMINI_API_KEY ? 'Gemini ✅' : 'Gemini ⚠️ no configurado' });
});

/* ── Create Payment Intent ── */
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'mxn', payment_method_type = 'card', description } = req.body;

    if (!amount || typeof amount !== 'number' || amount < 50)
      return res.status(400).json({ error: 'Monto inválido. Mínimo 50 centavos.' });
    if (!process.env.STRIPE_SECRET_KEY)
      return res.status(500).json({ error: 'STRIPE_SECRET_KEY no configurado.' });

    // OXXO only works with MXN
    const useCurrency = payment_method_type === 'oxxo' ? 'mxn' : currency.toLowerCase();

    const paymentIntentData = {
      amount: Math.round(amount),
      currency: useCurrency,
      description: description || 'MisLibros PRO',
      metadata: { service: 'MisLibros_PWA_Pro', created: new Date().toISOString() }
    };

    // Set payment method types explicitly for OXXO
    if (payment_method_type === 'oxxo') {
      paymentIntentData.payment_method_types = ['oxxo'];
    } else {
      // Card supports Visa, Mastercard, Spin by OXXO (prepaid Visa)
      paymentIntentData.payment_method_types = ['card'];
    }

    const paymentIntent = await stripe.paymentIntents.create(paymentIntentData);

    res.json({
      clientSecret: paymentIntent.client_secret,
      intentId:     paymentIntent.id,
      amount:       paymentIntent.amount,
      currency:     paymentIntent.currency
    });

  } catch (err) {
    console.error('Stripe error:', err.message);
    res.status(500).json({ error: err.message || 'Error interno del servidor.' });
  }
});

/* ── Stripe Webhook ── */
app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) return res.json({ received: true });
  let event;
  try { event = stripe.webhooks.constructEvent(req.body, sig, secret); }
  catch (err) { return res.status(400).send(`Webhook Error: ${err.message}`); }
  if (event.type === 'payment_intent.succeeded') console.log('✅ Payment succeeded:', event.data.object.id);
  res.json({ received: true });
});

/* ── Chat con Gemini AI ── */
app.post('/chat', async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message || typeof message !== 'string' || message.trim().length === 0)
      return res.status(400).json({ error: 'El mensaje no puede estar vacío.' });
    if (message.length > 1000)
      return res.status(400).json({ error: 'Mensaje demasiado largo (máx. 1000 caracteres).' });
    if (!process.env.GEMINI_API_KEY)
      return res.status(500).json({ error: 'GEMINI_API_KEY no configurado. Revisa el archivo .env\nObtén una gratis en: https://aistudio.google.com/app/apikey' });

    const SYSTEM_PROMPT = `Eres un asistente literario experto y apasionado de la app "Mis Libros Pro", una biblioteca digital tipo Kindle+Wattpad.

Tu rol es ayudar a los usuarios con:
- Recomendaciones de libros según sus gustos, estado de ánimo o género favorito
- Resúmenes y análisis de obras literarias
- Información detallada sobre autores y sus obras
- Consejos de lectura y hábitos lectores
- Ayuda para escribir textos propios (estructura, estilo, correcciones, ideas creativas)
- Preguntas sobre el funcionamiento de la app

Libros disponibles en la app: El último suspiro (Isabel Vargas, ficción $2.99), Sombras del Ayer (Carlos Reyes, ficción $3.49), Tiempo Fracturado (Lucía Mendoza, ciencia ficción $4.99), Crónicas del Imperio (Pedro Castillo, historia $5.99), Amanecer en Éfesis (Sofía Luna, romance $2.79), Código Rojo (Miguel Torres, misterio $3.99), Constelaciones (Isabel Vargas, poesía $1.99), Nave Perdida (Lucía Mendoza, fantasía $4.49), El Príncipe Pequeño (Antoine de Saint-Exupéry $2.49), La Sombra del Viento (Carlos Ruiz Zafón $6.99), Cien Años de Soledad (García Márquez $7.49), El Alquimista (Paulo Coelho $3.99), Rayuela (Julio Cortázar $5.49), Ficciones (Jorge Luis Borges $3.29).

Habla siempre en español, con entusiasmo y calidez literaria. Sé conciso pero expresivo y útil.
Si preguntan sobre libros no disponibles, recomiéndalos y menciona que pueden subirlos como escritos propios.
Máximo 3 párrafos por respuesta. Nunca des información dañina.`;

    // Gemini usa roles 'user' y 'model' (no 'assistant')
    const geminiHistory = history.slice(-10).map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    const model = genAI.getGenerativeModel({
      model: process.env.GEMINI_MODEL || 'gemini-1.5-flash',
      systemInstruction: SYSTEM_PROMPT,
      generationConfig: { maxOutputTokens: 500, temperature: 0.8, topP: 0.9 }
    });

    const chat = model.startChat({ history: geminiHistory });
    const result = await chat.sendMessage(message.trim());
    const reply = result.response.text().trim();

    res.json({ reply });

  } catch (err) {
    console.error('Gemini error:', err.message);
    if (err.message?.includes('API_KEY_INVALID') || err.message?.includes('API key'))
      return res.status(401).json({ error: '🔑 API Key de Gemini inválida. Verifica GEMINI_API_KEY en .env' });
    if (err.message?.includes('RESOURCE_EXHAUSTED') || err.message?.includes('quota'))
      return res.status(429).json({ error: '⏳ Cuota de Gemini agotada. Intenta en unos momentos.' });
    if (err.message?.includes('SAFETY'))
      return res.status(400).json({ error: '🛡️ Mensaje bloqueado por filtros de seguridad.' });
    res.status(500).json({ error: 'Error al conectar con Gemini AI.' });
  }
});

/* ── 404 / Error handlers ── */
app.use((req, res) => res.status(404).json({ error: 'Ruta no encontrada.' }));
app.use((err, req, res, _next) => { console.error('Server error:', err.message); res.status(500).json({ error: 'Error interno del servidor.' }); });

/* ── Start ── */
app.listen(PORT, () => {
  console.log('');
  console.log('┌──────────────────────────────────────────────┐');
  console.log('│       MisLibros PRO – Backend API            │');
  console.log(`│   🚀 Servidor corriendo en puerto ${PORT}        │`);
  console.log('│   GET  /health                               │');
  console.log('│   POST /create-payment-intent  (Stripe)      │');
  console.log('│   POST /chat                   (Gemini AI)   │');
  console.log('│   POST /webhook                (Stripe)      │');
  console.log('└──────────────────────────────────────────────┘');
  console.log('');
  if (!process.env.STRIPE_SECRET_KEY) console.warn('⚠️  STRIPE_SECRET_KEY no configurado.');
  else console.log('✅ Stripe configurado correctamente.');
  if (!process.env.GEMINI_API_KEY) {
    console.warn('⚠️  GEMINI_API_KEY no configurado.');
    console.warn('   👉 Obtén una GRATIS en: https://aistudio.google.com/app/apikey');
  } else console.log('✅ Google Gemini AI configurado correctamente.');
});
