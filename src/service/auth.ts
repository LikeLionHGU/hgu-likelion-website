import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './firebase';

export const googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

export const logout = async () => {
  await signOut(auth);
};

export const handleClickLogoutBtn = () => {
  if (window.confirm('로그아웃 하시겠습니까?')) {
    logout();
  }
};
