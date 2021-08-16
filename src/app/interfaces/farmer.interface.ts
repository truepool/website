import { PaginatedQueryParams } from './paginated-response.interface';

export interface Farmer {
  launcher_id: string;
  display_name: string;
  email: string;
  p2_singleton_puzzle_hash: string;
  points: number;
  points_percentage: number;
  difficulty: number;
  is_pool_member: number;
  farm_estimated_size: number;
}

export type FarmersQueryParams = {
  search?: string;
  difficulty?: number;
  launcher_id?: number;
  ordering?: string;
  points_pplns__gt?: number;
} & PaginatedQueryParams;
