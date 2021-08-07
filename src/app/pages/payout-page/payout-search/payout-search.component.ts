import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { map, take } from 'rxjs/operators';
import { Farmer } from 'src/app/interfaces/farmer.interface';
import { PayoutSearchStore } from './payout-search.store';

@UntilDestroy()
@Component({
  selector: 'app-payout-search-results',
  styleUrls: ['./payout-search.component.scss'],
  templateUrl: 'payout-search.component.html',
  providers: [PayoutSearchStore],
})
export class PayoutSearchComponent {
  state$ = this.store.state$;
  payoutId$ = this.activatedRoute.paramMap.pipe(map((pMap) => pMap.get('id')));
  farmer: Farmer = null;
  coinFarmer: Farmer = null;

  constructor(
    private store: PayoutSearchStore,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.payoutId$
      .pipe(take(1))
      .subscribe((payoutId) => this.store.searchPayout({ payoutId, page: 0 }));
  }

  onFarmerSelection(farmer: Farmer): void {
    if (this.farmer && this.farmer.launcher_id === farmer.launcher_id) {
      this.farmer = null;
      return;
    }

    this.farmer = farmer;
  }

  onCoinFarmerSelection(farmer: Farmer): void {
    if (this.coinFarmer && this.coinFarmer.launcher_id === farmer.launcher_id) {
      this.coinFarmer = null;
      return;
    }

    this.coinFarmer = farmer;
  }

  async onPageChanged(page: number) {
    const payoutId = await this.payoutId$.pipe(take(1)).toPromise();
    this.store.searchPayout({ payoutId, page });
  }
}
