import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, forkJoin, Observable } from 'rxjs';
import {
  catchError, switchMap, takeUntil, tap,
} from 'rxjs/operators';
import { Farmer, FarmerUpdate } from '../../interfaces/farmer.interface';
import { LoginParams } from '../../interfaces/login-params.interface';
import { FarmerService } from '../../services/api/farmer.service';
import { UserService } from '../../services/api/user.service';

export enum SetNameStatus {
  Error = 'error',
  LoggingIn = 'loggin-in',
  LoggedIn = 'logged-in',
  SettingName = 'setting-name',
  NameSet = 'name-set',
}

export interface SetNameState {
  status: SetNameStatus;
  error: string;
  launcherId: string;
  farmer: Farmer;
}

const initialState: SetNameState = {
  status: null,
  error: null,
  launcherId: null,
  farmer: null,
};

@Injectable({ providedIn: 'root' })
export class SetNameStore extends ComponentStore<SetNameState> {
  constructor(
    private userService: UserService,
    private farmerService: FarmerService,
  ) {
    super(initialState);
  }

  readonly selectStatus$ = this.select((state) => state.status);
  readonly error$ = this.select((state) => state.error);
  readonly currentFarmer$ = this.select((state) => state.farmer);

  readonly login = this.effect((credentials$: Observable<LoginParams>) => {
    return credentials$.pipe(
      tap((credentials) => {
        this.setState({
          ...initialState,
          status: SetNameStatus.LoggingIn,
          launcherId: credentials.launcher_id,
        });
      }),
      switchMap((credentials) => {
        return forkJoin([
          this.userService.login(credentials),
          this.farmerService.getFarmer(credentials.launcher_id),
        ]).pipe(
          tap(([_, farmer]) => {
            this.patchState({
              farmer,
              status: SetNameStatus.LoggedIn,
            });
          }),
          catchError(() => {
            // TODO: Parse actual error and show it.
            this.patchState({
              error: 'Could not login. Please try again or contact us for support.',
              status: SetNameStatus.Error,
            });

            return EMPTY;
          }),
          takeUntil(this.destroy$),
        );
      }),
    );
  });

  readonly setName = this.effect((nameInfo$: Observable<FarmerUpdate>) => {
    return nameInfo$.pipe(
      tap(() => {
        this.patchState({
          status: SetNameStatus.SettingName,
        });
      }),
      switchMap((nameInfo) => {
        const launcherId = this.get().launcherId;
        return this.farmerService.updateFarmer(launcherId, nameInfo).pipe(
          tap(() => {
            this.patchState({
              status: SetNameStatus.NameSet,
            });
          }),
          catchError(() => {
            // TODO: Parse actual error and show it.
            this.patchState({
              error: 'Error when setting name. Please try again or contact us for support.',
              status: SetNameStatus.Error,
            });

            return EMPTY;
          }),
          takeUntil(this.destroy$),
        );
      }),
    );
  });
}
