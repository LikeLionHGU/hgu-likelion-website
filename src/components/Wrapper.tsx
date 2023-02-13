import { Box, Container, styled, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { pageInfos } from '../utils/commons';

const imageHeight = 650;

const BackgroundImg = styled(Box)(() => ({
  zIndex: -1,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  width: '100%',
  maxHeight: '100vh',
}));

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
  return (
    <>
      <Heading color="#fff" sx={{ height: isMain ? '100vh' : imageHeight }}>
        <Box display="block" textAlign="center" p={4}>
          <Title variant="h1" gutterBottom={!isMain}>
            {pageInfo.title}
          </Title>
          {!isMain && <Typography variant="h6">{pageInfo.description}</Typography>}
        </Box>
      </Heading>
      <BackgroundImg
        sx={{ backgroundImage: `url(${pageInfo.bgImage})`, height: isMain ? '100vh' : imageHeight }}
      >
        <Box width="100%" height="100%" bgcolor="rgb(33, 33, 33)" sx={{ opacity: 0.46 }} />
      </BackgroundImg>
      <Container maxWidth="md" sx={{ py: 15 }}>
        {children}
      </Container>
    </>
  );
}
