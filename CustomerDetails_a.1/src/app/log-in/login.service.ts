import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private httpClient: HttpClient) { }
login(user: any): Observable<any>{
  let url = "https://localhost:7156/Authorize";
  return this.httpClient.post<any>(url, user);
}
}
