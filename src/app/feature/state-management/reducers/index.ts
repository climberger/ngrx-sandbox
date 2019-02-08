import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { demoReducer, DemoState } from './demo.reducers';
import { AppState } from '../../../app-reducers.index';

export const featureStateIdentifier = 'Feature';

export interface FeatureState {
  demo: DemoState;
//  define further sub states within the feature state
}

export const reducers: ActionReducerMap<FeatureState> = {
  demo: demoReducer
//  define further reducers here
};

export interface State extends AppState {
 [featureStateIdentifier]: FeatureState;
}

export const getFeatureModuleState = createFeatureSelector<FeatureState>(featureStateIdentifier);
