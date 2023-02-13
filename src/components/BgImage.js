import { Box, styled } from '@mui/material';
import { BackgroundImage } from 'react-image-and-background-image-fade';

const Wrapper = styled(BackgroundImage)(() => ({
  zIndex: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  width: '100%',
  maxHeight: '100vh',
}));

export function BgImage({ image, height }) {
  return (
    <>
      <Wrapper src={image} sx={{ height }}>
        <Box width="100%" height="100%" bgcolor="rgb(33, 33, 33)" sx={{ opacity: 0.7 }} />
      </Wrapper>
    </>
  );
}
