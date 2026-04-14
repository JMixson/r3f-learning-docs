// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://custom-r3f-docs.pages.dev',
  integrations: [
    react(),
    starlight({
      title: 'R3F Learning Docs',
      customCss: ['./src/styles/global.css'],
      sidebar: [
        {
          label: 'Start Here',
          autogenerate: { directory: 'start-here' },
        },
        {
          label: 'Conversions',
          autogenerate: { directory: 'conversions' },
        },
        {
          label: 'Patterns',
          autogenerate: { directory: 'patterns' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
