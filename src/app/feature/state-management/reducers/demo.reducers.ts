import * as fromDemoActions from '../actions/demo.actions';


export interface DemoState {
  demoValue: string;
}

export const initialState: DemoState = {
  demoValue: ''
}

export function demoReducer(state = initialState, action: fromDemoActions.DemoAction): DemoState {

  switch (action.type) {

    case fromDemoActions.INSERT_VALUE: {
      return {
        ...state,
        demoValue: action.payload
      };
    }

  }

  return state;
}

export const getDemoValue = (state: DemoState) => state.demoValue;
