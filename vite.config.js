import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      name: "ShowNTell",
      fileName: "showntell"
    },
    rollupOptions: {
      output: {
        format: "iife",
        globals: {
          svelte: "svelte"
        }
      }
    }
  },
  plugins: [svelte({ compilerOptions: {customElement: true} })],
})
