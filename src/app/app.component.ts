import { Component, DoCheck, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from './shared/modules/dialog/dialog.service';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]='form' style='width: 24rem; margin: auto; display: grid; grid-gap: 2rem; padding: 2rem; '>
      <app-form-field>
        <input appInput type='text' placeholder='text' formControlName='input'>
        <app-error *ngIf='form.controls["input"].hasError("required") && form.controls["input"].touched'>Error1
        </app-error>
        <app-error *ngIf='form.controls["input"].hasError("minlength")'>Error2</app-error>
      </app-form-field>
      <app-form-field>
        <input appInput type='text' placeholder='text' formControlName='input'>
        <app-error *ngIf='form.controls["input"].hasError("required") && form.controls["input"].touched'>Error1
        </app-error>
        <app-error *ngIf='form.controls["input"].hasError("minlength")'>Error2</app-error>
      </app-form-field>
      <app-form-field>
        <app-select placeholder='Select' formControlName='select' [options]='options'></app-select>
        <app-error *ngIf='form.controls["select"].hasError("required") && form.controls["select"].touched'>Error1
        </app-error>
      </app-form-field>
    </form>
    <button b-button (click)="openModal('modal')">Click</button>
    <app-dialog id="modal"></app-dialog>
  `,
})
export class AppComponent implements OnChanges, DoCheck {
  form: FormGroup;
  options = [
    { value: 'option1', viewValue: 'Поле 1' },
    { value: 'option2', viewValue: 'Поле 2' },
    { value: 'option3', viewValue: 'Поле 3' },
  ];
  openedDialog: boolean = false;

  constructor(
    private modalService: ModalService,
    private readonly fb: FormBuilder,
  ) {
    this.form = fb.group({
      input: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
        ]),
      ],
      select: [
        null,
        Validators.compose([
          Validators.required,
        ]),
      ],
    });
  }


  ngOnChanges() {
    console.log(this.form.value);
  }

  ngDoCheck() {
    console.log(this.form.value);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

}
