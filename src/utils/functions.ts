const giveZeroPadding = (num: number) => (num < 10 && num >= 0 ? '0' + num : num);

export const displayTimeKo = (date: Date) =>
  `${date.getFullYear()}년 ${giveZeroPadding(date.getMonth() + 1)}월 ${giveZeroPadding(
    date.getDate(),
  )}일 ${giveZeroPadding(date.getHours())}시 ${giveZeroPadding(
    date.getMinutes(),
  )}분 ${giveZeroPadding(date.getSeconds())}초`;

export const checkEmail = (email: string) => {
  return email.endsWith('@handong.ac.kr') || email.endsWith('@handong.edu');
};
