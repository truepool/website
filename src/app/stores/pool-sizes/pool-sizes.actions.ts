import { createAction, props } from '@ngrx/store';
import { PoolSize } from '../../interfaces/pool-size.interface';

export const frontPageEntered = createAction('[Pool Size] Front Page Entered');
export const statsPageEntered = createAction('[Pool Size] Stats Page Entered');

export const poolSizesLoaded = createAction('[Pool Size] Loaded', props<{ sizes: PoolSize[] }>());
export const poolSizesNotLoaded = createAction('[Pool Size] Not Loaded', props<{ error: string }>());


