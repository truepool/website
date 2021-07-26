import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { subHours } from 'date-fns';
import { EMPTY, forkJoin, Observable } from 'rxjs';
import { catchError, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Payout } from 'src/app/interfaces/payout.interface';
import { PayoutService } from 'src/app/services/api/payout.service';

export interface PayoutSearchState {
  isLoading: boolean;
  error: string;
  results: Payout | null;
}

const initialState: PayoutSearchState = {
  isLoading: false,
  error: null,
  results: null,
};

@Injectable({ providedIn: 'root' })
export class PayoutSearchStore extends ComponentStore<PayoutSearchState> {
  readonly maxSearchResults = 5;
  readonly partialsForLastHours = 24;

  constructor(private payoutService: PayoutService) {
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
      switchMap((query) => {
        return this.payoutService
          .getPayout(query)
          .pipe(
            tap((results) => {
              this.patchState({ results, isLoading: false });
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
            takeUntil(this.destroy$)
          );
      })
    );
  });
}
