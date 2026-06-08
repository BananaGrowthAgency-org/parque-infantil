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
  // Permite scripts de Google Tag Manager, Elfsight y fuentes de Google
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.elfsight.com https://elfsightcdn.com https://ludykid.qweekle.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.elfsight.com https://elfsightcdn.com",
      "font-src 'self' https://fonts.gstatic.com https://*.elfsight.com https://elfsightcdn.com",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://api.web3forms.com https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://region1.google-analytics.com https://*.elfsight.com https://elfsightcdn.com",
      "frame-src https://www.googletagmanager.com https://ludykid.qweekle.com https://*.elfsight.com https://elfsightcdn.com https://maps.google.com https://www.google.com",
      "worker-src 'self' blob:",
    ].join("; "),
  },
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
      {
        source: "/billetterie/anniversaire",
        destination: "/anniversaire",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
