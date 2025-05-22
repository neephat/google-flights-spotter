import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rollupNodePolyFill from "rollup-plugin-node-polyfills";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [rollupNodePolyFill()],
    },
  },
  define: {
    global: "globalThis", // sometimes needed for polyfills to work
  },
  optimizeDeps: {
    include: ["buffer", "process"], // sometimes needed
  },
});
