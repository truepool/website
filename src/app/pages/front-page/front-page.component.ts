import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PoolSize } from '../../interfaces/pool-size.interface';
import { frontPageEntered } from '../../stores/pool-sizes/pool-sizes.actions';
import { PoolSizeState } from '../../stores/pool-sizes/pool-sizes.reducer';
import { selectSomePoolSizes } from '../../stores/pool-sizes/pool-sizes.selectors';
import { PoolSizeChartTheme } from '../../components/pool-size-chart/pool-size-chart-theme.enum';

@UntilDestroy()
@Component({
  templateUrl: 'front-page.component.html',
  styleUrls: ['./front-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontPageComponent implements OnInit {
  poolSizes$: Observable<PoolSize[]> = this.store.select(selectSomePoolSizes);  
  readonly PoolSizeChartTheme = PoolSizeChartTheme;
  
  constructor(
    private store: Store<PoolSizeState>,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(frontPageEntered());
  }
}
