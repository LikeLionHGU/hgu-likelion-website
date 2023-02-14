import { Box, Container, styled, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageInfos } from '../utils/commons';
import { BgImage } from './BgImage';

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
        <Container sx={{ textAlign: 'center', wordBreak: 'keep-all' }}>
          <Title variant="h1" gutterBottom={!isMain}>
            {pageInfo.title}
          </Title>
          {!isMain && <Typography variant="h6">{pageInfo.description}</Typography>}
        </Container>
      </Heading>
      <BgImage image={pageInfo.bgImage} height={isMain ? '100vh' : imageHeight} />
      <Container maxWidth="md" sx={{ pt: 10, pb: 15 }}>
        {children}
      </Container>
    </>
  );
}
