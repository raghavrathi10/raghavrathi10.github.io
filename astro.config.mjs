// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import edgeoneAdapter from '@edgeone/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://raghavrathi10.github.io',
  adapter: edgeoneAdapter(),
  output: 'static',
  integrations: [react()]
});