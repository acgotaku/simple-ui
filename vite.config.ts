import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';

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
    plugins: [react(), svgr()],
    esbuild: {
      // https://github.com/vitejs/vite/issues/8644
      logOverride: { 'this-is-undefined-in-esm': 'silent' }
    },
    build: {
      sourcemap: mode === 'production' ? 'hidden' : true,
      emptyOutDir: true
    }
  };
});
