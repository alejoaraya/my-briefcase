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
    globals: true,
    // Sin esto, @testing-library/jest-dom nunca se registraba: los matchers
    // como toBeInTheDocument() no existían pese a estar instalado y con un
    // archivo de setup ya escrito (src/test/setup.ts) que nadie enganchaba.
    setupFiles: ["./src/test/setup.ts"],
    coverage: {
      include: ['src/**/*.{ts,tsx}']
    },
  },
});
