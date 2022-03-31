import { createAction, props } from '@ngrx/store';
import { User } from '../../interfaces/user.interface';
import { UserForm } from '../../interfaces/user-form.interface';

export enum UsersActionTypes {
  getUsers = '[Users] Get Users',
  getUsersSuccess = '[Users] Get Users Success',
  getUsersFailed = '[Users] Get Users Failed',

  saveUser = '[Users] Save User',
  saveUserSuccess = '[Users] Save User Success',
  saveUserFailed = '[Users] Save User Failed',
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

export const saveUser = createAction(
  UsersActionTypes.saveUser,
  props<UserForm>(),
);

export const saveUserSuccess = createAction(
  UsersActionTypes.saveUserSuccess,
  props<User>()
);

export const saveUserFailed = createAction(
  UsersActionTypes.saveUserFailed,
);
