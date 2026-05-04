/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'share.google',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Google profile image
      },
      {
        protocol: "https",
        hostname: "img.magnific.com", // ← নতুন
      },
      {
        protocol: "https",
        hostname: "img.freepik.com", // ← নতুন (magnific আসলে freepik এর CDN)
      },
    ],
  },
};

module.exports = nextConfig;