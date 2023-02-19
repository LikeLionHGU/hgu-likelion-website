import { Box, Container, styled, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageInfos } from '../utils/commons';
import { BgImage } from './BgImage';
import mainTitleImage from '../assets/main_title.svg';

const imageHeight = 650;

const Heading = styled(Box)(() => ({
  position: 'absolute',
  zIndex: 1,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  whiteSpace: 'pre-wrap',
  maxHeight: '100vh',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: 40,
  fontStyle: 'normal',
  fontWeight: 'bold',
  lineHeight: 1.2,
  [theme.breakpoints.up('sm')]: {
    fontSize: 64,
  },
}));

interface Props {
  children: React.ReactNode;
}

export function Wrapper({ children }: Props) {
  const { pathname } = useLocation();
  const getPageInfo = () => {
    if (pathname === '/apply') return pageInfos.apply;
    if (pathname === '/faq') return pageInfos.faq;
    if (pathname === '/contact') return pageInfos.contact;
    return pageInfos.main;
  };
  const pageInfo = getPageInfo();
  const isMain = pathname === '/';
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Heading color="#fff" sx={{ height: isMain ? '100vh' : imageHeight }}>
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          {isMain ? (
            <Box component="img" src={mainTitleImage} alt="main title" />
          ) : (
            <Box sx={{ textAlign: 'center', wordBreak: 'keep-all' }}>
              <Title variant="h1" gutterBottom>
                {pageInfo.title}
              </Title>
              <Typography variant="h6">{pageInfo.description}</Typography>
            </Box>
          )}
        </Container>
      </Heading>
      {isMain ? (
        <Box sx={{ height: '100vh', backgroundColor: 'common.black' }} />
      ) : (
        <BgImage image={pageInfo.bgImage} height={isMain ? '100vh' : imageHeight} />
      )}
      <Container sx={{ py: 15 }}>{children}</Container>
    </>
  );
}
