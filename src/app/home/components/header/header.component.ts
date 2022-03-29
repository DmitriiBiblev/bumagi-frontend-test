import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Status } from '../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() status!: number | null;
  @Output() statusChange: EventEmitter<number | null> = new EventEmitter<number | null>();

  statuses: Status[] = [
    { value: null, text: 'Все' },
    { value: 2, text: 'Заблокированные' },
    { value: 0, text: 'Активные' },
  ];
}
