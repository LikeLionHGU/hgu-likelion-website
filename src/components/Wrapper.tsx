import { Box, Button, Container, styled, Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { applyLink, pageInfos } from '../utils/commons';
import { BgImage } from './BgImage';
import mainTitleImage from '../assets/main_title.svg';
import blur from '../assets/background/blur.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['교육합니다', '도전합니다', '함께합니다', '성장합니다'];

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
  const [index, setIndex] = useState(0);
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
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 4000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      {!isMain && <Toolbar />}
      <Heading sx={{ height: isMain ? '100vh' : imageHeight, color: 'common.black' }}>
        <Container
          sx={{ display: 'flex', justifyContent: isMain ? 'center' : 'flex-start', px: 3 }}
        >
          {isMain ? (
            <motion.img
              src={mainTitleImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 2 }}
            />
          ) : (
            <Box sx={{ wordBreak: 'keep-all' }}>
              <Title variant="h1">{pageInfo.title}</Title>
              <Typography variant="h6" sx={{ minHeight: 64 }} mb={5}>
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
      {isMain ? (
        <>
          <Box sx={{ height: '100vh', backgroundColor: 'common.black' }} />
          <Box
            sx={{
              backgroundImage: `url(${blur})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: { xs: 220, sm: 312 },
            }}
          >
            <Box
              width="100%"
              height="100%"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: { xs: 4, sm: 8 },
                color: 'common.white',
              }}
            >
              <Typography variant="h2">멋쟁이사자처럼은</Typography>
              <Typography variant="h2" color="primary.main">
                <TextTransition springConfig={presets.molasses}>
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>
              </Typography>
            </Box>
          </Box>
        </>
      ) : (
        <BgImage />
      )}
      <Box sx={{ backgroundColor: isMain ? 'common.white' : 'background.default' }}>
        <Container sx={{ px: 3, py: { xs: 10, sm: 15 } }}>{children}</Container>
      </Box>
    </>
  );
}
