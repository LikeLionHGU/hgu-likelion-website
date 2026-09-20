import { TeamMember } from '../utils/team';
import closeFirst from '../assets/team/close-first.svg';
import closeSecond from '../assets/team/close-second.svg';
import {
  CoffeeChatButton, ProfileAvatar, ProfileBiography, ProfileClose, ProfileDialog,
  ProfileDialogName, ProfileDialogRole, ProfileIdentity, ProfileIdentityText, ProfileModal,
  ProfileSection, ProfileSectionText, ProfileSectionTitle,
} from './TeamProfileModal.styles';

interface TeamProfileModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export default function TeamProfileModal({ member, onClose }: TeamProfileModalProps) {
  if (!member) return null;
  return (
    <ProfileModal open onClose={onClose} slotProps={{ backdrop: { transitionDuration: 0 } }}>
      <ProfileDialog role="dialog" aria-modal="true" aria-labelledby="team-profile-name" tabIndex={-1}>
        <ProfileIdentity>
          <ProfileAvatar src={member.photo} alt={`${member.name} 프로필`} />
          <ProfileIdentityText>
            <ProfileDialogName id="team-profile-name" variantMapping={{ body1: 'h2' }}>{member.name}</ProfileDialogName>
            <ProfileDialogRole>{member.generation}기 {member.role}</ProfileDialogRole>
          </ProfileIdentityText>
          {member.coffeeChatUrl ? (
            <CoffeeChatButton href={member.coffeeChatUrl} target="_blank" rel="noopener noreferrer">
              커피챗 신청하기
            </CoffeeChatButton>
          ) : <CoffeeChatButton disabled>커피챗 신청하기</CoffeeChatButton>}
        </ProfileIdentity>
        <ProfileBiography>
          {[
            ['MAJOR', member.major],
            ['INTERESTS', member.interests],
            ['INTRODUCTION', member.introduction],
          ].map(([title, text]) => (
            <ProfileSection key={title}>
              <ProfileSectionTitle variantMapping={{ body1: 'h3' }}>{title}</ProfileSectionTitle>
              <ProfileSectionText>{text}</ProfileSectionText>
            </ProfileSection>
          ))}
        </ProfileBiography>
        <ProfileClose aria-label="프로필 닫기" onClick={onClose}>
          <img src={closeFirst} alt="" /><img src={closeSecond} alt="" />
        </ProfileClose>
      </ProfileDialog>
    </ProfileModal>
  );
}
