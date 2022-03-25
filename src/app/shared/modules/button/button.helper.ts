import { Constructor } from '../../helpers/constructor.helper';
import { booleanProperty } from '../../helpers/boolean-property.helper';


export interface Button {
  large: boolean;
}

export type ButtonCtor = Constructor<Button>;

export function mixinButton<T extends Constructor<{}>>(base: T): ButtonCtor & T {
  return class extends base {
    private isLarge: boolean = false;

    get large() {
      return this.isLarge;
    }

    set large(value: any) {
      this.isLarge = booleanProperty(value);
    }

    constructor(...args: any[]) {
      super(...args);
    }
  };
}
