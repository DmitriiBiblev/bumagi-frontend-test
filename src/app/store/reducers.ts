import { authReducer, AuthState } from '../auth/store';
import { ActionReducerMap } from '@ngrx/store';
import { usersReducer, UsersState } from '../home/store/reducers/users.reducers';

export interface RootState {
  auth: AuthState;
  users: UsersState;
}

export const rootReducers: ActionReducerMap<RootState> = {
  auth: authReducer,
  users: usersReducer,
};
