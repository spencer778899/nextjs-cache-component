import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: process.env.USE_CACHE_COMPONENT === 'true',
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
