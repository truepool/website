import { Farmer } from './farmer.interface';
import { PaginatedQueryParams } from './paginated-response.interface';

export interface Payout {
  id: number;
  url: string;
  datetime: string;
  amount: number;
  fee: number;
}

export interface Transaction {
  url: string;
  transaction: string;
  xch_price?: number;
  confirmed_block_index?: number;
}

export interface PayoutAddress {
  url: string;
  puzzle_hash: string;
  amount: number;
  datetime: string;
  transaction: Transaction;
  confirmed_block_index: number;
  payout: Payout;
  launcher: Farmer;
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
