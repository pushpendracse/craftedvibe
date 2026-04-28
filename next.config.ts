import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,   // Required for static export
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000, // Cache for 1 year
  },
  
  // Enable compression
  compress: true,
  
  // Optimize React compiler
  reactStrictMode: true,
};

export default nextConfig;
