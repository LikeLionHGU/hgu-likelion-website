import { Box, useMediaQuery, useTheme } from '@mui/material';
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
  AccomplishmentCard, AccomplishmentCaption, AccomplishmentDate, AccomplishmentGeneration,
  AccomplishmentGrid, AccomplishmentImage, AccomplishmentViewport, ContentSection,
  FaqAnswer, FaqHeading, FaqItem, FaqLayout, FaqList, FaqQuestion,
  FeatureDescription, FeatureLabel, FeatureList, FeatureRow, HorizontalViewport,
  IntroActions, IntroGrid, IntroPhoto, IntroTitle, MainPage, MobileTrackTab, MobileTrackTabs,
  MoveButton, RecruitmentCard, RecruitmentGrid, RecruitmentHeading, RecruitmentLayout,
  RecruitmentList, RecruitmentTitle, RuledHeading, SectionLayout, SectionTitle,
  TrackCard, TrackCardGrid, TrackIcon, TrackName,
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
      <Helmet><title>멋쟁이사자처럼 한동대</title></Helmet>
      <MainPage component="main">
        <ContentSection aria-labelledby="main-intro-title">
          <IntroGrid>
            <IntroTitle as="h2" id="main-intro-title">{'한동대학교\n멋쟁이사자처럼'}</IntroTitle>
            <FeatureList>
              {mainFeatures.map((feature) => (
                <FeatureRow key={feature.label}>
                  <FeatureLabel as="h3">{feature.label}</FeatureLabel>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureRow>
              ))}
            </FeatureList>
            <IntroActions>
              <MoveButton variant="outlined" onClick={() => navigate('/projects')}>프로젝트 보러가기</MoveButton>
              <MoveButton variant="outlined" href={applyLink} target="_blank" rel="noopener noreferrer">당장 지원하기</MoveButton>
            </IntroActions>
            <IntroPhoto src={groupPhoto} alt="한동대학교 멋쟁이사자처럼 단체 사진" loading="lazy" />
          </IntroGrid>
        </ContentSection>

        <ContentSection aria-labelledby="main-accomplishments-title">
          <RuledHeading>
            <SectionTitle as="h2" id="main-accomplishments-title">Accomplishments</SectionTitle>
          </RuledHeading>
          <AccomplishmentViewport role="region" aria-label="주요 성과, 좌우로 스크롤" tabIndex={0}>
            <AccomplishmentGrid>
              {mainAccomplishments.map((item) => (
                <AccomplishmentCard component="figure" key={item.id}>
                  <Box component="figcaption">
                    <AccomplishmentGeneration>{item.generation}</AccomplishmentGeneration>
                    <AccomplishmentCaption>{item.title}</AccomplishmentCaption>
                    <AccomplishmentDate>{item.date}</AccomplishmentDate>
                  </Box>
                  <AccomplishmentImage src={groupPhoto} alt={`${item.generation} ${item.title} 활동 사진`} loading="lazy" />
                </AccomplishmentCard>
              ))}
            </AccomplishmentGrid>
          </AccomplishmentViewport>
        </ContentSection>

        <ContentSection aria-labelledby="main-schedule-title"><MainSchedule /></ContentSection>

        <ContentSection aria-labelledby="main-tracks-title">
          {isMobile ? (
            <>
              <SectionTitle as="h2" id="main-tracks-title">Track introduction</SectionTitle>
              <MobileTrackTabs value={mobileTrack} onChange={(_, value) => setMobileTrack(value)}
                variant="scrollable" scrollButtons={false} selectionFollowsFocus aria-label="트랙 선택">
                {tracksInfo.map((track, index) => (
                  <MobileTrackTab key={track.track} label={track.track} id={`main-track-tab-${index}`}
                    aria-controls={`main-track-panel-${index}`} />
                ))}
              </MobileTrackTabs>
              <Box role="tabpanel" id={`main-track-panel-${mobileTrack}`} aria-labelledby={`main-track-tab-${mobileTrack}`} tabIndex={0}>
                <TrackDetails track={tracksInfo[mobileTrack]} compact />
              </Box>
            </>
          ) : (
            <SectionLayout>
              <SectionTitle as="h2" id="main-tracks-title">Track introduction</SectionTitle>
              <TrackCardGrid>
                {tracksInfo.map((track) => (
                  <TrackCard key={track.track} aria-haspopup="dialog" aria-label={`${track.track} 트랙 상세 정보 열기`}
                    onClick={() => setSelectedTrack(track)}>
                    <TrackName>{track.track.charAt(0) + track.track.slice(1).toLowerCase()}</TrackName>
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
              <SectionTitle as="h2" id="main-recruitment-title">Recruitment information</SectionTitle>
            </RecruitmentHeading>
            <HorizontalViewport role="region" aria-label="모집 안내, 좌우로 스크롤" tabIndex={0}>
              <RecruitmentGrid>
                {mainRecruitment.map((item, index) => (
                  <RecruitmentCard key={item.title}>
                    <RecruitmentTitle as="h3">{String(index + 1).padStart(2, '0')}<br />{item.title}</RecruitmentTitle>
                    <RecruitmentList>{item.items.map((line) => <li key={line}>{line}</li>)}</RecruitmentList>
                  </RecruitmentCard>
                ))}
              </RecruitmentGrid>
            </HorizontalViewport>
          </RecruitmentLayout>
        </ContentSection>

        <ContentSection aria-labelledby="main-faq-title">
          <FaqLayout>
            <FaqHeading><SectionTitle as="h2" id="main-faq-title">FAQ</SectionTitle></FaqHeading>
            <FaqList component="dl">
              {mainFaqs.map((item, index) => (
                <FaqItem key={item.question}>
                  <FaqQuestion as="dt"><span>Q{index + 1}. </span>{item.question}</FaqQuestion>
                  <FaqAnswer as="dd">{item.answer}</FaqAnswer>
                </FaqItem>
              ))}
            </FaqList>
          </FaqLayout>
        </ContentSection>
      </MainPage>
      <TrackModal open={selectedTrack !== null} track={selectedTrack} onClose={() => setSelectedTrack(null)} />
    </>
  );
}
