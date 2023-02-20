import { Box, styled, Tab, Tabs, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import group5191 from '../assets/recruit/group5191.svg';
import group5200 from '../assets/recruit/group5200.svg';
import group5203 from '../assets/recruit/group5203.svg';
import vector20 from '../assets/recruit/vector20.svg';
import group5221 from '../assets/recruit/group5221.svg';
import group5217 from '../assets/recruit/mobile/group5217.svg';
import group5218 from '../assets/recruit/mobile/group5218.svg';
import group5220 from '../assets/recruit/mobile/group5220.svg';
import rec_planner from '../assets/recruit/rec_planner.svg';
import { useState } from 'react';

const contents = [
  [
    {
      title1: '어떤 것',
      title2: '을 배우나요?',
      list: [
        'IA 설계, 요구사항명세서 작성 등 실제 현업에서 프로젝트의 전반적인 프로세스와 산출물을 인지',
        '특정 문제를 아이디어로 도출하는 방법론 학습 (AS-IS, TO-BE 기법, 5 whys ,골든 서클 등)',
        '여러 사례를 통해 배우는 효과적인 커뮤니케이션 방법',
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
      ],
    },
    {
      title1: '이거까지 ',
      title2: '있으면 최고',
      list: [
        '디자이너, 개발 직군과의 프로젝트 경험',
        '트렌드 읽는 눈을 키우고자 했던 경험',
        '논리적 접근을 위한 데이터 기반 프로젝트 참여 경험',
      ],
    },
  ],
  [
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
      title2: '을뽑나요?',
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
      title2: '을뽑나요?',
      list: [
        '웹/앱 서비스 개발에 관심이 많으신 분',
        '꾸준히 스터디에 참여할 수 있으신 분',
        '협업을 통해 공동의 목표를 달성하고 싶은 분',
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
      title2: '을뽑나요?',
      list: [
        '성실하게 과제를 수행해올 수 있는 분(가장 중요)',
        '배우려는 의지, 열정이 누구보다 강한 분',
        '웹 애플리케이션 개발을 배워보고 싶은 분',
        '백엔드 분야로 진로를 생각하고 있는 분',
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
          <Box component="img" src={group5200} alt="group5200" />
        </Box>
        <Box component="img" src={group5191} alt="group5191" />
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
        <Box component="img" src={group5203} alt="group5203" sx={{ width: 853 }} />
      </Box>
      <Box
        sx={{
          backgroundColor: 'common.black',
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'column',
          gap: 10,
        }}
      >
        <Box component="img" src={group5218} alt="group5218" />
        <Box component="img" src={group5217} alt="group5217" />
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
        <Box component="img" src={group5220} alt="group5220" />
      </Box>
    </>
  );
}
