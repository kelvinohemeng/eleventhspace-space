import { client } from "./sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityAsset } from "@sanity/image-url/lib/types/types";

const imageBuilder = imageUrlBuilder(client);

export function urlForImage(source: SanityAsset) {
  return imageBuilder.image(source);
}
