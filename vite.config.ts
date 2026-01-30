import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  base: "/zip-autocomplete-widget/",
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          floatPrecision: 2,
          plugins: [
            {
              name: "cleanupIds",
            },
            { name: "convertPathData" },
          ],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
