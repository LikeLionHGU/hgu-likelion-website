import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const PROJECT_ORANGE = '#FF731D';

export const ProjectPage = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: 'calc(100vh - 354px)',
  padding: 'clamp(10rem, 18.229167vw, 21.875rem) 0 clamp(5rem, 18.177083vw, 21.8125rem)',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.common.black,
}));

export const ProjectContent = styled(Box)({
  width: '100%',
  maxWidth: 1920,
  margin: '0 auto',
  paddingLeft: 'clamp(1.5rem, 4.947917vw, 5.9375rem)',
  paddingRight: 'clamp(1.5rem, 5.208333vw, 6.25rem)',
});

export const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Lemon Milk", sans-serif',
  fontSize: 'clamp(2rem, 3.90625vw, 4.6875rem)',
  fontWeight: theme.typography.fontWeightBold,
  lineHeight: 1.35,
  letterSpacing: 0,
}));

export const ProjectLayout = styled(Box)(({ theme }) => ({
  display: 'grid',
  // Figma: sidebar starts at x=95, cards at x=533 in the 1920px frame.
  gridTemplateColumns: 'minmax(180px, 394fr) minmax(0, 1287fr)',
  columnGap: 'clamp(1.5rem, 2.291667vw, 2.75rem)',
  alignItems: 'start',
  marginTop: 'clamp(4rem, 6.705729vw, 8.046875rem)',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    rowGap: '3rem',
  },
}));

export const ProjectFilter = styled('nav')(({ theme }) => ({
  display: 'grid',
  minWidth: 0,
  alignContent: 'start',
  justifyItems: 'start',
  gap: 81,
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'max-content minmax(0, 1fr)',
  },
}));

export const FilterGroup = styled(Box)({
  display: 'grid',
  alignContent: 'start',
  justifyItems: 'start',
  minWidth: 0,
  gap: 20,
});

export const FilterLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: 22,
  fontWeight: theme.typography.fontWeightBold,
  lineHeight: 1.2,
  textAlign: 'left',
  whiteSpace: 'nowrap',
}));

export const FilterList = styled(Box)({ display: 'grid', gap: 15, justifyItems: 'start' });

export const FilterButton = styled('button')(({ theme }) => ({
  padding: 0,
  border: 0,
  color: '#868585',
  font: 'inherit',
  fontSize: 20,
  lineHeight: 1.2,
  textAlign: 'left',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  background: 'transparent',
  '&[aria-current="true"]': {
    color: theme.palette.common.white,
    fontWeight: 800,
    textDecoration: 'underline',
    textUnderlinePosition: 'under',
  },
  '&:hover, &:focus-visible': { color: PROJECT_ORANGE, textDecoration: 'underline' },
  '&:focus-visible': { outline: `1px solid ${theme.palette.common.white}`, outlineOffset: 4 },
}));

export const ProjectCardGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  minWidth: 0,
  // Count columns from the space remaining after the sidebar, not viewport width.
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 20rem), 1fr))',
  gap: '65px clamp(1.5rem, 2.291667vw, 2.75rem)',
  alignItems: 'start',
  [theme.breakpoints.down('sm')]: { rowGap: '3rem' },
}));

export const ProjectCard = styled(Link)(({ theme }) => ({
  display: 'grid',
  alignContent: 'start',
  gap: 20,
  minWidth: 0,
  color: theme.palette.common.white,
  cursor: 'pointer',
  textDecoration: 'none',
  '&:focus-visible': { outline: `2px solid ${PROJECT_ORANGE}`, outlineOffset: 6 },
  '&:hover [data-project-overlay], &:focus-within [data-project-overlay]': { opacity: 1 },
}));

export const ProjectImageWrap = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  aspectRatio: '5 / 3',
});

export const ProjectImage = styled('img')({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const ProjectOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  display: 'grid',
  placeItems: 'center',
  opacity: 0,
  color: theme.palette.common.white,
  fontSize: 22,
  fontWeight: theme.typography.fontWeightMedium,
  textDecoration: 'underline',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  transition: 'opacity 160ms ease',
  '& span:hover': { color: PROJECT_ORANGE },
  '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
}));

export const ProjectCardInfo = styled(Box)({ display: 'grid', minWidth: 0, gap: 10 });

export const ProjectCardHeader = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: 12,
  minWidth: 0,
});

export const ProjectCardHeading = styled(Box)({
  display: 'flex',
  flex: 1,
  flexWrap: 'wrap',
  alignItems: 'center',
  minWidth: 0,
  gap: '8px 15px',
});

export const ProjectName = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: 26,
  fontWeight: theme.typography.fontWeightBold,
  lineHeight: 1.2,
  overflowWrap: 'anywhere',
}));

export const ProjectScope = styled(Typography)({
  color: '#868585',
  fontSize: 22,
  fontWeight: 500,
  lineHeight: 1.2,
  whiteSpace: 'nowrap',
});

export const ProjectGeneration = styled(Typography)(({ theme }) => ({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 70,
  height: 30,
  border: `1.138px solid ${theme.palette.common.white}`,
  borderRadius: 999,
  color: theme.palette.common.white,
  fontSize: 18.213,
  fontWeight: theme.typography.fontWeightMedium,
  lineHeight: 1.1,
  whiteSpace: 'nowrap',
}));

export const ProjectDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: 20,
  fontWeight: 500,
  lineHeight: 1.2,
  wordBreak: 'keep-all',
  overflowWrap: 'anywhere',
}));
