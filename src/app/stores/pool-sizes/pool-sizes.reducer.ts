import { Action, createReducer, on } from '@ngrx/store';
import { PoolSize } from '../../interfaces/pool-size.interface';
import * as poolSizeActions from './pool-sizes.actions';

export interface PoolSizeState {
  isLoading: boolean;
  sizes: PoolSize[];
  error: string | null;
}

const initialState: PoolSizeState = {
  isLoading: false,
  sizes: [],
  error: null,
}

const reducer = createReducer<PoolSizeState>(
  initialState,

  on(
    poolSizeActions.frontPageEntered,
    poolSizeActions.statsPageEntered,
    () => ({ ...initialState, isLoading: true })
  ),
  on(poolSizeActions.poolSizesLoaded, (state, { sizes }) => {
    return {
      ...state,
      isLoading: false,
      sizes,
    };
  }),
  on(poolSizeActions.poolSizesNotLoaded, (state, { error }) => ({ ...state, error, isLoading: false })),
);

export function poolSizesReducer(
  state: PoolSizeState | undefined, action: Action,
): PoolSizeState {
  return reducer(state, action);
}
