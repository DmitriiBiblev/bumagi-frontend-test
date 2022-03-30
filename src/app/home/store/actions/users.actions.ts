import { createAction, props } from '@ngrx/store';
import { User } from '../../interfaces/user.interface';

export enum UsersActionTypes {
  getUsers = '[Users] Get Users',
  getUsersSuccess = '[Users] Get Users Success',
  getUsersFailed = '[Users] Get Users Failed',
}

export const getUsers = createAction(
  UsersActionTypes.getUsers,
  props<{ status: number | null }>(),
);

export const getUsersSuccess = createAction(
  UsersActionTypes.getUsersSuccess,
  props<{ users: User[] }>(),
);

export const getUsersFailed = createAction(
  UsersActionTypes.getUsersFailed,
);
