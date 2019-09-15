import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetFamilyResponse, Datum } from './model/GetFamily';
import { Observable } from 'rxjs';
import { State } from '@ngrx/store';
@Injectable({
  providedIn: 'root'
})
export class GatewayService {
  url = '../assets/sample.json';
  constructor(private http: HttpClient) {}

  getFamilyDetails(): Observable<GetFamilyResponse> {
    return this.http.get<GetFamilyResponse>(this.url);
  }
}
