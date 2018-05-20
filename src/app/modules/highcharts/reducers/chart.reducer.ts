import {XAxisState} from './chart.reducer';
import {ChartActionType} from '../actions/chart.action';
import {PointActions} from '../actions/chart.action';

export interface ChartXAxisValue {
  chartIndex: number;
  value: number;
}

export interface XAxisState {
  lastChartXValueMouseOver: ChartXAxisValue;
}

const xAxisInitialState: XAxisState = {
  lastChartXValueMouseOver: null
};

export function xAxisReducer(xAxisState: XAxisState = xAxisInitialState, pointAction: PointActions): XAxisState {
  switch (pointAction.type) {
    case ChartActionType.PointHighlight: {
      return {
        ...xAxisState,
        lastChartXValueMouseOver: pointAction.payload
      };
    }
    default: {
      return xAxisState;
    }
  }
}
