import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { combineLatest, EMPTY, Observable } from 'rxjs';
import {
  catchError, switchMap, takeUntil, tap,
} from 'rxjs/operators';
import { CoinRecord } from 'src/app/interfaces/coin-record.interface';
import { Payout, PayoutAddress } from 'src/app/interfaces/payout.interface';
import { CoinRecordService } from 'src/app/services/api/coin-record.service';
import { PayoutService } from 'src/app/services/api/payout.service';

export interface PayoutSearchState {
  isLoading: boolean;
  error: string;
  payout: Payout | null;
  addresses: PayoutAddress[] | null;
  addressesCurrentPage: number;
  addressesCount: number;
  coinRecords: CoinRecord[] | null;
}

const initialState: PayoutSearchState = {
  isLoading: false,
  error: null,
  payout: null,
  addressesCount: 0,
  addresses: null,
  addressesCurrentPage: 0,
  coinRecords: null,
};

@Injectable({ providedIn: 'root' })
export class PayoutSearchStore extends ComponentStore<PayoutSearchState> {
  private readonly addressPageSize = 50;
  constructor(
    private payoutService: PayoutService,
    private coinRecordService: CoinRecordService,
  ) {
    super(initialState);
  }

  readonly searchPayout = this.effect((queries$: Observable<{ payoutId: string; page: number }>) => {
    return queries$.pipe(
      tap((page) => {
        this.setState({
          ...initialState,
          addressesCurrentPage: page.page,
          isLoading: true,
        });
      }),
      switchMap((page) => combineLatest([
        this.payoutService.getPayout(page.payoutId).pipe(
          tap((payout) => {
            this.patchState({ payout });
          }),
        ),
        this.coinRecordService
          .getCoinRecords({ payout: page.payoutId })
          .pipe(
            tap((coinRecords) => {
              this.patchState({ coinRecords: coinRecords.results });
            }),
          ),
        this.payoutService
          .getPayoutAddresses({
            payout: page.payoutId,
            ordering: '-amount',
            offset: page.page * this.addressPageSize,
            count: this.addressPageSize,
          })
          .pipe(
            tap((addresses) => {
              this.patchState({
                addresses: addresses.results.filter(
                  (address) => address.launcher !== null,
                ),
                addressesCount: addresses.count,
              });
            }),
          ),
      ])),
      tap(() => {
        this.patchState({ isLoading: false });
      }),
      catchError(() => {
        const error = 'Error when searching for a payout.';

        // TODO: Parse actual error and show it.
        this.patchState({
          error,
          isLoading: false,
        });

        return EMPTY;
      }),
      takeUntil(this.destroy$),
    );
  });
}
