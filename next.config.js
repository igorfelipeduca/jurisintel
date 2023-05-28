/** @type {import('next').NextConfig} */
const nextConfig = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'tailwindui.com',
    },
  ],
}

module.exports = nextConfig
