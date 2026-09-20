import { Box, ButtonBase, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  ProjectCard,
  ProjectCardGrid,
  ProjectCardInfo,
  ProjectContent,
  ProjectGeneration,
  ProjectImageWrap,
  ProjectLayout,
  ProjectName,
  ProjectOverlay,
  ProjectPage,
  ProjectTitle,
} from './Project.styles';

export const GALLERY_ORANGE = '#FF731D';

export const GalleryPage = styled(ProjectPage)({
  paddingBottom: 'clamp(5rem, 18.541667vw, 22.25rem)',
});

export const GalleryContent = styled(ProjectContent)({
  paddingRight: 'clamp(1.5rem, 5.364583vw, 6.4375rem)',
});

export const GalleryTitle = ProjectTitle;

export const GalleryLayout = styled(ProjectLayout)(({ theme }) => ({
  gridTemplateColumns: 'minmax(180px, 394fr) minmax(0, 1284fr)',
  [theme.breakpoints.down('md')]: { gridTemplateColumns: 'minmax(0, 1fr)' },
}));

export const GalleryCardGrid = styled(ProjectCardGrid)({ gap: '55px 30px' });

export const GalleryCard = styled(ProjectCard)({
  '&:hover [data-gallery-overlay], &:focus-visible [data-gallery-overlay]': { opacity: 1 },
  '&:focus-visible [data-gallery-overlay]': { color: GALLERY_ORANGE },
});

export const GalleryThumbnail = styled(ProjectImageWrap)({ aspectRatio: '408 / 300' });

export const GalleryOverlay = styled(ProjectOverlay)({ fontSize: 22.767 });

export const GalleryCardInfo = styled(ProjectCardInfo)({ gap: 5 });

export const GalleryName = styled(ProjectName)({
  fontSize: 22,
  lineHeight: 26 / 22,
  wordBreak: 'keep-all',
  '&:hover': { color: GALLERY_ORANGE },
});

export const GalleryGeneration = styled(ProjectGeneration)({ width: 64, height: 25, fontSize: 15 });

export const GalleryDate = styled(Typography)({
  color: '#868585',
  fontSize: 18,
  fontWeight: 500,
  lineHeight: 21 / 18,
  '&:hover': { color: GALLERY_ORANGE },
});

export const GalleryEmpty = styled(Typography)({ color: '#868585', fontSize: 18, lineHeight: 1.5 });

export const AlbumPage = styled(GalleryPage)({
  paddingBottom: 'clamp(5rem, 19.53125vw, 23.4375rem)',
});

export const AlbumContent = styled(ProjectContent)({
  paddingLeft: 'clamp(1.5rem, 4.6875vw, 5.625rem)',
  paddingRight: 'clamp(1.5rem, 5.208333vw, 6.25rem)',
});

export const AlbumTitle = styled(ProjectTitle)({
  marginLeft: 'clamp(0rem, 0.260417vw, 0.3125rem)',
  fontFamily: '"Lemon Milk", Pretendard, sans-serif',
  fontSize: 'clamp(2rem, 3.125vw, 3.75rem)',
  color: GALLERY_ORANGE,
  wordBreak: 'keep-all',
  overflowWrap: 'anywhere',
});

export const AlbumMetadata = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: 24,
  width: 409,
  maxWidth: '100%',
  margin: '34px 0 60px',
  // Align the metadata with the third photo column at the Figma desktop width.
  marginLeft: 'min(calc((100% + 40px) * 2 / 3), calc(100% - 409px))',
  [theme.breakpoints.down('lg')]: { marginLeft: 'auto' },
  [theme.breakpoints.down('sm')]: { margin: '28px 0 40px', justifyContent: 'flex-start', gap: 48 },
}));

export const AlbumField = styled(Box)({ display: 'grid', gap: 10, minWidth: 0 });

export const AlbumLabel = styled(Typography)({
  margin: 0,
  fontSize: 18,
  color: '#868585',
  fontWeight: 500,
  lineHeight: 21 / 18,
});

export const AlbumValue = styled(Typography)(({ theme }) => ({
  margin: 0,
  fontSize: 20,
  color: theme.palette.common.white,
  fontWeight: 500,
  lineHeight: 1.2,
}));

export const AlbumPhotoGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: '60px 40px',
  [theme.breakpoints.down('lg')]: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
  [theme.breakpoints.down('sm')]: { gridTemplateColumns: 'minmax(0, 1fr)', rowGap: 32 },
}));

export const AlbumPhotoButton = styled(ButtonBase)({
  position: 'relative',
  display: 'block',
  minWidth: 0,
  width: '100%',
  aspectRatio: '550 / 405',
  overflow: 'hidden',
  borderRadius: 0,
  transition: 'box-shadow 180ms ease',
  '&:hover, &.Mui-focusVisible': { boxShadow: '0 0 50px 19px rgba(255, 115, 29, 0.15)' },
  '&:hover img, &.Mui-focusVisible img': { transform: 'scale(1.1)' },
  '&.Mui-focusVisible': { outline: `2px solid ${GALLERY_ORANGE}`, outlineOffset: 4 },
  '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
});

export const AlbumPhotoImage = styled('img')({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transformOrigin: 'center top',
  transition: 'transform 180ms ease',
  '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
});
