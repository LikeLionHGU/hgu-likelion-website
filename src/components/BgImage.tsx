import { Box } from '@mui/material';
import rectangle from '../assets/background/rectangle.svg';

export function BgImage() {
  return (
    <>
      <Box sx={{ height: 594, backgroundColor: 'primary.main' }}>
        <Box
          component="img"
          src={rectangle}
          width="100%"
          height="100%"
          sx={{ objectFit: 'cover' }}
        />
      </Box>
    </>
  );
}
