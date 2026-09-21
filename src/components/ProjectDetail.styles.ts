import { siteColors } from '../theme/siteTokens';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const PROJECT_ORANGE = siteColors.accent;

export const DetailPage = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.common.black,
  paddingTop: 'clamp(9rem, 13.020833vw, 15.625rem)',
  paddingBottom: 'clamp(5rem, 13.541667vw, 16.25rem)',
}));

export const DetailLayout = styled(Box)(({ theme }) => ({
  display: 'grid',
  // Figma's 1920px frame: title x=90, summary/gallery x=620, gallery width=1210.
  gridTemplateColumns: 'minmax(260px, 363.32fr) minmax(0, 1210fr)',
  gridTemplateAreas: '"identity summary" "team gallery"',
  columnGap: 'clamp(2rem, 8.682292vw, 10.41875rem)',
  rowGap: 60,
  maxWidth: 1920,
  margin: '0 auto',
  padding: '0 clamp(1.5rem, 4.6875vw, 5.625rem)',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'minmax(0, 1fr)',
    gridTemplateAreas: '"identity" "summary" "gallery" "team"',
    rowGap: 48,
  },
}));

export const DetailSummary = styled(Box)(({ theme }) => ({
  gridArea: 'summary',
  display: 'grid',
  alignContent: 'start',
  gap: 'clamp(2.5rem, 3.90625vw, 4.6875rem)',
  minWidth: 0,
  maxWidth: 1080,
  [theme.breakpoints.down('md')]: { gap: 32 },
}));

export const DetailField = styled(Box)({
  display: 'grid',
  alignContent: 'start',
  minWidth: 0,
  gap: 10,
});

export const DetailMetadata = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '24px 32px',
  width: '100%',
  maxWidth: 993,
  margin: 0,
  [theme.breakpoints.down('sm')]: { justifyContent: 'flex-start', columnGap: 40 },
}));

export const DeliverableList = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 18,
  margin: 0,
  paddingTop: 5,
});

export const DeliverableIcon = styled('img')({ display: 'block', height: 31.065, width: 'auto' });

export const DeliverableLink = styled('a')({
  display: 'inline-flex',
  '&:hover': { opacity: 0.7 },
  '&:focus-visible': { outline: `2px solid ${PROJECT_ORANGE}`, outlineOffset: 6 },
});

export const DetailTeam = styled(Box)({
  gridArea: 'team',
  alignSelf: 'end',
  display: 'grid',
  gap: 24,
  minWidth: 0,
  width: '100%',
  maxWidth: 245.527,
});

export const TeamMember = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'minmax(90px, 120.5px) minmax(0, 1fr)',
  alignItems: 'center',
  minWidth: 0,
});

export const Gallery = styled(Box)({
  gridArea: 'gallery',
  position: 'relative',
  minWidth: 0,
  alignSelf: 'start',
  touchAction: 'pan-y',
  '&:focus-visible': { outline: `2px solid ${PROJECT_ORANGE}`, outlineOffset: 4 },
});

export const GalleryImage = styled('img')({
  display: 'block',
  width: '100%',
  aspectRatio: '1210 / 730',
  objectFit: 'contain',
  backgroundColor: '#FCFFFF',
});

export const GalleryPeek = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 'calc(100% + 20px)',
  top: 0,
  height: '100%',
  pointerEvents: 'none',
  '& img': { height: '100%', width: 'auto', maxWidth: 'none' },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },
  [theme.breakpoints.down('md')]: { display: 'none' },
}));

export const GalleryArrow = styled(IconButton)({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: 44,
  height: 44,
  padding: 9.5,
  color: PROJECT_ORANGE,
  borderRadius: 0,
  '& img': { width: '100%', height: 'auto' },
  '&[data-direction="previous"]': {
    left: 'clamp(0rem, 1.510417vw, 1.8125rem)',
    '& img': { transform: 'rotate(180deg)' },
  },
  '&[data-direction="next"]': { right: 'clamp(0rem, 1.875vw, 2.25rem)' },
  '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.08)' },
  '&.Mui-focusVisible': { outline: `2px solid ${PROJECT_ORANGE}`, outlineOffset: 2 },
});
