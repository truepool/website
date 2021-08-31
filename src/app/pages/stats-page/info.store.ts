import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { combineLatest, EMPTY, Observable } from 'rxjs';
import {
  catchError, switchMap, takeUntil, tap,
} from 'rxjs/operators';
import { UptimeRobotResponse } from 'src/app/interfaces/uptime-robot-response.interface';
import { PoolInfo } from '../../interfaces/pool-info.interface';
import { InfoService } from '../../services/api/info.service';

export interface InfoState {
  isLoading: boolean;
  error: string;
  info: PoolInfo;
  uptimeReport: UptimeRobotResponse;
}

const initialState: InfoState = {
  isLoading: false,
  error: null,
  info: null,
  uptimeReport: null,
};

@Injectable({ providedIn: 'root' })
export class InfoStore extends ComponentStore<InfoState> {
  constructor(private infoService: InfoService) {
    super(initialState);
  }

  readonly loadInfo = this.effect((trigger$: Observable<void>) => {
    return trigger$.pipe(
      tap(() => {
        this.setState({
          ...initialState,
          isLoading: true,
        });
      }),
      switchMap(() => combineLatest([
        this.infoService.getInfo().pipe(
          tap((info) => {
            this.patchState({ info });
          }),
        ),
        this.infoService.getUptime().pipe(
          tap((uptimeResponse) => {
            this.patchState({ uptimeReport: uptimeResponse });
          }),
        ),
      ])),
      tap(() => {
        this.patchState({ isLoading: false });
      }),
      catchError(() => {
        // TODO: Parse actual error and show it.
        this.patchState({
          error: 'Error when loading info.',
          isLoading: false,
        });

        return EMPTY;
      }),
      takeUntil(this.destroy$),
    );
  });
}
