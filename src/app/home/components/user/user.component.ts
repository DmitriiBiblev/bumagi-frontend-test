import { Component, OnInit, ChangeDetectionStrategy, ElementRef, Input } from '@angular/core';
import { DialogService } from '../../../shared';
import { User } from '../../interfaces/user.interface';
import { Option } from '../../../shared/modules/select/option.interface';
import { statuses } from '../data/statuses.data';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  @Input() user!: User;
  statuses: Option[] = statuses;
  currentDate: number =new Date().valueOf();

  constructor(
    private elementRef: ElementRef,
    private dialogService: DialogService,
  ) {
  }

  renderStatus(status: number): string {
    return this.statuses.find((s: Option) => s.value === status)!.viewValue;
  }

  openDialog(id: string) {
    this.dialogService.open(id);
  }

  ngOnInit(): void {
    // console.log(new Date().valueOf());
  }

  setDate(date: string) {
    console.log(new Date(date).valueOf());
    console.log(new Date(date));
    console.log(new Date().valueOf());
    console.log(new Date());
    console.log(new Date().valueOf() - new Date(date).valueOf());
    // console.log(new Date(date).toUTCString());
    // console.log(new Date(date).valueOf());
    // console.log(new Date(date).valueOf());
    // console.log(new Date(new Date(date).valueOf()));
    // console.log(this.currentDate - new Date(new Date(date).toUTCString()).valueOf());
    return new Date(date).valueOf();
  }

}
