/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    disableStaticImages: true,
  },
  swcMinify: false,
};

module.exports = nextConfig;