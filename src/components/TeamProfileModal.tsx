import { Typography, Box } from '@mui/material';
import { TeamMember } from '../utils/team';
import closeFirst from '../assets/team/close-first.svg';
import closeSecond from '../assets/team/close-second.svg';
import {
  CoffeeChatButton,
  ProfileAvatar,
  ProfileBiography,
  ProfileClose,
  ProfileDialog,
  ProfileIdentity,
  ProfileIdentityText,
  ProfileModal,
} from './TeamProfileModal.styles';

interface TeamProfileModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export default function TeamProfileModal({ member, onClose }: TeamProfileModalProps) {
  if (!member) return null;
  return (
    <ProfileModal open onClose={onClose} slotProps={{ backdrop: { transitionDuration: 0 } }}>
      <ProfileDialog
        role="dialog"
        aria-modal="true"
        aria-labelledby="team-profile-name"
        tabIndex={-1}
      >
        <ProfileIdentity>
          <ProfileAvatar src={member.photo} alt={`${member.name} 프로필`} />
          <ProfileIdentityText>
            <Typography variant="cardTitle" id="team-profile-name" component="h2">
              {member.name}
            </Typography>
            <Typography component="p" variant="readingMedium" sx={{ color: 'site.muted' }}>
              {member.generation}기 {member.role}
            </Typography>
          </ProfileIdentityText>
          {member.coffeeChatUrl ? (
            <CoffeeChatButton href={member.coffeeChatUrl} target="_blank" rel="noopener noreferrer">
              커피챗 신청하기
            </CoffeeChatButton>
          ) : (
            <CoffeeChatButton disabled>커피챗 신청하기</CoffeeChatButton>
          )}
        </ProfileIdentity>
        <ProfileBiography>
          {[
            ['MAJOR', member.major],
            ['INTERESTS', member.interests],
            ['INTRODUCTION', member.introduction],
          ].map(([title, text]) => (
            <Box component="div" key={title} sx={{ display: 'grid', gap: '5px' }}>
              <Typography
                variant="labelLarge"
                component="h3"
                sx={{ color: 'site.accentWarm', letterSpacing: 0.45 }}
              >
                {title}
              </Typography>
              <Typography
                component="p"
                variant="readingLarge"
                sx={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}
              >
                {text}
              </Typography>
            </Box>
          ))}
        </ProfileBiography>
        <ProfileClose aria-label="프로필 닫기" onClick={onClose}>
          <img src={closeFirst} alt="" />
          <img src={closeSecond} alt="" />
        </ProfileClose>
      </ProfileDialog>
    </ProfileModal>
  );
}
