// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://raghavrathi10.github.io',
  // REMOVED: adapter and output: 'static' (static is the default)
  integrations: [react()]
});
