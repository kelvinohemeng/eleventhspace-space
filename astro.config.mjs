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
      projectId:
        (process.env.NODE_ENV === "production" &&
          process.env.SANITY_PROJECTID) ||
        "sdpu9ubt",
      dataset:
        (process.env.NODE_ENV === "production" && process.env.SANITY_DATASET) ||
        "production",
      useCdn: false,
      apiVersion: "2022-06-01",
      studioBasePath: import.meta.env.STUDIO_PATH,
    }),
  ],
});
