import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/vlibras': {
        target: 'https://vlibras.gov.br/app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/vlibras/, ''),
      },
    },
  },
})
