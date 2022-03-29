import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-list-container',
  template: '<app-user-list></app-user-list>',
  styleUrls: ['./user-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
