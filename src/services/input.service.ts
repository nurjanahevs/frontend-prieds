import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class InputService {

  constructor(private http: HttpClient ) {}

  getData() {
    return this.http.get(`${environment.baseUrl}/api/patient`)
  }

  // onSave() {
  //   return this.http.post<any>(`${environment.baseUrl}/api/patient`)
  // }


}
