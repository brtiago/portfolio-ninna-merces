// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://fazendopsi.com.br',
    integrations: [
        sitemap()
    ],
    vite: {
        build: {
            cssCodeSplit: true,
            minify: 'esbuild'
        },
        plugins: [tailwindcss()],
    },
    build: {
        inlineStylesheets: 'auto'
    }
});
