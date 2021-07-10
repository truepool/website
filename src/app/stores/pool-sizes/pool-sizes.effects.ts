import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { PoolService } from '../../services/api/pool.service';
import * as poolSizeActions from './pool-sizes.actions';
import { differenceInDays } from 'date-fns';

@Injectable()
export class PoolSizesEffects {

  loadPoolSizes$ = createEffect(() => this.actions$.pipe(
    ofType(poolSizeActions.frontPageEntered, poolSizeActions.statsPageEntered),
    switchMap(() => {
      const daysSinceStart = differenceInDays(new Date(), environment.startingDay);
      const daysForChart = Math.min(daysSinceStart, environment.daysForChart);

      return this.poolService.getSize(daysForChart).pipe(
        map((sizes) => poolSizeActions.poolSizesLoaded({ sizes })),
        catchError(() => {
          return of(poolSizeActions.poolSizesNotLoaded({
            error: 'Error when loading pool size history',
          }))
        }),
      )
    })
  ));

  constructor(
    private actions$: Actions,
    private poolService: PoolService,
  ) {}
}
