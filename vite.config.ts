import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "./static",
  base: process.env.BASE_URL || "/",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
