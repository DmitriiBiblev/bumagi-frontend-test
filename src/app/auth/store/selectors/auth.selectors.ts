import { createSelector } from '@ngrx/store';
import { RootState } from '../../../store';
import { AuthState } from '../reducers/auth.reducer';

export const auth = (state: RootState) => state.auth;

export const selectAuthToken = createSelector(
  auth,
  (state: AuthState) => state.authToken,
);
