import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../../../app-reducers.index';
import { demoReducer, DemoState } from './demo.reducer';
import { myEntitiesReducer, MyEntitiesState } from './my-entities.reducer';

export const featureStateIdentifier = 'Feature';

export interface FeatureState {
  demo: DemoState;
  myEntities: MyEntitiesState;
//  define further sub states within the feature state
}

export const reducers: ActionReducerMap<FeatureState> = {
  demo: demoReducer,
  myEntities: myEntitiesReducer
//  define further reducers here
};

export interface State extends AppState {
 [featureStateIdentifier]: FeatureState;
}

export const getFeatureModuleState = createFeatureSelector<FeatureState>(featureStateIdentifier);
