import { UserForm } from './user-form.interface';

export interface User extends UserForm {
  avatar: string;
  balance: number;
  lastUpdatedAt: string;
}
