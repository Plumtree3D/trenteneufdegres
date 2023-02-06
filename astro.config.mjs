import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import sanity from 'astro-sanity';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://trenteneufdegres.fr/',
  integrations: [sitemap(), sanity({
    projectId: PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: 'v2021-03-25',
    useCdn: true
  }), react()]
});