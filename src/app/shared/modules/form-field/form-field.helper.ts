import { booleanProperty, Constructor } from '../../helpers';

export interface FormField {
  hideError: boolean;
  ghost: boolean;
}

export type FormFieldCtor = Constructor<FormField>;

export function mixinFormField<T extends Constructor<{}>>(base: T): FormFieldCtor & T {
  return class extends base {
    private isHideError: boolean = false;
    private isGhost: boolean = false;

    get hideError() {
      return this.isHideError;
    }

    set hideError(value: any) {
      this.isHideError = booleanProperty(value);
    }

    get ghost() {
      return this.isGhost;
    }

    set ghost(value: any) {
      this.isGhost = booleanProperty(value);
    }

    constructor(...args: any[]) {
      super(...args);
    }
  };
}
