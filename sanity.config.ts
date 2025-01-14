import { structureTool } from "sanity/structure";
import { structure } from "./sanity/structure";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { schema } from "./sanity/schemaTypes";


export default defineConfig({
  name: "default",
  title: "test",

  projectId: "tazfdldd",
  dataset: "production",

  plugins: [structureTool({ structure }), visionTool()],

  schema: {
    types: schema.types,
  },
});
