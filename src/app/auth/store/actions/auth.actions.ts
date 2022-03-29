import { createAction, props } from '@ngrx/store';
import { SignInFormData } from '../../interfaces';

export enum AuthActionTypes {
  signIn = '[Auth] Sign In',
  signInSuccess = '[Auth] Sign In Success',
  signInFailed = '[Auth] Sign In Failed',
}

export const signIn = createAction(
  AuthActionTypes.signIn,
  props<SignInFormData>(),
);

export const signInSuccess = createAction(
  AuthActionTypes.signInSuccess,
  props<{ authToken: string }>(),
);

export const signInFailed = createAction(
  AuthActionTypes.signInFailed,
  props<{ errorMessage: string }>(),
);
