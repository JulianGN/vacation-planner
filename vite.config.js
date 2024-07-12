import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: "/index.html",
    },
  },
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
