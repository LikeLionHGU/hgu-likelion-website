import { Box, Card, Grid, IconButton, Link, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { address, instagramAddress, mailAddress } from '../utils/commons';
import InstagramIcon from '@mui/icons-material/Instagram';
import Map from '../components/Map';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>문의하기 - 멋쟁이사자처럼 한동대</title>
      </Helmet>
      <Grid container columns={2}>
        <Grid item xs={2} sm={1}>
          <Box>
            <Typography variant="h4" gutterBottom>
              🗺&nbsp;&nbsp;주소
            </Typography>
            <Typography>{address}</Typography>
            <Box sx={{ height: 32 }} />
            <Typography variant="h4" gutterBottom>
              📧&nbsp;&nbsp;이메일
            </Typography>
            <Link href={`mailto:${mailAddress}`}>{mailAddress}</Link>
            <Box sx={{ height: 32 }} />
            <Typography variant="h4" gutterBottom>
              💬&nbsp;&nbsp;Direct Message
            </Typography>
            <Box sx={{ color: 'common.white' }}>
              <IconButton
                color="inherit"
                component="a"
                href={instagramAddress}
                target="_blank"
                sx={{
                  background:
                    'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);',
                }}
              >
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
