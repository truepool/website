import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { InfoStore } from 'src/app/pages/stats-page/info.store';

@Component({
  selector: 'app-pool-details-bar',
  styleUrls: ['./pool-details-bar.component.scss'],
  templateUrl: './pool-details-bar.component.html',
})
export class PoolDetailsBarComponent implements OnInit {
  info$ = this.info.state$.pipe(filter((state) => !!state && !!state.info));
  farmers$ = this.info$.pipe(map((state) => state.info.farmers));
  xchValue$ = this.info$.pipe(map((state) => state.info.xch_current_price.usd));
  size$ = this.info$.pipe(map((state) => state.info.pool_space));
  uptime$ = this.info$.pipe(
    map((state) => {
      const ratio = state?.uptimeReport?.monitors[0].all_time_uptime_ratio;
      if (!ratio) {
        return '';
      }

      const ratioFloat = parseFloat(ratio);
      if (ratioFloat === 100) {
        return '100';
      }

      // For better rounding of cases like "99.985"
      const roundedRatio = Math.round((ratioFloat + Number.EPSILON) * 100) / 100;

      return roundedRatio.toString();
    }),
  );

  constructor(private info: InfoStore) {}

  ngOnInit(): void {
    this.info.loadInfo();
  }
}
