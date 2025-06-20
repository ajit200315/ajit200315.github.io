import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',  
  plugins: [tailwindcss(),react()],
  build: {
    outDir: 'docs',       // <-- output to docs/ instead of dist/
  },
})
