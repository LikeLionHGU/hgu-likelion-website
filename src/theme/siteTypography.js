import { siteFonts } from './siteTokens';

// Typography only: layout, semantic HTML tags and contextual colors stay at the call site.
// Match MUI's existing sm/md breakpoints, including the exclusive upper bound.
const mobile = '@media (max-width:899.95px)';
const small = '@media (max-width:599.95px)';
const text = (fontSize, fontWeight = 400, lineHeight = 1.2) => ({
  fontFamily: siteFonts.body,
  fontSize,
  fontWeight,
  lineHeight,
});
const pageTitle = {
  ...text('clamp(2rem, 3.90625vw, 4.6875rem)', 700, 1.35),
  fontFamily: siteFonts.display,
  letterSpacing: 0,
};
const sectionTitle = {
  ...text('clamp(24px, 2.34375vw, 45px)', 700, 1.35),
  fontFamily: siteFonts.displayWithKorean,
  letterSpacing: 0,
  [mobile]: { fontSize: 20 },
};

const siteTypography = {
  pageTitle,
  teamPageTitle: { ...pageTitle, [mobile]: { fontSize: 26, lineHeight: '31px' } },
  albumTitle: {
    ...pageTitle,
    fontFamily: siteFonts.displayWithKorean,
    fontSize: 'clamp(2rem, 3.125vw, 3.75rem)',
  },
  detailTitle: { ...pageTitle, fontSize: 'clamp(2.25rem, 2.604167vw, 3.125rem)', lineHeight: 1.36 },
  sectionTitle,
  introTitle: {
    ...sectionTitle,
    fontFamily: siteFonts.body,
    lineHeight: 1.25,
    [mobile]: { fontSize: 18, letterSpacing: '0.025em' },
  },
  heroTitle: {
    ...text('clamp(60px, 6.770833vw, 130px)', 700, 0.95),
    fontFamily: siteFonts.hero,
    letterSpacing: '-0.06em',
    [mobile]: { fontSize: 'clamp(46px, 14.102564vw, 72px)', lineHeight: 1 },
  },
  heroSubtitle: {
    ...text('clamp(16px, 1.458333vw, 28px)', 700, 1.25),
    [mobile]: { fontSize: 18, fontWeight: 800, lineHeight: '25px' },
  },
  cardTitle: text(26, 700),
  cardLabel: text(22, 700),
  cardMeta: text(22, 500),
  titleSmall: text(20, 700),
  labelLarge: text(18, 700),
  labelSmall: text(14, 600),
  bodyLarge: text(20, 500),
  bodySmall: text(16),
  readingLarge: text(20, 400, 1.6),
  readingMedium: text(18, 400, 1.5),
  readingSmall: text(16, 400, '22px'),
  captionLarge: text(18, 500, 21 / 18),
  profileName: { ...text(22, 700), [mobile]: { fontSize: 18 } },
  profileMeta: { ...text(18, 500), [mobile]: { fontSize: 16 } },
  fluidLabel: text('clamp(1rem, 1.041667vw, 1.125rem)', 500),
  fluidBody: text('clamp(1rem, 1.041667vw, 1.25rem)', 500),
  fluidReading: text('clamp(1rem, 1.145833vw, 1.375rem)', 500, 30 / 22),
  memberNames: text('clamp(1.125rem, 1.145833vw, 1.375rem)', 600),
  dialogTitle: {
    ...text(48, 700, 1),
    letterSpacing: '-0.04em',
    [small]: { fontSize: 32 },
  },
  dialogSection: { ...text(24, 700), [small]: { fontSize: 18 } },
  dialogBody: { ...text(18, 400, 1.5), [small]: { fontSize: 14 } },
  featureTitle: {
    ...text('clamp(16px, 1.145833vw, 22px)', 700, 1.23),
    [mobile]: { fontSize: 15, fontWeight: 600 },
  },
  featureBody: {
    ...text('clamp(16px, 1.145833vw, 22px)', 500, 1.23),
    [mobile]: { fontSize: 16, lineHeight: 1.4 },
  },
  accomplishmentLabel: {
    ...text('clamp(16px, 1.145833vw, 22px)', 800, 1.23),
    [mobile]: { fontSize: 18, fontWeight: 700 },
  },
  trackTitle: text('clamp(18px, 1.822917vw, 35px)', 600),
  sectionLabel: {
    ...text('clamp(16px, 1.145833vw, 22px)', 700, 1.4),
    [mobile]: { fontSize: 16 },
  },
  question: { ...text(20, 700), [mobile]: { fontSize: 16 } },
  answer: { ...text(18, 500, 1.5), [mobile]: { fontSize: 14 } },
  timelineTitle: { ...text('clamp(18px, 1.25vw, 24px)', 700), [mobile]: { fontSize: 16 } },
  timelineBody: { ...text('clamp(16px, 1.145833vw, 22px)', 500), [mobile]: { fontSize: 14 } },
};

export default siteTypography;
