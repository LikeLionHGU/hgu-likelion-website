import { siteColors } from '../theme/siteTokens';
import { Box, Button, Grid, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MAIN_ORANGE = siteColors.accent;

export const MainPage = styled(Box)(({ theme }) => ({
  width: '100%',
  padding:
    'clamp(120px, 12.916667vw, 248px) clamp(30px, 4.947917vw, 95px) clamp(180px, 20vw, 384px)',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.common.black,
  [theme.breakpoints.down('md')]: { padding: '91px 30px 248px' },
}));

export const ContentSection = styled('section')(({ theme }) => ({
  width: '100%',
  minWidth: 0,
  maxWidth: 1730,
  margin: '0 auto',
  '& + &': { marginTop: 'clamp(250px, 31.25vw, 600px)' },
  [theme.breakpoints.down('md')]: { '& + &': { marginTop: 250 } },
}));

export const SectionLayout = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 460fr) minmax(0, 1210fr)',
  gap: 'clamp(24px, 3.125vw, 60px)',
  alignItems: 'start',
  [theme.breakpoints.down('md')]: { gridTemplateColumns: 'minmax(0, 1fr)', gap: 50 },
}));

export const IntroGrid = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
  gridTemplateAreas: '"title features" "actions actions" "photo photo"',
  columnGap: 40,
  rowGap: 70,
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'minmax(0, 1fr)',
    gridTemplateAreas: '"title" "photo" "features" "actions"',
    rowGap: 35,
  },
}));

export const FeatureList = styled(Box)(({ theme }) => ({
  gridArea: 'features',
  display: 'grid',
  gap: 14,
  justifySelf: 'end',
  minHeight: 122,
  [theme.breakpoints.down('md')]: { width: '100%', gap: 25, minHeight: 0 },
}));

export const FeatureRow = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'max-content minmax(0, 1fr)',
  gap: 'clamp(16px, 1.40625vw, 27px)',
  [theme.breakpoints.down('md')]: { gridTemplateColumns: '1fr', gap: 5 },
}));

export const IntroActions = styled(Box)(({ theme }) => ({
  gridArea: 'actions',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 30,
  marginTop: 23,
  [theme.breakpoints.down('md')]: { gap: 15, marginTop: 10, flexWrap: 'wrap' },
}));

export const MoveButton = styled(Button)<{ target?: string; rel?: string }>(({ theme }) => ({
  minWidth: 160,
  minHeight: 45,
  padding: '8px 24px',
  color: theme.palette.common.white,
  border: `1.5px solid ${siteColors.accentWarm}`,
  borderRadius: 30,
  fontSize: 18,
  fontWeight: 500,
  backgroundColor: 'rgba(243, 114, 15, 0.15)',
  '&:first-of-type': { minWidth: 200 },
  '&:hover': { borderColor: MAIN_ORANGE, backgroundColor: 'rgba(243, 114, 15, 0.25)' },
  [theme.breakpoints.down('md')]: {
    minWidth: 0,
    minHeight: 35,
    padding: '5px 20px',
    fontSize: 14,
    '&:first-of-type': { minWidth: 0 },
  },
}));

export const IntroPhoto = styled('img')(({ theme }) => ({
  gridArea: 'photo',
  display: 'block',
  width: '100%',
  aspectRatio: '1730 / 800',
  objectFit: 'cover',
  filter: 'brightness(0.48)',
  [theme.breakpoints.down('md')]: {
    width: 'calc(100% + 60px)',
    maxWidth: 'none',
    marginLeft: -30,
    aspectRatio: '390 / 215',
  },
}));

export const RuledHeading = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 20,
  '&::after': { content: '""', height: 1, flex: 1, backgroundColor: MAIN_ORANGE },
  [theme.breakpoints.down('md')]: {
    display: 'grid',
    gap: 13,
    '&::after': { width: 'calc(100% + 30px)' },
  },
}));

// Keep overflow inside each strip instead of widening the entire page.
export const HorizontalViewport = styled(Box)(({ theme }) => ({
  minWidth: 0,
  [theme.breakpoints.down('md')]: {
    width: 'calc(100% + 30px)',
    overflowX: 'auto',
    paddingRight: 30,
    paddingBottom: 10,
    scrollbarWidth: 'thin',
    scrollbarColor: `${MAIN_ORANGE} transparent`,
    overscrollBehaviorX: 'contain',
    WebkitOverflowScrolling: 'touch',
  },
  '&:focus-visible': { outline: `1px solid ${MAIN_ORANGE}`, outlineOffset: 5 },
}));

export const AccomplishmentViewport = styled(HorizontalViewport)(({ theme }) => ({
  marginTop: 20,
  [theme.breakpoints.down('md')]: { marginTop: 70 },
}));

