import { Box, Typography } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';
import lionImage from '../assets/main/main_logo.svg';
import mobileLionImage from '../assets/main/hero-lion.svg';
import scrollIndicator from '../assets/main/scroll-indicator.svg';

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;

const Hero = styled('section')(({ theme }) => ({
  position: 'relative',
  minHeight: 'max(100svh, min(56.354167vw, 1082px))',
  overflow: 'hidden',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.common.black,
  backgroundImage: 'linear-gradient(0deg, rgba(243,114,15,0.1), rgba(141,66,9,0))',
  [theme.breakpoints.down('md')]: {
    minHeight: 'max(844px, 100svh)',
    backgroundImage: 'linear-gradient(0deg, rgba(243,114,15,0.15) 30%, rgba(141,66,9,0))',
  },
}));

const HeroVisuals = styled(Box)({
  position: 'absolute',
  inset: 0,
  opacity: 0,
  animation: `${fadeIn} 2s ease 1s forwards`,
  '@media (prefers-reduced-motion: reduce)': { animation: 'none', opacity: 1 },
});

const HeroCanvas = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '100%',
  maxWidth: 1920,
  margin: '0 auto',
});

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  zIndex: 1,
  top: 'clamp(130px, 9.622917vw, 185px)',
  left: 'clamp(30px, 4.6875vw, 90px)',
  right: 30,
  [theme.breakpoints.down('md')]: { top: 'auto', left: 30, bottom: 37 },
}));

const heroTitleSx = {
  margin: 0,
  color: '#D9D9D9',
  '& span': { fontFamily: 'inherit' },
  '& .university': { marginLeft: '0.25em' },
  '& .handong': { display: 'block' },
  '@media (max-width:899.95px)': {
    '& .university': { display: 'block', marginLeft: 0 },
  },
} as const;

const heroSubtitleSx = {
  mt: { xs: '8px', md: '40px' },
  ml: { xs: 0, md: '11px' },
  color: { xs: 'common.white', md: 'site.accentWarm' },
  wordBreak: 'keep-all',
  '& span': { fontFamily: 'inherit' },
  '@media (max-width:899.95px)': {
    '& span': { display: 'block' },
  },
} as const;

const HeroLion = styled('img')(({ theme }) => ({
  position: 'absolute',
  right: 0,
  top: 'clamp(100px, 5.875vw, 113px)',
  width: '38.802083%',
  height: 'auto',
  maxWidth: 'none',
  objectFit: 'contain',
  mixBlendMode: 'screen',
  filter: 'invert(1) hue-rotate(180deg)',
  [theme.breakpoints.down('md')]: {
    top: 114,
    right: 0,
    width: '100%',
    height: 'min(175.641026vw, 800px)',
    objectFit: 'cover',
    objectPosition: 'left top',
    mixBlendMode: 'normal',
    filter: 'none',
  },
}));

const ScrollIndicator = styled('img')(({ theme }) => ({
  position: 'absolute',
  zIndex: 2,
  left: 'clamp(30px, 4.6875vw, 90px)',
  bottom: 49,
  width: 24,
  height: 43,
  [theme.breakpoints.down('md')]: { left: 'auto', right: 30, bottom: 37, width: 18, height: 32 },
}));

export function MainHero() {
  return (
    <Hero aria-label="멋쟁이사자처럼 한동대학교">
      <HeroVisuals>
        <HeroCanvas>
          <picture>
            <source media="(max-width: 899.95px)" srcSet={mobileLionImage} />
            <HeroLion src={lionImage} alt="멋쟁이사자처럼 한동대학교 사자" />
          </picture>
          <HeroContent>
            <Typography
              component="h1"
              variant="heroTitle"
              sx={heroTitleSx}
              aria-label="LIKELION UNIV. HANDONG"
            >
              <span>LIKELION</span>
              <span className="university">UNIV.</span>
              <span className="handong">HANDONG</span>
            </Typography>
            <Typography component="p" variant="heroSubtitle" sx={heroSubtitleSx}>
              <span>세상을 변화시킬 서비스를 만드는</span> <span>한동대학교 멋쟁이사자처럼</span>
            </Typography>
          </HeroContent>
          <ScrollIndicator src={scrollIndicator} alt="" aria-hidden="true" />
        </HeroCanvas>
      </HeroVisuals>
    </Hero>
  );
}
