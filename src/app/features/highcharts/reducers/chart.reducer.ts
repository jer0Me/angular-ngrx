import * as fromChartActions from '../actions/chart.action';

export interface State {
  pointMouseOverEvent: MouseEvent;
}

export const initialState: State = {
  pointMouseOverEvent: null
};

export function reducer(chartState: State = initialState, action: fromChartActions.ChartAction): State {
  switch (action.type) {
    case fromChartActions.POINT_MOUSE_OVER: {
      return {
        ...chartState,
        pointMouseOverEvent: action.payload
      };
    }
  }

  return chartState;
}
