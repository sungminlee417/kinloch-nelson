import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable transpilation for Sanity Studio
  transpilePackages: ['next-sanity'],
  
  // Allow loading from Sanity CDN
  images: {
    domains: ['cdn.sanity.io'],
  },
  
  // Ensure proper handling of studio route
  async rewrites() {
    return []
  },
};

export default nextConfig;
