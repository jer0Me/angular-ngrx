import {ChartState} from './chart.reducer';
import {ChartActionType} from '../actions/chart.action';
import {PointActions} from '../actions/chart.action';

export interface ChartState {
  pointMouseOverEvent: MouseEvent;
}

const chartInitialState: ChartState = {
  pointMouseOverEvent: null
};

export function chartStateReducer(chartState: ChartState = chartInitialState, pointAction: PointActions): ChartState {
  switch (pointAction.type) {
    case ChartActionType.PointMouseOver: {
      return {
        ...chartState,
        pointMouseOverEvent: pointAction.payload
      };
    }
    default: {
      return chartState;
    }
  }
}
