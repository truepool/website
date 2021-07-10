import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Farmer } from '../../../interfaces/farmer.interface';
import { FarmerService } from '../../../services/api/farmer.service';

export interface LeaderboardState {
  isLoading: boolean;
  error: string;
  topFarmers: Farmer[];
}

const initialState: LeaderboardState = {
  isLoading: false,
  error: null,
  topFarmers: [],
};

@Injectable({ providedIn: 'root' })
export class LeaderboardStore extends ComponentStore<LeaderboardState> {
  readonly leaderboardItems = 100;

  constructor(
    private farmerService: FarmerService,
  ) {
    super(initialState);
  }

  readonly loadFarmers = this.effect((trigger$: Observable<void>) => {
    return trigger$.pipe(
      tap(() => {
        this.setState({
          ...initialState,
          isLoading: true,
        });
      }),
      switchMap(() => {
        return this.farmerService.getFarmers({
          limit: this.leaderboardItems,
          ordering: '-points',
        }).pipe(
          tap((page) => {
            this.patchState({
              topFarmers: page.results,
              isLoading: false,
            });
          }),
          catchError(() => {
            // TODO: Parse actual error and show it.
            this.patchState({
              error: 'Error when loading leaderboard.',
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
