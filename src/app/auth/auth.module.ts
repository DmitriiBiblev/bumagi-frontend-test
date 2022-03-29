import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ButtonModule, FormFieldModule, InputModule } from '../shared';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { SingInComponent } from './components';
import { SingInContainerComponent } from './containers';

@NgModule({
  declarations: [
    AuthComponent,
    SingInComponent,
    SingInContainerComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormFieldModule,
    InputModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
  ],
})
export class AuthModule {
}
