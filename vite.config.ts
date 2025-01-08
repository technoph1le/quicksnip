import { spawnSync } from "child_process";
import path from "path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

function consolidateSnippets(projectRoot: string) {
  const cmd = spawnSync("node", ["utils/consolidateSnippets.js"], {
    cwd: projectRoot,
  });

  if (cmd.status === 0) return;

  console.log(`Consolidating snippets failed:\n${cmd.output.toString()}`);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    {
      name: "Consolidate Snippet",
      configResolved({ root }) {
        consolidateSnippets(root);
      },
      handleHotUpdate({ file, server }) {
        const relativePath = file.slice(server.config.root.length);
        if (!relativePath.startsWith("/snippets/")) return;

        consolidateSnippets(server.config.root);
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          prismjs: ["prismjs"],
          react: ["react"],
          "react-dom": ["react-dom"],
          "react-router-dom": ["react-router-dom"],
          "react-syntax-highlighter": ["react-syntax-highlighter"],
        },
      },
    },
  },
});
