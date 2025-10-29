import { defineConfig } from 'vite'

export default defineConfig({
  base: '/STRIDE/', // Set base path for GitHub Pages deployment
  root: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})
