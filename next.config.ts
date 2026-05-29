import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local images from public/ — no external domains needed
    unoptimized: false,
  },
};

export default nextConfig;
