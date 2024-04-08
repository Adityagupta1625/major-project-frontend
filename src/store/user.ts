import { atom } from 'jotai';

export const userAtom = atom({
  email: '',
  password: '',
  _id: '',
  role: '',
});
