import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PoolSizeChartTheme } from '../../components/pool-size-chart/pool-size-chart-theme.enum';
import { PoolSize } from '../../interfaces/pool-size.interface';
import { statsPageEntered } from '../../stores/pool-sizes/pool-sizes.actions';
import { PoolSizeState } from '../../stores/pool-sizes/pool-sizes.reducer';
import { selectPoolSizes, selectPoolSizesState } from '../../stores/pool-sizes/pool-sizes.selectors';
import { CoinRecordsStore } from './coin-records.store';
import { PayoutsStore } from './payouts.store';
import { InfoStore } from './info.store';

@Component({
  templateUrl: 'stats-page.component.html',
  styleUrls: ['./stats-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsPageComponent implements OnInit {
  poolSizesState$ = this.mainStore.select(selectPoolSizesState);
  infoState$ = this.infoStore.state$;
  coinRecordsState$ = this.coinRecordsStore.state$;
  payoutsState$ = this.payoutsStore.state$;

  readonly PoolSizeChartTheme = PoolSizeChartTheme;

  constructor(
    private mainStore: Store<PoolSizeState>,
    private infoStore: InfoStore,
    private coinRecordsStore: CoinRecordsStore,
    private payoutsStore: PayoutsStore,
  ) {}

  ngOnInit(): void {
    this.mainStore.dispatch(statsPageEntered());
    this.infoStore.loadInfo();
    this.coinRecordsStore.loadCoinRecords();
    this.payoutsStore.loadPayouts();
  }

  static format_unit_string(str_unit: string, count: number): string  {
      let str_s = (count>1?"s":"");
      return Math.floor(count) + " " + str_unit + str_s;
  }
  
  static format_unit(minutes: number, unit: string, count: number, unit_minutes: number, next_unit: string, next_unit_minutes: number): string {
      let formatted = StatsPageComponent.format_unit_string(unit, count);
      let minutes_left = minutes % unit_minutes;
      if ( minutes_left >= next_unit_minutes) {
          formatted = formatted +  " and " + StatsPageComponent.format_unit_string(next_unit, (minutes_left / next_unit_minutes));
      }
      return formatted;
  }
  
  format_minutes(minutes: number): string {
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
  
      if (years > 0) { return StatsPageComponent.format_unit(minutes, "year", years, year_minutes, "month", months_minutes); }
      if (months > 0) { return StatsPageComponent.format_unit(minutes, "month", months, months_minutes, "week", week_minutes); }
      if (weeks > 0) { return StatsPageComponent.format_unit(minutes, "week", weeks, week_minutes, "day", day_minutes); }
      if (days > 0) { return StatsPageComponent.format_unit(minutes, "day", days, day_minutes, "hour", hour_minutes); }
      if (hours > 0) { return StatsPageComponent.format_unit(minutes, "hour", hours, hour_minutes, "minute", 1); }
      if (minutes > 0) { return StatsPageComponent.format_unit_string("minute", minutes); }
  
      return "Unknown";
  }
}
