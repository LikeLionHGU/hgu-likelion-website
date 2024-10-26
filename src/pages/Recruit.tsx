import { Box, styled, Tab, Tabs, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import vector20 from '../assets/recruit/vector20.svg';
import group5221 from '../assets/recruit/group5221.svg';
import howtoapply from '../assets/recruit/howtoapply.svg';
import schedule from '../assets/recruit/schedule.svg';
import questions from '../assets/recruit/questions.svg';
import howtoapply_mobile from '../assets/recruit/mobile/howtoapply_mobile.svg';
import schedule_mobile from '../assets/recruit/mobile/schedule_mobile.svg';
import questions_mobile from '../assets/recruit/mobile/questions_mobile.svg';
import rec_planner from '../assets/recruit/rec_planner.svg';
import { useState } from 'react';

const contents = [
  [
    {
      title1: '겨울방학',
      title2: ' 이수 기간',
      list: [
        '기획 집중 이수 : 24년 12월 23일 ~ 25년 1월 31일 (설 연휴 제외)',
        '방학 프로젝트 : 25년 2월 1일 ~ 2월 21일',
      ],
    },
    {
      title1: '어떤 것',
      title2: '을 배우나요?',
      list: [
        'IA 설계, 요구사항명세서 작성 등 실제 현업에서 프로젝트의 전반적인 프로세스와 산출물을 인지',
        '특정 문제를 아이디어로 도출하는 방법론 학습 (AS-IS, TO-BE 기법, 5 whys ,골든 서클 등)',
        '여러 사례를 통해 배우는 효과적인 커뮤니케이션 방법',
        '머릿속에만 있던 아이디어의 실체화와 그 과정에서 발생하는 타 직군과의 협업 역량 강화',
      ],
    },
    {
      title1: '어떤 사람',
      title2: '을 뽑나요?',
      list: [
        '주어진 일에 대한 책임감이 있는 사람',
        '문제에 대해서 깊게 탐구하는 사람',
        '기획에 대한 열정이 있는 사람',
        '협업 경험을 통한 소통의 역량을 증진시키고 싶은 사람',
        '머릿속에서 생각하는 것에 그치지 않고 실행까지 옮길 수 있는 사람',
      ],
    },
    {
      title1: '이거까지 ',
      title2: '있으면 최고',
      list: [
        '디자이너, 개발 직군과의 프로젝트 경험',
        '트렌드 읽는 눈을 키우고자 했던 경험',
        '개인적으로 만들어서 배포하고 싶은 서비스 아이디어',
      ],
    },
  ],
  [
    {
      title1: '겨울방학',
      title2: ' 이수 기간',
      list: [
        '디자인 집중 이수 : 25년 1월 6일 ~ 25년 1월 31일 (설 연휴 제외)',
        '방학 프로젝트 : 25년 2월 1일 ~ 2월 21일',
      ],
    },
    {
      title1: '어떤 것',
      title2: '을 배우나요?',
      list: [
        '문제점을 UX적으로 분석하고 솔루션을 도출하는 과정',
        '도출한 솔루션을 시각적으로 표현하기 위한 UI 역량',
        '현업에서 사용하는 툴인 “피그마”를 통한 웹디자인',
      ],
    },
    {
      title1: '어떤 사람',
      title2: '을 뽑나요?',
      list: [
        '디자인에 관심은 있지만 배울 수 있는 기회가 적었던 사람',
        'UI, UX 전반적인 과정에 관심을 가지고 열정있게 배울 준비가 된 사람',
        '웹이 제작되는 전체적인 과정을 배우고 싶은 사람',
        '실제로 구현하고 싶은 아이디어가 있고, 이에 대한 열정이 있는 사람',
      ],
    },
    {
      title1: '이거까지 ',
      title2: '있으면 최고',
      list: ['디자인 공부 경험', '만들고 싶은 서비스 아이디어가 있으신 분'],
    },
  ],
  [
    {
      title1: '겨울방학',
      title2: ' 이수 기간',
      list: [
        '프론트엔드 집중 이수 : 24년 12월 30일 ~ 25년 1월 31일 (설 연휴 제외)',
        '방학 프로젝트 : 25년 2월 1일 ~ 2월 21일',
      ],
    },
    {
      title1: '어떤 것',
      title2: '을 배우나요?',
      list: [
        '프론트엔드 개발의 기초가 되는 HTML, CSS를 공부합니다.',
        '웹 브라우저에서 주로 사용되는 언어인 자바스크립트를 공부합니다.',
        '리액트를 사용하여 싱글 페이지 애플리케이션을 만들고, 서버에 데이터를 요청하는 작업을 다룹니다.',
      ],
    },
    {
      title1: '어떤 사람',
      title2: '을 뽑나요?',
      list: [
        '웹/앱 서비스 개발에 관심이 많은 사람',
        '문제 발생 시 포기하지 않고 끈기 있게 해결하려는 의지가 있는 사람',
        '협업 과정에서 원활한 소통과 긍정적인 분위기를 유지하며 함께 성과를 만들 수 있는 사람',
        '새로운 지식을 습득하는 데에 주저함이 없고 지속적인 학습에 열려있는 사람',
        '시각적 결과물을 선호하며 직관적으로 확인하고 개선할 수 있는 사람',
      ],
    },
    {
      title1: '이거까지 ',
      title2: '있으면 최고',
      list: ['프로그래밍 기초 지식이 있으신 분', '만들고 싶은 서비스 아이디어가 있으신 분'],
    },
  ],
  [
    {
      title1: '겨울방학',
      title2: ' 이수 기간',
      list: [
        '백엔드 집중 이수 : 24년 12월 23일 ~ 25년 1월 31일 (설 연휴 제외)',
        '방학 프로젝트 : 25년 2월 1일 ~ 2월 21일',
      ],
    },
    {
      title1: '어떤 것',
      title2: '을 배우나요?',
      list: [
        '백엔드 개발에 필요한 전반적인 지식들을 배웁니다.',
        '실제 현업에서 사용되는 웹 프레임워크들을 사용합니다.',
        '타직군과 협업 경험을 할 수 있습니다.',
      ],
    },
    {
      title1: '어떤 사람',
      title2: '을 뽑나요?',
      list: [
        '성실하게 과제를 수행해올 수 있는 분(가장 중요)',
        '배우려는 의지, 열정이 누구보다 강한 분',
        '웹 애플리케이션 개발을 배워보고 싶은 분',
        '파고드는 것에 재미를 느끼는 분',
      ],
    },
    {
      title1: '이거까지 ',
      title2: '있으면 최고',
      list: ['책임감있게 무언가를 끝까지 끝낸 경험', '기초적인 언어 학습 경험'],
    },
  ],
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface StyledTabProps {
  label: string;
}

const AntTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
});

