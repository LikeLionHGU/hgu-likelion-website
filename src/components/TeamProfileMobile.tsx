import { Box, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { TeamMember } from '../utils/team';
import previous from '../assets/team/profile-previous.svg';
import next from '../assets/team/profile-next.svg';
import {
  MobileBiography,
  MobileCoffeeChatButton,
  MobilePortrait,
  MobilePortraitRow,
  MobileProfileArrow,
  MobileProfileIdentityText,
  MobileProfilePage,
  MobileProfileTape,
} from './TeamProfileMobile.styles';

interface TeamProfileMobileProps {
  member: TeamMember;
  hasMultipleMembers: boolean;
  onMove: (direction: number) => void;
}

export default function TeamProfileMobile({
  member,
  hasMultipleMembers,
  onMove,
}: TeamProfileMobileProps) {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    heading.current?.focus({ preventScroll: true });
  }, [member.id]);

  return (
    <MobileProfilePage component="main" aria-labelledby="mobile-profile-name">
      <Box component="div" sx={{ display: 'grid', justifyItems: 'center' }}>
        <MobilePortraitRow>
          <MobileProfileArrow
            aria-label="이전 프로필"
            disabled={!hasMultipleMembers}
            onClick={() => onMove(-1)}
          >
            <img src={previous} alt="" />
          </MobileProfileArrow>
          <MobilePortrait>
            <img src={member.photo} alt={`${member.name} 프로필 사진`} />
          </MobilePortrait>
          <MobileProfileArrow
            aria-label="다음 프로필"
            data-direction="next"
            disabled={!hasMultipleMembers}
            onClick={() => onMove(1)}
          >
            <img src={next} alt="" />
          </MobileProfileArrow>
        </MobilePortraitRow>
        <MobileProfileIdentityText>
          <Typography
            variant="titleSmall"
            id="mobile-profile-name"
            component="h1"
            ref={heading}
            tabIndex={-1}
            sx={{ outline: 0 }}
          >
            {member.name}
          </Typography>
          <Typography component="p" variant="bodySmall" sx={{ color: 'site.softWhite' }}>
            {member.generation}기 {member.role}
          </Typography>
        </MobileProfileIdentityText>
        {member.coffeeChatUrl ? (
          <MobileCoffeeChatButton
            href={member.coffeeChatUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            커피챗 신청하기
          </MobileCoffeeChatButton>
        ) : (
          <MobileCoffeeChatButton disabled>커피챗 신청하기</MobileCoffeeChatButton>
        )}
      </Box>
      <MobileBiography>
        {[
          ['전공', `${member.major} ${member.admissionYear}`],
          ['관심분야', member.interests],
          ['자기 소개', member.introduction],
        ].map(([title, text]) => (
          <Box component="div" key={title} sx={{ display: 'grid', gap: '8px' }}>
            <Typography variant="labelSmall" component="h2" sx={{ color: 'primary.main' }}>
              {title}
            </Typography>
            <Typography
              component="p"
              variant="readingSmall"
              sx={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}
            >
              {text}
            </Typography>
          </Box>
        ))}
      </MobileBiography>
      <MobileProfileTape aria-hidden="true" />
    </MobileProfilePage>
  );
}
