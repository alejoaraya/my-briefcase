import react from "@vitejs/plugin-react";

import { defineConfig } from "vitest/config";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [tailwindcss(), react(), svgr({
    svgrOptions: {
      icon: true
    },
    include: "**/*.svg?react",
  })],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "/index.html",
    },
  },
  test: {
    environment: "jsdom",
    globals: true
  },
});
