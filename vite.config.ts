import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_URL || "/",
  css: {
    postcss: "./postcss.config.js"
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  },
  server: {
    fs: {
      // Allow serving files from project root for proper image paths (leading slash)
      strict: false,
      allow: ['.']
    }
  }
});
