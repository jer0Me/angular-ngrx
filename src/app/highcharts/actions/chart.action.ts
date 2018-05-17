import { Action } from '@ngrx/store';
import {ChartXAxisValue} from '../reducers/chart.reducer';

export enum ChartActionType {
    PointMouseOver = '[Highcharts] Point mouse over',
    PointHighlight = '[Highcharts] Point highlighted'
}

export class PointMouseOver implements Action {
    readonly type: string = ChartActionType.PointMouseOver;
    constructor(public payload: ChartXAxisValue) {}
}

export class PointHighlight implements Action {
    readonly type: string = ChartActionType.PointHighlight;
    constructor(public payload: ChartXAxisValue) {}
}

export type PointActions = PointMouseOver | PointHighlight;
