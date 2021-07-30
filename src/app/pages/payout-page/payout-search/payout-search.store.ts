import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { CoinRecord } from 'src/app/interfaces/coin-record.interface';
import { Payout, PayoutAddress } from 'src/app/interfaces/payout.interface';
import { CoinRecordService } from 'src/app/services/api/coin-record.service';
import { PayoutService } from 'src/app/services/api/payout.service';

export interface PayoutSearchState {
  isLoading: boolean;
  error: string;
  payout: Payout | null;
  addresses: PayoutAddress[] | null;
  coinRecords: CoinRecord[] | null;
}

const initialState: PayoutSearchState = {
  isLoading: false,
  error: null,
  payout: null,
  addresses: null,
  coinRecords: null
};

@Injectable({ providedIn: 'root' })
export class PayoutSearchStore extends ComponentStore<PayoutSearchState> {
  constructor(private payoutService: PayoutService, private coinRecordService: CoinRecordService) {
    super(initialState);
  }

  readonly searchPayout = this.effect((queries$: Observable<string>) => {
    return queries$.pipe(
      tap(() => {
        this.setState({
          ...initialState,
          isLoading: true,
        });
      }),
      switchMap((query: string) => {
        return this.payoutService
          .getPayout(query)
          .pipe(tap((payout) => this.patchState({ payout })))
      }),
      switchMap((payout: Payout) =>
        this.coinRecordService.getCoinRecords({ payout: payout.id.toString() })
          .pipe(
            tap((coinRecords) => {
              this.patchState({ coinRecords: coinRecords.results });
            }),
            map(() => payout)
          )
      ),
      switchMap((payout: Payout) =>
        this.payoutService.getPayoutAddresses({ payout: payout.id.toString() })
          .pipe(
            tap((addresses) => { this.patchState({ addresses: addresses.results, isLoading: false }); })
          )
      ),
      catchError(() => {
        const error = 'Error when searching for a payout.';

        // TODO: Parse actual error and show it.
        this.patchState({
          error,
          isLoading: false,
        });

        return EMPTY;
      }),
      takeUntil(this.destroy$)
    );
  })
}