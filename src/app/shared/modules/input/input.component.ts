import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  ElementRef,
  AfterViewInit,
  OnDestroy, OnChanges,
} from '@angular/core';
import { FormFieldControlDirective } from '../form-field/directives/form-field-control.directive';
import { Subject } from 'rxjs';

@Component({
  selector: 'input[appInput]',
  template: '',
  styleUrls: ['./input.component.scss'],
  host: {
    'class': 'input',
    '(focus)': 'focusChanged(true)',
    '(blur)': 'focusChanged(false)',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: FormFieldControlDirective, useExisting: InputComponent }],
})
export class InputComponent implements FormFieldControlDirective<string | null>, AfterViewInit, OnChanges, OnDestroy {
  @Input()
  get value(): string {
    return this.inputValueAccessor.value;
  }

  set value(value: any) {
    if (value !== this.value) {
      this.inputValueAccessor.value = value;
      this.stateChanges.next();
    }
  }

  focused: boolean = false;
  stateChanges: Subject<void> = new Subject<void>();
  controlType: string = 'input';
  private inputValueAccessor: { value: any };

  constructor(private elementRef: ElementRef<HTMLInputElement>) {
    this.inputValueAccessor = elementRef.nativeElement;
  }

  ngAfterViewInit() {
    this.stateChanges.next();
  }

  ngOnChanges() {
    this.stateChanges.next();
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }

  onContainerClick() {
    if (!this.focused) {
      this.focus();
    }
  }

  focus(options?: FocusOptions) {
    this.elementRef.nativeElement.focus(options);
  }

  focusChanged(isFocused: boolean) {
    if (isFocused !== this.focused) {
      this.focused = isFocused;
      this.stateChanges.next();
    }
  }
}
