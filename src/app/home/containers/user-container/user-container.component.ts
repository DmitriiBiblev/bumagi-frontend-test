import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-container',
  template: '<app-user [user]="user"></app-user>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserContainerComponent implements OnInit {
  @Input() user!: User;

  constructor() {
  }

  ngOnInit(): void {
  }

}
