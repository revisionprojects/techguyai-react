import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Content-Security-Policy': `
        default-src 'none';
        script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.youtube.com https://s.ytimg.com;
        style-src 'self' 'unsafe-inline';
        img-src 'self' https: data:;
        font-src 'self';
        connect-src 'self';
        media-src 'self' https://www.youtube.com;
        frame-src https://www.youtube.com;
        base-uri 'self';
        form-action 'self'
      `.replace(/\s{2,}/g, ' ').trim()
    }
  }
})
