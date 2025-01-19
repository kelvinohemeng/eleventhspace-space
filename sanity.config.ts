// sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/lib/schemaTypes";
import { visionTool } from "@sanity/vision";
import { client } from "./src/lib/sanity/sanity";

export default defineConfig({
  name: "eleventhspace",
  title: "eleventhspace",
  projectId:
    process.env.NODE_ENV === "production"
      ? process.env.SANITY_PROJECTID || "sdpu9ubt"
      : "sdpu9ubt",
  dataset:
    process.env.NODE_ENV === "production"
      ? process.env.SANITY_DATASET || "production"
      : "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schema.types,
  },
});
