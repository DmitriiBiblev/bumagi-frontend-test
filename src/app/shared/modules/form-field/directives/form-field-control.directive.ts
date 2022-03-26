import { Directive } from '@angular/core';
import { Observable } from 'rxjs';

@Directive()
export abstract class FormFieldControlDirective<T> {
  value!: T | null;
  focused!: boolean;
  stateChanges!: Observable<void>;

  abstract onContainerClick(event: MouseEvent): void;
}

