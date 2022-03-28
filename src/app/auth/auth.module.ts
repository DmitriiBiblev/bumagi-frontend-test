import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ButtonModule, FormFieldModule, InputModule } from '../shared/modules';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { SingInComponent } from './components';
import { SingInContainerComponent } from './containers';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';

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
    StoreModule.forRoot(reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [
    AuthService,
  ],
})
export class AuthModule {
}
