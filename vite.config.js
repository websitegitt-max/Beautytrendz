import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base './' prevents 404 assets errors on ANY GitHub Pages repo name!
  base: './',
})
