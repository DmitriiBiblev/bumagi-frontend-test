import {
  Component,
  ChangeDetectionStrategy,
  ContentChild,
  ChangeDetectorRef,
  AfterContentInit, ContentChildren, QueryList,
} from '@angular/core';
import { FormFieldControlDirective } from './directives/form-field-control.directive';
import { startWith } from 'rxjs/operators';
import { APP_SUFFIX, SuffixDirective } from './directives/suffix.directive';
import { APP_PREFIX, PrefixDirective } from './directives/prefix.directive';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent implements AfterContentInit {
  @ContentChild(FormFieldControlDirective) control!: FormFieldControlDirective<any>;
  @ContentChildren(APP_PREFIX, {descendants: true}) prefixChildren?: QueryList<PrefixDirective>;
  @ContentChildren(APP_SUFFIX, {descendants: true}) suffixChildren?: QueryList<SuffixDirective>;


  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterContentInit() {
    this.control.stateChanges?.pipe(startWith(null)).subscribe(() => {
      this.changeDetectorRef.markForCheck();
    });
  }
}
