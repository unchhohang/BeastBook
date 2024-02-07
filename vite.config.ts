import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { stylexPlugin } from "vite-plugin-stylex-dev";
// import svgr from "vite-plugin-svgr";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), stylexPlugin(), tsconfigPaths(), svgr()],
  // resolve: {
  //   alias: {
  //     src: path.resolve("src/"),
  //     "@BeastBook": path.resolve("src"),
  //     "@BeastBook/layout": path.resolve("src/layout"),
  //     "@BeastBook/components": path.resolve("src/components"),
  //   },
  // },
});
