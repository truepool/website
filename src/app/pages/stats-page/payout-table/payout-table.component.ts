import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PayoutsStore } from '../../payout-page/payouts.store';

@Component({
  selector: 'app-payout-table',
  templateUrl: './payout-table.component.html',
  styleUrls: ['./payout-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PayoutTableComponent implements OnInit {
  payoutsState$ = this.payoutsStore.state$;

  constructor(
    private payoutsStore: PayoutsStore,
  ) { }

  ngOnInit(): void {
    this.payoutsStore.loadPayouts();
  }
}
