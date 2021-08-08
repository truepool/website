import { Farmer } from './farmer.interface';
import { PaginatedQueryParams } from './paginated-response.interface';

export interface CoinRecord {
  url: string;
  name: string;
  timestamp: number;
  confirmed_block_index: number;
  puzzle_hash: string;
  amount: number;
  farmed_by: Farmer;
  payout: string;
  farmer_display_name: string;
}

export type CoinRecordQueryParams = {
  farmed_by?: string;
  payout?: string;
} & PaginatedQueryParams;
