import { Box, Container, IconButton, Typography, styled } from '@mui/material';
import { useMatch } from 'react-router-dom';
import logoWImg from '../assets/likelion_w_logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { githubAddress, instagramAddress } from '../utils/commons';

const FooterRoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'mainPage',
})<{ mainPage: boolean }>(({ theme, mainPage }) => ({
  backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText,
  ...(mainPage && {
    backgroundColor: theme.palette.common.black,
    backgroundImage: 'linear-gradient(rgba(255,115,29,0.07), rgba(153,69,17,0.1))',
    [theme.breakpoints.down('md')]: { backgroundImage: 'none' },
  }),
}));

const FooterContent = styled(Container, {
  shouldForwardProp: (prop) => prop !== 'mainPage',
})<{ mainPage: boolean }>(({ theme, mainPage }) => ({
  paddingTop: 48, paddingBottom: 48, display: 'flex', flexDirection: 'column', gap: 16,
  ...(mainPage && {
    maxWidth: 1920, padding: '80px clamp(30px, 5.15625vw, 99px) 100px', gap: 28,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 'clamp(30px, 5.15625vw, 99px)', paddingRight: 'clamp(30px, 5.15625vw, 99px)',
    },
    '& [data-footer-logo]': { width: 287, height: 22 },
    '& [data-footer-description]': { fontSize: 20, gap: 20 },
    '& [data-footer-social]': { marginTop: 12, gap: 32 },
    '& [data-footer-social] a': { padding: 0, width: 36, height: 36 },
    [theme.breakpoints.down('md')]: {
      padding: '0 27px 37px', gap: 20,
      '& [data-footer-logo]': { width: 212, height: 16 },
      '& [data-footer-description]': { fontSize: 14 },
      '& [data-footer-social]': { gap: 28 },
      '& [data-footer-social] a': { width: 32, height: 32 },
    },
  }),
}));

const FooterLogo = styled('img')({
  height: 16.5,
  width: 'auto',
  alignSelf: 'flex-start',
  objectFit: 'contain',
});
const FooterDescription = styled(Typography)({ display: 'flex', gap: 8, '& span': { fontFamily: 'inherit' } });
const FooterSocial = styled(Box)({ display: 'flex', gap: 8 });

function Footer() {
  const isMain = Boolean(useMatch('/'));
  const isTeam = Boolean(useMatch('/team'));
  const useFullWidthStyle = isMain || isTeam;
  return (
    <FooterRoot component="footer" mainPage={useFullWidthStyle}>
      <FooterContent mainPage={useFullWidthStyle} maxWidth={useFullWidthStyle ? false : 'lg'}>
        <FooterLogo data-footer-logo src={logoWImg} alt="LIKELION UNIV." />
        <FooterDescription data-footer-description>
          <span>(주)멋쟁이사자처럼</span>|<span>한동대학교</span>
        </FooterDescription>
        <FooterSocial data-footer-social>
          <IconButton color="inherit" component="a" href={instagramAddress} target="_blank" rel="noopener noreferrer" aria-label="인스타그램">
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton color="inherit" component="a" href={githubAddress} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon fontSize="large" />
          </IconButton>
        </FooterSocial>
      </FooterContent>
    </FooterRoot>
  );
}

export default Footer;
