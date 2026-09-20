import profileSample from '../assets/team/profile-sample.png';

export const teamGenerations = [13, 12, 11];
export const teamTracks = ['OPS', 'Planner', 'Designer', 'Frontend', 'Backend'] as const;
export type TeamTrack = typeof teamTracks[number];
export type TeamRole = '대표' | '부대표' | '총무' | '서기' | 'ops' | '멘토' | '아기사자';

export interface TeamMember {
  id: string;
  name: string;
  generation: number;
  track: TeamTrack;
  role: TeamRole;
  opsSpecialty?: '촬영' | 'bx';
  isTrackLead?: boolean;
  admissionYear: number;
  major: string;
  photo: string;
  interests: string;
  introduction: string;
  coffeeChatUrl?: string;
}

const opsRoleOrder: Record<TeamRole, number> = {
  대표: 0, 부대표: 1, 총무: 2, 서기: 3, ops: 4, 멘토: 5, 아기사자: 6,
};

// Four Figma sample entries for layout review, not the real member roster.
// Keep one consistent major/year across web and mobile until real data is supplied.
export const teamMembers: TeamMember[] = (['대표', '부대표', '총무', '서기'] as const).map((role, index) => ({
  id: `sample-ops-${index + 1}`,
  name: '김현우', generation: 13, track: 'OPS', role,
  admissionYear: 20, major: 'GE', photo: profileSample,
  interests: '저는 이런거 이런거 관심있어요',
  introduction: `안녕하세요. 13기 ${role} 김현우입니다. 저는 이런거 이런거 관심있어요!!!저는 이런거 이런거 관심있어요!!!저는 이런거 이런거 관심있어요!!!저는 이런거 이런거 관심있어요!!!저는 이런거 이런거 관심있어요!!!`,
}));

export function getTeamMembers(members: readonly TeamMember[], generation: number, track: TeamTrack) {
  return members.filter((member) => member.generation === generation && member.track === track)
    .sort((a, b) => {
      if (track === 'OPS') {
        const roleDifference = opsRoleOrder[a.role] - opsRoleOrder[b.role];
        if (roleDifference) return roleDifference;
        const specialtyOrder = { 촬영: 0, bx: 1 };
        return (a.opsSpecialty ? specialtyOrder[a.opsSpecialty] : 2)
          - (b.opsSpecialty ? specialtyOrder[b.opsSpecialty] : 2);
      }
      const rank = (member: TeamMember) => member.role === '멘토' ? (member.isTrackLead ? 0 : 1) : 2;
      return rank(a) - rank(b) || (a.role === '멘토' ? a.admissionYear - b.admissionYear : 0);
    });
}
