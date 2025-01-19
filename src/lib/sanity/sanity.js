import sanityClient, { createClient } from "@sanity/client";

export const backendClient = createClient({
  projectId:
    process.env.NODE_ENV === "production"
      ? process.env.SANITY_PROJECTID || "sdpu9ubt"
      : "sdpu9ubt",
  dataset:
    process.env.NODE_ENV === "production"
      ? process.env.SANITY_DATASET || "production"
      : "production",
  apiVersion: "2023-05-03",
  useCdn: true,
  token: import.meta.SANITY_API_TOKEN,
});

export const client = createClient({
  projectId:
    process.env.NODE_ENV === "production"
      ? process.env.SANITY_PROJECTID || "sdpu9ubt"
      : "sdpu9ubt",
  dataset:
    process.env.NODE_ENV === "production"
      ? process.env.SANITY_DATASET || "production"
      : "production",
  apiVersion: "2023-05-03",
  useCdn: true,
});
