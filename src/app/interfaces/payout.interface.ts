import { Farmer } from './farmer.interface';
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
  farmer: Farmer;
}

export type PayoutAddressQueryParams = {
  payout?: string;
  puzzle_hash?: string;
  launcher?: string;
  ordering?: string;
  count?: number;
} & PaginatedQueryParams;

export type PayoutQueryParams = {
  id: string
};
