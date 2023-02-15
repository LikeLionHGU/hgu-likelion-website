import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db } from '../service/firebase';
import { IFormData } from '../types';

export const getSave = async () => {
  const user = auth.currentUser;
  if (user) {
    const saveRef = doc(db, 'save', user.uid);
    const docSnap = await getDoc(saveRef);
    if (docSnap.exists()) {
      const saveData = docSnap.data();
      return saveData as IFormData;
    }
  }
  return null;
};

export const setSave = async (data: IFormData) => {
  const user = auth.currentUser;
  if (user) {
    await setDoc(doc(db, `save`, user.uid), {
      uid: user.uid,
      authName: user.displayName,
      authEmail: user.email,
      ...data,
      updatedAt: serverTimestamp(),
    });
  }
};

export const getApply = async () => {
  const user = auth.currentUser;
  if (user) {
    const applyRef = doc(db, 'apply', user.uid);
    const docSnap = await getDoc(applyRef);
    if (docSnap.exists()) {
      const applyData = docSnap.data();
      return applyData as IFormData;
    }
  }
  return null;
};

export const setApply = async (data: IFormData) => {
  const user = auth.currentUser;
  if (user) {
    await setDoc(doc(db, `apply`, user.uid), {
      uid: user.uid,
      authName: user.displayName,
      authEmail: user.email,
      ...data,
      updatedAt: serverTimestamp(),
    });
  }
};
