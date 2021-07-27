import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { map, take, tap } from 'rxjs/operators';
import { PayoutSearchStore } from './payout-search.store';

@UntilDestroy()
@Component({
  selector: 'app-payout-search-results',
  templateUrl: 'payout-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PayoutSearchStore],
})
export class PayoutSearchComponent {
  state$ = this.store.state$.pipe(tap(console.log));
  payoutId$ = this.activatedRoute.paramMap.pipe(map(pMap => pMap.get('id')));

  constructor(private store: PayoutSearchStore, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.payoutId$.pipe(take(1)).subscribe(payoutId => this.store.searchPayout(payoutId));
  }
}
