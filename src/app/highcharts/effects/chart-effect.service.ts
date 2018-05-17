import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {ChartActionType, PointHighlight, PointMouseOver} from '../actions/chart.action';
import {map, debounceTime} from 'rxjs/operators';
import * as ChartActions from '../actions/chart.action';
import {async} from 'rxjs/scheduler/async';

@Injectable()
export class ChartEffects {

  @Effect()
  search$: Observable<PointHighlight> = this.actions$.pipe(
    ofType<PointMouseOver>(ChartActionType.PointMouseOver),
    debounceTime(500, async),
    map(action => new ChartActions.PointHighlight(action.payload))
  );

  constructor(private actions$: Actions) {}
}
