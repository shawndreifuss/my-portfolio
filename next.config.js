/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/shawndreifuss.com',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
