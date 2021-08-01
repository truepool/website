import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FarmerPartial, FarmerPartialQueryParams } from 'src/app/interfaces/farmer-partial.interface';
import { environment } from '../../../environments/environment';
import { PaginatedResponse } from '../../interfaces/paginated-response.interface';

@Injectable({ providedIn: 'root' })
export class FarmerPartialService {
  constructor(private http: HttpClient) {}

  getPartials(params: FarmerPartialQueryParams): Observable<PaginatedResponse<FarmerPartial>> {
    return this.http.get<PaginatedResponse<FarmerPartial>>(`${environment.apiRoot}/partial/`, { params });
  }
}
