import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UptimeRobotResponse } from 'src/app/interfaces/uptime-robot-response.interface';
import { environment } from '../../../environments/environment';
import { PoolInfo } from '../../interfaces/pool-info.interface';

@Injectable({ providedIn: 'root' })
export class InfoService {
  private static readonly uptimeUrl = 'https://stats.uptimerobot.com/api/getMonitorList/ZGgMZuMkwx';
  // This is a readonly key which can be shared publicly.
  private static readonly uptimeApiKey = 'm788877488-73e56b85f40cc9d01205170f';

  constructor(private http: HttpClient) {}

  getInfo(): Observable<PoolInfo> {
    return this.http.get<PoolInfo>(`${environment.apiRoot}/info`);
  }

  getUptime(): Observable<UptimeRobotResponse> {
    return this.http.get<UptimeRobotResponse>(
      `${InfoService.uptimeUrl}?api_key=${InfoService.uptimeApiKey}`,
    );
  }
}
