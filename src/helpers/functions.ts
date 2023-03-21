export const getImageUrl = (imageUrl: string) =>
  new URL(`/src/assets/${imageUrl}`, import.meta.url).href;
