import {ChartXAxisValue} from '../../reducers/chart.reducer';

declare var require: any;

import * as Highcharts from 'highcharts/highstock';
require('highcharts/modules/boost')(Highcharts);

import {BaseComponent} from '../../../base.component';
import {getLastChartXValueMouseOver} from '../../reducers';
import {Observable} from 'rxjs/Observable';
import {Component, OnInit, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {ChartObject} from 'highcharts/highstock';
import {PointObject, SeriesObject, SeriesOptions} from 'highcharts';
import * as PointActions from '../../actions/chart.action';
import {HighchartsState} from '../../reducers';

import * as _ from 'lodash';
import {Subscription} from 'rxjs/src/Subscription';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent extends BaseComponent implements OnInit, OnDestroy {
  Highcharts;
  chartOptions: Highcharts.Options;
  chartConstructor: string;
  chart: ChartObject;
  lastChartXValueMouseOver: Observable<ChartXAxisValue>;
  lastChartXValueMouseOverSuscription: Subscription;

  constructor(cd: ChangeDetectorRef, private highchartsStore: Store<HighchartsState>) {
    super(cd);
    this.lastChartXValueMouseOver = highchartsStore.pipe(select(getLastChartXValueMouseOver));
  }

  ngOnInit() {
    this.initChartOptions();
    this.lastChartXValueMouseOver.subscribe((lastPointMouseOver: ChartXAxisValue) => {
      if (!_.isNull(lastPointMouseOver) && this.pointDoesNotBelongToTheCurrentChart(lastPointMouseOver)) {
        this.mouseOverToPointThatHasTheSameXValue(lastPointMouseOver.value);
      }
    });
  }

  callbackFunction = (chart) => this.chart = chart;

  ngOnDestroy(): void {
    this.lastChartXValueMouseOverSuscription.unsubscribe();
  }

  private pointDoesNotBelongToTheCurrentChart(lastPointMouseOver: ChartXAxisValue) {
    return lastPointMouseOver.chartIndex !== (<any>this.chart).index;
  }

  private initChartOptions() {
    // Needed in order to create an instance of Highchart
    this.Highcharts = Highcharts;

    this.chartConstructor = 'stockChart';

    this.chartOptions = {
      title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
      },
      subtitle: {
        text: 'Source: thesolarfoundation.com'
      },
      yAxis: {
        title: {
          text: 'Number of Employees'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      series: this.getSeries(),
      plotOptions: {
        series: {
          point: {
            events: {
              mouseOver: (event: any) => {
                this.dispatchPointMouseOverAction(event);
              }
            }
          }
        }
      },
    };

    (<any>this.chartOptions).boost = {
      useGPUTranslations: true
    };
  }

  private dispatchPointMouseOverAction(event: any) {
    this.highchartsStore.dispatch(
      new PointActions.PointMouseOver({
        chartIndex: (<any>this.chart).index,
        value: event.target.x
      })
    );
  }

  private getSeries(): Array<SeriesOptions> {
    const result: Array<SeriesOptions> = [];
    ['Installation', 'Manufacturing', 'Sales & Distribution', 'Project Development', 'Other'].forEach(seriesName => {
      result.push({
        name: seriesName,
        data: this.getSeriesData(50)
      });
    });

    return result;
  }

  private getSeriesData(num: number): Array<[number, number]> {
    const seriesData: Array<[number, number]> = [];

    for (let i = 0; i < num; i++) {
      seriesData.push([i, Math.random()]);
    }

    return seriesData;
  }

  private mouseOverToPointThatHasTheSameXValue(lastChartXAxisValue: number): void {
    // We need only the first series visible because once we trigger
    // the mouse over event of one of its point, automatically all points in the
    // in the same position will be highlighted.
    const firstSeriesVisible = this.getTheFirstSeriesVisible();

    if (!_.isUndefined(firstSeriesVisible)) {
      firstSeriesVisible.data.forEach((point: PointObject) => {
        if (point.x === lastChartXAxisValue) {
          (<any>point).onMouseOver();
          return;
        }
      });
    }
  }

  private getTheFirstSeriesVisible(): SeriesObject | undefined {
    if (this.chart) {
      return this.chart.series.find(series => series.visible);
    }
    return undefined;
  }
}
