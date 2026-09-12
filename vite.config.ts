import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { seoPrerenderPlugin } from './vite.seo-plugin.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? "/3dcicekci/" : "/",
  plugins: [react(), tailwindcss(), seoPrerenderPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
