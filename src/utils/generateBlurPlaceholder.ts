import imagemin from "imagemin";
import type { Image } from "@/types";

const cache = new Map<Image, string>();

export default async function getBase64ImageUrl(
  image: Image
): Promise<string> {
  let url = cache.get(image);

  if (url) {
    return url;
  }
  
  const response = await fetch(image.url!);

  const buffer = await response.arrayBuffer();
  const minified = await imagemin.buffer(Buffer.from(buffer));

  url = `data:image/jpeg;base64,${Buffer.from(minified).toString("base64")}`;
  cache.set(image, url);
  
  return url;
}
