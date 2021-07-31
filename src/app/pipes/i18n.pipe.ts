import { Pipe, PipeTransform } from '@angular/core';
import { I18nService } from '../services/i18n.service';

@Pipe({ name: 'i18n' })
export class TruePoolI18nPipe implements PipeTransform {
  constructor(private i18n: I18nService) {}

  transform(value: string): string {
    const parsed = value.toLowerCase().trim();
    if (parsed === '') {
      return parsed;
    }

    return this.i18n.translate(parsed);
  }
}
