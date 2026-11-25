import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// `base` must match the GitHub Pages project path (ADR 4).
export default defineConfig({
  base: '/my-digital-portfolio-v2/',
  plugins: [react()],
})
