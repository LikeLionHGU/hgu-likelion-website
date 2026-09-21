import { Box, IconButton, styled } from '@mui/material';
import { CoffeeChatButton } from './TeamProfileModal.styles';
import tape from '../assets/group5185.svg';

export const MobileProfilePage = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  paddingTop: 134,
  paddingBottom: 60,
  width: '100%',
}));

export const MobilePortraitRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 390,
  padding: '0 30px',
});
export const MobilePortrait = styled(Box)({
  position: 'relative',
  width: 112,
  height: 113,
  borderRadius: '50%',
  overflow: 'hidden',
  '& img': { position: 'absolute', width: '100%', height: '130%', top: '-23.41%', left: 0 },
});
export const MobileProfileArrow = styled(IconButton)({
  width: 44,
  height: 44,
  padding: 0,
  '& img': { width: 15, height: 20 },
  '&[data-direction="next"] img': { transform: 'scaleX(-1)' },
});
export const MobileProfileIdentityText = styled(Box)({
  display: 'flex',
  alignItems: 'baseline',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 10,
  marginTop: 16,
});

export const MobileCoffeeChatButton = styled(CoffeeChatButton)({
  marginTop: 15,
  width: 125,
  minWidth: 125,
  minHeight: 28,
  height: 28,
  padding: '3px 6px',
  fontSize: 14,
  borderWidth: 0.5,
  borderRadius: 15,
  backgroundColor: 'rgba(255,115,29,0.15)',
  '&.Mui-disabled': { color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(243,114,15,0.5)' },
}) as typeof CoffeeChatButton;
export const MobileBiography = styled(Box)({
  display: 'grid',
  alignContent: 'start',
  gap: 34,
  width: 'calc(100% - 60px)',
  maxWidth: 540,
  minHeight: 372,
  margin: '48px auto 185px',
  padding: 30,
  border: '1px solid rgba(255,255,255,0.2)',
  borderRadius: 10,
  backgroundColor: 'rgba(217,217,217,0.1)',
});

export const MobileProfileTape = styled(Box)({
  height: 28,
  width: '100%',
  backgroundImage: `url(${tape})`,
  backgroundSize: 'auto 28px',
  backgroundRepeat: 'repeat-x',
});
