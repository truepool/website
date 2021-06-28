import { config } from '../config';
import { palette } from '../palette';
import { PoolSize } from './pool-size.interface';
import { debounce } from '../utils/debounce';
import filesize from 'filesize';
import { format } from 'date-fns'

// TB
const chartBaseUnit = 1024 ** 4;

export async function loadMainPage(): Promise<void> {
  if (!isMainPage()) {
    return;
  }

  const poolSizes = await loadData();

  if (!poolSizes.length) {
    return;
  }

  setUnderManagementString(poolSizes[poolSizes.length - 1].size);
  setChart(poolSizes);
}

function isMainPage(): boolean {
  return Boolean(document.querySelector('.page-main'));
}

async function loadData(): Promise<PoolSize[]> {
  return new Promise(resolve => resolve(generateFakeData(config.daysForChart)));
  try {
    const response = await window.fetch(`${config.baseUrl}/pool/size?days=${config.daysForChart}`);

    if (!response.ok) {
      console.error(response.statusText);
      return [];
    }

    return response.json();
  } catch (e) {
    console.log(e);
    return [];
  }
}

function setUnderManagementString(lastPoolSize: number): void {
  const underManagementEl = document.getElementById('under-management') as HTMLElement;
  underManagementEl.querySelector('a').textContent = filesize(lastPoolSize);
  underManagementEl.classList.add('ready');
}

function setChart(poolSizes: PoolSize[]): void {
  const drawChart = () => {
    const series = poolSizes.map(({ datetime, size}) => {
      const sizeInUnits = size / chartBaseUnit;
      const formattedDate = format(datetime, 'LLL, do')
      const formattedSize = filesize(size);
      return [
        datetime,
        sizeInUnits,
        `${formattedDate} – ${formattedSize}`
      ];
    });
    const dataTable = google.visualization.arrayToDataTable([
      ['Day', 'Size', { type: 'string', role: 'tooltip' }],
      ...series,
    ]);

    const chartElement = document.getElementById('stats');
    chartElement.classList.add('ready');
    const chart = new google.visualization.LineChart(chartElement);

    chart.draw(dataTable, {
      curveType: 'function',
      legend: 'none',
      backgroundColor: 'transparent',
      colors: [palette.chart.series],
      chartArea: {
        width: '80%',
        height: '80%',
      },
      hAxis: {
        viewWindowMode: 'maximized',
        textStyle: {
          color: 'white'
        },
        gridlines: {
          color: palette.chart.gridlines,
          count: 1,
        },
        minorGridlines: {
          color: palette.chart.gridlines,
          count: 0,
        },
      },
      vAxis: {
        viewWindowMode: 'maximized',
        format: '#.#TB',
        textStyle: {
          color: 'white'
        },
        gridlines: {
          color: palette.chart.gridlines,
        },
        minorGridlines: {
          count: 0,
        }
      },
      pointSize: 3,
    });
  };

  google.charts.load('current', { packages: ['corechart'] });
  window.onresize = debounce(() => drawChart(), 500);
  google.charts.setOnLoadCallback(drawChart);
}

function generateFakeData(days: number): PoolSize[] {
  const poolSizes: PoolSize[] = [];
  for (let i = days; i--; i >= 0) {
    // 20% random size
    const datetime = new Date();
    datetime.setDate(-i);
    const size = Math.round(((days - i) * 0.8 + (days - i) * 0.2 * Math.random()) * chartBaseUnit);
    poolSizes.push({ datetime, size });
  }

  return poolSizes;
}
