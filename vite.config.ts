import path from 'node:path';
import netlify from '@netlify/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
 plugins: [react(), tailwindcss(), netlify()],
 resolve: {
  alias: {
   '@': path.resolve(__dirname, './src'),
  },
 },
});
