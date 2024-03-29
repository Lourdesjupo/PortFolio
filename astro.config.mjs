import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site:'https://lourdesjupo.github.io/',
  base:'/PortFolio',
  outDir: 'docs',
  build: {
    assets: 'assets',
  }
});