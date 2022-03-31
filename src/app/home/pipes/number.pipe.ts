import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number',
})
export class NumberPipe implements PipeTransform {
  transform(value: number): string {
    return value
      .toFixed(2)
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  }
}
