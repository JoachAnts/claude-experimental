import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Serve from the repo subpath when built for GitHub Pages, but keep dev at root.
  base: command === 'build' ? '/claude-experimental/' : '/',
  plugins: [react()],
}))
