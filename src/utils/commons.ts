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
    description: '지원하기 전 반드시 아래의 질문에 대해 충분히 고민해보세요.',
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
