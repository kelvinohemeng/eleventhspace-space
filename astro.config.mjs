// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  output: "static",

  adapter: netlify(),

  integrations: [
    tailwind(),
    react(),
    sanity({
      projectId: "sdpu9ubt",
      dataset: "production",
      useCdn: false,
      apiVersion: "2022-06-01",
      studioBasePath: "/admin",
    }),
  ],
});
