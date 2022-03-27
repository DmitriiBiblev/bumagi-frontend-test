import {
  Component,
  ChangeDetectionStrategy,
  ContentChild,
  ChangeDetectorRef,
  AfterContentInit, ContentChildren, QueryList, ElementRef, ViewEncapsulation,
} from '@angular/core';
import { FormFieldControlDirective } from './directives/form-field-control.directive';
import { startWith } from 'rxjs/operators';
import { APP_SUFFIX, SuffixDirective } from './directives/suffix.directive';
import { APP_PREFIX, PrefixDirective } from './directives/prefix.directive';
import { APP_ERROR, ErrorDirective } from './directives/error.directive';
import { FormFieldCtor, mixinFromField } from './form-field.helper';

class FormFieldBase {
  constructor(
    protected elementRef: ElementRef,
    protected changeDetectorRef: ChangeDetectorRef,
  ) {
  }
}

const FormFieldMixinBase: FormFieldCtor & typeof FormFieldBase
  = mixinFromField(FormFieldBase);

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  host: {
    'class': 'form-field',
    '[class.focused]': 'control.focused || control.value',
    '[class.error]': '!hideError && errorChildren?.length',
  },
  inputs: ['hideError'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent extends FormFieldMixinBase implements AfterContentInit {
  @ContentChild(FormFieldControlDirective) control!: FormFieldControlDirective<any>;
  @ContentChildren(APP_PREFIX, { descendants: true }) prefixChildren?: QueryList<PrefixDirective>;
  @ContentChildren(APP_SUFFIX, { descendants: true }) suffixChildren?: QueryList<SuffixDirective>;
  @ContentChildren(APP_ERROR, { descendants: true }) errorChildren?: QueryList<ErrorDirective>;

  constructor(
    protected override elementRef: ElementRef,
    protected override changeDetectorRef: ChangeDetectorRef,
  ) {
    super(elementRef, changeDetectorRef);
  }

  ngAfterContentInit() {
    if (this.control.controlType) {
      this.elementRef.nativeElement.classList.add(this.control.controlType);
    }

    this.control.stateChanges?.pipe(startWith(null)).subscribe(() => {
      this.changeDetectorRef.markForCheck();
    });
  }
}
