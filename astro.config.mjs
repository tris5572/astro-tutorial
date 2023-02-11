import { defineConfig } from 'astro/config';

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://tris5572.github.io',
  base: '/astro-tutorial',
  integrations: [preact()]
});