import { useMediaQuery, useTheme } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { FilterButton, FilterGroup, FilterLabel, FilterList } from '../components/Project.styles';
import {
  MobileGeneration, ProfileInfo, ProfileMajor, ProfileName, ProfileNameRow, ProfileOverlay,
  ProfilePhotoButton, ProfileRole, TeamCard, TeamCards, TeamContent, TeamEmpty, TeamLayout,
  TeamMobileTab, TeamMobileTabs, TeamPage, TeamSidebar, TeamTitle, TeamTrackTitle,
} from '../components/Team.styles';
import TeamProfileModal from '../components/TeamProfileModal';
import TeamProfileMobile from '../components/TeamProfileMobile';
import { getTeamMembers, TeamMember, teamGenerations, teamMembers, teamTracks, TeamTrack } from '../utils/team';

interface TeamProps { members?: readonly TeamMember[] }

export default function Team({ members = teamMembers }: TeamProps) {
  const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));
  const [params, setParams] = useSearchParams();
  const requestedGeneration = Number(params.get('generation'));
  const generation = teamGenerations.includes(requestedGeneration) ? requestedGeneration : 13;
  const requestedTrack = params.get('track');
  const track = teamTracks.find((item) => item.toLowerCase() === requestedTrack?.toLowerCase()) || 'OPS';
  const profiles = getTeamMembers(members, generation, track);
  const selectedMember = profiles.find((member) => member.id === params.get('profile')) || null;
  const selectMember = (member: TeamMember, replace = false) => {
    const nextParams = new URLSearchParams(params);
    nextParams.set('profile', member.id);
    setParams(nextParams, { replace });
  };
  const closeProfile = () => {
    const nextParams = new URLSearchParams(params);
    nextParams.delete('profile');
    setParams(nextParams, { replace: true });
  };
  const selectFilter = (nextGeneration: number, nextTrack: TeamTrack) => {
    setParams({ generation: String(nextGeneration), track: nextTrack.toLowerCase() });
  };

  return (
    <>
      <Helmet><title>팀 | 멋쟁이사자처럼 한동대</title></Helmet>
      {isMobile && selectedMember ? (
        <TeamProfileMobile member={selectedMember} hasMultipleMembers={profiles.length > 1}
          onMove={(direction) => {
            const index = profiles.findIndex((member) => member.id === selectedMember.id);
            selectMember(profiles[(index + direction + profiles.length) % profiles.length], true);
          }} />
      ) : <TeamPage component="main">
        <TeamContent>
          <TeamTitle variantMapping={{ body1: 'h1' }}>TEAM.<MobileGeneration> {generation}th</MobileGeneration></TeamTitle>
          <TeamLayout>
            <TeamSidebar aria-label="팀 기수 및 트랙 선택">
              <FilterGroup>
                <FilterLabel>( Gen )</FilterLabel>
                <FilterList>
                  {teamGenerations.map((item) => (
                    <FilterButton key={item} type="button" aria-current={generation === item ? 'true' : undefined}
                      onClick={() => selectFilter(item, track)}>{item}th</FilterButton>
                  ))}
                </FilterList>
              </FilterGroup>
              <FilterGroup>
                <FilterLabel>( Track )</FilterLabel>
                <FilterList>
                  {teamTracks.map((item) => (
                    <FilterButton key={item} type="button" aria-current={track === item ? 'true' : undefined}
                      onClick={() => selectFilter(generation, item)}>{item}</FilterButton>
                  ))}
                </FilterList>
              </FilterGroup>
            </TeamSidebar>
            <section aria-label={`${generation}기 ${track} 팀원`}>
              <TeamMobileTabs value={track} onChange={(_, value: TeamTrack) => selectFilter(generation, value)}
                variant="scrollable" scrollButtons={false} aria-label="팀 트랙 선택">
                {teamTracks.map((item) => <TeamMobileTab key={item} value={item} label={item} />)}
              </TeamMobileTabs>
              <TeamTrackTitle variantMapping={{ body1: 'h2' }}>{track.toUpperCase()}</TeamTrackTitle>
              <TeamCards>
                {profiles.map((member) => (
                  <TeamCard component="article" key={member.id}>
                    <ProfilePhotoButton type="button" aria-label={`${member.name} ${member.role} 프로필 보기`}
                      aria-haspopup={isMobile ? undefined : 'dialog'} onClick={() => selectMember(member)}>
                      <img src={member.photo} alt={`${member.name} 프로필 사진`} loading="lazy" />
                      <ProfileOverlay data-profile-overlay><span>View Profile</span></ProfileOverlay>
                    </ProfilePhotoButton>
                    <ProfileInfo>
                      <ProfileNameRow>
                        <ProfileName variantMapping={{ body1: 'h3' }}>{member.name}</ProfileName>
                        <ProfileRole label={member.role} variant="outlined" isStudent={member.role === '아기사자'} />
                      </ProfileNameRow>
                      <ProfileMajor>{member.major} {member.admissionYear}</ProfileMajor>
                    </ProfileInfo>
                  </TeamCard>
                ))}
                {!profiles.length && <TeamEmpty role="status">등록된 팀원이 없습니다.</TeamEmpty>}
              </TeamCards>
            </section>
          </TeamLayout>
        </TeamContent>
      </TeamPage>}
      {!isMobile && <TeamProfileModal member={selectedMember} onClose={closeProfile} />}
    </>
  );
}
