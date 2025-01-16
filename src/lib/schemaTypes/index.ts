import { type SchemaTypeDefinition } from "sanity";

import { projectType } from "./projectTypes.";
import { categoryType } from "./categoryTypes";
import { blockContentType } from "./blockContentType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, categoryType, blockContentType],
};
