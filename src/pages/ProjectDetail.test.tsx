import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProjectGallery from '../components/ProjectGallery';
import { projectDetails } from '../utils/projects';
import Project from './Project';
import ProjectDetail from './ProjectDetail';

function renderProjectRoute(path: string) {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/projects" element={<Project />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </MemoryRouter>
    </HelmetProvider>,
  );
}

test('a project card opens its matching detail page', () => {
  renderProjectRoute('/projects');
  const cards = screen.getAllByRole('link', { name: 'ZU_UM 프로젝트 상세 보기' });
  expect(cards).toHaveLength(9);
  expect(cards[0]).toHaveAttribute('href', '/projects/zuum');
  fireEvent.click(cards[0]);
  expect(screen.getByRole('heading', { name: 'ZU_UM', level: 1 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: '동물농장' })).toBeInTheDocument();
  expect(screen.getByText('한규호, 박서연')).toBeInTheDocument();
});

test('detail URLs work directly and missing projects return to the list', () => {
  const detail = renderProjectRoute('/projects/zuum');
  expect(screen.getByRole('heading', { name: 'ZU_UM', level: 1 })).toBeInTheDocument();
  expect(screen.queryByRole('link', { name: /GitHub/ })).not.toBeInTheDocument();
  detail.unmount();
  renderProjectRoute('/projects/missing-project');
  expect(screen.getByRole('heading', { name: 'PROJECTs.' })).toBeInTheDocument();
});

test('gallery buttons cycle through the supplied images in both directions', () => {
  render(<ProjectGallery name="ZU_UM" slides={projectDetails[0].slides} />);
  expect(screen.getByRole('status')).toHaveTextContent('(1/2)');
  fireEvent.click(screen.getByRole('button', { name: '다음 프로젝트 이미지' }));
  expect(screen.getByRole('status')).toHaveTextContent('(2/2)');
  expect(screen.getByAltText(projectDetails[0].slides[1].alt)).toHaveAttribute('src', projectDetails[0].slides[1].image);
  fireEvent.click(screen.getByRole('button', { name: '다음 프로젝트 이미지' }));
  expect(screen.getByRole('status')).toHaveTextContent('(1/2)');
  fireEvent.click(screen.getByRole('button', { name: '이전 프로젝트 이미지' }));
  expect(screen.getByRole('status')).toHaveTextContent('(2/2)');
});

test('gallery supports arrow keys without intercepting unrelated keys', () => {
  render(<ProjectGallery name="ZU_UM" slides={projectDetails[0].slides} />);
  const gallery = screen.getByRole('region');
  fireEvent.keyDown(gallery, { key: 'ArrowRight' });
  expect(screen.getByRole('status')).toHaveTextContent('(2/2)');
  fireEvent.keyDown(gallery, { key: 'ArrowLeft' });
  expect(screen.getByRole('status')).toHaveTextContent('(1/2)');
  fireEvent.keyDown(gallery, { key: 'ArrowDown' });
  expect(screen.getByRole('status')).toHaveTextContent('(1/2)');
});

test('horizontal swipes change slides, while vertical scrolling does not', () => {
  render(<ProjectGallery name="ZU_UM" slides={projectDetails[0].slides} />);
  const gallery = screen.getByRole('region');
  fireEvent.touchStart(gallery, { touches: [{ clientX: 250, clientY: 100 }] });
  fireEvent.touchEnd(gallery, { changedTouches: [{ clientX: 100, clientY: 105 }] });
  expect(screen.getByRole('status')).toHaveTextContent('(2/2)');
  fireEvent.touchStart(gallery, { touches: [{ clientX: 100, clientY: 100 }] });
  fireEvent.touchEnd(gallery, { changedTouches: [{ clientX: 110, clientY: 250 }] });
  expect(screen.getByRole('status')).toHaveTextContent('(2/2)');
});

test('single-image and empty galleries do not show unnecessary controls', () => {
  const gallery = render(<ProjectGallery name="ZU_UM" slides={projectDetails[0].slides.slice(0, 1)} />);
  expect(screen.getByRole('status')).toHaveTextContent('(1/1)');
  expect(screen.queryByRole('button')).not.toBeInTheDocument();
  gallery.rerender(<ProjectGallery name="ZU_UM" slides={[]} />);
  expect(screen.queryByRole('region')).not.toBeInTheDocument();
});
