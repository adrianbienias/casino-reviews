import react from "@vitejs/plugin-react"
import { fileURLToPath } from "url"
import { defineConfig } from "vitest/config"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    alias: {
      "@/": fileURLToPath(new URL("./src/", import.meta.url)),
    },
  },
})
