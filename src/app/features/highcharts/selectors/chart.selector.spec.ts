import * as fromChart from '../reducers/chart.reducer';
import * as fromChartSelectors from './chart.selector';

describe('Chart selectors', () => {

  it('should select chartState', () => {
    const chartState: fromChart.State = fromChartSelectors.getChartState(
      {highchartsState: {chartState: fromChart.initialState}}
    );
    expect(chartState).toBe(fromChart.initialState);
  });

  it('should select pointXValue', () => {
    const xValue = 10;
    const mouseEvent = {
      target: {x: xValue}
    };
    const pointXValue: number = fromChartSelectors.getPointXValue(
      {
        highchartsState: {
          chartState: {
            ...fromChart.initialState,
            pointMouseOverEvent: mouseEvent
          }
        }
      }
    );
    expect(pointXValue).toBe(xValue);
  });

});
