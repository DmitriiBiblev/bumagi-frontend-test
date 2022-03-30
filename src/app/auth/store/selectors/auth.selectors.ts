import { createSelector } from '@ngrx/store';
import { RootState } from '../../../store';
import { AuthState } from '../reducers/auth.reducer';

export const isAuthToken = (state: RootState) => state.auth;

export const selectIAuthToken = createSelector(
  isAuthToken,
  (state: AuthState) => state.authToken,
);
