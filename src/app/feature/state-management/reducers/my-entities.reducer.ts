import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {MyEntity} from '../../models/my-entity';

import * as fromEntitiesActions from '../actions/my-entities.actions';

export interface MyEntitiesState extends EntityState<MyEntity> {

}

export const myEntitiesAdapter: EntityAdapter<MyEntity> = createEntityAdapter<MyEntity>();

export const initialState: MyEntitiesState = myEntitiesAdapter.getInitialState();

export function myEntitiesReducer(state = initialState, action: fromEntitiesActions.MyEntitiesAction): MyEntitiesState {

  switch (action.type) {

    case fromEntitiesActions.SET_ENTITIES: {
      return myEntitiesAdapter.addAll(action.payload, state);
    }

    case fromEntitiesActions.ADD_ENTITY: {
      return myEntitiesAdapter.addOne(action.payload, state);
    }

    case fromEntitiesActions.DELETE_ENTITY: {
      return myEntitiesAdapter.removeOne(action.payload, state);
    }

  }

  return state;

}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = myEntitiesAdapter.getSelectors();

export const getMyEntitiesEntities = (state: MyEntitiesState) => state.entities;
