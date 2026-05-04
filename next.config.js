/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Enable aggressive code splitting
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
  webpack: (config) => {
    // Simple webpack optimization for bundle splitting
    config.optimization.splitChunks.cacheGroups = {
      ...config.optimization.splitChunks.cacheGroups,
      default: false,
      vendors: false,
    };
    return config;
  },
};

module.exports = nextConfig;