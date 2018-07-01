import {Action} from '@ngrx/store';

export const POINT_MOUSE_OVER = '[Highcharts] Point mouse over';

export class PointMouseOver implements Action {
  readonly type: string = POINT_MOUSE_OVER;

  constructor(public payload: MouseEvent) {
  }
}

export type ChartAction = PointMouseOver;
