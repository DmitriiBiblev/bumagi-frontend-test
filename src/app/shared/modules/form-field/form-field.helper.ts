import { Constructor } from '../../helpers/constructor.helper';
import { booleanProperty } from '../../helpers/boolean-property.helper';


export interface FormField {
  hideError: boolean;
}

export type FormFieldCtor = Constructor<FormField>;

export function mixinFromField<T extends Constructor<{}>>(base: T): FormFieldCtor & T {
  return class extends base {
    private isHideError: boolean = false;

    get hideError() {
      return this.isHideError;
    }

    set hideError(value: any) {
      this.isHideError = booleanProperty(value);
    }

    constructor(...args: any[]) {
      super(...args);
    }
  };
}
