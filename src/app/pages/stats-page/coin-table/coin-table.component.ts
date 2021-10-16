import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CoinRecordsStore } from '../coin-records.store';

@Component({
  selector: 'app-coin-table',
  templateUrl: './coin-table.component.html',
  styleUrls: ['./coin-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoinTableComponent implements OnInit {
  coinRecordsState$ = this.coinRecordsStore.state$;

  constructor(
    private coinRecordsStore: CoinRecordsStore,
  ) { }

  ngOnInit(): void {
    this.coinRecordsStore.loadCoinRecords();
  }
}
