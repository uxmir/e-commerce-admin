import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**', // এর মানে হলো এই হোস্টের সব ইমেজ এলাউড
      },
    ],
  },
};

export default nextConfig;
