import { Box, Grid, styled, Typography } from '@mui/material';
import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

const faq = [
  {
    question: '전공자만 참가할 수 있나요?',
    answer:
      '답변 예시입니다. 봄이 그리워 강아지, 내 별 별에도 둘 거외다. 아스라히 내린 이 다 사랑과 아이들의 말 나는 까닭입니다. 별 위에 내일 했던 까닭이요, 계절이 아직 밤을 계십니다.',
  },
  {
    question: '면접은 어떤 방식으로 진행되나요?',
    answer:
      '답변 예시입니다. 위에도 헤일 가득 잠, 별들을 봅니다. 가을로 무덤 쉬이 못 걱정도 사랑과 계절이 보고, 봅니다. 자랑처럼 하나에 쓸쓸함과 어머님, 별 봅니다. 다 딴은 이제 계십니다.',
  },
  {
    question: '교육 시간과 장소는 어떻게 되나요?',
    answer:
      '답변 예시입니다. 이름을 하나에 헤는 무성할 어머님, 아직 둘 까닭입니다. 별이 어머니, 마리아 있습니다. 이름과, 나는 무성할 다하지 내일 슬퍼하는 말 봅니다.',
  },
  {
    question: '수료의 기준이 어떻게 되나요?',
    answer:
      '답변 예시입니다. 벌레는 흙으로 말 까닭입니다. 어머님, 소학교 가을 오는 동경과 거외다. 나의 하나 잠, 된 나는 내 것은 보고, 가을 버리었습니다. 오는 나는 우는 별이 노루, 버리었습니다.',
  },
];

const Item = styled(Box)({
  padding: '12px 20px',
});

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>FAQ - 멋쟁이사자처럼 한동대</title>
      </Helmet>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
        <Typography variant="h3">🙋🏻‍♂️ 지원 및 선발 🙋🏻‍♀️</Typography>
      </Box>
      <Grid container columns={2}>
        {faq.map((item, index) => (
          <Fragment key={index}>
            <Grid item xs={2} sm={1}>
              <Item>
                <Typography variant="h6">
                  {index + 1}. {item.question}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={2} sm={1}>
              <Item>
                <Typography mb={2}>{item.answer}</Typography>
              </Item>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </>
  );
}
