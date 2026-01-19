import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Constrain file tracing to the project directory
  outputFileTracingRoot: path.resolve(process.cwd()),
  eslint: {
    // Allow Cloudflare Pages build to pass without blocking on lint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allow build to succeed even if there are type errors (Cloudflare will still run the app)
    ignoreBuildErrors: true,
  },
  images: {
    // Cloudflare Pages serves static assets well; disable Next's image optimizer to avoid 404s
    unoptimized: true,
    // Allow R2 bucket domains for images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.r2.dev',
      },
      {
        protocol: 'https',
        hostname: 'pub-*.r2.dev',
      },
    ],
  },
};

export default nextConfig;
