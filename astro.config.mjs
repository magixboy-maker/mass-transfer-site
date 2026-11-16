import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.mass-transfer.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
