/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
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
