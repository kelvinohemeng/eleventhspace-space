import sanityClient, { createClient } from "@sanity/client";

export const backendClient = createClient({
  projectId: "tazfdldd",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
  token: import.meta.SANITY_API_TOKEN,
});

export const client = createClient({
  projectId: "tazfdldd",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
});
