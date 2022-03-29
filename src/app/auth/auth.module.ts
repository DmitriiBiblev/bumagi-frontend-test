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
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './store/effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './store/reducers/auth.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

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
    StoreModule.forRoot({ auth: authReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [
    AuthService,
  ],
})
export class AuthModule {
}
