import { Box, Button, Container, styled, Toolbar, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { applyLink, pageInfos } from '../utils/commons';
import { BgImage } from './BgImage';
import mainTitleImage from '../assets/main_title.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const imageHeight = 594;

const Heading = styled(Box)({
  position: 'absolute',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  whiteSpace: 'pre-wrap',
  maxHeight: '100vh',
});

const Title = styled(Typography)(({ theme }) => ({
  fontSize: 40,
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 1.2,
  [theme.breakpoints.up('sm')]: {
    fontSize: 100,
  },
}));

interface Props {
  children: React.ReactNode;
}

export function Wrapper({ children }: Props) {
  const { pathname } = useLocation();
  const getPageInfo = () => {
    if (pathname === '/recruit') return pageInfos.recruit;
    if (pathname === '/contact') return pageInfos.contact;
    return pageInfos.main;
  };
  const pageInfo = getPageInfo();
  const isMain = pathname === '/';
  const isRecruit = pathname === '/recruit';
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {!isMain && <Toolbar />}
      <Heading sx={{ height: isMain ? '100vh' : imageHeight, color: 'common.black' }}>
        <Container
          sx={{ display: 'flex', justifyContent: isMain ? 'center' : 'flex-start', px: 3 }}
        >
          {isMain ? (
            <Box component="img" src={mainTitleImage} alt="main title" />
          ) : (
            <Box sx={{ wordBreak: 'keep-all' }}>
              <Title variant="h1">{pageInfo.title}</Title>
              <Typography variant="h6" mb={5}>
                {pageInfo.description}
              </Typography>
              {isRecruit ? (
                <Button
                  onClick={() => window.open(applyLink, '_blank')}
                  sx={{
                    backgroundColor: '#25282D',
                    borderRadius: 3,
                    px: 3,
                    py: 1.5,
                    color: 'common.white',
                    ':hover': {
                      backgroundColor: '#000000',
                    },
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  <Typography variant="subtitle1">지원하러 가기</Typography>
                </Button>
              ) : (
                <Box sx={{ height: 48 }} />
              )}
            </Box>
          )}
        </Container>
      </Heading>
      <Box
        sx={{
          backgroundColor: 'common.black',
          height: (theme) => theme.mixins.toolbar.maxHeight,
          width: 1,
        }}
      />
      {isMain ? <Box sx={{ height: '100vh', backgroundColor: 'common.black' }} /> : <BgImage />}
      <Box sx={{ backgroundColor: isMain ? 'common.white' : 'background.default' }}>
        <Container sx={{ px: 3, py: { xs: 10, sm: 15 } }}>{children}</Container>
      </Box>
    </>
  );
}
