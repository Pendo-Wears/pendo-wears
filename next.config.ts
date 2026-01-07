import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "darkgray-heron-136669.hostingersite.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "pendowears.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "files.cdn.printful.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
