export const images = import.meta.glob<ImageMetadata>(
  "../images/*.{jpg,jpeg,png}",
  {
    eager: true,
    import: "default",
  },
);

export function getImage(filename: string): ImageMetadata {
  const image = images[`../images/${filename}`];
  if (!image) throw new Error(`Image not found.`);
  return image;
}
