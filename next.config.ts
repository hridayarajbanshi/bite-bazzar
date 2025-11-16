import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[{
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      port: '',
      pathname: '/dlz6kjzbu/**',
    }]

  }
  /* config options here */
};

export default nextConfig;
