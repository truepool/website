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

  constructor(private info: InfoStore) {}

  ngOnInit(): void {
    this.info.loadInfo();
  }
}
