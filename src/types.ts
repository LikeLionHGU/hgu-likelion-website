import { Timestamp } from 'firebase/firestore';

export interface IFormData {
  name: string;
  email: string;
  studentNumber: string;
  field: string;
  answer1: string;
  answer2: string;
  answer3: string;
  link: string;
  updatedAt: Timestamp;
}
