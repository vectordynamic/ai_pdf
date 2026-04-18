import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Allow Ngrok to hit the dev server without Host header errors
  allowedDevOrigins: [
    ".ngrok.io",
    ".ngrok.app",
    ".ngrok-free.app",
    ".ngrok-free.dev",
    "localhost"
  ],
};

export default nextConfig;
