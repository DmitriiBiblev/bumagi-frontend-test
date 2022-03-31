import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  ElementRef,
  ChangeDetectorRef,
  AfterViewInit,
  OnDestroy,
  HostListener,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { FormFieldControlDirective } from '../form-field/directives';
import { Subject } from 'rxjs';
import { DropdownAnimation } from './dropdown.animation';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  animations: [DropdownAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: FormFieldControlDirective, useExisting: SelectComponent }],
})
export class SelectComponent implements FormFieldControlDirective<string | null>, ControlValueAccessor, AfterViewInit, OnChanges, OnDestroy {
  @Input() options!: { value: string | number, viewValue: string }[];
  @Input() placeholder!: string;

  @Input()
  get value(): string | null {
    return this._value;
  }

  set value(newValue: any) {
    this._value = newValue;
  }

  private _value: any;
  focused: boolean = false;
  disabled: boolean = false;
  controlType: string = 'select';
  stateChanges: Subject<void> = new Subject<void>();
  _onChange: (value: any) => void = () => {
  };
  _onTouched = () => {
  };

  constructor(
    private elementRef: ElementRef<HTMLDivElement>,
    private changeDetectorRef: ChangeDetectorRef,
    private ngControl: NgControl,
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngAfterViewInit(): void {
    this.stateChanges.next();
  }

  ngOnChanges(): void {
    this.stateChanges.next();
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.changeDetectorRef.markForCheck();
    this.stateChanges.next();
  }

  toggle(): void {
    this.focused = !this.focused;
    if (!this.focused) {
      this._onTouched();
    }
    this.stateChanges.next();
  }

  renderValue(): string {
    const option = this.options.find((option) => option.value === this.value);
    return option !== undefined ? option.viewValue : this.placeholder;
  }

  select(value: string | number): void {
    this.writeValue(value);
    this._onChange(this.value);
    this.focused = false;
  }

  @HostListener('document:click', ['$event.target'])
  outsideClick(targetElement: Node | null): void {
    if (this.focused && !this.elementRef.nativeElement.contains(targetElement)) {
      this.focused = false;
      if (!this.focused) {
        this._onTouched();
      }
      this.stateChanges.next();
    }
  }
}
