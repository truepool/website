import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PoolInfo } from '../../interfaces/pool-info.interface';

@Injectable({ providedIn: 'root' })
export class InfoService {
  constructor(private http: HttpClient) {}

  getInfo(): Observable<PoolInfo> {
    return this.http.get<PoolInfo>(`${environment.apiRoot}/stats`);
  }
}
