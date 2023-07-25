import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    viteCompression()
  ],
	root: 'src/',
	publicDir: '../public/',
  server: {
    host: '0.0.0.0' // Allow connections from any device on the network
  }
});