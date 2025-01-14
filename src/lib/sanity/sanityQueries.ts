import { defineQuery } from "groq";

export const EVENTS_QUERY = defineQuery(
  `*[_type == "product"] | order(name asc)`
);