const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)({
  color: '#787878',
  fontSize: 24,
  fontWeight: 500,
  '&:hover': {
    color: '#FFFFFF',
  },
  '&.Mui-selected': {
    color: '#FFFFFF',
    fontWeight: 900,
    backgroundImage: `url(${rec_planner})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  '&.MuiTab-root': {
    width: '12%',
    marginLeft: 24,
    marginRight: 24,
  },
});

const AntTabMobile = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)({
  color: '#787878',
  fontWeight: 500,
  '&:hover': {
    color: '#FFFFFF',
  },
  '&.Mui-selected': {
    color: '#FFFFFF',
    fontWeight: 900,
    backgroundImage: `url(${rec_planner})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
});

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return <Box hidden={value !== index}>{value === index && <Box>{children}</Box>}</Box>;
}

export default function Recruit() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Helmet>
        <title>RECRUIT - 멋쟁이사자처럼 한동대</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'common.black',
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 15,
        }}
      >
        <Box>
          <Box component="img" src={vector20} alt="vector20" mb={1.5} />
          <Box component="img" src={howtoapply} alt="howtoapply" />
        </Box>
        <Box component="img" src={schedule} alt="schedule" />
        <Box>
          <Box component="img" src={group5221} alt="group5221" mb={8} sx={{ width: 224 }} />
          <AntTabs value={value} onChange={handleChange} centered variant="standard">
            <AntTab label="기획자" />
            <AntTab label="디자이너" />
            <AntTab label="프론트엔드" />
            <AntTab label="백엔드" />
          </AntTabs>
          <Box sx={{ height: 56 }} />
          {contents.map((content, index) => (
            <TabPanel value={value} index={index} key={index}>
              {content.map((item, index2) => (
                <Box
                  key={index2}
                  sx={{
                    color: 'common.white',
                    px: 3,
                    py: 2,
                    border: 1,
                    borderRadius: 2,
                    display: 'flex',
                    mb: content.length - 1 === index2 ? 0 : 5,
                  }}
                >
                  <Typography variant="h6" sx={{ width: '40%', color: 'common.white' }}>
                    <span
                      style={{
                        color: 'transparent',
                        background:
                          'linear-gradient(270deg, #D16E31 66.98%, #FDAC7A 74.72%, #FF731D 84.52%, #792F02 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                      }}
                    >
                      {item.title1}
                    </span>
                    {item.title2}
                  </Typography>
                  <Box>
                    <ul>
                      {item.list.map((text, index3) => (
                        <li key={index3}>{text}</li>
                      ))}
                    </ul>
                  </Box>
                </Box>
              ))}
            </TabPanel>
          ))}
        </Box>
        <Box component="img" src={questions} alt="questions" sx={{ width: 853 }} />
      </Box>
      <Box
        sx={{
          backgroundColor: 'common.black',
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'column',
          gap: 10,
        }}
      >
        <Box component="img" src={howtoapply_mobile} alt="howtoapply_mobile" />
        <Box component="img" src={schedule_mobile} alt="schedule_mobile" />
        <Box>
          <Box component="img" src={group5221} alt="group5221" mb={5} sx={{ width: 163 }} />
          <AntTabs value={value} onChange={handleChange} centered variant="fullWidth">
            <AntTabMobile label="기획자" />
            <AntTabMobile label="디자이너" />
            <AntTabMobile label="프론트엔드" />
            <AntTabMobile label="백엔드" />
          </AntTabs>
          <Box sx={{ height: 32 }} />
          {contents.map((content, index) => (
            <TabPanel value={value} index={index} key={index}>
              {content.map((item, index2) => (
                <Box
                  key={index2}
                  sx={{
                    color: 'common.white',
                    px: 3,
                    py: 2,
                    border: 1,
                    borderRadius: 2,
                    mb: content.length - 1 === index2 ? 0 : 5,
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'common.white' }} gutterBottom>
                    <span
                      style={{
                        color: 'transparent',
                        background:
                          'linear-gradient(270deg, #D16E31 66.98%, #FDAC7A 74.72%, #FF731D 84.52%, #792F02 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                      }}
                    >
                      {item.title1}
                    </span>
                    {item.title2}
                  </Typography>
                  <Box>
                    <ul style={{ marginTop: 8, marginLeft: 24 }}>
                      {item.list.map((text, index3) => (
                        <li key={index3}>{text}</li>
                      ))}
                    </ul>
                  </Box>
                </Box>
              ))}
            </TabPanel>
          ))}
        </Box>
        <Box component="img" src={questions_mobile} alt="questions_mobile" />
      </Box>
    </>
  );
}
