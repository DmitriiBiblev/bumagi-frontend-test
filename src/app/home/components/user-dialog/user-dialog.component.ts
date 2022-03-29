import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '../../../shared';
import { UserFormData } from '../interfaces';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDialogComponent implements OnInit {
  @Input() userFormData!: UserFormData;
  @Output() saveForm: EventEmitter<UserFormData> = new EventEmitter<UserFormData>();

  form: FormGroup;
  statuses = [
    { value: '0', viewValue: 'Активен' },
    { value: '1', viewValue: 'Приостановлен' },
    { value: '2', viewValue: 'Заблокирован' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private dialogService: DialogService,
  ) {
    this.form = formBuilder.group({
      name: [null, Validators.required],
      fname: [null, Validators.required],
      mname: [null, Validators.required],
      status: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.form.setValue(this.userFormData);
  }

  close() {
    this.dialogService.close('user-dialog');
  }
}
