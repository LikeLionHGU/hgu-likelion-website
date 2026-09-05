import { keyframes, styled } from '@mui/material/styles';
import lionImage from '../assets/main/main_logo.svg';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Hero = styled('section')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  minHeight: '100vh',
  overflow: 'hidden',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.common.black,
  backgroundImage: 'linear-gradient(0deg, rgba(243, 114, 15, 0.1) 0%, rgba(141, 66, 9, 0) 100%)',
}));

const HeroContent = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  width: '100%',
  maxWidth: 1920,
  margin: '0 auto',
  padding: 'clamp(11rem, 22vh, 15.625rem) clamp(1.5rem, 7.5vw, 9rem) 7rem',
  [theme.breakpoints.down('md')]: {
    paddingTop: '10rem',
  },
}));

const HeroVisuals = styled('div')({
  position: 'absolute',
  inset: 0,
  opacity: 0,
  animation: `${fadeIn} 2s ease 1s forwards`,
});

const HeroTitle = styled('h1')(({ theme }) => ({
  maxWidth: 760,
  margin: 0,
  color: theme.palette.common.white,
  fontFamily: theme.typography.fontFamily,
  fontSize: 'clamp(3.25rem, 5.2vw, 6.25rem)',
  fontWeight: theme.typography.fontWeightBold,
  lineHeight: 1.04,
  letterSpacing: '-0.06em',
  whiteSpace: 'pre-line',
  [theme.breakpoints.down('sm')]: {
    maxWidth: 420,
    fontSize: 'clamp(2.75rem, 14vw, 4.5rem)',
  },
}));

const HeroDescription = styled('p')(({ theme }) => ({
  margin: '1.25rem 0 0',
  color: theme.palette.primary.main,
  fontFamily: theme.typography.fontFamily,
  fontSize: 'clamp(0.875rem, 1.15vw, 1.25rem)',
  fontWeight: theme.typography.fontWeightMedium,
  lineHeight: 1.5,
  wordBreak: 'keep-all',
}));

const HeroLion = styled('img')(({ theme }) => ({
  position: 'absolute',
  right: 'clamp(2rem, 8vw, 9.625rem)',
  top: 'clamp(5rem, 9vh, 8rem)',
  width: 'min(38.8vw, 46.5625rem)',
  height: 'auto',
  objectFit: 'contain',
  mixBlendMode: 'screen',
  filter: 'invert(1) hue-rotate(180deg)',
  [theme.breakpoints.down('md')]: {
    right: '-4rem',
    top: '7rem',
    width: 'min(54vw, 34rem)',
  },
  [theme.breakpoints.down('sm')]: {
    right: '-7rem',
    top: '9rem',
    width: 'min(78vw, 30rem)',
    opacity: 0.55,
  },
}));

const ScrollIndicator = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: 1,
  left: 'clamp(1.5rem, 7.5vw, 9rem)',
  bottom: 'clamp(2rem, 5vh, 3.75rem)',
  display: 'grid',
  gap: 2,
  [theme.breakpoints.down('sm')]: {
    left: '1.5rem',
  },
}));

const Chevron = styled('span')(({ theme }) => ({
  display: 'block',
  width: 10,
  height: 10,
  borderRight: `1.5px solid ${theme.palette.common.white}`,
  borderBottom: `1.5px solid ${theme.palette.common.white}`,
  transform: 'rotate(45deg)',
}));

export function MainHero() {
  return (
    <Hero>
      <HeroVisuals>
        <HeroContent>
          <HeroTitle>{'LIKELION UNIV.\nHANDONG'}</HeroTitle>
          <HeroDescription>
            세상을 변화시킬 서비스를 만드는 한동대학교 멋쟁이사자처럼
          </HeroDescription>
        </HeroContent>
        <HeroLion src={lionImage} alt="멋쟁이사자처럼 한동대학교 사자" />
        <ScrollIndicator aria-hidden="true">
          <Chevron />
          <Chevron />
        </ScrollIndicator>
      </HeroVisuals>
    </Hero>
  );
}
