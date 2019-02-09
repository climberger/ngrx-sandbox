import { createSelector } from '@ngrx/store';

import { FeatureState, getFeatureModuleState } from '../reducers';

import * as fromDemoReducers from '../reducers/demo.reducer';

export const getDemoState = createSelector(getFeatureModuleState, (state: FeatureState) => state.demo);

export const getDemoValue = createSelector(getDemoState, fromDemoReducers.getDemoValue);
