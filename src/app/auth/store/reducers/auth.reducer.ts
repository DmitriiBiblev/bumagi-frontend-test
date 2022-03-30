import * as AuthActions from '../actions/auth.actions';
import { createReducer, on } from '@ngrx/store';

export interface AuthState {
  authToken?: string;
  isLoaded?: boolean;
  errorMessage?: string;
}

const initialState: AuthState = {
  authToken: undefined,
  isLoaded: false,
  errorMessage: undefined,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.signIn, (state) => ({ ...state, isLoaded: true })),
  on(AuthActions.signInSuccess, (state, { authToken }) => ({ ...state, authToken, isLoaded: false })),
  on(AuthActions.signInFailed, (state, { errorMessage }) => ({ ...state, errorMessage, isLoaded: false })),
);
