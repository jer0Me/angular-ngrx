import { Action } from "@ngrx/store";

enum MouseEventType {
    MouseMove = '[Highcharts] Mouse Move'
}

export class MouseMove implements Action {
    readonly type = MouseEventType.MouseMove;
    constructor(public payload: MouseEvent){}
}

export type MouseEventActions = MouseMove;