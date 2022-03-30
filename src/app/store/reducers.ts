import { authReducer, AuthState } from '../auth/store';
import { ActionReducerMap } from '@ngrx/store';

export interface RootState {
  auth: AuthState;
}

export const rootReducers: ActionReducerMap<RootState> = {
  auth: authReducer,
};
