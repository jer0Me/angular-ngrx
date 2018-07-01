import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {layoutReducer, LayoutState} from './layout.reducer';

export interface AppState {
  layoutState: LayoutState;
}

export const reducers: ActionReducerMap<AppState> = {
  layoutState: layoutReducer
};


// console.log all actions
export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
