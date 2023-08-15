import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import yaml from "@modyfi/vite-plugin-yaml";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [react(), yaml()],
  server: {
    open: true,
  },
});
