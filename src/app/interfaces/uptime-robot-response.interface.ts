export interface UptimeRobotResponse {
  status: UptimeRobotStatus;
  psp: {
    perPage: number;
    totalMonitors: number;
    monitors: UptimeRobotMonitor[];
    timezone: string;
  };
  days: string[]; // August 15, 2021
  statistics: {
    uptime: {
      l1: UptimeRobotRatio;
      l7: UptimeRobotRatio;
      l30: UptimeRobotRatio;
      l90: UptimeRobotRatio;
    };
    latest_downtime: null; // ??
    counts: { up: number; down: number; paused: number };
    count_result: string;
  };
}

export interface UptimeRobotMonitor {
  monitorId: number;
  createdAt: number;
  statusClass: UptimeRobotStatus;
  name: string; // Truepool USA
  url: string; // Can be null
  type: string; // HTTP(s), etc.
  dailyRatios: UptimeRobotRatio[];
  '90dRatio': UptimeRobotRatio;
  '30dRatio': UptimeRobotRatio;
}

export interface UptimeRobotRatio {
  ratio: string;
  label: UptimeRobotStatus;
}

// Still unsure of all the possible values
export enum UptimeRobotStatus {
  Success = 'success',
  Warning = 'warning',
}
