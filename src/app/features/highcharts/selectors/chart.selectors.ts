import * as _ from 'lodash';
import * as fromFeature from '../reducers';
import {createSelector} from '@ngrx/store';

export const getChartState = createSelector(
  fromFeature.getHighchartState,
  highchartsState => highchartsState.chartState
);

export const getPointXValue = createSelector(
  getChartState,
  state => !_.isNull(state.pointMouseOverEvent) ? <number>(<any>state.pointMouseOverEvent.target).x : null
);

