import {HighchartsState} from './index';

import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {chartStateReducer, ChartState} from './chart.reducer';

import * as _ from 'lodash';

export const HIGHCHARTS_STATE = 'highchartsState';

export interface HighchartsState {
  chartState: ChartState;
}

export const reducers: ActionReducerMap<HighchartsState> = {
  chartState: chartStateReducer
};

export const getHighchartState = createFeatureSelector<HighchartsState>(HIGHCHARTS_STATE);

export const getChartState = createSelector(
  getHighchartState,
  highchartsState => highchartsState.chartState
);

export const getPointXValue = createSelector(
  getChartState,
  state => !_.isNull(state.pointMouseOverEvent) ? <number>(<any>state.pointMouseOverEvent.target).x : null
);
