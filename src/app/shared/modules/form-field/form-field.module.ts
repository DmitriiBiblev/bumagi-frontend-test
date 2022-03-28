import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';
import { ErrorDirective, PrefixDirective, SuffixDirective } from './directives';

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
