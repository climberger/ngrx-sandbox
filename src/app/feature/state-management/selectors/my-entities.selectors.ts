import {createSelector} from '@ngrx/store';
import {FeatureState, getFeatureModuleState} from '../reducers';

import * as formMyEntityReducer from '../reducers/my-entities.reducer';

export const getMyEntitiesState = createSelector(getFeatureModuleState, (state: FeatureState) => state.myEntities);

// returns all entities as array
export const getAllEntities = createSelector(getMyEntitiesState, formMyEntityReducer.selectAll);

