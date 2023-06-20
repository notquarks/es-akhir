import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 4000,
    proxy: {
      "/time": {
        target: "http://127.0.0.1:5000/api/time", // Replace with your Flask API server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/time/, ""),
      },
      "/questions": {
        target: "http://127.0.0.1:5000/api/questions", // Replace with your Flask API server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/questions/, ""),
      },
      watch: {
        usePolling: true,
      },
    },
  },
});
