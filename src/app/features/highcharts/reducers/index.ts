import {HighchartsState} from './index';

import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {chartStateReducer, ChartState} from './chart.reducer';

export const HIGHCHARTS_STATE = 'highchartsState';

export interface HighchartsState {
  chartState: ChartState;
}

export const reducers: ActionReducerMap<HighchartsState> = {
  chartState: chartStateReducer
};

export const getHighchartState = createFeatureSelector<HighchartsState>(HIGHCHARTS_STATE);
