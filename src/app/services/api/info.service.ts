import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UptimeRobotResponse } from 'src/app/interfaces/uptime-robot-response.interface';
import { environment } from '../../../environments/environment';
import { PoolInfo } from '../../interfaces/pool-info.interface';

@Injectable({ providedIn: 'root' })
export class InfoService {
  private static readonly uptimeUrl = 'https://stats.uptimerobot.com/api/getMonitorList/ZGgMZuMkwx';

  constructor(private http: HttpClient) {}

  getInfo(): Observable<PoolInfo> {
    return this.http.get<PoolInfo>(`${environment.apiRoot}/info`);
  }

  getUptime(): Observable<UptimeRobotResponse> {
    return this.http.get<UptimeRobotResponse>(InfoService.uptimeUrl);
  }
}
