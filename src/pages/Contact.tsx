import { Box, Card, Grid, IconButton, Link, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { address, instagramAddress, mailAddress } from '../utils/commons';
import InstagramIcon from '@mui/icons-material/Instagram';
import Map from '../components/Map';
import group5206 from '../assets/contact/group5206.svg';
import vector45 from '../assets/contact/vector45.svg';
import vector50 from '../assets/contact/vector50.svg';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>문의하기 - 멋쟁이사자처럼 한동대</title>
      </Helmet>
      <Grid container columnSpacing={2} rowSpacing={10} columns={2}>
        <Grid item xs={2} sm={1}>
          <Box sx={{ color: 'common.white' }}>
            <Typography
              variant="h4"
              sx={{ display: 'flex', alignItems: 'center', gap: '14px' }}
              gutterBottom
            >
              <Box component="img" src={group5206} alt="group5206" sx={{ height: 28 }} />
              주소
            </Typography>
            <Typography>{address}</Typography>
            <Box sx={{ height: 32 }} />
            <Typography
              variant="h4"
              sx={{ display: 'flex', alignItems: 'center', gap: '14px' }}
              gutterBottom
            >
              <Box component="img" src={vector45} alt="vector45" sx={{ height: 28 }} />
              이메일
            </Typography>
            <Link color="common.white" href={`mailto:${mailAddress}`}>
              {mailAddress} (한동대학교 대표)
            </Link>
            <Box sx={{ height: 32 }} />
            <Typography
              variant="h4"
              sx={{ display: 'flex', alignItems: 'center', gap: '14px' }}
              gutterBottom
            >
              <Box component="img" src={vector50} alt="vector50" sx={{ height: 28 }} />
              Direct Message
            </Typography>
            <Box sx={{ color: 'common.white' }}>
              <IconButton color="inherit" component="a" href={instagramAddress} target="_blank">
                <InstagramIcon fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2} sm={1}>
          <Card>
            <Map />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
