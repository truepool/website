import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PoolStats } from '../../interfaces/pool-stats.interface';
import { PoolService } from '../../services/api/pool.service';

export interface StatsState {
  isLoading: boolean;
  error: string;
  stats: PoolStats;
}

const initialState: StatsState = {
  isLoading: false,
  error: null,
  stats: null,
};

@Injectable({ providedIn: 'root' })
export class StatsStore extends ComponentStore<StatsState> {
  constructor(
    private poolService: PoolService,
  ) {
    super(initialState);
  }

  readonly loadStats = this.effect((trigger$: Observable<void>) => {
    return trigger$.pipe(
      tap(() => {
        this.setState({
          ...initialState,
          isLoading: true,
        });
      }),
      switchMap(() => {
        return this.poolService.getStats().pipe(
          tap((stats) => {
            this.patchState({
              stats,
              isLoading: false,
            });
          }),
          catchError(() => {
            // TODO: Parse actual error and show it.
            this.patchState({
              error: 'Error when loading stats.',
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
