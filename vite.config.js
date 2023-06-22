import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 4000,
    proxy: {
      "/time": {
        target: "https:/es-flask.onrender.com/api/time", // Replace with your Flask API server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/time/, ""),
      },
      "/questions": {
        target: "https:/es-flask.onrender.com/api/questions", // Replace with your Flask API server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/questions/, ""),
      },
      "/answer": {
        target: "https:/es-flask.onrender.com/api/answer", // Replace with your Flask API server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/answer/, ""),
      },
      watch: {
        usePolling: true,
      },
    },
  },
});
