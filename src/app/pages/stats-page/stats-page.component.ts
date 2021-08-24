import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ColorSchemeTheme } from 'src/app/services/api/color-scheme.enum';
import { statsPageEntered } from '../../stores/pool-sizes/pool-sizes.actions';
import { PoolSizeState } from '../../stores/pool-sizes/pool-sizes.reducer';
import {
  selectGrowthLast24h,
  selectPoolSizesState,
  selectSomePoolSizes,
} from '../../stores/pool-sizes/pool-sizes.selectors';
import { InfoStore } from './info.store';

@Component({
  templateUrl: 'stats-page.component.html',
  styleUrls: ['./stats-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsPageComponent implements OnInit {
  poolSizesState$ = this.mainStore.select(selectPoolSizesState);
  infoState$ = this.infoStore.state$;
  growthLast24h$ = this.mainStore.select(selectGrowthLast24h);
  somePoolSizes$ = this.mainStore.select(selectSomePoolSizes);

  readonly PoolSizeChartTheme = ColorSchemeTheme;

  constructor(
    private mainStore: Store<PoolSizeState>,
    private infoStore: InfoStore,
  ) {}

  ngOnInit(): void {
    this.mainStore.dispatch(statsPageEntered());
    this.infoStore.loadInfo();
  }
}
