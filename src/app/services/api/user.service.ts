import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CoinRecord, CoinRecordQueryParams } from '../../interfaces/coin-record.interface';
import { Farmer, FarmersQueryParams } from '../../interfaces/farmer.interface';
import { LoginParams } from '../../interfaces/login-params.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  login(params: LoginParams): Observable<LoginParams[]> {
    return this.http.post<LoginParams[]>(`${environment.apiRoot}/login`, { params });
  }
}
