import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '../../services/users.service';
import { SnackbarService } from '../../../shared/modules/snackbar/snackbar.service';
import { UsersActionTypes } from '../actions/users.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import * as UsersActions from '../actions/users.actions';
import { UserForm } from '../../interfaces/user-form.interface';

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
    mergeMap((props: { status: number | null }) =>
      this.usersService.getUsers(props.status).pipe(
        map((data: User[] | { message: string }) => {
          if ((data as { message: string }).message)
            return UsersActions.getUsers(props);
          return UsersActions.getUsersSuccess({ users: (data as User[]) });
        }),
        catchError((err) => {
          this.snackbarService.openSnackBar(err.error.message);
          return of(UsersActions.getUsersFailed());
        }),
      ),
    ),
  ));

  saveUser$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActionTypes.saveUser),
    mergeMap((userForm: UserForm) =>
      this.usersService.saveUser(userForm).pipe(
        map((user: User) => UsersActions.saveUserSuccess(user)),
        catchError(() => of(UsersActions.saveUserFailed())),
      ),
    ),
  ));
}
