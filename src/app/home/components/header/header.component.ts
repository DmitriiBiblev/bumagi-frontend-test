import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Status } from '../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() statusChange: EventEmitter<number | null> = new EventEmitter<number | null>();
  status: number | null = null;
  statuses: Status[] = [
    { value: null, text: 'Все' },
    { value: 2, text: 'Заблокированные' },
    { value: 0, text: 'Активные' },
  ];

  onStatusChange(value: number | null) {
    this.status = value;
    this.statusChange.emit(value);
  }
}
