import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HighchartsComponent} from './highcharts.component';
import {HighchartsRoutingModule} from './highcharts-routing.module';

import {HighchartsChartComponent} from 'highcharts-angular';
import {StoreModule} from '@ngrx/store';
import {HIGHCHARTS_STATE, reducers} from './reducers';
import {ChartComponent} from './components/chart/chart.component';
import {EffectsModule} from '@ngrx/effects';
import {ChartEffects} from './effects/chart.effects';
import {MatCardModule, MatGridListModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HighchartsRoutingModule,
    StoreModule.forFeature(HIGHCHARTS_STATE, reducers),
    EffectsModule.forFeature([ChartEffects]),
    MatCardModule,
    MatGridListModule
  ],
  declarations: [
    HighchartsComponent,
    HighchartsChartComponent,
    ChartComponent
  ]
})
export class HighchartsModule {
}
