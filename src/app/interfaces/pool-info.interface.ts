export interface PoolInfo {
  blockchain_height: number;
  blockchain_totalspace: number;
  blockchain_synced: boolean;
  fee: string;
  minimum_difficulty: number;
  minutes_to_win: number;
  total_rewards_amount: string;
  total_rewards_heights: number;
  total_size: number;
  total_farmers: number;
  reward_last_date: string;
  reward_last_height: number;
  seconds_since_last_win: number;
  xch_usd_price: number;
}
