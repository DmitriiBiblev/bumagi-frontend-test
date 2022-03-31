import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { Option } from '../../../shared/modules/select/option.interface';
import { statuses } from '../../data/statuses.data';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  @Input() user!: User;
  statuses: Option[] = statuses;

  renderStatus(status: number): string {
    return this.statuses.find((s: Option) => s.value === status)!.viewValue;
  }
}
