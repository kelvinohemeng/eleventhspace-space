import sanityClient, { createClient } from "@sanity/client";

export const backendClient = createClient({
  projectId: "sdpu9ubt",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: true,
  token: import.meta.SANITY_API_TOKEN,
});

export const client = createClient({
  projectId: "sdpu9ubt",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: true,
});
