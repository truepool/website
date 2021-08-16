import {
  ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, ViewChild,
} from '@angular/core';
import { format, fromUnixTime, isSameHour } from 'date-fns';
import { debounce } from 'lodash';
import { FarmerPartial } from 'src/app/interfaces/farmer-partial.interface';
import { ColorSchemeTheme } from 'src/app/services/api/color-scheme.enum';
import { PartialsChartPalette, partialsChartPalette } from './partials-chart-palette';
import { ColorSchemeService } from '../../../services/api/color-scheme.service';

@Component({
  selector: 'app-partials-chart',
  templateUrl: 'partials-chart.component.html',
  styleUrls: ['./partials-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartialsChartComponent implements OnChanges {
  @Input() theme: ColorSchemeTheme = null;
  @Input() partials: FarmerPartial[];
  @ViewChild('chart') chartElement: ElementRef;
  config: google.visualization.ColumnChartOptions;
  chartData: (number | string)[][] = [];

  get palette(): PartialsChartPalette {
    if (this.theme === null) {
      if (this.colorSchemeService.currentActive() === ColorSchemeTheme.Dark) {
        this.theme = ColorSchemeTheme.Dark;
      } else {
        this.theme = ColorSchemeTheme.Light;
      }
    }
    return partialsChartPalette[this.theme];
  }

  ngOnChanges(): void {
    this.prepareData();
    this.setupChart(this.getConfig());
  }

  private getConfig() : google.visualization.ColumnChartOptions {
    this.config = {
      backgroundColor: 'transparent',
      isStacked: true,
      colors: this.palette.series,
      chartArea: {
        width: '90%',
      },
      legend: {
        position: 'top',
        textStyle: {
          color: this.palette.text,
          fontSize: 11,
        },
      },
      hAxis: {
        textStyle: {
          color: this.palette.text,
          fontSize: 11,
        },
      },
      vAxis: {
        textStyle: {
          color: this.palette.text,
          fontSize: 11,
        },
        gridlines: {
          color: this.palette.gridlines,
        },
      },
    };
    return this.config;
  }

  ngOnInit(): void {
    this.prepareData();
    this.setupChart(this.getConfig());
  }

  constructor(private colorSchemeService: ColorSchemeService) {
    // Load Color Scheme
    this.colorSchemeService.load();
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

  private setupChart(config: google.visualization.ColumnChartOptions): void {
    const drawChart = () => {
      const dataTable = google.visualization.arrayToDataTable([
        ['Hour', 'Invalid', 'Valid'],
        ...this.chartData,
      ]);
      const chart = new google.visualization.ColumnChart(this.chartElement.nativeElement);

      chart.draw(dataTable, config);
    };

    void google.charts.load('current', { packages: ['corechart'] });
    window.onresize = debounce(() => drawChart(), 500);
    google.charts.setOnLoadCallback(drawChart);
  }
}
