import { Box, IconButton, Modal, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TrackDialog = styled(Modal)({
  display: 'grid',
  placeItems: 'center',
  padding: '1.5rem',
  '& .MuiBackdrop-root': { backgroundColor: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(8px)' },
});

export const TrackDialogContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  boxSizing: 'border-box',
  width: '80%',
  height: 'min(1510px, calc(100vh - 3rem))',
  overflowY: 'auto',
  padding: '6.5rem 15rem 7rem',
  border: '1px solid rgba(255, 255, 255, 0.5)',
  borderRadius: 10,
  outline: 'none',
  color: theme.palette.common.white,
  backgroundColor: 'rgba(22, 22, 22, 0.85)',
  [theme.breakpoints.down('md')]: { padding: '5rem 4rem 6rem' },
  [theme.breakpoints.down('sm')]: {
    height: 'calc(100vh - 2rem)',
    padding: '4.5rem 1.5rem',
  },
}));

export const TrackDialogCloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 40,
  right: 45,
  width: 35,
  height: 35,
  padding: 0,
  color: 'rgba(255, 255, 255, 0.7)',
  '& .MuiSvgIcon-root': { fontSize: 35 },
  '&:hover': { color: theme.palette.common.white, backgroundColor: 'transparent' },
  [theme.breakpoints.down('sm')]: { top: 20, right: 20 },
}));

export const TrackDialogTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 48,
  fontWeight: theme.typography.fontWeightBold,
  letterSpacing: '-0.04em',
  lineHeight: 1,
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: { fontSize: 32 },
}));

export const TrackDialogContent = styled(Box)(({ theme }) => ({
  display: 'grid',
  width: '100%',
  maxWidth: 645,
  gap: 200,
  margin: '9.5rem auto 0',
  [theme.breakpoints.down('sm')]: { gap: '5rem', marginTop: '5rem' },
}));

export const TrackDialogSection = styled('section')({ display: 'grid', gap: 44 });

export const TrackDialogSectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: 24,
  fontWeight: theme.typography.fontWeightBold,
  lineHeight: 1.2,
  [theme.breakpoints.down('sm')]: { fontSize: 18 },
}));

export const CurriculumList = styled('ol')({
  position: 'relative',
  display: 'grid',
  gap: 32,
  margin: 0,
  padding: 0,
  listStyle: 'none',
  '&::before': {
    position: 'absolute',
    top: 12,
    bottom: 12,
    left: 10,
    width: 1,
    content: '""',
    backgroundColor: '#FF731D',
  },
});

export const CurriculumListItem = styled('li')({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '20px 56px minmax(0, 1fr)',
  alignItems: 'center',
  columnGap: 16,
});

export const CurriculumMarker = styled(Box)({
  zIndex: 1,
  width: 20,
  height: 20,
  borderRadius: '50%',
  backgroundColor: '#FF731D',
});

export const CurriculumWeek = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: 18,
  fontWeight: theme.typography.fontWeightBold,
  lineHeight: 1.4,
}));

export const TrackDialogDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: 18,
  lineHeight: 1.5,
  wordBreak: 'keep-all',
  [theme.breakpoints.down('sm')]: { fontSize: 14 },
}));

export const LookingForList = styled('ol')({
  display: 'grid',
  gap: 24,
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

export const LookingForListItem = styled('li')({
  display: 'grid',
  gridTemplateColumns: '24px minmax(0, 1fr)',
  columnGap: 16,
  alignItems: 'start',
});

export const LookingForMarker = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 18,
  fontWeight: theme.typography.fontWeightBold,
  lineHeight: 1.5,
}));
