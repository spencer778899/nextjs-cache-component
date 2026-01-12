import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: false,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
