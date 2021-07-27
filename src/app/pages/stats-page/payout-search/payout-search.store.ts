import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Farmer } from 'src/app/interfaces/farmer.interface';
import { Payout, PayoutAddress } from 'src/app/interfaces/payout.interface';
import { FarmerService } from 'src/app/services/api/farmer.service';
import { PayoutService } from 'src/app/services/api/payout.service';

export interface PayoutSearchState {
  isLoading: boolean;
  error: string;
  results: Payout | null;
  addresses: PayoutAddress | null;
  farmer: Farmer | null;
}

const initialState: PayoutSearchState = {
  isLoading: false,
  error: null,
  results: null,
  addresses: null,
  farmer: null
};

@Injectable({ providedIn: 'root' })
export class PayoutSearchStore extends ComponentStore<PayoutSearchState> {
  constructor(private payoutService: PayoutService, private farmerService: FarmerService) {
    super(initialState);
  }

  readonly searchPayout = this.effect((queries$: Observable<number>) => {
    return queries$.pipe(
      tap(() => {
        this.setState({
          ...initialState,
          isLoading: true,
        });
      }),
      switchMap((query: number) => {
        return this.payoutService
          .getPayout(query)
          .pipe(
            tap(() => console.log("payout")),
            tap(console.log),
            tap((results) => {
              this.patchState({ results });
            })
          )
      }),
      switchMap((p: Payout) =>
        this.payoutService.getPayoutAddresses({ payout: p.id.toString() })
          .pipe(
            tap(() => console.log("payout address")),
            tap(console.log),
            tap((addresses) => {
              this.patchState({ addresses });
            })
          ),
      ),
      switchMap((address: PayoutAddress) => {
        const farmerUrlPieces = address.farmer.split("/")
        return this.farmerService.getFarmer(farmerUrlPieces[farmerUrlPieces.length - 2]) // TODO no magic numbers
          .pipe(
            tap(() => console.log("farmer")),
            tap(console.log),
            tap((farmer) => {
              this.patchState({ farmer, isLoading: false });
            })
          )
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
}
