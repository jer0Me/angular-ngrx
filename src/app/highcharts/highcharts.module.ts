import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighchartsComponent } from './highcharts.component';
import { HighchartsRoutingModule } from './highcharts-routing.module';

import { HighchartsChartComponent } from 'highcharts-angular';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { ChartComponent } from './components/chart/chart.component';
import {EffectsModule} from '@ngrx/effects';
import {ChartEffects} from './effects/chart-effect.service';

@NgModule({
  imports: [
    CommonModule,
    HighchartsRoutingModule,
    StoreModule.forFeature('highcharts', reducers),
    EffectsModule.forFeature([ChartEffects])
  ],
  declarations: [
    HighchartsComponent,
    HighchartsChartComponent,
    ChartComponent
  ]
})
export class HighchartsModule { }
