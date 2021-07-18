import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import {
  catchError, switchMap, takeUntil, tap,
} from 'rxjs/operators';
import { PaginatedResponse } from 'src/app/interfaces/paginated-response.interface';
import { Farmer } from '../../../interfaces/farmer.interface';
import { FarmerService } from '../../../services/api/farmer.service';

export interface LeaderboardState {
  isLoading: boolean;
  error: string;
  topFarmers: PaginatedResponse<Farmer>;
  currentPage: number,
}

const initialState: LeaderboardState = {
  isLoading: false,
  error: null,
  topFarmers: null,
  currentPage: 0,
};

@Injectable({ providedIn: 'root' })
export class LeaderboardStore extends ComponentStore<LeaderboardState> {
  readonly leaderboardPageSize = 100;

  constructor(
    private farmerService: FarmerService,
  ) {
    super(initialState);
  }

  readonly loadFarmers = this.effect((page$: Observable<number>) => {
    return page$.pipe(
      tap((page) => {
        this.setState({
          ...initialState,
          isLoading: true,
          currentPage: page,
        });
      }),
      switchMap((page) => {
        return this.farmerService.getFarmers({
          limit: this.leaderboardPageSize,
          offset: page * this.leaderboardPageSize,
          ordering: '-points',
        }).pipe(
          tap((farmers) => {
            this.patchState({
              topFarmers: farmers,
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
