import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: '<app-sing-in></app-sing-in>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingInContainerComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
