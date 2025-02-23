/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media-qatar.ahmarket.com"], // ✅ Allow external image domains
  },
};

module.exports = nextConfig;
