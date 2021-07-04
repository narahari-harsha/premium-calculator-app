import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Occupation } from './occupation';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PremiumService {
  configUrl = 'assets/config.json';
  apiBaseUrl: string;
  httpClient: HttpClient;
  occupations: Occupation[] | undefined;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.apiBaseUrl = baseUrl;
    this.httpClient = http;
  }

  getOccupations() {
    this.httpClient.get<Occupation[]>(this.apiBaseUrl + 'occupation/all').subscribe(result => {
      this.occupations = result;
    }, error => console.error(error));
  }
}

