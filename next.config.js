/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/services",
        destination: "/service",
        statusCode: 301,
      },
      {
        source: "/projects",
        destination: "/project",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "ryzonix.pro" }],
        destination: "https://www.ryzonix.pro/:path*",
        statusCode: 301,
      },
    ];
  },
};

module.exports = nextConfig;
