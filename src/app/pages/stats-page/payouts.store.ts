import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap, takeUntil, tap } from 'rxjs/operators';
import { CoinRecord } from '../../interfaces/coin-record.interface';
import { Payout, PayoutAddress } from '../../interfaces/payout.interface';
import { PoolStats } from '../../interfaces/pool-stats.interface';
import { CoinRecordService } from '../../services/api/coin-record.service';
import { PayoutService } from '../../services/api/payout.service';
import { PoolService } from '../../services/api/pool.service';

export interface PayoutsState {
  isLoading: boolean;
  error: string;
  payouts: Payout[];
}

const initialState: PayoutsState = {
  isLoading: false,
  error: null,
  payouts: [],
};

@Injectable({ providedIn: 'root' })
export class PayoutsStore extends ComponentStore<PayoutsState> {
  constructor(
    private payoutService: PayoutService,
  ) {
    super(initialState);
  }

  readonly loadPayouts = this.effect((trigger$: Observable<void>) => {
    return trigger$.pipe(
      tap(() => {
        this.setState({
          ...initialState,
          isLoading: true,
        });
      }),
      switchMap(() => {
        return this.payoutService.getPayouts({}).pipe(
          tap((page) => {
            this.patchState({
              payouts: page.results,
              isLoading: false,
            });
          }),
          catchError(() => {
            // TODO: Parse actual error and show it.
            this.patchState({
              error: 'Error when loading payout records.',
              isLoading: false,
            });

            return EMPTY;
          }),
          takeUntil(this.destroy$),
        );
      }),
    );
  });
}
