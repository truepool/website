import { PoolSizeChartTheme } from './pool-size-chart-theme.enum';

export interface PoolSizeChartPalette {
  series: string;
  gridlines: string;
  text: string;
}

export const poolSizeChartPalette: { [key in PoolSizeChartTheme]: PoolSizeChartPalette } = {
  [PoolSizeChartTheme.Dark]: {
    series: '#3f94d0',
    gridlines: '#636363',
    text: 'white',
  },
  [PoolSizeChartTheme.Light]: {
    series: '#3f94d0',
    gridlines: '#d9d9d9',
    text: 'black',
  },
};
