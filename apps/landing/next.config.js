/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `http://localhost:3002/app/:path*`
      },
      {
        source: '/auth/:path*',
        destination: `http://localhost:3001/auth/:path*`,
      }
    ]
  },
}

module.exports = nextConfig

