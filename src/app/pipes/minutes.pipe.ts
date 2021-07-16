import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'minutes'})

export class MinutesPipe implements PipeTransform {

    transform(minutes: number): string {
        return this.durationMinutes(minutes);
    }

    formatUnitString(strUnit: string, count: number): string  {
        let strS = (count>1?"s":"");
        return Math.floor(count) + " " + strUnit + strS;
    }

    formatUnit(minutes: number, unit: string, count: number, unitMinutes: number, nextUnit: string, nextUnitMinutes: number): string {
        let formatted = this.formatUnitString(unit, count);
        let minutesLeft = minutes % unitMinutes;
        if ( minutesLeft >= nextUnitMinutes) {
            formatted = formatted +  ", " + this.formatUnitString(nextUnit, (minutesLeft / nextUnitMinutes));
        }
        return formatted;
    }

    durationMinutes(minutes: number): string {
        if (minutes == 0){
            return "Now";
        }

        let hourMinutes = 60;
        let dayMinutes = 24 * hourMinutes;
        let weekMinutes = 7 * dayMinutes;
        let monthMinutes = 43800;
        let yearMinutes = 12 * monthMinutes;

        let years = Math.floor(minutes / yearMinutes);
        let months = Math.floor(minutes / monthMinutes);
        let weeks = Math.floor(minutes / weekMinutes);
        let days = Math.floor(minutes / dayMinutes);
        let hours = Math.floor(minutes / hourMinutes);

        if (years > 0) { return this.formatUnit(minutes, "year", years, yearMinutes, "month", monthMinutes); }
        if (months > 0) { return this.formatUnit(minutes, "month", months, monthMinutes, "week", weekMinutes); }
        if (weeks > 0) { return this.formatUnit(minutes, "week", weeks, weekMinutes, "day", dayMinutes); }
        if (days > 0) { return this.formatUnit(minutes, "day", days, dayMinutes, "hour", hourMinutes); }
        if (hours > 0) { return this.formatUnit(minutes, "hour", hours, hourMinutes, "minute", 1); }
        if (minutes > 0) { return this.formatUnitString("minute", minutes); }

        return "Unknown";
    }
}
