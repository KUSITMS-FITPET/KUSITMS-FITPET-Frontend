/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fitpetbucket.s3.us-east-2.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
