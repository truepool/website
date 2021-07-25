import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, forkJoin, Observable } from 'rxjs';
import {
  catchError, map, switchMap, takeUntil, tap,
} from 'rxjs/operators';
import { FarmerPartial } from 'src/app/interfaces/farmer-partial.interface';
import { Farmer } from 'src/app/interfaces/farmer.interface';
import { PayoutAddress } from 'src/app/interfaces/payout.interface';
import { FarmerPartialService } from 'src/app/services/api/farmer-partial.service';
import { FarmerService } from 'src/app/services/api/farmer.service';
import { PayoutService } from 'src/app/services/api/payout.service';

export interface FarmerSearchState {
  isLoading: boolean;
  error: string;
  results: {
    farmer: Farmer;
    payouts?: PayoutAddress[];
    partials?: FarmerPartial[];
  }[] | null,
}

const initialState: FarmerSearchState = {
  isLoading: false,
  error: null,
  results: null,
};

@Injectable({ providedIn: 'root' })
export class FarmerSearchStore extends ComponentStore<FarmerSearchState> {
  readonly maxSearchResults = 5;
  readonly farmerPartialResults = 15;

  constructor(
    private farmerService: FarmerService,
    private payoutService: PayoutService,
    private farmerPartialService: FarmerPartialService,
  ) {
    super(initialState);
  }

  readonly searchFarmer = this.effect((queries$: Observable<string>) => {
    return queries$.pipe(
      tap(() => {
        this.setState({
          ...initialState,
          isLoading: true,
        });
      }),
      switchMap((query) => {
        return this.farmerService.getFarmers({ search: query, limit: this.maxSearchResults }).pipe(
          // Load payouts
          switchMap((farmers) => {
            const payoutRequests = farmers.results.map((farmer) => {
              return forkJoin([
                this.payoutService.getPayoutAddresses({ farmer: farmer.launcher_id }),
                this.farmerPartialService.getPartials({
                  launcher_id: farmer.launcher_id,
                  limit: this.farmerPartialResults,
                }),
              ]).pipe(
                map(([payouts, partials]) => ({
                  farmer,
                  payouts: payouts.results,
                  partials: partials.results,
                })),
              );
            });

            return forkJoin(payoutRequests);
          }),
          tap((results) => {
            this.patchState({ results, isLoading: false });
          }),
          catchError(() => {
            const error = 'Error when searching for a farmer.';

            // TODO: Parse actual error and show it.
            this.patchState({
              error,
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
