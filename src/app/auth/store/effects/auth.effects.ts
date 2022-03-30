import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { SignInFormData } from '../../interfaces';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import * as AuthActions from '../actions/auth.actions';
import { AuthActionTypes } from '../actions/auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  signIn$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.signIn),
    exhaustMap((data: SignInFormData) =>
      this.authService.signIn(data).pipe(
        map((res: HttpResponse<{ message: string }>) => {
          this.router.navigate(['/']);
          return AuthActions.signInSuccess({ authToken: res.headers.get('Authorization')! })
        }),
        catchError((err: HttpErrorResponse) => of(AuthActions.signInFailed({ errorMessage: err.error.message }))),
      ),
    ),
  ));
}
