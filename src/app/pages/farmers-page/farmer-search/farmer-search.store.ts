import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, forkJoin, Observable } from 'rxjs';
import { catchError, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Farmer } from '../../../interfaces/farmer.interface';
import { PayoutAddress } from '../../../interfaces/payout.interface';
import { FarmerService } from '../../../services/api/farmer.service';
import { PayoutService } from '../../../services/api/payout.service';

export interface FarmerSearchState {
  isSearching: boolean;
  error: string;
  result: {
    farmer: Farmer;
    payouts: PayoutAddress[];
  } | null,
}

const initialState: FarmerSearchState = {
  isSearching: false,
  error: null,
  result: null,
};

@Injectable({ providedIn: 'root' })
export class FarmerSearchStore extends ComponentStore<FarmerSearchState> {
  constructor(
    private farmerService: FarmerService,
    private payoutService: PayoutService,
  ) {
    super(initialState);
  }

  readonly searchFarmer = this.effect((launcherIds$: Observable<string>) => {
    return launcherIds$.pipe(
      tap(() => {
        this.setState({
          ...initialState,
          isSearching: true,
        });
      }),
      switchMap((launcherId) => {
        return forkJoin([
          this.farmerService.getFarmer(launcherId),
          this.payoutService.getPayoutAddresses({ farmer: launcherId }),
        ]).pipe(
          tap(([farmer, payoutsPage]) => {
            this.patchState({
              result: {
                farmer,
                payouts: payoutsPage.results,
              },
              isSearching: false,
            });
          }),
          catchError((response: HttpErrorResponse) => {
            let error = 'Error when searching for a farmer.';
            if (response.status === 404) {
              error = 'Farmer not found.';
            }

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
