import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighchartsComponent } from './highcharts.component';
import { HighchartsRoutingModule } from './highcharts-routing.module';

import { HighchartsChartComponent } from 'highcharts-angular';
import { ChartComponent } from './components/chart/chart.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index';

@NgModule({
  imports: [
    CommonModule,
    HighchartsRoutingModule,
    StoreModule.forFeature('mouseEvents', reducers)
  ],
  declarations: [
    HighchartsComponent,
    HighchartsChartComponent,
    ChartComponent
  ]
})
export class HighchartsModule { }
