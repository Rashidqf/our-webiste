/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "ryzonix.pro" }],
        destination: "https://www.ryzonix.pro/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
