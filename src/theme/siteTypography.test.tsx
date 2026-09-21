import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Typography } from '@mui/material';
import { RecoilRoot } from 'recoil';
import ThemeProvider from './index';
import palette from './palette';

test('site variants use the MUI theme while preserving explicit heading semantics', () => {
  render(
    <RecoilRoot>
      <ThemeProvider>
        <Typography variant="cardTitle" component="h2">
          프로젝트 이름
        </Typography>
        <Typography variant="bodyLarge" component="p" sx={{ color: 'site.muted' }}>
          프로젝트 설명
        </Typography>
        <Typography variant="body1" component="p">
          기존 페이지 본문
        </Typography>
      </ThemeProvider>
    </RecoilRoot>,
  );
  expect(screen.getByRole('heading', { name: '프로젝트 이름', level: 2 })).toHaveStyle({
    fontSize: '26px',
    fontWeight: 700,
  });
  expect(screen.getByText('프로젝트 설명')).toHaveStyle({ fontSize: '20px', color: '#868585' });
  expect(screen.getByText('기존 페이지 본문')).toHaveClass('MuiTypography-body1');
  expect(palette('dark').primary.main).toBe('#FF7710');
});
