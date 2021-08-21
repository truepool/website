import { ColorSchemeTheme } from 'src/app/services/api/color-scheme.enum';

export interface PartialsChartPalette {
  series: string[];
  gridlines: string;
  text: string;
}

export const partialsChartPalette: { [key in ColorSchemeTheme]: PartialsChartPalette } = {
  [ColorSchemeTheme.Dark]: {
    series: ['#e62e2e', '#00af52'],
    gridlines: '#636363',
    text: '#c0c0c0',
  },
  [ColorSchemeTheme.Light]: {
    series: ['#e62e2e', '#00af52'],
    gridlines: '#d9d9d9',
    text: '#151515',
  },
};
