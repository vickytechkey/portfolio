import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  test: {
    globals: true,          // enable test(), expect() without import
    environment: 'jsdom',   // needed for React DOM testing
    setupFiles: './src/setupTests.js' // optional: if you want global setup
  }
});
