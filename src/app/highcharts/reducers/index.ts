import { HighchartsState } from './index';

import { ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import { xAxisReducer, XAxisState } from './chart.reducer';

export interface HighchartsState {
    xAxisState: XAxisState;
}

export const reducers: ActionReducerMap<HighchartsState> = {
    xAxisState: xAxisReducer
};

export const getHighchartState = createFeatureSelector<HighchartsState>('highcharts');

export const getXAxisState = createSelector(
    getHighchartState,
    highchartsState => highchartsState.xAxisState
);

export const getLastChartXValueMouseOver = createSelector(
    getXAxisState,
    state => state.lastChartXValueMouseOver
);
