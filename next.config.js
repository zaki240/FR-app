/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jealous-garage.pockethost.io',
        port: '',
        pathname: '/api/files/**',
      },
    ],
  },
}

module.exports = nextConfig
