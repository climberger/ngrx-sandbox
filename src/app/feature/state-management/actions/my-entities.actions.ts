import {Action} from '@ngrx/store';
import {MyEntity} from '../../models/my-entity';


const namespace = 'MY_ENTITIES:';

// TODO: Here, namespaces cannot be arranged as string prefixes,
//  since then the types are interpreted as strings and the right type resolution in reducers does not work
export const SET_ENTITIES = 'SET_ENTITIES';
export const ADD_ENTITY = 'ADD_ENTITY';
export const DELETE_ENTITY = 'DELETE_ENTITY';

export class SetEntities implements Action {
  readonly type = SET_ENTITIES;

  constructor(public payload: MyEntity[]) {}
}

export class AddEntity implements Action {
  readonly type = ADD_ENTITY;

  constructor(public payload: MyEntity) {}
}

export class DeleteEntity implements Action {
  readonly type = DELETE_ENTITY;

  constructor(public payload: string) {}
}

// Add other actions with | here
export type MyEntitiesAction = SetEntities | AddEntity | DeleteEntity;
