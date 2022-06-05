import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDTO } from 'src/CustomerDTO/CustomerDTO';

@Injectable({
  providedIn: 'root',
})
export class CustemerServices {
  constructor(public myhttp: HttpClient) {}

  customerUrl: string = 'https://localhost:7156/api/GetCoustomerDetails';

  getCustomers(): Observable<CustomerDTO[]> {
    let token = JSON.parse(sessionStorage.getItem('token') ?? '');
    return this.myhttp.get<CustomerDTO[]>(this.customerUrl, { headers: new HttpHeaders({ 
      Authorization: `Bearer ${token}`
    })});
  }
}
