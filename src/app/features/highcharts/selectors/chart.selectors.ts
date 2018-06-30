import * as _ from 'lodash';
import {getHighchartState} from '../reducers';
import {createSelector} from '@ngrx/store';

export const getChartState = createSelector(
  getHighchartState,
  highchartsState => highchartsState.chartState
);

export const getPointXValue = createSelector(
  getChartState,
  state => !_.isNull(state.pointMouseOverEvent) ? <number>(<any>state.pointMouseOverEvent.target).x : null
);
