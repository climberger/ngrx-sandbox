import {Action} from '@ngrx/store';


const namespace = 'DEMO:';

export const INSERT_VALUE = namespace + 'INSERT_VALUE';

export class InsertValue implements Action {
  readonly type = INSERT_VALUE;

  constructor(public payload: string) {}
}

export type DemoAction = InsertValue; // Add other actions with | here
