import { Box, Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MainPage = styled(Box)(({ theme }) => ({
  width: '100vw',
  marginLeft: 'calc(50% - 50vw)',
  padding: 'clamp(5rem, 9vw, 10.625rem) clamp(1.5rem, 5vw, 6rem)',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.common.black,
}));

export const ContentSection = styled('section')(({ theme }) => ({
  width: '100%',
  maxWidth: 1730,
  margin: '0 auto',
  padding: 'clamp(4.5rem, 9vw, 10rem) 0',
  [theme.breakpoints.down('md')]: { padding: '4.5rem 0' },
}));

export const IntroGrid = styled(Grid)(({ theme }) => ({
  alignItems: 'start',
  marginBottom: 'clamp(2.5rem, 5vw, 5rem)',
  [theme.breakpoints.down('md')]: { rowGap: '2rem' },
}));

export const IntroTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: 'clamp(2rem, 3.2vw, 3.75rem)',
  fontWeight: theme.typography.fontWeightBold,
  lineHeight: 1.15,
  whiteSpace: 'pre-line',
}));

export const FeatureList = styled(Box)({ display: 'grid', gap: '0.5rem' });

export const FeatureRow = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '5rem 1fr',
  gap: '1rem',
  fontSize: 'clamp(0.875rem, 1vw, 1.125rem)',
  lineHeight: 1.5,
  [theme.breakpoints.down('sm')]: { gridTemplateColumns: '4.5rem 1fr', gap: '0.5rem' },
}));

export const FeatureLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: theme.typography.fontWeightBold,
}));

export const FeatureDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[300],
  wordBreak: 'keep-all',
}));

export const MoveButton = styled(Button)(({ theme }) => ({
  marginTop: '1.75rem',
  padding: '0.625rem 1.125rem',
  color: theme.palette.primary.contrastText,
  borderColor: theme.palette.primary.main,
  borderRadius: 999,
  fontWeight: theme.typography.fontWeightMedium,
  backgroundColor: 'rgba(243, 114, 15, 0.15)',
  '&:hover': {
    backgroundColor: 'rgba(243, 114, 15, 0.25)',
  },
}));

export const SectionImage = styled('img')({ display: 'block', width: '100%', height: 'auto' });

export const AccomplishmentTitle = styled(SectionImage)({
  marginBottom: 'clamp(2rem, 4vw, 4rem)',
});

export const AccomplishmentGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: { rowGap: '1.5rem' },
}));

export const AccomplishmentCard = styled(Box)({
  display: 'grid',
  gap: '0.875rem',
});

export const AccomplishmentCaption = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: 'clamp(0.875rem, 1vw, 1.125rem)',
  fontWeight: theme.typography.fontWeightMedium,
}));

export const AccomplishmentImage = styled('img')({
  display: 'block',
  width: '100%',
  aspectRatio: '16 / 9',
  objectFit: 'cover',
  borderRadius: 8,
});

export const TrackGrid = styled(Grid)(({ theme }) => ({
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: { rowGap: '2rem' },
}));

export const TrackCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 8,
  height: 330,
  padding: '30px 34px',
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: 4,
  justifyContent: 'space-between',
  color: theme.palette.primary.main,
  backgroundColor: 'rgba(243, 114, 15, 0.1)',
  cursor: 'pointer',
  transition: 'background-color 160ms ease, color 160ms ease',
  '&:hover': {
    color: theme.palette.common.black,
    backgroundColor: 'rgba(255, 115, 29, 1)',
  },
  '&:hover img': {
    filter: 'brightness(0)',
  },
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.common.white}`,
    outlineOffset: 4,
  },
  [theme.breakpoints.down('sm')]: {
    height: 210,
    padding: '1.25rem',
  },
}));

export const TrackIcon = styled('img')({
  width: 121,
  height: 107,
  objectFit: 'contain',
  transition: 'filter 160ms ease',
});

export const TrackName = styled(Typography)(({ theme }) => ({
  color: 'inherit',
  fontSize: 18,
  fontWeight: theme.typography.fontWeightMedium,
  lineHeight: 1.25,
}));
