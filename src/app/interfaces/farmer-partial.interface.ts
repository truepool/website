import { PaginatedQueryParams } from 'src/app/interfaces/paginated-response.interface';

export interface FarmerPartial {
  url: string;
  launcher_id: string;
  'timestamp': number;
  'difficulty': number;
  'error': string;
}

export type FarmerPartialQueryParams = {
  launcher: string;
  min_timestamp?: number;
} & PaginatedQueryParams;
