export interface LastRewards {
  date: string;
  height: number;
}

export interface XchPrice {
  usd: number;
}

export interface PoolInfo {
  blockchain_height: number;
  blockchain_space: number;
  fee: number;
  estimate_win: number;
  rewards_amount: number;
  rewards_blocks: number;
  pool_space: number;
  farmers: number;
  last_rewards: LastRewards;
  seconds_since_last_win: number;
  xch_current_price: XchPrice;
}
