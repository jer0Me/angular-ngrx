import {HighchartsState} from './index';

import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {xAxisReducer, XAxisState} from './chart.reducer';

export const HIGHCHARTS_STATE = 'highchartsState';

export interface HighchartsState {
  xAxisState: XAxisState;
}

export const reducers: ActionReducerMap<HighchartsState> = {
  xAxisState: xAxisReducer
};

export const getHighchartState = createFeatureSelector<HighchartsState>(HIGHCHARTS_STATE);

export const getXAxisState = createSelector(
  getHighchartState,
  highchartsState => highchartsState.xAxisState
);

export const getLastChartXValueMouseOver = createSelector(
  getXAxisState,
  state => state.lastChartXValueMouseOver
);
