import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'minutes' })

export class MinutesPipe implements PipeTransform {
  transform(minutes: number): string {
    return this.durationMinutes(minutes);
  }

  formatUnitString(strUnit: string, count: number): string {
    const strS = (count > 1 ? 's' : '');
    return `${Math.floor(count)} ${strUnit}${strS}`;
  }

  formatUnit(
    minutes: number,
    unit: string,
    count: number,
    unitMinutes: number,
    nextUnit: string,
    nextUnitMinutes: number,
  ): string {
    let formatted = this.formatUnitString(unit, count);
    const minutesLeft = minutes % unitMinutes;
    if (minutesLeft >= nextUnitMinutes) {
      formatted = `${formatted}, ${this.formatUnitString(nextUnit, (minutesLeft / nextUnitMinutes))}`;
    }
    return formatted;
  }

  durationMinutes(minutes: number): string {
    if (minutes === 0) {
      return 'Any time now';
    }

    const hourMinutes = 60;
    const dayMinutes = 24 * hourMinutes;
    const weekMinutes = 7 * dayMinutes;
    const monthMinutes = 43800;
    const yearMinutes = 12 * monthMinutes;

    const years = Math.floor(minutes / yearMinutes);
    const months = Math.floor(minutes / monthMinutes);
    const weeks = Math.floor(minutes / weekMinutes);
    const days = Math.floor(minutes / dayMinutes);
    const hours = Math.floor(minutes / hourMinutes);

    if (years > 0) { return this.formatUnit(minutes, 'year', years, yearMinutes, 'month', monthMinutes); }
    if (months > 0) { return this.formatUnit(minutes, 'month', months, monthMinutes, 'week', weekMinutes); }
    if (weeks > 0) { return this.formatUnit(minutes, 'week', weeks, weekMinutes, 'day', dayMinutes); }
    if (days > 0) { return this.formatUnit(minutes, 'day', days, dayMinutes, 'hour', hourMinutes); }
    if (hours > 0) { return this.formatUnit(minutes, 'hour', hours, hourMinutes, 'minute', 1); }
    if (minutes > 0) { return this.formatUnitString('minute', minutes); }

    return 'Unknown';
  }
}
