import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PayoutSearchStore } from './payout-search.store';

@Component({
  selector: 'app-payout-search-results',
  templateUrl: 'payout-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PayoutSearchStore],
})
export class PayoutSearchComponent {
  state$ = this.store.state$;

  @Input() set query(value: string) {
    this.store.searchPayout(value);
  }

  constructor(private store: PayoutSearchStore) {}
}
