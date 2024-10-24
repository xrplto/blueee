/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://xrpl.blue' : '',
  trailingSlash: true,
  experimental: {
    optimizeCss: true,
  },
  serverRuntimeConfig: {
    PORT: process.env.PORT || 3000
  },
  publicRuntimeConfig: {
    staticFolder: '/static',
  },
}

module.exports = nextConfig
