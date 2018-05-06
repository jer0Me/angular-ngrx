import { MouseEventState } from "../states/mouseevent.state";
import { MouseEventActions } from "../actions/mouseevent.action";
import { Action } from "@ngrx/store";

export function mouseEventReducer(mouseEventState: MouseEventState, action: MouseEventActions): MouseEventState {
    return mouseEventState;
}