/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const url = process.env.NEXT_PUBLIC_SERVER_HOST
    return [
      {
        source: '/proxy/:path*',
        destination: url + '/:path*'
      }
    ]
  }
}

module.exports = nextConfig
