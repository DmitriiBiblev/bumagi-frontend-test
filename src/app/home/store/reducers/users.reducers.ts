import * as UsersActions from '../actions/users.actions';
import { User } from '../../interfaces/user.interface';
import { createReducer, on } from '@ngrx/store';

export interface UsersState {
  list?: User[];
  isLoading: boolean;
}

const initialState: UsersState = {
  list: undefined,
  isLoading: false,
};

export const usersReducer = createReducer(
  initialState,
  on(UsersActions.getUsers, (state) => ({ ...state, isLoading: true })),
  on(UsersActions.getUsersSuccess, (state, { users }) => ({ ...state, list: users, isLoading: false })),
  on(UsersActions.getUsersFailed, (state) => ({ ...state, isLoading: false })),
  on(UsersActions.saveUserSuccess, (state, userForm) => ({
    ...state,
    list: state.list!.map((user: User) => {
      if (user.id === userForm.id)
        return { ...user, ...userForm };
      return user;
    }),
  })),
);
