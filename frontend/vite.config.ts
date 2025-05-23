/// <reference types="vitest/config" />
import { spawnSync } from "child_process";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

function consolidateSnippets(projectRoot: string) {
  const cmd = spawnSync(
    "npx",
    ["tsx", "../backend/scripts/consolidateSnippets.ts"],
    {
      cwd: projectRoot,
      shell: true,
      stdio: "pipe",
    }
  );

  if (cmd.status === 0) return;

  const errorMessage = cmd.stderr?.toString().trim() || "No error message";
  const outputMessage = cmd.stdout?.toString().trim() || "No additional output";

  console.log(`❌ Consolidating snippets failed!`);
  console.log(`Error: ${errorMessage}`);
  console.log(`Output: ${outputMessage}`);
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
  test: {
    setupFiles: ["/tests/setup.ts"],
    coverage: {
      provider: "v8",
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
