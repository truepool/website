import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CoinRecord, CoinRecordQueryParams } from '../../interfaces/coin-record.interface';
import { PaginatedResponse } from '../../interfaces/paginated-response.interface';

@Injectable({ providedIn: 'root' })
export class CoinRecordService {
  constructor(private http: HttpClient) {}

  getCoinRecords(params: CoinRecordQueryParams): Observable<PaginatedResponse<CoinRecord>> {
    return this.http.get<PaginatedResponse<CoinRecord>>(`${environment.apiRoot}/coinrecord/`, { params });
  }
}
