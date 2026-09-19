import { useRef } from 'react';
import arrow from '../assets/gallery/arrow-next.svg';
import { GalleryPhoto } from '../utils/gallery';
import {
  LightboxArrow,
  LightboxClose,
  LightboxCounter,
  LightboxImage,
  LightboxModal,
  LightboxPreview,
  LightboxStage,
} from './GalleryLightbox.styles';

interface GalleryLightboxProps {
  title: string;
  photos: GalleryPhoto[];
  selectedIndex: number | null;
  onSelect: (index: number) => void;
  onClose: () => void;
}

export default function GalleryLightbox({ title, photos, selectedIndex, onSelect, onClose }: GalleryLightboxProps) {
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  if (selectedIndex === null || !photos.length) return null;

  const index = Math.min(Math.max(selectedIndex, 0), photos.length - 1);
  const hasMultiplePhotos = photos.length > 1;
  const move = (direction: number) => onSelect((index + direction + photos.length) % photos.length);

  return (
    <LightboxModal open onClose={onClose}>
      <LightboxStage
        role="dialog"
        aria-modal="true"
        aria-label={`${title} 사진 확대`}
        tabIndex={-1}
        onKeyDown={(event) => {
          if (!hasMultiplePhotos || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
          event.preventDefault();
          move(event.key === 'ArrowRight' ? 1 : -1);
        }}
        onTouchStart={(event) => {
          const touch = event.touches[0];
          touchStart.current = { x: touch.clientX, y: touch.clientY };
        }}
        onTouchEnd={(event) => {
          const start = touchStart.current;
          touchStart.current = null;
          if (!start || !hasMultiplePhotos) return;
          const touch = event.changedTouches[0];
          const deltaX = touch.clientX - start.x;
          const deltaY = touch.clientY - start.y;
          if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) move(deltaX < 0 ? 1 : -1);
        }}
        onTouchCancel={() => { touchStart.current = null; }}
      >
        <LightboxClose onClick={onClose}>사진 확대 닫기</LightboxClose>
        <LightboxCounter role="status" aria-live="polite" aria-atomic="true">
          ({index + 1}/{photos.length})
        </LightboxCounter>
        <LightboxImage src={photos[index].src} alt={photos[index].alt} draggable={false} />
        {hasMultiplePhotos && (
          <>
            <LightboxPreview data-side="previous" aria-hidden="true">
              <img src={photos[(index - 1 + photos.length) % photos.length].src} alt="" />
            </LightboxPreview>
            <LightboxPreview data-side="next" aria-hidden="true">
              <img src={photos[(index + 1) % photos.length].src} alt="" />
            </LightboxPreview>
            <LightboxArrow data-direction="previous" aria-label="이전 사진" onClick={() => move(-1)}>
              <img src={arrow} alt="" />
            </LightboxArrow>
            <LightboxArrow data-direction="next" aria-label="다음 사진" onClick={() => move(1)}>
              <img src={arrow} alt="" />
            </LightboxArrow>
          </>
        )}
      </LightboxStage>
    </LightboxModal>
  );
}
