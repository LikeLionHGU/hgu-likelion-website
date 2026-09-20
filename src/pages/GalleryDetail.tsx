import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';
import GalleryLightbox from '../components/GalleryLightbox';
import {
  AlbumContent,
  AlbumField,
  AlbumLabel,
  AlbumMetadata,
  AlbumPage,
  AlbumPhotoButton,
  AlbumPhotoGrid,
  AlbumPhotoImage,
  AlbumTitle,
  AlbumValue,
} from '../components/Gallery.styles';
import { GalleryAlbum, galleryAlbums } from '../utils/gallery';

function Album({ album }: { album: GalleryAlbum }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <Helmet><title>{album.title} | 갤러리 | 멋쟁이사자처럼 한동대</title></Helmet>
      <AlbumPage component="main">
        <AlbumContent>
          <AlbumTitle variantMapping={{ body1: 'h1' }}>{album.title}</AlbumTitle>
          <AlbumMetadata component="dl">
            <AlbumField>
              <AlbumLabel variantMapping={{ body1: 'dt' }}>Generation</AlbumLabel>
              <AlbumValue variantMapping={{ body1: 'dd' }}>{album.generation}th</AlbumValue>
            </AlbumField>
            <AlbumField>
              <AlbumLabel variantMapping={{ body1: 'dt' }}>Date</AlbumLabel>
              <AlbumValue variantMapping={{ body1: 'dd' }}>{album.date}</AlbumValue>
            </AlbumField>
          </AlbumMetadata>
          <AlbumPhotoGrid>
            {album.photos.map((photo, index) => (
              <AlbumPhotoButton
                key={photo.id}
                aria-label={`${album.title} 사진 ${index + 1} 확대`}
                aria-haspopup="dialog"
                onClick={() => setSelectedIndex(index)}
              >
                <AlbumPhotoImage src={photo.thumbnail} alt={photo.alt} loading="lazy" />
              </AlbumPhotoButton>
            ))}
          </AlbumPhotoGrid>
        </AlbumContent>
      </AlbumPage>
      <GalleryLightbox
        title={album.title}
        photos={album.photos}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
        onClose={() => setSelectedIndex(null)}
      />
    </>
  );
}

export default function GalleryDetail() {
  const { albumId } = useParams();
  const album = galleryAlbums.find(({ id }) => id === albumId);
  return album ? <Album key={album.id} album={album} /> : <Navigate to="/gallery" replace />;
}
