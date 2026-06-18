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
      // Espace 1–3 ans → sección atracciones en home
      {
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: "1" }],
        destination: "/#atracciones",
        permanent: true,
      },
      // Espace 4–12 ans → sección atracciones en home
      {
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: "2" }],
        destination: "/#atracciones",
        permanent: true,
      },
      // Règlement intérieur → sección Infos pratiques
      {
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: "3" }],
        destination: "/#infos",
        permanent: true,
      },
      // Espace parents, sin indexar → home
      ...[6, 7, 36].map((id) => ({
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: String(id) }],
        destination: "/",
        permanent: true,
      })),
      // Formules anniversaire
      ...[4, 5, 22, 30, 39].map((id) => ({
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: String(id) }],
        destination: "/anniversaire",
        permanent: true,
      })),
      // Garderie
      {
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: "11" }],
        destination: "/garderie",
        permanent: true,
      },
      // Jeudi des Nounous
      {
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: "18" }],
        destination: "/jeudi-des-nounous",
        permanent: true,
      },
      // Tarifs & Horaires (Plan d'accès, groupes)
      ...[9, 10, 15].map((id) => ({
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: String(id) }],
        destination: "/tarifs",
        permanent: true,
      })),
      // Ludy'cafet → Restauration
      ...[25, 26, 27, 28, 29].map((id) => ({
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: String(id) }],
        destination: "/restauration",
        permanent: true,
      })),
      // Mentions légales
      ...[37, 38].map((id) => ({
        source: "/spip.php",
        has: [{ type: "query", key: "article", value: String(id) }],
        destination: "/mentions-legales",
        permanent: true,
      })),

      // ── Rúbricas SPIP ───────────────────────────────────────────────
      // Le parc, Espace parents → home (no hay página específica)
      ...[1, 3].map((id) => ({
        source: "/spip.php",
        has: [{ type: "query", key: "rubrique", value: String(id) }],
        destination: "/",
        permanent: true,
      })),
      // Services (garderie/nounous) → Jeudi des Nounous
      {
        source: "/spip.php",
        has: [{ type: "query", key: "rubrique", value: "10" }],
        destination: "/jeudi-des-nounous",
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
