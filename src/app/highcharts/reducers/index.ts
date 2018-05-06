
import { ActionReducerMap} from '@ngrx/store';
import { HighchartsState } from "../states/highcharts.state";
import { mouseEventReducer } from "./mouseevent.reducer";

export const reducers: ActionReducerMap<HighchartsState> = {
    mouseEventState: mouseEventReducer
}