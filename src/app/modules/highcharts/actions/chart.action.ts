import { Action } from '@ngrx/store';

export enum ChartActionType {
    PointMouseOver = '[Highcharts] Point mouse over',
}

export class PointMouseOver implements Action {
    readonly type: string = ChartActionType.PointMouseOver;
    constructor(public payload: MouseEvent) {}
}

export type PointActions = PointMouseOver;
