/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint checks during builds
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/workspaces/:workspaceId/controlKpi/:path*',
        destination: '/controlKpi/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
