export interface UptimeRobotResponse {
  monitors: {
    id: number;
    all_time_uptime_ratio: string;
  }[];
}
