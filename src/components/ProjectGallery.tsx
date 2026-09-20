import { KeyboardEvent, useRef, useState } from 'react';
import arrow from '../assets/project/arrow-next.svg';
import { ProjectInfo } from '../utils/projects';
import { Gallery, GalleryArrow, GalleryCounter, GalleryImage, GalleryPeek } from './ProjectDetail.styles';

interface ProjectGalleryProps {
  name: string;
  slides: ProjectInfo['slides'];
}

export default function ProjectGallery({ name, slides }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const hasMultipleSlides = slides.length > 1;
  const moveSlide = (direction: number) => {
    setActiveIndex((current) => (current + direction + slides.length) % slides.length);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!hasMultipleSlides || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    moveSlide(event.key === 'ArrowRight' ? 1 : -1);
  };

  if (!slides.length) return null;

  return (
    <Gallery
      role="region"
      aria-roledescription="carousel"
      aria-label={`${name} 프로젝트 이미지`}
      tabIndex={hasMultipleSlides ? 0 : undefined}
      onKeyDown={handleKeyDown}
      onTouchStart={(event) => {
        const touch = event.touches[0];
        touchStart.current = { x: touch.clientX, y: touch.clientY };
      }}
      onTouchEnd={(event) => {
        const start = touchStart.current;
        touchStart.current = null;
        if (!start || !hasMultipleSlides) return;
        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - start.x;
        const deltaY = touch.clientY - start.y;
        if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
          moveSlide(deltaX < 0 ? 1 : -1);
        }
      }}
      onTouchCancel={() => { touchStart.current = null; }}
    >
      <GalleryCounter role="status" aria-live="polite" aria-atomic="true">
        ({activeIndex + 1}/{slides.length})
      </GalleryCounter>
      <GalleryImage src={slides[activeIndex].image} alt={slides[activeIndex].alt} draggable={false} />
      {hasMultipleSlides && (
        <>
          <GalleryPeek aria-hidden="true">
            <img src={slides[(activeIndex + 1) % slides.length].image} alt="" draggable={false} />
          </GalleryPeek>
          <GalleryArrow aria-label="이전 프로젝트 이미지" data-direction="previous" onClick={() => moveSlide(-1)}>
            <img src={arrow} alt="" />
          </GalleryArrow>
          <GalleryArrow aria-label="다음 프로젝트 이미지" data-direction="next" onClick={() => moveSlide(1)}>
            <img src={arrow} alt="" />
          </GalleryArrow>
        </>
      )}
    </Gallery>
  );
}
