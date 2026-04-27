import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // ✅ MOST IMPORTANT

  images: {
    unoptimized: true,   // ✅ required for static export
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
    qualities: [75, 80, 85, 90],
  },
};

export default nextConfig;
