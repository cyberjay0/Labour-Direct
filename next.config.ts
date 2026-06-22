import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/vision",
        destination: "/platform",
        permanent: true,
      },
      {
        source: "/plan",
        destination: "/sectors",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
