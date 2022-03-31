import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserFormData } from '../interfaces';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    { value: 0, viewValue: 'Активен' },
    { value: 1, viewValue: 'Приостановлен' },
    { value: 2, viewValue: 'Заблокирован' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.form = formBuilder.group({
      name: [null, Validators.required],
      fname: [null, Validators.required],
      mname: [null, Validators.required],
      status: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.form.setValue(this.data);
  }
}
