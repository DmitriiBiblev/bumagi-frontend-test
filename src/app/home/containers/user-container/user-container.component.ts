import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../../components';
import { Store } from '@ngrx/store';
import { RootState } from '../../../store';
import { saveUser } from '../../store/actions/users.actions';

@Component({
  selector: 'app-user-container',
  template: '<app-user [user]="user" (click)="openDialog()"></app-user>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserContainerComponent {
  @Input() user!: User;

  constructor(
    private dialog: MatDialog,
    private store: Store<RootState>,
  ) {
  }

  openDialog() {
    const { avatar, balance, id, lastUpdatedAt, ...user } = this.user;

    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '91.6rem',
      height: '57.3rem',
      data: user,
    });

    dialogRef.afterClosed().subscribe(user => {
      if (user)
        this.store.dispatch(saveUser({ id: this.user.id, ...user }));
    });
  }
}