export const AccomplishmentGrid = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: 'clamp(16px, 1.71875vw, 33px)',
  width: '69.710983%',
  marginLeft: 'auto',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    width: 'max-content',
    marginLeft: 0,
    gap: 20,
    '& > :nth-of-type(2)': { order: -1 },
  },
}));

export const AccomplishmentCard = styled(Box)(({ theme }) => ({
  minWidth: 0,
  margin: 0,
  [theme.breakpoints.down('md')]: { width: 254, flex: '0 0 254px' },
}));

export const AccomplishmentImage = styled('img')(({ theme }) => ({
  display: 'block',
  width: '100%',
  aspectRatio: '380 / 300',
  objectFit: 'cover',
  marginTop: 'clamp(70px, 7.864583vw, 151px)',
  [theme.breakpoints.down('md')]: { marginTop: 180 },
}));

export const TrackCardGrid = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  gap: 'clamp(12px, 1.5625vw, 30px)',
  [theme.breakpoints.between('md', 'lg')]: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
}));

export const TrackCard = styled(Button)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  minWidth: 0,
  width: '100%',
  aspectRatio: '280 / 333',
  padding: 'clamp(16px, 1.5625vw, 30px) clamp(16px, 1.770833vw, 34px)',
  border: `1px solid ${MAIN_ORANGE}`,
  borderRadius: 10,
  color: siteColors.accentWarm,
  backgroundColor: 'rgba(243, 114, 15, 0.1)',
  transition: 'background-color 160ms ease, color 160ms ease',
  '&:hover': { color: theme.palette.common.black, backgroundColor: MAIN_ORANGE },
  '&:hover img': { filter: 'brightness(0)' },
  '&:focus-visible': { outline: `2px solid ${theme.palette.common.white}`, outlineOffset: 4 },
  '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
}));

export const TrackIcon = styled('img')({
  width: 'min(100%, 121px)',
  height: 'clamp(66px, 5.572917vw, 107px)',
  objectFit: 'contain',
  objectPosition: 'left',
});

export const MobileTrackTabs = styled(Tabs)({
  marginTop: 20,
  marginBottom: 40,
  minHeight: 32,
  borderBottom: '1px solid rgba(255,255,255,0.35)',
  '& .MuiTabs-flexContainer': { gap: 45 },
  '& .MuiTabs-indicator': { backgroundColor: MAIN_ORANGE, height: 2 },
});

export const MobileTrackTab = styled(Tab)(({ theme }) => ({
  minWidth: 0,
  minHeight: 32,
  padding: '0 0 9px',
  flexShrink: 0,
  color: theme.palette.common.white,
  fontSize: 16,
  fontWeight: theme.typography.fontWeightBold,
  '&.Mui-selected': { color: theme.palette.common.white },
  '&:not(.Mui-selected)': { color: theme.palette.common.white },
  '&:not(:last-of-type)': { marginRight: 0 },
}));

export const RecruitmentLayout = styled(SectionLayout)(({ theme }) => ({
  [theme.breakpoints.down('md')]: { gap: 70 },
}));

export const RecruitmentHeading = styled(RuledHeading)(({ theme }) => ({
  '&::after': { display: 'none' },
  [theme.breakpoints.down('md')]: { '&::after': { display: 'block' } },
}));

export const RecruitmentGrid = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '324fr 356fr 231fr',
  gap: 'clamp(24px, 5.208333vw, 100px)',
  maxWidth: 1111,
  [theme.breakpoints.down('md')]: { display: 'flex', gap: 70, width: 'max-content' },
}));

export const RecruitmentCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingLeft: 'clamp(16px, 1.5625vw, 30px)',
  minHeight: 275,
  borderLeft: '1px solid rgba(255,255,255,0.55)',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: -1,
    top: 0,
    width: 1,
    height: '25%',
    background: MAIN_ORANGE,
  },
  [theme.breakpoints.down('md')]: { width: 230, minHeight: 192, paddingLeft: 20, flexShrink: 0 },
}));

export const RecruitmentList = styled('ul')(({ theme }) => ({
  margin: '50px 0 0',
  paddingLeft: '1.35em',
  fontSize: 'clamp(14px, 1.041667vw, 20px)',
  lineHeight: 1.5,
  wordBreak: 'keep-all',
  [theme.breakpoints.down('md')]: { marginTop: 35, fontSize: 14 },
}));

export const FaqLayout = styled(SectionLayout)(({ theme }) => ({
  [theme.breakpoints.down('md')]: { gap: 60 },
}));
export const FaqHeading = RecruitmentHeading;

export const FaqList = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: 40,
  margin: '30px 0 0',
  borderTop: `1px solid ${MAIN_ORANGE}`,
  paddingTop: 60,
  [theme.breakpoints.down('md')]: { margin: 0, border: 0, padding: 0, gap: 50, maxWidth: 600 },
}));
