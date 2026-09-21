import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import scheduleArrow from '../assets/main/schedule-arrow.svg';
import { HorizontalViewport, MAIN_ORANGE, SectionLayout } from './Main.styles';

const ScheduleViewport = styled(HorizontalViewport)(({ theme }) => ({
  overflowX: 'auto',
  marginTop: 20,
  [theme.breakpoints.down('md')]: { marginTop: 0 },
}));

const ScheduleCanvas = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  minWidth: 760,
  height: 463,
  [theme.breakpoints.down('md')]: { width: 825, minWidth: 825, height: 278 },
}));

const Seasons = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: '4.5%',
  [theme.breakpoints.down('md')]: { gridTemplateColumns: 'repeat(3, 220px)', gap: 33 },
}));

const Season = styled(Box)(({ theme }) => ({
  position: 'relative',
  minWidth: 0,
  '& + &::before': {
    content: '""',
    position: 'absolute',
    top: 45,
    left: 10,
    width: 1,
    height: 417,
    background: 'linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0))',
  },
  [theme.breakpoints.down('md')]: { '& + &::before': { top: 27, left: 6, height: 251 } },
}));

const SeasonArrow = styled('img')(({ theme }) => ({
  display: 'block',
  width: '100%',
  height: 'clamp(12px, 1.041667vw, 20px)',
  [theme.breakpoints.down('md')]: { height: 12 },
}));

const SeasonText = styled(Box)(({ theme }) => ({
  margin: '30px 0 0 40px',
  display: 'grid',
  gap: 5,
  [theme.breakpoints.down('md')]: { margin: '18px 0 0 24px', gap: 4 },
}));

const ScheduleEvent = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 40,
  border: `1px solid ${MAIN_ORANGE}`,
  borderRadius: 20,
  background: 'rgba(243,114,15,0.5)',
  color: theme.palette.common.white,
  fontSize: 'clamp(14px, 1.041667vw, 20px)',
  fontWeight: 600,
  lineHeight: 1.2,
  whiteSpace: 'nowrap',
  '&[data-event="session"]': { left: '3.3%', top: 181, width: '50.2%' },
  '&[data-event="meeting"]': { left: '3.3%', top: 246, width: '50.2%' },
  '&[data-event="mt"]': { left: '14.7%', top: 310, width: '7.95%' },
  '&[data-event="hackathon"]': { left: '23.85%', top: 310, width: '9.5%' },
  '&[data-event="ideathon"]': { left: '52.5%', top: 310, width: '14.8%' },
  '&[data-event="union"]': {
    left: '72.7%',
    top: 375,
    width: '27.3%',
    fontSize: 'clamp(12px, 1.041667vw, 20px)',
  },
  '&[data-event="hackathon"], &[data-event="ideathon"], &[data-event="union"]': {
    background: 'rgba(235,89,0,0.5)',
    borderColor: '#EB5900',
  },
  [theme.breakpoints.down('md')]: {
    height: 26,
    fontSize: 14,
    borderRadius: 13,
    '&[data-event="session"]': { left: 24, top: 110, width: 365 },
    '&[data-event="meeting"]': { left: 24, top: 149, width: 365 },
    '&[data-event="mt"]': { left: 108, top: 186, width: 58 },
    '&[data-event="hackathon"]': { left: 176, top: 186, width: 70 },
    '&[data-event="ideathon"]': { left: 384, top: 186, width: 110 },
    '&[data-event="union"]': { left: 530, top: 226, width: 226, fontSize: 14 },
  },
}));

const seasons = [
  { title: '겨울방학', description: '개인 역량 향상' },
  { title: '1학기', description: '협업 경험' },
  { title: '여름방학', description: '실전 경험' },
];

export default function MainSchedule() {
  return (
    <SectionLayout>
      <Typography
        variant="sectionTitle"
        component="h2"
        id="main-schedule-title"
        sx={{ m: 0, color: 'common.white' }}
      >
        Main schedule
      </Typography>
      <ScheduleViewport role="region" aria-label="연간 활동 일정, 좌우로 스크롤" tabIndex={0}>
        <ScheduleCanvas>
          <Seasons>
            {seasons.map((season) => (
              <Season key={season.title}>
                <SeasonArrow src={scheduleArrow} alt="" aria-hidden="true" />
                <SeasonText>
                  <Typography
                    variant="timelineTitle"
                    component="h3"
                    sx={{ m: 0, color: 'site.accent' }}
                  >
                    {season.title}
                  </Typography>
                  <Typography component="p" variant="timelineBody" sx={{ color: '#C4C4C4' }}>
                    {season.description}
                  </Typography>
                </SeasonText>
              </Season>
            ))}
          </Seasons>
          <ScheduleEvent data-event="session">트랙세션</ScheduleEvent>
          <ScheduleEvent data-event="meeting">필드미팅</ScheduleEvent>
          <ScheduleEvent data-event="mt">MT</ScheduleEvent>
          <ScheduleEvent data-event="hackathon">해커톤</ScheduleEvent>
          <ScheduleEvent data-event="ideathon">아이디어톤</ScheduleEvent>
          <ScheduleEvent data-event="union">전국 멋쟁이사자처럼 연합 해커톤</ScheduleEvent>
        </ScheduleCanvas>
      </ScheduleViewport>
    </SectionLayout>
  );
}
