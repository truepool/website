import { createFeatureSelector, createSelector } from '@ngrx/store';
import { differenceInHours } from 'date-fns';
import { PoolSizeState } from './pool-sizes.reducer';

export const poolSizeStateKey = 'poolSizes';

export const selectPoolSizesState = createFeatureSelector<PoolSizeState>(poolSizeStateKey);

export const selectPoolSizes = createSelector(
  selectPoolSizesState,
  (state) => state.sizes,
);

export const selectLatestPoolSize = createSelector(
  selectPoolSizes,
  (sizes) => sizes[0]?.size,
);

export const selectSomePoolSizes = createSelector(
  selectPoolSizes,
  (sizes) => sizes.filter((_, i) => i % 5 === 0),
);

export const selectGrowthLast24h = createSelector(
  selectPoolSizes,
  (sizes) => {
    const currentSize = sizes[0]?.size || 0;
    const currentDate = sizes[0]?.datetime;

    for (let i = 0; i < sizes.length; i += 1) {
      if (differenceInHours(currentDate, sizes[i].datetime) > 24) {
        return currentSize - sizes[i].size;
      }
    }

    return 0;
  }
)
