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

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  host: {
    'class': 'form-field',
    '[class.focused]': 'control.focused || control.value',
    '[class.error]': 'errorChildren?.length',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent  implements AfterContentInit {
  @ContentChild(FormFieldControlDirective) control!: FormFieldControlDirective<any>;
  @ContentChildren(APP_PREFIX, { descendants: true }) prefixChildren?: QueryList<PrefixDirective>;
  @ContentChildren(APP_SUFFIX, { descendants: true }) suffixChildren?: QueryList<SuffixDirective>;
  @ContentChildren(APP_ERROR, { descendants: true }) errorChildren?: QueryList<ErrorDirective>;

  constructor(
    private elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
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
