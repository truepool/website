import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, forkJoin, Observable } from 'rxjs';
import { catchError, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Farmer } from '../../../interfaces/farmer.interface';
import { PayoutAddress } from '../../../interfaces/payout.interface';
import { FarmerService } from '../../../services/api/farmer.service';
import { PayoutService } from '../../../services/api/payout.service';

export interface FarmerSearchState {
  isSearching: boolean;
  error: string;
  results: {
    farmer: Farmer;
    payouts?: PayoutAddress[];
  }[] | null,
}

const initialState: FarmerSearchState = {
  isSearching: false,
  error: null,
  results: null,
};

@Injectable({ providedIn: 'root' })
export class FarmerSearchStore extends ComponentStore<FarmerSearchState> {
  readonly maxSearchResults = 5;

  constructor(
    private farmerService: FarmerService,
    private payoutService: PayoutService,
  ) {
    super(initialState);
  }

  readonly searchFarmer = this.effect((queries$: Observable<string>) => {
    return queries$.pipe(
      tap(() => {
        this.setState({
          ...initialState,
          isSearching: true,
        });
      }),
      switchMap((query) => {
        return this.farmerService.getFarmers({ search: query, limit: this.maxSearchResults }).pipe(

          switchMap((farmers) => {
            const payoutRequests = farmers.results.map((farmer) => {
              return this.payoutService.getPayoutAddresses({ farmer: farmer.launcher_id }).pipe(
                map((payouts) => ({ farmer, payouts: payouts.results })),
              );
            })

            return forkJoin(payoutRequests);
          }),
          tap((results) => {
            this.patchState({ results, isSearching: false });
          }),
          catchError(() => {
            let error = 'Error when searching for a farmer.';

            // TODO: Parse actual error and show it.
            this.patchState({
              error,
              isSearching: false,
            });

            return EMPTY;
          }),
          takeUntil(this.destroy$),
        );
      }),
    );
  });
}
