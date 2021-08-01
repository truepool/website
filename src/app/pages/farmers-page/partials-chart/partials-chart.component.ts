import {
  ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, ViewChild,
} from '@angular/core';
import { format, fromUnixTime, isSameHour } from 'date-fns';
import { debounce } from 'lodash';
import { FarmerPartial } from 'src/app/interfaces/farmer-partial.interface';

@Component({
  selector: 'app-partials-chart',
  templateUrl: 'partials-chart.component.html',
  styleUrls: ['./partials-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartialsChartComponent implements OnChanges {
  @Input() partials: FarmerPartial[];

  @ViewChild('chart') chartElement: ElementRef;

  chartData: (number | string)[][] = [];

  ngOnChanges(): void {
    this.prepareData();
    this.setupChart();
  }

  /**
   * Group partials by hour and status.
   */
  private prepareData(): void {
    const chartData: (number | string)[][] = [];
    let lastHour = fromUnixTime(this.partials[0].timestamp);
    let valid = 0;
    let invalid = 0;
    this.partials.forEach((partial) => {
      const currentHour = fromUnixTime(partial.timestamp);
      if (!isSameHour(currentHour, lastHour)) {
        chartData.push([format(lastHour, 'h a'), invalid, valid]);
        valid = 0;
        invalid = 0;
        lastHour = currentHour;
      }

      if (partial.error) {
        invalid += 1;
      } else {
        valid += 1;
      }
    });

    this.chartData = chartData.reverse();
  }

  private setupChart(): void {
    const drawChart = () => {
      const dataTable = google.visualization.arrayToDataTable([
        ['Hour', 'Invalid', 'Valid'],
        ...this.chartData,
      ]);
      const chart = new google.visualization.ColumnChart(this.chartElement.nativeElement);

      chart.draw(dataTable, {
        legend: { position: 'top' },
        backgroundColor: 'transparent',
        isStacked: true,
        colors: ['#e62e2e', '#00af52'],
        chartArea: {
          width: '90%',
        },
        hAxis: {
          textStyle: {
            fontSize: 11,
          },
        },
      });
    };

    void google.charts.load('current', { packages: ['corechart'] });
    window.onresize = debounce(() => drawChart(), 500);
    google.charts.setOnLoadCallback(drawChart);
  }
}
