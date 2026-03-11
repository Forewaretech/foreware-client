import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "foreware-bucket.s3.us-east-1.amazonaws.com",
        pathname: "/**", // Allows all folders in the bucket
      },
    ],
  },
};

export default nextConfig;
