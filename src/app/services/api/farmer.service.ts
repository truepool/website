import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CoinRecord, CoinRecordQueryParams } from '../../interfaces/coin-record.interface';
import { Farmer, FarmersQueryParams } from '../../interfaces/farmer.interface';
import { PaginatedResponse } from '../../interfaces/paginated-response.interface';

@Injectable({ providedIn: 'root' })
export class FarmerService {
  constructor(private http: HttpClient) {}

  getFarmers(params: FarmersQueryParams): Observable<PaginatedResponse<Farmer>> {
    return this.http.get<PaginatedResponse<Farmer>>(`${environment.apiRoot}/farmer/`, { params });
  }

  getFarmer(launcherId: string): Observable<Farmer> {
    return this.http.get<Farmer>(`${environment.apiRoot}/farmer/${launcherId}`);
  }
}
