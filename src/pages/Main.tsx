import { Box, useMediaQuery, useTheme, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import groupPhoto from '../assets/main/group_photo.png';
import plannerIcon from '../assets/main/planner.svg';
import MainSchedule from '../components/MainSchedule';
import TrackDetails, { TrackInfo } from '../components/TrackDetails';
import TrackModal from '../components/TrackModal';
import { applyLink, tracksInfo } from '../utils/commons';
import { mainAccomplishments, mainFaqs, mainFeatures, mainRecruitment } from '../utils/main';
import {
  AccomplishmentCard,
  AccomplishmentGrid,
  AccomplishmentImage,
  AccomplishmentViewport,
  ContentSection,
  FaqHeading,
  FaqLayout,
  FaqList,
  FeatureList,
  FeatureRow,
  HorizontalViewport,
  IntroActions,
  IntroGrid,
  IntroPhoto,
  MainPage,
  MobileTrackTab,
  MobileTrackTabs,
  MoveButton,
  RecruitmentCard,
  RecruitmentGrid,
  RecruitmentHeading,
  RecruitmentLayout,
  RecruitmentList,
  RuledHeading,
  SectionLayout,
  TrackCard,
  TrackCardGrid,
  TrackIcon,
} from '../components/Main.styles';

export default function Main() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedTrack, setSelectedTrack] = useState<TrackInfo | null>(null);
  const [mobileTrack, setMobileTrack] = useState(0);

  useEffect(() => {
    if (isMobile) setSelectedTrack(null);
  }, [isMobile]);

  return (
    <>
      <Helmet>
        <title>멋쟁이사자처럼 한동대</title>
      </Helmet>
      <MainPage component="main">
        <ContentSection aria-labelledby="main-intro-title">
          <IntroGrid>
            <Typography
              variant="introTitle"
              component="h2"
              id="main-intro-title"
              sx={{ gridArea: 'title', m: 0, color: 'common.white', whiteSpace: 'pre-line' }}
            >
              {'한동대학교\n멋쟁이사자처럼'}
            </Typography>
            <FeatureList>
              {mainFeatures.map((feature) => (
                <FeatureRow key={feature.label}>
                  <Typography
                    variant="featureTitle"
                    component="h3"
                    sx={{ m: 0, color: 'site.accent' }}
                  >
                    {feature.label}
                  </Typography>
                  <Typography
                    component="p"
                    variant="featureBody"
                    sx={{ color: 'common.white', wordBreak: 'keep-all' }}
                  >
                    {feature.description}
                  </Typography>
                </FeatureRow>
              ))}
            </FeatureList>
            <IntroActions>
              <MoveButton variant="outlined" onClick={() => navigate('/projects')}>
                프로젝트 보러가기
              </MoveButton>
              <MoveButton
                variant="outlined"
                href={applyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                당장 지원하기
              </MoveButton>
            </IntroActions>
            <IntroPhoto src={groupPhoto} alt="한동대학교 멋쟁이사자처럼 단체 사진" loading="lazy" />
          </IntroGrid>
        </ContentSection>

        <ContentSection aria-labelledby="main-accomplishments-title">
          <RuledHeading>
            <Typography
              variant="sectionTitle"
              component="h2"
              id="main-accomplishments-title"
              sx={{ m: 0, color: 'common.white' }}
            >
              Accomplishments
            </Typography>
          </RuledHeading>
          <AccomplishmentViewport role="region" aria-label="주요 성과, 좌우로 스크롤" tabIndex={0}>
            <AccomplishmentGrid>
              {mainAccomplishments.map((item) => (
                <AccomplishmentCard component="figure" key={item.id}>
                  <Box component="figcaption">
                    <Typography
                      component="p"
                      variant="accomplishmentLabel"
                      sx={{ color: { xs: 'site.accent', md: 'inherit' } }}
                    >
                      {item.generation}
                    </Typography>
                    <Typography
                      component="p"
                      variant="fluidBody"
                      sx={{
                        mt: { xs: '12px', md: '19px' },
                        fontSize: { xs: 16, md: 'clamp(16px, 1.041667vw, 20px)' },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      component="p"
                      variant="labelSmall"
                      sx={{
                        display: { xs: 'block', md: 'none' },
                        color: 'site.muted',
                        mt: '4px',
                        fontWeight: 400,
                      }}
                    >
                      {item.date}
                    </Typography>
                  </Box>
                  <AccomplishmentImage
                    src={groupPhoto}
                    alt={`${item.generation} ${item.title} 활동 사진`}
                    loading="lazy"
                  />
                </AccomplishmentCard>
              ))}
            </AccomplishmentGrid>
          </AccomplishmentViewport>
        </ContentSection>

        <ContentSection aria-labelledby="main-schedule-title">
          <MainSchedule />
        </ContentSection>

        <ContentSection aria-labelledby="main-tracks-title">
          {isMobile ? (
            <>
              <Typography
                variant="sectionTitle"
                component="h2"
                id="main-tracks-title"
                sx={{ m: 0, color: 'common.white' }}
              >
                Track introduction
              </Typography>
              <MobileTrackTabs
                value={mobileTrack}
                onChange={(_, value) => setMobileTrack(value)}
                variant="scrollable"
                scrollButtons={false}
                selectionFollowsFocus
                aria-label="트랙 선택"
              >
                {tracksInfo.map((track, index) => (
                  <MobileTrackTab
                    key={track.track}
                    label={track.track}
                    id={`main-track-tab-${index}`}
                    aria-controls={`main-track-panel-${index}`}
                  />
                ))}
              </MobileTrackTabs>
              <Box
                role="tabpanel"
                id={`main-track-panel-${mobileTrack}`}
                aria-labelledby={`main-track-tab-${mobileTrack}`}
                tabIndex={0}
              >
                <TrackDetails track={tracksInfo[mobileTrack]} compact />
              </Box>
            </>
          ) : (
            <SectionLayout>
              <Typography
                variant="sectionTitle"
                component="h2"
                id="main-tracks-title"
                sx={{ m: 0, color: 'common.white' }}
              >
                Track introduction
              </Typography>
              <TrackCardGrid>
                {tracksInfo.map((track) => (
                  <TrackCard
                    key={track.track}
                    aria-haspopup="dialog"
                    aria-label={`${track.track} 트랙 상세 정보 열기`}
                    onClick={() => setSelectedTrack(track)}
                  >
                    <Typography component="p" variant="trackTitle" sx={{ color: 'inherit' }}>
                      {track.track.charAt(0) + track.track.slice(1).toLowerCase()}
                    </Typography>
                    <TrackIcon src={plannerIcon} alt="" aria-hidden="true" />
                  </TrackCard>
                ))}
              </TrackCardGrid>
            </SectionLayout>
          )}
        </ContentSection>

        <ContentSection aria-labelledby="main-recruitment-title">
          <RecruitmentLayout>
            <RecruitmentHeading>
              <Typography
                variant="sectionTitle"
                component="h2"
                id="main-recruitment-title"
                sx={{ m: 0, color: 'common.white' }}
              >
                Recruitment information
              </Typography>
            </RecruitmentHeading>
            <HorizontalViewport role="region" aria-label="모집 안내, 좌우로 스크롤" tabIndex={0}>
              <RecruitmentGrid>
                {mainRecruitment.map((item, index) => (
                  <RecruitmentCard key={item.title}>
                    <Typography variant="sectionLabel" component="h3" sx={{ m: 0 }}>
                      {String(index + 1).padStart(2, '0')}
                      <br />
                      {item.title}
                    </Typography>
                    <RecruitmentList>
                      {item.items.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </RecruitmentList>
                  </RecruitmentCard>
                ))}
              </RecruitmentGrid>
            </HorizontalViewport>
          </RecruitmentLayout>
        </ContentSection>

        <ContentSection aria-labelledby="main-faq-title">
          <FaqLayout>
            <FaqHeading>
              <Typography
                variant="sectionTitle"
                component="h2"
                id="main-faq-title"
                sx={{ m: 0, color: 'common.white' }}
              >
                FAQ
              </Typography>
            </FaqHeading>
            <FaqList component="dl">
              {mainFaqs.map((item, index) => (
                <Box
                  component="div"
                  key={item.question}
                  sx={{ display: 'grid', gap: '12px', minWidth: 0 }}
                >
                  <Typography
                    variant="question"
                    component="dt"
                    sx={{ '& span': { color: 'site.accent' } }}
                  >
                    <span>Q{index + 1}. </span>
                    {item.question}
                  </Typography>
                  <Typography
                    variant="answer"
                    component="dd"
                    sx={{ m: 0, color: 'site.muted', wordBreak: 'keep-all' }}
                  >
                    {item.answer}
                  </Typography>
                </Box>
              ))}
            </FaqList>
          </FaqLayout>
        </ContentSection>
      </MainPage>
      <TrackModal
        open={selectedTrack !== null}
        track={selectedTrack}
        onClose={() => setSelectedTrack(null)}
      />
    </>
  );
}
