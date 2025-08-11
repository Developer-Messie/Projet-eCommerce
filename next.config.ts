import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'z2quriuk1h.ucarecd.net',
        port: '',
        pathname: '/**',
      },
      // Ajoutez d'autres hôtes distants ici si nécessaire
    ],
    minimumCacheTTL: 60, // You can play with this setting
  },
};

export default nextConfig;
