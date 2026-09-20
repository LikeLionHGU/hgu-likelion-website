import '@testing-library/jest-dom';
import { useMediaQuery } from '@mui/material';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import { tracksInfo } from '../utils/commons';

jest.mock('@mui/material/useMediaQuery', () => ({ __esModule: true, default: jest.fn() }));
const mediaQuery = useMediaQuery as jest.Mock;

function renderMain(mobile: boolean) {
  mediaQuery.mockReturnValue(mobile);
  return render(
    <HelmetProvider>
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<h1>프로젝트 목록</h1>} />
        </Routes>
      </MemoryRouter>
    </HelmetProvider>,
  );
}

test('mobile track tabs display the selected track data inline', () => {
  renderMain(true);
  expect(screen.queryByRole('button', { name: /트랙 상세 정보 열기/ })).not.toBeInTheDocument();
  tracksInfo.forEach((track) => {
    fireEvent.click(screen.getByRole('tab', { name: track.track }));
    const panel = screen.getByRole('tabpanel', { name: track.track });
    track.curriculum.forEach((item) => expect(within(panel).getByText(item)).toBeInTheDocument());
    track.lookingFor.forEach((item) => expect(within(panel).getByText(item)).toBeInTheDocument());
    expect(screen.getByRole('tab', { name: track.track })).toHaveAttribute('aria-selected', 'true');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});

test('desktop cards keep their track-specific modal and Escape closes it', () => {
  renderMain(false);
  expect(screen.queryByRole('tab')).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'BACKEND 트랙 상세 정보 열기' }));
  const modal = screen.getByRole('dialog', { name: 'BACKEND' });
  expect(within(modal).getByText('자바 기초 & 클린 코드')).toBeInTheDocument();
  fireEvent.keyDown(modal, { key: 'Escape' });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('the project call to action opens the existing project route', () => {
  renderMain(true);
  fireEvent.click(screen.getByRole('button', { name: '프로젝트 보러가기' }));
  expect(screen.getByRole('heading', { name: '프로젝트 목록' })).toBeInTheDocument();
});
