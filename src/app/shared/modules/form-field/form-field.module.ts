import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';
import { ErrorDirective } from './directives/error.directive';
import { PrefixDirective } from './directives/prefix.directive';
import { SuffixDirective } from './directives/suffix.directive';

@NgModule({
  declarations: [
    FormFieldComponent,
    ErrorDirective,
    PrefixDirective,
    SuffixDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FormFieldComponent,
    ErrorDirective,
    PrefixDirective,
    SuffixDirective,
  ],
})
export class FormFieldModule {
}
