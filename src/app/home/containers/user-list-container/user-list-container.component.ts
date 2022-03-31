import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../../../store';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { selectUserList } from '../../store/selectors/users.selectors';

@Component({
  selector: 'app-user-list-container',
  template: '<app-user-list [usersList]="userList$ | async"></app-user-list>',
  styleUrls: ['./user-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListContainerComponent implements OnInit {
  userList$: Observable<User[] | undefined>;

  constructor(private store: Store<RootState>) {
    this.userList$ = store.select(selectUserList);
  }

  ngOnInit(): void {
  }

}
