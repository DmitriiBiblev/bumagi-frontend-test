import { Component, OnInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DialogService } from '../../../shared';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  status = new FormControl('1');

  constructor(
    private elementRef: ElementRef,
    private dialogService: DialogService,
  ) {
  }

  openDialog(id: string) {
    this.dialogService.open(id);
  }

  ngOnInit(): void {
  }

}
