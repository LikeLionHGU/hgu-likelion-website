import '@testing-library/jest-dom';
import { useMediaQuery } from '@mui/material';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import Team from './Team';
import { getTeamMembers, TeamMember } from '../utils/team';

jest.mock('@mui/material/useMediaQuery', () => ({ __esModule: true, default: jest.fn() }));
const mediaQuery = useMediaQuery as jest.Mock;
beforeEach(() => { mediaQuery.mockReturnValue(false); });

function HistoryBack() {
  const navigate = useNavigate();
  return <button onClick={() => navigate(-1)}>브라우저 뒤로 가기</button>;
}

const fixture: TeamMember = {
  id: 'president', name: '테스트 대표', generation: 13, track: 'OPS', role: '대표',
  admissionYear: 20, major: '테스트 전공', photo: '/profile.png',
  interests: '테스트 관심 분야', introduction: '테스트 자기소개',
};
const members: TeamMember[] = [
  { ...fixture, id: 'bx', role: 'ops', opsSpecialty: 'bx' },
  { ...fixture, id: 'secretary', role: '서기' },
  { ...fixture, id: 'photo', role: 'ops', opsSpecialty: '촬영' },
  { ...fixture, id: 'treasurer', role: '총무' },
  fixture,
  { ...fixture, id: 'vice', role: '부대표' },
  { ...fixture, id: 'student', track: 'Planner', role: '아기사자', name: '테스트 아기사자' },
  { ...fixture, id: 'mentor22', track: 'Planner', role: '멘토', admissionYear: 22 },
  { ...fixture, id: 'lead', track: 'Planner', role: '멘토', isTrackLead: true, admissionYear: 23 },
  { ...fixture, id: 'mentor21', track: 'Planner', role: '멘토', admissionYear: 21 },
];

function renderTeam(path = '/team') {
  return render(<HelmetProvider><MemoryRouter initialEntries={[path]}><Team members={members} /><HistoryBack /></MemoryRouter></HelmetProvider>);
}

test('OPS profiles follow the requested role and specialty order without changing source data', () => {
  expect(getTeamMembers(members, 13, 'OPS').map(({ id }) => id))
    .toEqual(['president', 'vice', 'treasurer', 'secretary', 'photo', 'bx']);
  expect(members[0].id).toBe('bx');
});

test('track leads precede mentors by admission year and students', () => {
  expect(getTeamMembers(members, 13, 'Planner').map(({ id }) => id))
    .toEqual(['lead', 'mentor21', 'mentor22', 'student']);
});

test('desktop filters change displayed profiles and show an empty generation honestly', () => {
  renderTeam();
  fireEvent.click(screen.getByRole('button', { name: 'Planner', exact: true }));
  expect(screen.getByRole('button', { name: '테스트 아기사자 아기사자 프로필 보기' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: '12th', exact: true }));
  expect(screen.getByRole('status')).toHaveTextContent('등록된 팀원이 없습니다.');
});

test('track tabs select a track and desktop profiles open accessible, dismissible modals', () => {
  renderTeam();
  // JSDOM does not apply responsive media queries; browser QA checks mobile visibility.
  fireEvent.click(screen.getByRole('tab', { name: 'Planner', exact: true, hidden: true }));
  fireEvent.click(screen.getByRole('button', { name: '테스트 아기사자 아기사자 프로필 보기' }));
  const dialog = screen.getByRole('dialog', { name: '테스트 아기사자' });
  expect(within(dialog).getByText('테스트 자기소개')).toBeInTheDocument();
  expect(within(dialog).getByRole('button', { name: '커피챗 신청하기' })).toBeDisabled();
  fireEvent.keyDown(dialog, { key: 'Escape' });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('mobile profile arrows follow the sorted roster and browser back returns to the list', () => {
  mediaQuery.mockReturnValue(true);
  const scroll = jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
  renderTeam();
  fireEvent.click(screen.getByRole('button', { name: '테스트 대표 대표 프로필 보기' }));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('테스트 대표');
  expect(screen.getByRole('heading', { name: '관심분야' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: '커피챗 신청하기' })).toBeDisabled();
  expect(screen.getByText('13기 대표')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: '다음 프로필' }));
  expect(screen.getByText('13기 부대표')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: '이전 프로필' }));
  expect(screen.getByText('13기 대표')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: '이전 프로필' }));
  expect(screen.getByText('13기 ops')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: '브라우저 뒤로 가기' }));
  expect(screen.getByRole('button', { name: '테스트 대표 대표 프로필 보기' })).toBeInTheDocument();
  scroll.mockRestore();
});

test('valid URL filters are restored and invalid filters fall back to the default view', () => {
  const view = renderTeam('/team?generation=13&track=planner');
  expect(screen.getByRole('button', { name: '테스트 아기사자 아기사자 프로필 보기' })).toBeInTheDocument();
  view.unmount();
  renderTeam('/team?generation=999&track=unknown');
  expect(screen.getByRole('button', { name: '테스트 대표 대표 프로필 보기' })).toBeInTheDocument();
});
