import { Box, Chip, Grid, Tab, Tabs, Typography, styled } from '@mui/material';
import { ProjectContent, ProjectPage, ProjectTitle } from './Project.styles';

export const TEAM_ORANGE = '#FF731D';

export const TeamPage = styled(ProjectPage)(({ theme }) => ({
  paddingBottom: 'clamp(140px, 24.21875vw, 465px)',
  [theme.breakpoints.down('md')]: { paddingTop: 156, paddingBottom: 140 },
}));

export const TeamContent = styled(ProjectContent)(({ theme }) => ({
  [theme.breakpoints.down('md')]: { paddingLeft: 30, paddingRight: 30 },
}));

export const TeamTitle = styled(ProjectTitle)(({ theme }) => ({
  [theme.breakpoints.down('md')]: { fontSize: 26, lineHeight: '31px' },
}));

export const MobileGeneration = styled('span')(({ theme }) => ({
  display: 'none', color: '#868585', fontFamily: 'inherit',
  [theme.breakpoints.down('md')]: { display: 'inline' },
}));

export const TeamLayout = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(130px, 395fr) minmax(0, 1295fr)',
  columnGap: 'clamp(24px, 2.083333vw, 40px)',
  marginTop: 'clamp(64px, 6.71875vw, 129px)',
  alignItems: 'start',
  [theme.breakpoints.down('md')]: { display: 'block', marginTop: 24 },
}));

export const TeamSidebar = styled('nav')(({ theme }) => ({
  display: 'grid', gap: 81, alignContent: 'start',
  [theme.breakpoints.down('md')]: { display: 'none' },
}));

export const TeamMobileTabs = styled(Tabs)(({ theme }) => ({
  display: 'none', minHeight: 31, borderBottom: '1px solid rgba(255,255,255,0.5)',
  '& .MuiTabs-indicator': { backgroundColor: TEAM_ORANGE, height: 2 },
  '& .MuiTabs-flexContainer': { gap: 45 },
  [theme.breakpoints.down('md')]: { display: 'flex', marginRight: -30 },
}));

export const TeamMobileTab = styled(Tab)(({ theme }) => ({
  minWidth: 0, minHeight: 31, padding: '0 0 9px', opacity: 1,
  color: theme.palette.common.white, fontSize: 18, lineHeight: 1.2, fontWeight: 700,
  textTransform: 'uppercase',
  '&:not(:last-of-type)': { marginRight: 0 },
  '&.Mui-selected, &:not(.Mui-selected)': { color: theme.palette.common.white },
  '&:hover, &:focus-visible': { color: TEAM_ORANGE },
}));

export const TeamTrackTitle = styled(Typography)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block', margin: '54px 0 26px',
    fontSize: 20, lineHeight: '24px', fontWeight: 700, letterSpacing: 7, textAlign: 'center',
  },
}));

export const TeamCards = styled(Grid)(({ theme }) => ({
  display: 'grid', minWidth: 0,
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '45px 30px',
  [theme.breakpoints.down('xl')]: { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' },
  [theme.breakpoints.down('lg')]: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'minmax(0, 233px)', justifyContent: 'center', gap: 50,
  },
}));

export const TeamCard = styled(Box)(({ theme }) => ({
  display: 'grid', minWidth: 0, alignContent: 'start', gap: 18,
  [theme.breakpoints.down('md')]: { gap: 15 },
}));

export const ProfilePhotoButton = styled('button')(({ theme }) => ({
  position: 'relative', display: 'block', width: '100%', aspectRatio: '1',
  padding: 0, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.5)',
  background: 'transparent', color: theme.palette.common.white, cursor: 'pointer',
  '& img': {
    position: 'absolute', width: '100.91%', height: '133.36%',
    left: '-0.55%', top: '-22.95%', objectFit: 'fill',
  },
  '&:hover [data-profile-overlay], &:focus-visible [data-profile-overlay]': { opacity: 1 },
  '&:focus-visible [data-profile-overlay] span': { color: TEAM_ORANGE },
  '&:focus-visible': { outline: `2px solid ${TEAM_ORANGE}`, outlineOffset: 4 },
}));

export const ProfileOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.8)', opacity: 0,
  '& span': {
    color: theme.palette.common.white, fontSize: 20, fontWeight: 600,
    textDecoration: 'underline', textUnderlineOffset: 3,
    '&:hover': { color: TEAM_ORANGE },
  },
}));

export const ProfileInfo = styled(Box)({ display: 'grid', gap: 5 });
export const ProfileNameRow = styled(Box)(({ theme }) => ({
  display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 10,
  [theme.breakpoints.down('md')]: { justifyContent: 'space-between' },
}));
export const ProfileName = styled(Typography)(({ theme }) => ({
  fontSize: 22, fontWeight: 700, lineHeight: 1.2,
  [theme.breakpoints.down('md')]: { fontSize: 18 },
}));
export const ProfileMajor = styled(Typography)(({ theme }) => ({
  color: '#868585', fontSize: 18, fontWeight: 500, lineHeight: 1.2,
  [theme.breakpoints.down('md')]: { fontSize: 16 },
}));
export const ProfileRole = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'isStudent',
})<{ isStudent: boolean }>(({ theme, isStudent }) => ({
  height: 25, borderRadius: 20, borderColor: isStudent ? theme.palette.common.white : TEAM_ORANGE,
  color: isStudent ? theme.palette.common.white : TEAM_ORANGE,
  fontSize: 15, fontWeight: 600,
  '& .MuiChip-label': { padding: '0 15px' },
}));

export const TeamEmpty = styled(Typography)({ gridColumn: '1 / -1', padding: '40px 0', color: '#868585' });
