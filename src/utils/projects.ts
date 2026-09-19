import thumbnail from '../assets/project/zuum.png';
import overview from '../assets/project/zuum-overview.png';
import research from '../assets/project/zuum-research.png';
import githubIcon from '../assets/project/github.svg';
import figmaIcon from '../assets/project/figma.svg';

export interface ProjectInfo {
  id: string;
  name: string;
  scope: string;
  generation: string;
  subtitle: string;
  thumbnail: string;
  description: string;
  period: { start: string; end: string };
  team: { name: string; members: { role: string; names: string }[] };
  deliverables: { name: string; icon: string; href?: string }[];
  slides: { image: string; alt: string }[];
}

// Keep the supplied Figma copy and assets until the project content is finalized.
export const projectDetails: ProjectInfo[] = [
  {
    id: 'zuum',
    name: 'ZU_UM',
    scope: 'WEB+APP',
    generation: '13기',
    subtitle: '잃어버린 사람과 분실물을 하나로 잇는 플랫폼',
    thumbnail,
    description:
      '이 페이지 예쁘지? 우리 잘했지? 이 페이지 예쁘지? 우리 잘했지? 이 페이지 예쁘지? 우리 잘했지? 이 페이지 예쁘지? 우리 잘했지? 이 페이지 예쁘지? 우리 잘했지? 이 페이지 예쁘지? 우리 잘했지? 이 페이지 예쁘지? 우리 잘했지? 이 페이지 예쁘지? 우리 잘했지? 이 페이지 예쁘지? 우리 잘했지? 이 페이지 예쁘지? 우리 잘했지?  이 페이지 예쁘지? 우리 잘했지?  이 페이지 예쁘지? ',
    period: { start: '2025.01.24', end: '2025.02.21' },
    team: {
      name: '동물농장',
      members: [
        { role: '기획', names: '이선유' },
        { role: '디자인', names: '김채원' },
        { role: '프론트엔드', names: '한규호, 박서연' },
        { role: '백엔드', names: '권혁민, 여지현' },
      ],
    },
    // The design contains icons but no destination URLs. Add href when provided.
    deliverables: [
      { name: 'GitHub', icon: githubIcon },
      { name: 'Figma', icon: figmaIcon },
    ],
    slides: [
      { image: overview, alt: 'ZUUM 서비스 소개와 모바일·데스크톱 화면' },
      { image: research, alt: 'ZUUM 문제 정의, 해결 방향과 경쟁 서비스 비교' },
    ],
  },
];

// The current project-list design repeats the same sample project nine times.
export const projectCards = Array.from({ length: 9 }, (_, index) => ({
  key: `zuum-${index}`,
  project: projectDetails[0],
}));
