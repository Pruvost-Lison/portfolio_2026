// src/data/images.ts
// Retrouve un média de src/assets (quel que soit le sous-dossier) à partir de son nom de fichier.
// Les espaces dans les noms sont ignorés : "gallerie_FAB _1.png" == "gallerie_FAB_1.jpg".
import type { ImageMetadata } from 'astro';

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{png,jpg,jpeg,webp,avif}',
  { eager: true }
);
const videoModules = import.meta.glob<string>('/src/assets/**/*.{mp4,webm}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const norm = (s: string) => s.replace(/\s+/g, '').toLowerCase();
const fileOf = (path: string) => path.split('/').pop()!;

const images: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(imageModules)) images[norm(fileOf(path))] = mod.default;

const videos: Record<string, string> = {};
for (const [path, url] of Object.entries(videoModules)) videos[norm(fileOf(path))] = url;

export function getImage(filename: string): ImageMetadata {
  const img = images[norm(filename)];
  if (!img) {
    throw new Error(`Image introuvable : "${filename}". Vérifie qu'elle est bien dans src/assets.`);
  }
  return img;
}

export type Media =
  | { type: 'image'; src: ImageMetadata }
  | { type: 'video'; src: string };

export function getMedia(filename: string): Media {
  if (/\.(mp4|webm)$/i.test(filename)) {
    const src = videos[norm(filename)];
    if (!src) throw new Error(`Vidéo introuvable : "${filename}". Vérifie qu'elle est bien dans src/assets.`);
    return { type: 'video', src };
  }
  return { type: 'image', src: getImage(filename) };
}