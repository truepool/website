export interface PaginatedResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export type PaginatedQueryParams = {
  limit?: number;
  offset?: number;
}
