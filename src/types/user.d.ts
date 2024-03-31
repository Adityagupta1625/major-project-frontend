import { Roles } from '@/constants/all.enum';

export interface User {
  email: string;
  password: string;
  _id: string;
  role: Roles;
}
