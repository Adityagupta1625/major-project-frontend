import { Roles } from '@/constants/all.enum';

export interface Auth {
  token: string;
  message: string;
  role: Roles;
}
