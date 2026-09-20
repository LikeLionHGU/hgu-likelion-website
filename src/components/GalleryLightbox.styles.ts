import { Box, IconButton, Modal, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GALLERY_ORANGE } from './Gallery.styles';

export const LightboxModal = styled(Modal)({
  display: 'grid',
  alignItems: 'center',
  justifyItems: 'center',
  overflow: 'hidden',
  '& .MuiBackdrop-root': { backgroundColor: 'rgba(0, 0, 0, 0.85)' },
});

export const LightboxStage = styled(Box)(({ theme }) => ({
  position: 'relative',
  // Figma: 1000×655 at x=460/y=295 in a 1920×1080 viewport.
  width: 'min(52.083333vw, 1000px, calc((100dvh - 200px) * 1000 / 655))',
  maxWidth: 'calc(100vw - 48px)',
  aspectRatio: '1000 / 655',
  transform: 'translateY(min(7.638889vh, 82.5px))',
  outline: 'none',
  touchAction: 'pan-y',
  [theme.breakpoints.down('md')]: {
    width: 'min(calc(100vw - 48px), calc((100dvh - 160px) * 1000 / 655))',
    transform: 'none',
  },
  '@media (max-height: 600px)': {
    width: 'min(calc(100vw - 48px), calc((100dvh - 120px) * 1000 / 655))',
    transform: 'none',
  },
}));

export const LightboxImage = styled('img')({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const LightboxPreview = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  height: '100%',
  width: '43%',
  overflow: 'hidden',
  pointerEvents: 'none',
  '&[data-side="previous"]': { right: 'calc(100% + clamp(16px, 2.34375vw, 45px))' },
  '&[data-side="next"]': { left: 'calc(100% + clamp(16px, 2.34375vw, 45px))' },
  '& img': { width: '232.56%', height: '100%', maxWidth: 'none', objectFit: 'cover' },
  '&[data-side="previous"] img': { transform: 'translateX(-57%)' },
  '&::after': { content: '""', position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)' },
  [theme.breakpoints.down('md')]: { display: 'none' },
}));

export const LightboxCounter = styled(Typography)({
  position: 'absolute',
  right: 0,
  bottom: 'calc(100% + 26px)',
  color: GALLERY_ORANGE,
  fontSize: 20,
  fontWeight: 500,
  lineHeight: 1.2,
});

export const LightboxArrow = styled(IconButton)({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: 44,
  height: 44,
  padding: 0,
  borderRadius: 0,
  color: GALLERY_ORANGE,
  '& img': { width: 19.8281, height: 30.2521 },
  '&[data-direction="previous"]': {
    left: 'clamp(4px, 3.3%, 33px)',
    '& img': { transform: 'rotate(180deg)' },
  },
  '&[data-direction="next"]': { right: 'clamp(4px, 4.3%, 43px)' },
  '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.25)' },
  '&.Mui-focusVisible': { outline: `2px solid ${GALLERY_ORANGE}`, outlineOffset: 2 },
});

// No close glyph is supplied in Figma; expose an accessible close control on focus.
// Pointer users close via the backdrop, and keyboard users can also press Escape.
export const LightboxClose = styled('button')(({ theme }) => ({
  position: 'absolute',
  top: -56,
  left: 0,
  padding: '8px 12px',
  border: `1px solid ${GALLERY_ORANGE}`,
  color: theme.palette.common.white,
  backgroundColor: theme.palette.common.black,
  font: 'inherit',
  cursor: 'pointer',
  opacity: 0,
  pointerEvents: 'none',
  '&:focus-visible': { opacity: 1, pointerEvents: 'auto', outlineOffset: 4 },
}));
