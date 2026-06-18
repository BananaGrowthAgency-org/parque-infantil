/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const securityHeaders = [
  // Evita que el sitio sea embebido en iframes de otros dominios (anti-clickjacking)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Evita que el navegador adivine el tipo de archivo (anti-MIME sniffing)
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Controla qué información de referencia se envía
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Desactiva funciones del navegador que no se usan
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Fuerza HTTPS durante 1 año
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
];

const nextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    if (!isProd) return [];
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Redirección existente
      {
        source: "/billetterie/anniversaire",
        destination: "/anniversaire",
        permanent: true,
      },

      // ── Artículos SPIP ──────────────────────────────────────────────
      // Espace 1–3 ans → card "Une aire de jeux intérieure pour les petits"
      {
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: "1" }],
        destination: "/#seccion-0",
        permanent: true,
      },
      // Espace 4–12 ans → card "Un parc de jeux indoor pour les plus grands"
      {
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: "2" }],
        destination: "/#seccion-1",
        permanent: true,
      },
      // Règlement intérieur → mentions légales
      {
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: "3" }],
        destination: "/mentions-legales",
        permanent: true,
      },
      // Formules anniversaire
      ...[4, 5, 22, 30, 39].map((id) => ({
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: String(id) }],
        destination: "/anniversaire",
        permanent: true,
      })),
      // Espace parents → home
      {
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: "6" }],
        destination: "/",
        permanent: true,
      },
      // Horaires (supprimé) → tarifs
      {
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: "7" }],
        destination: "/tarifs",
        permanent: true,
      },
      // Abonnements/carte cadeau → billetterie externa
      {
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: "8" }],
        destination: "https://ludykid.qweekle.com/shop/ludykid/ticketing?lang=fr&_gl=1*198m9oz*_gcl_au*NTg0MTQxMDE5LjE3ODA5MzM5NDU.",
        permanent: true,
      },
      // Centre de loisirs, Comités d'entreprise, Plan d'accès → contact
      ...[9, 10, 15].map((id) => ({
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: String(id) }],
        destination: "/contact",
        permanent: true,
      })),
      // La garderie
      {
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: "11" }],
        destination: "/garderie",
        permanent: true,
      },
      // Galeries → sección "Ludykid en photos" en home
      ...[13, 14, 16, 17, 19, 21, 24].map((id) => ({
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: String(id) }],
        destination: "/#galerie",
        permanent: true,
      })),
      // Les jeudis des Nounous
      {
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: "18" }],
        destination: "/jeudi-des-nounous",
        permanent: true,
      },
      // Ludy'cafet → sub-rutas restauration
      {
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: "25" }],
        destination: "/restauration/boissons-chaudes",
        permanent: true,
      },
      {
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: "26" }],
        destination: "/restauration/boissons-fraiches",
        permanent: true,
      },
      {
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: "27" }],
        destination: "/restauration/plaisirs-sales",
        permanent: true,
      },
      {
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: "28" }],
        destination: "/restauration/plaisirs-sucres",
        permanent: true,
      },
      // Infos utiles cafet → sección Infos pratiques en home
      {
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: "29" }],
        destination: "/#infos",
        permanent: true,
      },
      // Nous contacter → contact
      {
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: "36" }],
        destination: "/contact",
        permanent: true,
      },
      // Mentions légales, Vos données
      ...[37, 38].map((id) => ({
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: String(id) }],
        destination: "/mentions-legales",
        permanent: true,
      })),

      // ── Rúbricas SPIP ───────────────────────────────────────────────
      // Le parc, Espace parents → home
      ...[1, 3].map((id) => ({
        source: "/spip.php",
        has: [{ type: "query", key: "rubrique", value: String(id) }],
        destination: "/",
        permanent: true,
      })),
      // Services (garderie/nounous) → garderie
      {
        source: "/spip.php",
        has: [{ type: "query", key: "rubrique", value: "10" }],
        destination: "/garderie",
        permanent: true,
      },
      // Anniversaires + FAQ
      ...[2, 13].map((id) => ({
        source: "/spip.php",
        has: [{ type: "query", key: "rubrique", value: String(id) }],
        destination: "/anniversaire",
        permanent: true,
      })),
      // Tarifs & Horaires + Groupes
      ...[4, 14].map((id) => ({
        source: "/spip.php",
        has: [{ type: "query", key: "rubrique", value: String(id) }],
        destination: "/tarifs",
        permanent: true,
      })),
      // Ludy'cafet → Restauration
      {
        source: "/spip.php",
        has: [{ type: "query", key: "rubrique", value: "11" }],
        destination: "/restauration",
        permanent: true,
      },
      // Cualquier otra URL de SPIP no mapeada → home
      {
        source: "/spip.php",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
