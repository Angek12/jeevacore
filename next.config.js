/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    turbo: false, // VERY important on Vercel
  },
};

module.exports = nextConfig;
