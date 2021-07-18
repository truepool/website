import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import {
  catchError, switchMap, takeUntil, tap,
} from 'rxjs/operators';
import { CoinRecord } from '../../interfaces/coin-record.interface';
import { CoinRecordService } from '../../services/api/coin-record.service';

export interface CoinRecordsState {
  isLoading: boolean;
  error: string;
  coinRecords: CoinRecord[];
}

const initialState: CoinRecordsState = {
  isLoading: false,
  error: null,
  coinRecords: [],
};

@Injectable({ providedIn: 'root' })
export class CoinRecordsStore extends ComponentStore<CoinRecordsState> {
  constructor(
    private coinRecordsService: CoinRecordService,
  ) {
    super(initialState);
  }

  readonly loadCoinRecords = this.effect((trigger$: Observable<void>) => {
    return trigger$.pipe(
      tap(() => {
        this.setState({
          ...initialState,
          isLoading: true,
        });
      }),
      switchMap(() => {
        return this.coinRecordsService.getCoinRecords({}).pipe(
          tap((page) => {
            this.patchState({
              coinRecords: page.results,
              isLoading: false,
            });
          }),
          catchError(() => {
            // TODO: Parse actual error and show it.
            this.patchState({
              error: 'Error when loading coin records.',
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
