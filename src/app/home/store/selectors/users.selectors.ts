import { RootState } from '../../../store';
import { createSelector } from '@ngrx/store';
import { UsersState } from '../reducers/users.reducers';

export const users = (state: RootState) => state.users;

export const selectIsLoaded = createSelector(
  users,
  (state: UsersState) => state.isLoading,
);

export const selectUserList = createSelector(
  users,
  (state: UsersState) => state.list,
);
