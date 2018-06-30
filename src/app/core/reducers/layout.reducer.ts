import {LayoutActions, LayoutActionType} from '../actions/layout.action';
import {AppState} from './index';
import {createSelector} from '@ngrx/store';

export interface LayoutState {
  showSidenav: boolean;
}

const initialLayoutState: LayoutState = {
  showSidenav: false
};

export function layoutReducer(layoutState: LayoutState = initialLayoutState, action: LayoutActions): LayoutState {
  switch (action.type) {
    case LayoutActionType.OpenSidenav: {
      return {
        ...layoutState,
        showSidenav: true
      };
    }
    case LayoutActionType.CloseSidenav: {
      return {
        ...layoutState,
        showSidenav: false
      };
    }
    default: {
      return layoutState;
    }
  }
}

export const getLayoutState = (state: AppState) => state.layoutState;

export const getShowSidenav = createSelector(
  getLayoutState,
  (state: LayoutState) => state.showSidenav
);



