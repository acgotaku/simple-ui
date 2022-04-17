import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  return {
    server: {
      host: true,
      port: 3300
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    plugins: [react()],
    build: {
      sourcemap: mode === 'production' ? 'hidden' : true,
      emptyOutDir: true
    }
  };
});
