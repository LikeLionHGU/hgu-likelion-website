import { Box, Button, IconButton, Modal, Typography, styled } from '@mui/material';
import { TEAM_ORANGE } from './Team.styles';

export const ProfileModal = styled(Modal)({
  display: 'grid', placeItems: 'center', padding: 24,
  '& .MuiBackdrop-root': { backgroundColor: 'rgba(0,0,0,0.85)' },
});

export const ProfileDialog = styled(Box)(({ theme }) => ({
  position: 'relative', width: '100%', maxWidth: 1111, minHeight: 540,
  maxHeight: 'calc(100dvh - 48px)', overflowY: 'auto',
  display: 'grid', gridTemplateColumns: '380fr 729fr',
  border: '1px solid rgba(0,0,0,0.8)', borderRadius: 10, outline: 0,
  color: theme.palette.common.white, backgroundColor: 'rgba(217,217,217,0.15)',
}));

export const ProfileIdentity = styled(Box)({
  display: 'flex', flexDirection: 'column', alignItems: 'center',
  padding: '120px 24px 100px', backgroundColor: 'rgba(0,0,0,0.3)',
});

export const ProfileAvatar = styled('img')({
  width: 180, height: 180, borderRadius: '50%', objectFit: 'cover',
});

export const ProfileIdentityText = styled(Box)({
  display: 'flex', alignItems: 'baseline', justifyContent: 'center',
  flexWrap: 'wrap', gap: 16, marginTop: 40,
});
export const ProfileDialogName = styled(Typography)({ fontSize: 26, fontWeight: 700, lineHeight: 1.2 });
export const ProfileDialogRole = styled(Typography)({ color: '#868585', fontSize: 18, lineHeight: 1.5 });

export const CoffeeChatButton = styled(Button)(({ theme }) => ({
  marginTop: 20, minWidth: 169, minHeight: 45, padding: '8px 20px',
  border: '1.5px solid #F3720F', borderRadius: 25, backgroundColor: 'rgba(243,114,15,0.1)',
  color: theme.palette.common.white, fontSize: 18, lineHeight: 1.2, fontWeight: 500,
  '&:hover, &:focus-visible': { color: TEAM_ORANGE, borderColor: TEAM_ORANGE },
  '&.Mui-disabled': { color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(243,114,15,0.5)' },
})) as typeof Button;

export const ProfileBiography = styled(Box)({
  display: 'grid', gap: 45, alignContent: 'start', minWidth: 0,
  padding: '100px clamp(24px, 3.229167vw, 62px) 80px clamp(24px, 3.645833vw, 70px)',
});
export const ProfileSection = styled(Box)({ display: 'grid', gap: 5 });
export const ProfileSectionTitle = styled(Typography)({
  color: '#F3720F', fontSize: 18, fontWeight: 700, letterSpacing: 0.45, lineHeight: 1.2,
});
export const ProfileSectionText = styled(Typography)({
  fontSize: 20, lineHeight: 1.6, whiteSpace: 'pre-wrap', overflowWrap: 'anywhere',
});

export const ProfileClose = styled(IconButton)({
  position: 'absolute', top: 24, right: 32, width: 32, height: 32,
  '& img': { position: 'absolute', width: 19, height: 19 },
});
