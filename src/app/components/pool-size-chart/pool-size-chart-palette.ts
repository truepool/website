import { ColorSchemeTheme } from 'src/app/services/api/color-scheme.enum';

export interface PoolSizeChartPalette {
  series: string;
  gridlines: string;
  text: string;
}

export const poolSizeChartPalette: { [key in ColorSchemeTheme]: PoolSizeChartPalette } = {
  [ColorSchemeTheme.Dark]: {
    series: '#3f94d0',
    gridlines: '#636363',
    text: 'white',
  },
  [ColorSchemeTheme.Light]: {
    series: '#3f94d0',
    gridlines: '#d9d9d9',
    text: 'black',
  },
};
