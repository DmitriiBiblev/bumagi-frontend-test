import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SignInFormData } from '../../interfaces';
import { AuthService } from '../../services';
import { signIn } from '../../store/actions/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  template: '<app-sing-in (signIn)="signIn($event)"></app-sing-in>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingInContainerComponent {
  constructor(
    private authService: AuthService,
    private store: Store,
  ) {
  }

  signIn(formData: SignInFormData) {
    this.store.dispatch(signIn(formData));
  }
}
