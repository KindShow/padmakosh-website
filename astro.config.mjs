import { defineConfig } from 'astro/config';

// https://astro.build/config
// Note: Host adapter intentionally omitted until runtime requirements and hosting choice are confirmed.
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://padmakoshstudio.in',
  compressHTML: true,
  build: {
    format: 'directory',
  },
});
