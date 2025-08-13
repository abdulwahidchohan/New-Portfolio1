import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Modern webpack configuration for Next.js 15
  webpack: (config, { isServer }) => {
    // Ensure stable webpack configuration
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    }
    
    return config
  },
  // Image configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig
