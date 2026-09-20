import { useEffect, useRef } from 'react';
import { TeamMember } from '../utils/team';
import previous from '../assets/team/profile-previous.svg';
import next from '../assets/team/profile-next.svg';
import {
  MobileBiography, MobileCoffeeChatButton, MobilePortrait, MobilePortraitRow,
  MobileProfileArrow, MobileProfileIdentity, MobileProfileIdentityText, MobileProfileName,
  MobileProfilePage, MobileProfileRole, MobileProfileSection, MobileProfileSectionText,
  MobileProfileSectionTitle, MobileProfileTape,
} from './TeamProfileMobile.styles';

interface TeamProfileMobileProps {
  member: TeamMember;
  hasMultipleMembers: boolean;
  onMove: (direction: number) => void;
}

export default function TeamProfileMobile({ member, hasMultipleMembers, onMove }: TeamProfileMobileProps) {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    heading.current?.focus({ preventScroll: true });
  }, [member.id]);

  return (
    <MobileProfilePage component="main" aria-labelledby="mobile-profile-name">
      <MobileProfileIdentity>
        <MobilePortraitRow>
          <MobileProfileArrow aria-label="이전 프로필" disabled={!hasMultipleMembers} onClick={() => onMove(-1)}>
            <img src={previous} alt="" />
          </MobileProfileArrow>
          <MobilePortrait><img src={member.photo} alt={`${member.name} 프로필 사진`} /></MobilePortrait>
          <MobileProfileArrow aria-label="다음 프로필" data-direction="next" disabled={!hasMultipleMembers} onClick={() => onMove(1)}>
            <img src={next} alt="" />
          </MobileProfileArrow>
        </MobilePortraitRow>
        <MobileProfileIdentityText>
          <MobileProfileName id="mobile-profile-name" variantMapping={{ body1: 'h1' }} ref={heading} tabIndex={-1}>
            {member.name}
          </MobileProfileName>
          <MobileProfileRole>{member.generation}기 {member.role}</MobileProfileRole>
        </MobileProfileIdentityText>
        {member.coffeeChatUrl ? (
          <MobileCoffeeChatButton href={member.coffeeChatUrl} target="_blank" rel="noopener noreferrer">
            커피챗 신청하기
          </MobileCoffeeChatButton>
        ) : <MobileCoffeeChatButton disabled>커피챗 신청하기</MobileCoffeeChatButton>}
      </MobileProfileIdentity>
      <MobileBiography>
        {[
          ['전공', `${member.major} ${member.admissionYear}`],
          ['관심분야', member.interests],
          ['자기 소개', member.introduction],
        ].map(([title, text]) => (
          <MobileProfileSection key={title}>
            <MobileProfileSectionTitle variantMapping={{ body1: 'h2' }}>{title}</MobileProfileSectionTitle>
            <MobileProfileSectionText>{text}</MobileProfileSectionText>
          </MobileProfileSection>
        ))}
      </MobileBiography>
      <MobileProfileTape aria-hidden="true" />
    </MobileProfilePage>
  );
}
