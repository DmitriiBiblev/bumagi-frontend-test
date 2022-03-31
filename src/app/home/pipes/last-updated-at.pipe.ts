import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastUpdatedAt',
})
export class LastUpdatedAtPipe implements PipeTransform {
  currentDate: number = new Date().valueOf();

  transform(value: string): string {
    const diff: number = (this.currentDate - new Date(value).valueOf()) / 1000;
    let hour: number, minute: number, second: number;

    hour = Math.round(diff / 60 / 60 % 24);
    if (hour > 24) return this.renderDate(hour, ['час', 'часа', 'часов']);
    minute = Math.round(diff / 60 % 60);
    if (minute) return this.renderDate(minute, ['минту', 'минуты', 'минут']);
    second = Math.round(diff % 60);
    return this.renderDate(second, ['секунду', 'секунды', 'секунд']);
  }

  renderDate(value: number, textForms: string[]) {
    return `${value} ${this.declOfNum(value, textForms)}`;
  }

  declOfNum(value: number, textForms: string[]) {
    let residue = value % 10;

    if (value > 10 && value < 20) return textForms[2];
    if (residue > 1 && residue < 5) return textForms[1];
    if (residue === 1) return textForms[0];
    return textForms[2];
  }
}

// 1 секунду
// 2-4 секунды
// 5 - 20 секунд
// 21 секунду

// 1 минуту
// 2-4 минуты
// 5 - 20 минут
// 21 секунду

// 1 час
// 2-4 часа
// 5 - 20 часов
// 21 час
