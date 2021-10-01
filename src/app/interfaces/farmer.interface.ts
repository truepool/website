import { PaginatedQueryParams } from './paginated-response.interface';

export interface Farmer {
  launcher_id: string;
  name: string;
  email: string;
  p2_singleton_puzzle_hash: string;
  points: number;
  points_percentage: number;
  points_pplns: number;
  share_pplns: number;
  difficulty: number;
  is_pool_member: number;
  estimated_size: number;
}

export type FarmersQueryParams = {
  search?: string;
  difficulty?: number;
  launcher_id?: number;
  ordering?: string;
  points_pplns__gt?: number;
} & PaginatedQueryParams;

export interface FarmerUpdate {
  display_name: string;
  notify_missing_partials_hours?: number;
  email?: string;
}
