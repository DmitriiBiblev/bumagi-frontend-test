import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignInFormData } from '../../interfaces';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingInComponent {
  @Output() signIn: EventEmitter<SignInFormData> = new EventEmitter<SignInFormData>();

  form: FormGroup;
  isShowPassword: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      login: [null, Validators.required],
      password: [null, Validators.required],
    });
  }
}
