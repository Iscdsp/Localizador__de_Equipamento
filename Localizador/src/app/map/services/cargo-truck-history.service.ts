import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CargoTruckHistory } from 'src/app/models/cargo-truck-history.model';
import { Response } from './response';
@Injectable({
  providedIn: 'root',
})
export class CargoTruckHistoryService {
  baseApiUrl = environment.api_history_state;

  constructor(public http: HttpClient) {}

  getHistory(): Observable<Response<CargoTruckHistory[]>> {
    return this.http.get<Response<CargoTruckHistory[]>>(this.baseApiUrl);
  }
}
