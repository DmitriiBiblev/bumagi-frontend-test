import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header-container',
  template: '<app-header [(status)]="status"></app-header>',
  styleUrls: ['./header-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderContainerComponent {
  status: number | null = null;
}
