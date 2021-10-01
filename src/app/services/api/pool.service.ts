import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { parseISO } from 'date-fns';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { PoolSize } from '../../interfaces/pool-size.interface';

@Injectable({ providedIn: 'root' })
export class PoolService {
  constructor(private http: HttpClient) {}

  getSize(days: number): Observable<PoolSize[]> {
    return this.http.get<Record<string, unknown>[]>(`${environment.apiRoot}/space`, {
      params: { days },
    }).pipe(
      map((sizes) => {
        return sizes.map((size) => ({
          ...size,
          datetime: parseISO(size.date as string),
        } as PoolSize));
      }),
    );
  }
}
