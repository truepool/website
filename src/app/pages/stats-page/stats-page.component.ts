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
import { StatsStore } from './stats.store';

@Component({
  templateUrl: 'stats-page.component.html',
  styleUrls: ['./stats-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsPageComponent implements OnInit {
  poolSizesState$ = this.mainStore.select(selectPoolSizesState);
  statsState$ = this.statsStore.state$;
  coinRecordsState$ = this.coinRecordsStore.state$;
  payoutsState$ = this.payoutsStore.state$;

  readonly PoolSizeChartTheme = PoolSizeChartTheme;

  constructor(
    private mainStore: Store<PoolSizeState>,
    private statsStore: StatsStore,
    private coinRecordsStore: CoinRecordsStore,
    private payoutsStore: PayoutsStore,
  ) {}

  ngOnInit(): void {
    this.mainStore.dispatch(statsPageEntered());
    this.statsStore.loadStats();
    this.coinRecordsStore.loadCoinRecords();
    this.payoutsStore.loadPayouts();
  }
}
