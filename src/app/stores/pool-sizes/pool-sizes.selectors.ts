import { createFeatureSelector, createSelector } from '@ngrx/store';
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
)
