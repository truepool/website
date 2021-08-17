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
  farmers$ = this.info$.pipe(map((state) => state.info.total_farmers));
  xchValue$ = this.info$.pipe(map((state) => state.info.xch_usd_price));
  size$ = this.info$.pipe(map((state) => state.info.total_size));

  constructor(private info: InfoStore) {}

  ngOnInit(): void {
    this.info.loadInfo();
  }
}
