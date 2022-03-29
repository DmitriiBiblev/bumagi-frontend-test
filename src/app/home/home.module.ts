import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderContainerComponent, UserContainerComponent, UserListContainerComponent } from './containers';
import { HeaderComponent, LoaderComponent, UserComponent, UserDialogComponent, UserListComponent } from './components';
import { ButtonModule, DialogModule, FormFieldModule, InputModule, SelectModule } from '../shared';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    HeaderComponent,
    UserDialogComponent,
    UserContainerComponent,
    UserListContainerComponent,
    UserListComponent,
    HeaderContainerComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DialogModule,
    FormFieldModule,
    SelectModule,
    ReactiveFormsModule,
    ButtonModule,
    InputModule,
  ],
})
export class HomeModule {
}
