import { PaginatedQueryParams } from './paginated-response.interface';

export interface Farmer {
  launcher_id: string;
  display_name: string;
  p2_singleton_puzzle_hash: string;
  points: number;
  points_percentage: number;
  difficulty: number;
  is_pool_member: number;
}

export type FarmersQueryParams = {
  difficulty?: number;
  launcher_id?: number;
  ordering?: string;
} & PaginatedQueryParams;
