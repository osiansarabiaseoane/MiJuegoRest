// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://osiansarabiaseoane.github.io',
  base: '/MiJuegoRest',

  server: {
    host: true,
    allowedHosts: ['.trycloudflare.com'],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});