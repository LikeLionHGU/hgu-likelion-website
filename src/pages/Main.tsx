import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';

export default function Main() {
  return (
    <>
      <Helmet>
        <title>멋쟁이사자처럼 한동대</title>
      </Helmet>
      <Box sx={{ height: 400 }}>Main</Box>
    </>
  );
}
