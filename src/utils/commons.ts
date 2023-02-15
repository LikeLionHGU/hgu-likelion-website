import applyBg from '../assets/background/apply.jpg';
import mainBg from '../assets/background/main.jpeg';
import faqBg from '../assets/background/faq.jpg';
import contactBg from '../assets/background/contact.jpg';

export const pages = [
  { title: '소개', to: '/' },
  { title: '지원하기', to: '/apply' },
  { title: 'FAQ', to: '/faq' },
  { title: '문의하기', to: '/contact' },
];

export const pageInfos = {
  main: { title: '메인 페이지에\n들어갈\n내용을 적어주세요', description: '', bgImage: mainBg },
  apply: {
    title: '지원하기',
    description: '한동대학교 계정으로 로그인 후 지원서를 작성해주세요.',
    bgImage: applyBg,
  },
  faq: {
    title: 'FAQ',
    description: '다른 사람들도 궁금해할만한 질문들에 대한 답변입니다.',
    bgImage: faqBg,
  },
  contact: {
    title: '문의하기',
    description: '궁금한 사항은 이메일과 카카오톡채널로 문의해주세요.',
    bgImage: contactBg,
  },
};

export const address = '경상북도 포항시 북구 흥해읍 한동로 558 한동대학교';
export const mailAddress = 'handong@likelion.org';
export const instagramAddress = 'https://www.instagram.com/likelion_hgu/';
export const githubAddress = 'https://github.com/';

export const position = { name: '한동대학교', latitude: 36.103116, longitude: 129.388368 };
