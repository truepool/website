export interface PoolStats {
  poolCapacityBytes: number;
  lastReward: string;
  lastBlockRewardHeight: number;
  blockHeight: number;
  poolRewardSystem: string;
  poolFeePercent: number;
  poolMinPayout: string;
  poolMembers: number;
  blockchainTotalSpace: string;
  blockchainSynced: boolean;
}
