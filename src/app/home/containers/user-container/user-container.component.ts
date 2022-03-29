import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-container',
  template: '<app-user></app-user>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
