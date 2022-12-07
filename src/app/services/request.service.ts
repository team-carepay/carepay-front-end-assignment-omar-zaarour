import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Treatment } from './../interfaces/treatment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  apiBaseUrl = environment.apiBaseUrl;
  constructor(private HttpClient: HttpClient) {}

  // send request to get treatments
  getTeatments(params: {}): Observable<Treatment[]> {
    return this.HttpClient.get<Treatment[]>(`${this.apiBaseUrl}/treatments`, {
      params,
    });
  }
}
