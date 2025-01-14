import { structure } from "./../sanity/structure";
import { schema } from "./../sanity/schemaTypes/index";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

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
