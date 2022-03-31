import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderContainerComponent, UserContainerComponent, UserListContainerComponent } from './containers';
import { HeaderComponent, LoaderComponent, UserComponent, UserDialogComponent, UserListComponent } from './components';
import { ButtonModule, FormFieldModule, InputModule, SelectModule } from '../shared';
import { ReactiveFormsModule } from '@angular/forms';
import { NumberPipe } from './pipes/number.pipe';
import { LastUpdatedAtPipe } from './pipes/last-updated-at.pipe';
import { MatDialogModule } from '@angular/material/dialog';

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
    NumberPipe,
    LastUpdatedAtPipe,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormFieldModule,
    SelectModule,
    ReactiveFormsModule,
    ButtonModule,
    InputModule,
    MatDialogModule,
  ],
})
export class HomeModule {
}
