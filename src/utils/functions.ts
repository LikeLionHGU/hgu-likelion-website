export const checkEmail = (email: string) => {
  return email.endsWith('@handong.ac.kr') || email.endsWith('@handong.edu');
};
