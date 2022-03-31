import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SignInFormData } from '../../interfaces';
import { signIn } from '../../store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { RootState } from '../../../store';

@Component({
  template: '<app-sing-in (signIn)="signIn($event)"></app-sing-in>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingInContainerComponent {
  constructor(private store: Store<RootState>) {
  }

  signIn(formData: SignInFormData): void {
    this.store.dispatch(signIn(formData));
  }
}
