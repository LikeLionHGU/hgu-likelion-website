import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import {
  FilterButton,
  FilterGroup,
  FilterLabel,
  FilterList,
  ProjectCardHeader,
  ProjectFilter,
  ProjectImage,
} from '../components/Project.styles';
import {
  GalleryCard,
  GalleryCardGrid,
  GalleryCardInfo,
  GalleryContent,
  GalleryDate,
  GalleryEmpty,
  GalleryGeneration,
  GalleryLayout,
  GalleryName,
  GalleryOverlay,
  GalleryPage,
  GalleryThumbnail,
  GalleryTitle,
} from '../components/Gallery.styles';
import { galleryCards, galleryGenerations } from '../utils/gallery';

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedGeneration = Number(searchParams.get('generation'));
  const generation = galleryGenerations.includes(requestedGeneration) ? requestedGeneration : 13;
  const cards = galleryCards.filter(({ album }) => album.generation === generation);

  return (
    <>
      <Helmet><title>갤러리 | 멋쟁이사자처럼 한동대</title></Helmet>
      <GalleryPage component="main">
        <GalleryContent>
          <GalleryTitle variantMapping={{ body1: 'h1' }}>Gallery.</GalleryTitle>
          <GalleryLayout>
            <ProjectFilter aria-label="갤러리 기수 선택">
              <FilterGroup>
                <FilterLabel>( Gen )</FilterLabel>
                <FilterList>
                  {galleryGenerations.map((item) => (
                    <FilterButton
                      key={item}
                      type="button"
                      aria-current={generation === item ? 'true' : undefined}
                      onClick={() => setSearchParams({ generation: String(item) })}
                    >
                      {item}th
                    </FilterButton>
                  ))}
                </FilterList>
              </FilterGroup>
            </ProjectFilter>
            <GalleryCardGrid>
              {cards.length ? cards.map(({ key, album }) => (
                <GalleryCard key={key} to={`/gallery/${album.id}`} aria-label={`${album.title} 앨범 보기`}>
                  <GalleryThumbnail>
                    <ProjectImage src={album.photos[0].thumbnail} alt={album.title} loading="lazy" />
                    <GalleryOverlay data-gallery-overlay><span>View Gallery</span></GalleryOverlay>
                  </GalleryThumbnail>
                  <GalleryCardInfo>
                    <ProjectCardHeader>
                      <GalleryName>{album.title}</GalleryName>
                      <GalleryGeneration>{album.generation}기</GalleryGeneration>
                    </ProjectCardHeader>
                    <GalleryDate>{album.listDate}</GalleryDate>
                  </GalleryCardInfo>
                </GalleryCard>
              )) : <GalleryEmpty role="status">등록된 갤러리가 없습니다.</GalleryEmpty>}
            </GalleryCardGrid>
          </GalleryLayout>
        </GalleryContent>
      </GalleryPage>
    </>
  );
}
