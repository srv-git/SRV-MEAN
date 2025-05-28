import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "https://srv-server.onrender.com";
  
  constructor(readonly http: HttpClient) { }

  getAllUsers() : Observable <any> {
    return this.http.get<any>(`${this.baseUrl}/users`);
  }
}
