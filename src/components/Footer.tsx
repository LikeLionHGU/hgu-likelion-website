import { Box, Container, IconButton, Typography } from '@mui/material';
import logoWImg from '../assets/likelion_w_logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <Box sx={{ backgroundColor: 'secondary.main', color: 'secondary.contrastText' }}>
      <Container sx={{ py: 6, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box>
          <Box component="img" src={logoWImg} height={16.5} />
        </Box>
        <Typography sx={{ display: 'flex', gap: 1 }}>
          <span>(주)멋쟁이사자처럼</span>|<span>한동대학교</span>
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton
            color="inherit"
            component="a"
            href="https://www.instagram.com/likelion_hgu/"
            target="_blank"
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton color="inherit" component="a" href="https://github.com/" target="_blank">
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
