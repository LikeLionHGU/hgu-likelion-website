import { Typography, Box } from '@mui/material';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';
import GalleryLightbox from '../components/GalleryLightbox';
import {
  AlbumContent,
  AlbumMetadata,
  AlbumPage,
  AlbumPhotoButton,
  AlbumPhotoGrid,
  AlbumPhotoImage,
} from '../components/Gallery.styles';
import { GalleryAlbum, galleryAlbums } from '../utils/gallery';

function Album({ album }: { album: GalleryAlbum }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>{album.title} | 갤러리 | 멋쟁이사자처럼 한동대</title>
      </Helmet>
      <AlbumPage component="main">
        <AlbumContent>
          <Typography
            variant="albumTitle"
            component="h1"
            sx={{
              ml: 'clamp(0rem, 0.260417vw, 0.3125rem)',
              color: 'site.accent',
              wordBreak: 'keep-all',
              overflowWrap: 'anywhere',
            }}
          >
            {album.title}
          </Typography>
          <AlbumMetadata component="dl">
            <Box component="div" sx={{ display: 'grid', gap: '10px', minWidth: 0 }}>
              <Typography variant="captionLarge" component="dt" sx={{ m: 0, color: 'site.muted' }}>
                Generation
              </Typography>
              <Typography variant="bodyLarge" component="dd" sx={{ m: 0, color: 'common.white' }}>
                {album.generation}th
              </Typography>
            </Box>
            <Box component="div" sx={{ display: 'grid', gap: '10px', minWidth: 0 }}>
              <Typography variant="captionLarge" component="dt" sx={{ m: 0, color: 'site.muted' }}>
                Date
              </Typography>
              <Typography variant="bodyLarge" component="dd" sx={{ m: 0, color: 'common.white' }}>
                {album.date}
              </Typography>
            </Box>
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
