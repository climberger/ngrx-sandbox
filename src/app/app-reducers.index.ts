import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../environments/environment';

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

export interface AppState {
  // router: fromRouter.RouterState;
}

export const reducers: ActionReducerMap<AppState> = {
  // router: fromRouter.reducer
};

// export const getAppState = (state: AppState) => state;
