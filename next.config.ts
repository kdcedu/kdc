// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",            // Nơi tạo service worker
  register: true,            // Tự động đăng ký
  skipWaiting: true,         // Update ngay khi có phiên bản mới
  disable: process.env.NODE_ENV === "development", // Tắt PWA khi dev
});

const nextConfig = {
  experimental: {
    appDir: true,            // Bắt buộc với App Router
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*', 
  //       destination: `${process.env.WORDPRESS_API_URL}/:path*`,
  //     },
  //   ]
  // },
};

module.exports = withPWA(nextConfig);
