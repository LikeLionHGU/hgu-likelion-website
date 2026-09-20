import photo from '../assets/gallery/holiday-hackathon.jpg';
import thumbnail from '../assets/gallery/holiday-thumbnail.png';

export interface GalleryPhoto {
  id: string;
  src: string;
  thumbnail: string;
  alt: string;
}

export interface GalleryAlbum {
  id: string;
  title: string;
  generation: number;
  listDate: string;
  date: string;
  photos: GalleryPhoto[];
}

export const galleryGenerations = [13, 12, 11];

// Figma repeats this sample photo nine times. Replace the entries with real photos later.
export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 'holiday-hackathon-13',
    title: '홀리데이 해커톤',
    generation: 13,
    // The list and detail dates differ in Figma; preserve them until confirmed.
    listDate: '2025.01. 28',
    date: '2025.01.24',
    photos: Array.from({ length: 9 }, (_, index) => ({
      id: `holiday-${index + 1}`,
      src: photo,
      thumbnail,
      alt: `홀리데이 해커톤 단체 사진 ${index + 1}`,
    })),
  },
];

// The supplied list is also a nine-card sample, not nine different events.
export const galleryCards = Array.from({ length: 9 }, (_, index) => ({
  key: `holiday-album-${index + 1}`,
  album: galleryAlbums[0],
}));
