import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { parseISO } from 'date-fns';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Farmer, FarmersQueryParams } from '../../interfaces/farmer.interface';
import { PoolSize } from '../../interfaces/pool-size.interface';
import { PoolStats } from '../../interfaces/pool-stats.interface';

@Injectable({ providedIn: 'root' })
export class PoolService {
  constructor(private http: HttpClient) {}

  getSize(days: number): Observable<PoolSize[]> {
    return this.http.get<Record<string, unknown>[]>(`${environment.apiRoot}/size`, {
      params: { days },
    }).pipe(
      map((sizes) => {
        return sizes.map((size) => ({
          ...size,
          datetime: parseISO(size.datetime as string),
        } as PoolSize));
      })
    )
  }

  getStats(): Observable<PoolStats> {
    return this.http.get<PoolStats>(`${environment.apiRoot}/stats`);
  }
}
