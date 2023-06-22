// vite.config.js
import { defineConfig } from "file:///D:/projects/WebDev/es-akhir/node_modules/vite/dist/node/index.js";
import react from "file:///D:/projects/WebDev/es-akhir/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 4e3,
    proxy: {
      "/time": {
        target: "http://127.0.0.1:5000/api/time",
        // Replace with your Flask API server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/time/, "")
      },
      "/questions": {
        target: "http://127.0.0.1:5000/api/questions",
        // Replace with your Flask API server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/questions/, "")
      },
      "/answer": {
        target: "http://127.0.0.1:5000/api/answer",
        // Replace with your Flask API server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/answer/, "")
      },
      watch: {
        usePolling: true
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFxXZWJEZXZcXFxcZXMtYWtoaXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RzXFxcXFdlYkRldlxcXFxlcy1ha2hpclxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdHMvV2ViRGV2L2VzLWFraGlyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogXCJsb2NhbGhvc3RcIixcbiAgICBwb3J0OiA0MDAwLFxuICAgIHByb3h5OiB7XG4gICAgICBcIi90aW1lXCI6IHtcbiAgICAgICAgdGFyZ2V0OiBcImh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9hcGkvdGltZVwiLCAvLyBSZXBsYWNlIHdpdGggeW91ciBGbGFzayBBUEkgc2VydmVyIFVSTFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC90aW1lLywgXCJcIiksXG4gICAgICB9LFxuICAgICAgXCIvcXVlc3Rpb25zXCI6IHtcbiAgICAgICAgdGFyZ2V0OiBcImh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9hcGkvcXVlc3Rpb25zXCIsIC8vIFJlcGxhY2Ugd2l0aCB5b3VyIEZsYXNrIEFQSSBzZXJ2ZXIgVVJMXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL3F1ZXN0aW9ucy8sIFwiXCIpLFxuICAgICAgfSxcbiAgICAgIFwiL2Fuc3dlclwiOiB7XG4gICAgICAgIHRhcmdldDogXCJodHRwOi8vMTI3LjAuMC4xOjUwMDAvYXBpL2Fuc3dlclwiLCAvLyBSZXBsYWNlIHdpdGggeW91ciBGbGFzayBBUEkgc2VydmVyIFVSTFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hbnN3ZXIvLCBcIlwiKSxcbiAgICAgIH0sXG4gICAgICB3YXRjaDoge1xuICAgICAgICB1c2VQb2xsaW5nOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJRLFNBQVMsb0JBQW9CO0FBQ3hTLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLFFBQ1AsUUFBUTtBQUFBO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxTQUFTLENBQUMsU0FBUyxLQUFLLFFBQVEsV0FBVyxFQUFFO0FBQUEsTUFDL0M7QUFBQSxNQUNBLGNBQWM7QUFBQSxRQUNaLFFBQVE7QUFBQTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLGdCQUFnQixFQUFFO0FBQUEsTUFDcEQ7QUFBQSxNQUNBLFdBQVc7QUFBQSxRQUNULFFBQVE7QUFBQTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLGFBQWEsRUFBRTtBQUFBLE1BQ2pEO0FBQUEsTUFDQSxPQUFPO0FBQUEsUUFDTCxZQUFZO0FBQUEsTUFDZDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
