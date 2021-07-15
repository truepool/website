import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'minutes'})

export class MinutesPipe implements PipeTransform {

    transform(minutes: number): string {
        return this.durationMinutes(minutes);
    }

    formatUnitString(str_unit: string, count: number): string  {
        let str_s = (count>1?"s":"");
        return Math.floor(count) + " " + str_unit + str_s;
    }

    formatUnit(minutes: number, unit: string, count: number, unit_minutes: number, next_unit: string, next_unit_minutes: number): string {
        let formatted = this.formatUnitString(unit, count);
        let minutes_left = minutes % unit_minutes;
        if ( minutes_left >= next_unit_minutes) {
            formatted = formatted +  " and " + this.formatUnitString(next_unit, (minutes_left / next_unit_minutes));
        }
        return formatted;
    }

    durationMinutes(minutes: number): string {
        if (minutes == 0){
            return "Now";
        }

        let hour_minutes = 60;
        let day_minutes = 24 * hour_minutes;
        let week_minutes = 7 * day_minutes;
        let months_minutes = 43800;
        let year_minutes = 12 * months_minutes;

        let years = Math.floor(minutes / year_minutes);
        let months = Math.floor(minutes / months_minutes);
        let weeks = Math.floor(minutes / week_minutes);
        let days = Math.floor(minutes / day_minutes);
        let hours = Math.floor(minutes / hour_minutes);

        if (years > 0) { return this.formatUnit(minutes, "year", years, year_minutes, "month", months_minutes); }
        if (months > 0) { return this.formatUnit(minutes, "month", months, months_minutes, "week", week_minutes); }
        if (weeks > 0) { return this.formatUnit(minutes, "week", weeks, week_minutes, "day", day_minutes); }
        if (days > 0) { return this.formatUnit(minutes, "day", days, day_minutes, "hour", hour_minutes); }
        if (hours > 0) { return this.formatUnit(minutes, "hour", hours, hour_minutes, "minute", 1); }
        if (minutes > 0) { return this.formatUnitString("minute", minutes); }

        return "Unknown";
    }
}
