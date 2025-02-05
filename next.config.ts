import { NextConfig } from 'next';


const nextConfig = {
  output: 'standalone', // Default behavior, no need for 'export' with Vercel
  images: {
    unoptimized: false, // Enable Next.js image optimization
  },
};



export default nextConfig;
