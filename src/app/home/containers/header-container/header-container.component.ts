import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { RootState } from '../../../store';
import { Store } from '@ngrx/store';
import { getUsers } from '../../store/actions/users.actions';

@Component({
  selector: 'app-header-container',
  template: '<app-header (statusChange)="statusChange($event)"></app-header>',
  styleUrls: ['./header-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderContainerComponent implements OnInit {
  constructor(private store: Store<RootState>) {
  }

  ngOnInit() {
    this.store.dispatch(getUsers({ status: null }));
  }

  statusChange(status: number | null) {
    this.store.dispatch(getUsers({ status }));
  }
}
