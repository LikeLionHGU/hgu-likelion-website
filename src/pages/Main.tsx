import { Box, Grid, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import card1 from '../assets/main/card1.svg';
import card2 from '../assets/main/card2.jpeg';
import card3 from '../assets/main/card3.svg';
import card4 from '../assets/main/card4.png';

export default function Main() {
  return (
    <>
      <Helmet>
        <title>멋쟁이사자처럼 한동대</title>
      </Helmet>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 10, sm: 15 } }}>
        <Grid container columnSpacing={15} rowSpacing={3} columns={2}>
          <Grid item xs={2} sm={1}>
            <Box
              sx={{
                aspectRatio: '16 / 9',
                backgroundColor: 'common.black',
                borderRadius: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2,
              }}
            >
              <Box component="img" src={card1} alt="card1" />
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            sm={1}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'flex-start', sm: 'flex-end' },
              alignItems: 'center',
            }}
          >
            <Box sx={{ textAlign: { xs: 'start', sm: 'right' } }}>
              <Typography variant="h3">ONE. 교육합니다</Typography>
              <Typography variant="h6">멋사 공식 도메인 계정과 강의 무료 제공</Typography>
              <Typography sx={{ maxWidth: 400, wordBreak: 'keep-all' }}>
                멋사 공식 도메인 계정(likelion.org)을 받고 국내 최고의 기획/개발/디자인 강사님들의
                강의를 통해 여러분들의 역량을 증진시켜보아요
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container direction="row-reverse" columnSpacing={15} rowSpacing={3} columns={2}>
          <Grid item xs={2} sm={1}>
            <Box
              sx={{
                aspectRatio: '16 / 9',
                backgroundColor: 'common.black',
                borderRadius: 2,
              }}
              component="img"
              src={card2}
              alt="card2"
            />
          </Grid>
          <Grid
            item
            xs={2}
            sm={1}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography variant="h3">TWO. 도전합니다</Typography>
              <Typography variant="h6">전국 단위 해커톤 참가 기회</Typography>
              <Typography sx={{ maxWidth: 400, wordBreak: 'keep-all' }}>
                약 1,000명(150팀)이 참여하는 전국 단위 해커톤에 참가하여 해당 분야의 최고의
                멘토진에게 멘토링을 받고 자신의 프로젝트와 아이디어를 전국에 뽐내보아요.
              </Typography>
              <ul style={{ marginTop: 8, marginLeft: 24 }}>
                <li>전국 멋쟁이 사자차럼 아이디어톤 (6월)</li>
                <li>전국 멋쟁이 사자처럼 해커톤 (7~8월)</li>
              </ul>
            </Box>
          </Grid>
        </Grid>
        <Grid container columnSpacing={15} rowSpacing={3} columns={2}>
          <Grid item xs={2} sm={1}>
            <Box
              sx={{
                aspectRatio: '16 / 9',
                backgroundColor: 'common.black',
                borderRadius: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2,
              }}
            >
              <Box component="img" src={card3} alt="card3" />
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            sm={1}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'flex-start', sm: 'flex-end' },
              alignItems: 'center',
            }}
          >
            <Box sx={{ textAlign: { xs: 'start', sm: 'right' } }}>
              <Typography variant="h3">THREE. 함께합니다</Typography>
              <Typography variant="h6">전국 멋사 대학 커뮤니티를 통한 초대형 네트워킹</Typography>
              <Typography sx={{ maxWidth: 400, wordBreak: 'keep-all' }}>
                멋쟁이사자처럼 공식 디스코드를 통해 타대학(전국 61개 대학)과 소통할 수 있어요. 많은
                사람들의 다양한 통찰력, 새로운 관점을 얻어가고 더 나아가 그들과 협업 경험까지
                가져보아요.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container direction="row-reverse" columnSpacing={15} rowSpacing={3} columns={2}>
          <Grid item xs={2} sm={1}>
            <Box
              sx={{
                aspectRatio: '16 / 9',
                backgroundColor: 'common.black',
                borderRadius: 2,
              }}
              component="img"
              src={card4}
              alt="card4"
            />
          </Grid>
          <Grid
            item
            xs={2}
            sm={1}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography variant="h3">FOUR. 성장합니다</Typography>
              <Typography variant="h6">오직 멋사에게만 주어지는 수많은 기회들</Typography>
              <Typography sx={{ maxWidth: 400, wordBreak: 'keep-all' }}>
                멋쟁이 사자처럼 멤버에게는 대기업 공모전에 참여할 수 있는 기회와 타 대학 연합
                해커톤에 참여할 수 있는 기회가 제공됩니다. 멋사가 제공하는 여러 기회를 잡아 여러분의
                날개를 펼쳐보아요.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
