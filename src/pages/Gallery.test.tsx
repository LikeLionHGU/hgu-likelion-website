import '@testing-library/jest-dom';
import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Gallery from './Gallery';
import GalleryDetail from './GalleryDetail';

function renderGallery(path = '/gallery') {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:albumId" element={<GalleryDetail />} />
        </Routes>
      </MemoryRouter>
    </HelmetProvider>,
  );
}

test('gallery cards link to the matching album', () => {
  renderGallery();
  const cards = screen.getAllByRole('link', { name: '홀리데이 해커톤 앨범 보기' });
  expect(cards).toHaveLength(9);
  expect(cards[0]).toHaveAttribute('href', '/gallery/holiday-hackathon-13');
  fireEvent.click(cards[0]);
  expect(screen.getByRole('heading', { name: '홀리데이 해커톤', level: 1 })).toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: /사진 \d 확대/ })).toHaveLength(9);
});

test('generation filters show available albums without making up missing data', () => {
  renderGallery();
  fireEvent.click(screen.getByRole('button', { name: '12th' }));
  expect(screen.getByRole('button', { name: '12th' })).toHaveAttribute('aria-current', 'true');
  expect(screen.getByRole('status')).toHaveTextContent('등록된 갤러리가 없습니다.');
  expect(screen.queryByRole('link', { name: '홀리데이 해커톤 앨범 보기' })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: '13th' }));
  expect(screen.getAllByRole('link', { name: '홀리데이 해커톤 앨범 보기' })).toHaveLength(9);
});

test('the generation query parameter is restored on direct visits', () => {
  const page = renderGallery('/gallery?generation=11');
  expect(screen.getByRole('button', { name: '11th' })).toHaveAttribute('aria-current', 'true');
  expect(screen.getByRole('status')).toBeInTheDocument();
  page.unmount();
  renderGallery('/gallery?generation=invalid');
  expect(screen.getByRole('button', { name: '13th' })).toHaveAttribute('aria-current', 'true');
});

test('an unknown album returns to the gallery list', () => {
  renderGallery('/gallery/missing');
  expect(screen.getByRole('heading', { name: 'Gallery.' })).toBeInTheDocument();
});

test('clicking a photo opens that photo and cycles through the album', () => {
  renderGallery('/gallery/holiday-hackathon-13');
  fireEvent.click(screen.getByRole('button', { name: '홀리데이 해커톤 사진 9 확대' }));
  const dialog = screen.getByRole('dialog', { name: '홀리데이 해커톤 사진 확대' });
  expect(within(dialog).getByRole('status')).toHaveTextContent('(9/9)');
  expect(within(dialog).getByAltText('홀리데이 해커톤 단체 사진 9')).toBeInTheDocument();
  fireEvent.click(within(dialog).getByRole('button', { name: '다음 사진' }));
  expect(within(dialog).getByRole('status')).toHaveTextContent('(1/9)');
  fireEvent.click(within(dialog).getByRole('button', { name: '이전 사진' }));
  expect(within(dialog).getByRole('status')).toHaveTextContent('(9/9)');
});

test('keyboard navigation and Escape close work and restore focus', () => {
  renderGallery('/gallery/holiday-hackathon-13');
  const trigger = screen.getByRole('button', { name: '홀리데이 해커톤 사진 1 확대' });
  act(() => trigger.focus());
  fireEvent.click(trigger);
  const dialog = screen.getByRole('dialog');
  fireEvent.keyDown(dialog, { key: 'ArrowLeft' });
  expect(within(dialog).getByRole('status')).toHaveTextContent('(9/9)');
  fireEvent.keyDown(dialog, { key: 'ArrowRight' });
  expect(within(dialog).getByRole('status')).toHaveTextContent('(1/9)');
  fireEvent.keyDown(dialog, { key: 'Escape' });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(trigger).toHaveFocus();
});

test('swiping changes photos but vertical scrolling and cancelled gestures do not', () => {
  renderGallery('/gallery/holiday-hackathon-13');
  fireEvent.click(screen.getByRole('button', { name: '홀리데이 해커톤 사진 1 확대' }));
  const dialog = screen.getByRole('dialog');
  fireEvent.touchStart(dialog, { touches: [{ clientX: 250, clientY: 100 }] });
  fireEvent.touchEnd(dialog, { changedTouches: [{ clientX: 100, clientY: 110 }] });
  expect(within(dialog).getByRole('status')).toHaveTextContent('(2/9)');
  fireEvent.touchStart(dialog, { touches: [{ clientX: 250, clientY: 100 }] });
  fireEvent.touchEnd(dialog, { changedTouches: [{ clientX: 200, clientY: 300 }] });
  expect(within(dialog).getByRole('status')).toHaveTextContent('(2/9)');
  fireEvent.touchStart(dialog, { touches: [{ clientX: 250, clientY: 100 }] });
  fireEvent.touchCancel(dialog);
  fireEvent.touchEnd(dialog, { changedTouches: [{ clientX: 100, clientY: 110 }] });
  expect(within(dialog).getByRole('status')).toHaveTextContent('(2/9)');
});

test('the modal closes from its backdrop or accessible close button', () => {
  renderGallery('/gallery/holiday-hackathon-13');
  fireEvent.click(screen.getByRole('button', { name: '홀리데이 해커톤 사진 1 확대' }));
  fireEvent.click(document.querySelector('.MuiBackdrop-root')!);
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: '홀리데이 해커톤 사진 2 확대' }));
  fireEvent.click(screen.getByRole('button', { name: '사진 확대 닫기' }));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});
