import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlticciCalculateService {

  SERVER_URL = 'localhost:8080/alticci';

  constructor(private http: HttpClient) { }

  calculate(inputNumber: Number) {
    return this.http.post<any>(`${this.SERVER_URL}/${inputNumber}`, inputNumber);
  }
}
