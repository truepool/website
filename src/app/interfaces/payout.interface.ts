import { PaginatedQueryParams } from './paginated-response.interface';

export interface Payout {
  id: number;
  url: string;
  datetime: string;
  amount: number;
  pool_fee: number;
}

export interface PayoutAddress {
  url: string;
  puzzle_hash: string;
  amount: number;
  transaction: string;
  confirmed_height: number;
  payout: Payout;
  farmer: string;
}

export type PayoutAddressQueryParams = {
  payout?: string;
  puzzle_hash?: string;
  farmer?: string;
} & PaginatedQueryParams;

export type PayoutQueryParams = {
  id: string
}
