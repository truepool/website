import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import {
  catchError, switchMap, takeUntil, tap,
} from 'rxjs/operators';
import { Farmer } from 'src/app/interfaces/farmer.interface';
import { FarmerService } from 'src/app/services/api/farmer.service';

export interface FarmerState {
  isLoading: boolean;
  error: string;
  farmer: Farmer;
}

const initialState: FarmerState = {
  isLoading: false,
  error: null,
  farmer: null,
};

@Injectable({ providedIn: 'root' })
export class FarmerStore extends ComponentStore<FarmerState> {
  constructor(private farmerService: FarmerService) {
    super(initialState);
  }

  readonly loadFarmer = this.effect((trigger$: Observable<string>) => {
    return trigger$.pipe(
      tap(() => {
        this.setState({
          ...initialState,
          isLoading: true,
        });
      }),
      switchMap((launcherId) => {
        return this.farmerService.getFarmer(launcherId).pipe(
          tap((farmer) => {
            this.patchState({
              farmer,
              isLoading: false,
            });
          }),
          catchError(() => {
            // TODO: Parse actual error and show it.
            this.patchState({
              error: 'Error when loading farmer record.',
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
