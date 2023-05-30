/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "victoriarocha.s3.sa-east-1.amazonaws.com",
      "i.vimeocdn.com"
    ]
  }
}

module.exports = nextConfig
