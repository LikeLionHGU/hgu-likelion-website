import { Box, Grid } from '@mui/material';
import { KeyboardEvent, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import accomplishments from '../assets/main/accomplishments.svg';
import faq from '../assets/main/faq.svg';
import groupPhoto from '../assets/main/group_photo.png';
import mainSchedule from '../assets/main/main_schedule.svg';
import plannerIcon from '../assets/main/planner.svg';
import recruitInformation from '../assets/main/recruit_information.svg';
import trackIntroduction from '../assets/main/track_introduction.svg';
import TrackModal from '../components/TrackModal';
import { tracksInfo } from '../utils/commons';
import {
  AccomplishmentGrid,
  AccomplishmentImage,
  AccomplishmentCard,
  AccomplishmentCaption,
  AccomplishmentTitle,
  ContentSection,
  FeatureDescription,
  FeatureLabel,
  FeatureList,
  FeatureRow,
  IntroTitle,
  MainPage,
  MoveButton,
  SectionImage,
  TrackCard,
  TrackGrid,
  TrackIcon,
  TrackName,
} from '../components/Main.styles';

const features = [
  { label: '문제 발견', description: '일상 속 불편함과 사회적 필요를 외면하지 않습니다.' },
  { label: '팀 협력', description: '다양한 전공과 배경을 가진 사자들이 함께합니다.' },
  { label: '실천 기술', description: '배운 기술로 세상을 움직이는 프로젝트를 만듭니다.' },
];

const accomplishmentCaptions = ['성과 활동 01', '성과 활동 02', '성과 활동 03'];
type TrackInfo = (typeof tracksInfo)[number];

export default function Main() {
  const [selectedTrack, setSelectedTrack] = useState<TrackInfo | null>(null);

  const handleTrackKeyDown = (event: KeyboardEvent<HTMLDivElement>, track: TrackInfo) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setSelectedTrack(track);
    }
  };

  return (
    <>
      <Helmet>
        <title>멋쟁이사자처럼 한동대</title>
      </Helmet>
      <MainPage>
        <ContentSection>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <IntroTitle>{'한동대학교\n멋쟁이사자처럼'}</IntroTitle>
            <FeatureList>
              {features.map((feature) => (
                <FeatureRow key={feature.label}>
                  <FeatureLabel>{feature.label}</FeatureLabel>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureRow>
              ))}
            </FeatureList>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }} mb={9}>
            <MoveButton variant="outlined" sx={{ marginLeft: '30px' }}>
              당장 지원하기
            </MoveButton>
            <MoveButton variant="outlined">프로젝트 보러가기</MoveButton>
          </Box>

          <SectionImage src={groupPhoto} alt="한동대학교 멋쟁이사자처럼 단체 사진" />
        </ContentSection>

        <ContentSection>
          <AccomplishmentTitle src={accomplishments} alt="Accomplishments" />
          <AccomplishmentGrid container columnSpacing={{ xs: 0, md: 3 }}>
            {accomplishmentCaptions.map((caption) => (
              <Grid item xs={12} md={4} key={caption}>
                <AccomplishmentCard>
                  <AccomplishmentCaption>{caption}</AccomplishmentCaption>
                  <AccomplishmentImage src={groupPhoto} alt={caption} />
                </AccomplishmentCard>
              </Grid>
            ))}
          </AccomplishmentGrid>
        </ContentSection>

        <ContentSection>
          <SectionImage src={mainSchedule} alt="Main schedule" />
        </ContentSection>

        <ContentSection>
          <TrackGrid container columnSpacing={{ xs: 0, md: 8 }}>
            <Grid item xs={12} md={3}>
              <Box component="img" src={trackIntroduction} alt="Track introduction" width="100%" />
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid container columnSpacing={2} rowSpacing={2}>
                {tracksInfo.map((item) => (
                  <Grid item xs={6} md={3} key={item.track}>
                    <TrackCard
                      role="button"
                      tabIndex={0}
                      aria-haspopup="dialog"
                      aria-label={`${item.track} 트랙 상세 정보 열기`}
                      onClick={() => setSelectedTrack(item)}
                      onKeyDown={(event) => handleTrackKeyDown(event, item)}
                    >
                      <TrackName>{item.track}</TrackName>
                      <TrackIcon src={plannerIcon} alt="" aria-hidden="true" />
                    </TrackCard>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </TrackGrid>
        </ContentSection>

        <ContentSection>
          <SectionImage src={recruitInformation} alt="Recruitment information" />
        </ContentSection>

        <ContentSection>
          <SectionImage src={faq} alt="Frequently asked questions" />
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
