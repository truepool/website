import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PoolInfo } from '../../interfaces/pool-info.interface';
import { InfoService } from '../../services/api/info.service';

export interface InfoState {
  isLoading: boolean;
  error: string;
  info: PoolInfo;
}

const initialState: InfoState = {
  isLoading: false,
  error: null,
  info: null,
};

@Injectable({ providedIn: 'root' })
export class InfoStore extends ComponentStore<InfoState> {
  constructor(
    private infoService: InfoService,
  ) {
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
      switchMap(() => {
        return this.infoService.getInfo().pipe(
          tap((info) => {
            this.patchState({
              info,
              isLoading: false,
            });
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
      }),
    );
  });
}
