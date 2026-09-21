import { Typography, Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import {
  FilterButton,
  FilterGroup,
  ProjectCardHeader,
  ProjectFilter,
  ProjectImage,
} from '../components/Project.styles';
import {
  GalleryCard,
  GalleryCardGrid,
  GalleryContent,
  GalleryGeneration,
  GalleryLayout,
  GalleryOverlay,
  GalleryPage,
  GalleryThumbnail,
} from '../components/Gallery.styles';
import { galleryCards, galleryGenerations } from '../utils/gallery';

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedGeneration = Number(searchParams.get('generation'));
  const generation = galleryGenerations.includes(requestedGeneration) ? requestedGeneration : 13;
  const cards = galleryCards.filter(({ album }) => album.generation === generation);

  return (
    <>
      <Helmet>
        <title>갤러리 | 멋쟁이사자처럼 한동대</title>
      </Helmet>
      <GalleryPage component="main">
        <GalleryContent>
          <Typography variant="pageTitle" component="h1">
            Gallery.
          </Typography>
          <GalleryLayout>
            <ProjectFilter aria-label="갤러리 기수 선택">
              <FilterGroup>
                <Typography
                  component="p"
                  variant="cardLabel"
                  sx={{ color: 'common.white', textAlign: 'left', whiteSpace: 'nowrap' }}
                >
                  ( Gen )
                </Typography>
                <Box component="div" sx={{ display: 'grid', gap: '15px', justifyItems: 'start' }}>
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
                </Box>
              </FilterGroup>
            </ProjectFilter>
            <GalleryCardGrid>
              {cards.length ? (
                cards.map(({ key, album }) => (
                  <GalleryCard
                    key={key}
                    to={`/gallery/${album.id}`}
                    aria-label={`${album.title} 앨범 보기`}
                  >
                    <GalleryThumbnail>
                      <ProjectImage
                        src={album.photos[0].thumbnail}
                        alt={album.title}
                        loading="lazy"
                      />
                      <GalleryOverlay data-gallery-overlay>
                        <span>View Gallery</span>
                      </GalleryOverlay>
                    </GalleryThumbnail>
                    <Box component="div" sx={{ display: 'grid', minWidth: 0, gap: '5px' }}>
                      <ProjectCardHeader>
                        <Typography
                          component="p"
                          variant="cardLabel"
                          sx={{
                            color: 'common.white',
                            lineHeight: 26 / 22,
                            wordBreak: 'keep-all',
                            overflowWrap: 'anywhere',
                            '&:hover': { color: 'site.accent' },
                          }}
                        >
                          {album.title}
                        </Typography>
                        <GalleryGeneration>{album.generation}기</GalleryGeneration>
                      </ProjectCardHeader>
                      <Typography
                        component="p"
                        variant="captionLarge"
                        sx={{ color: 'site.muted', '&:hover': { color: 'site.accent' } }}
                      >
                        {album.listDate}
                      </Typography>
                    </Box>
                  </GalleryCard>
                ))
              ) : (
                <Typography
                  component="p"
                  variant="readingMedium"
                  role="status"
                  sx={{ color: 'site.muted' }}
                >
                  등록된 갤러리가 없습니다.
                </Typography>
              )}
            </GalleryCardGrid>
          </GalleryLayout>
        </GalleryContent>
      </GalleryPage>
    </>
  );
}
