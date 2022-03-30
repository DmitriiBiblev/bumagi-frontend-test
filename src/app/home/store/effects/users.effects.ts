import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '../../services/users.service';
import { SnackbarService } from '../../../shared/modules/snackbar/snackbar.service';
import { UsersActionTypes } from '../actions/users.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import * as UsersActions from '../actions/users.actions';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private usersService: UsersService,
    private snackbarService: SnackbarService,
  ) {
  }

  getUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActionTypes.getUsers),
    mergeMap((props: { status?: number | undefined }) =>
      this.usersService.getUsers(props.status).pipe(
        map((users: User[]) => UsersActions.getUsersSuccess({ users })),
        catchError((err) => {
          this.snackbarService.openSnackBar(err.error.message);
          return of(UsersActions.getUsersFailed());
        }),
      ),
    ),
  ));
}
