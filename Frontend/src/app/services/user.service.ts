import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "https://srv-server.onrender.com";
  
  constructor(readonly http: HttpClient) { }

  private getHeaders(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  getAllUsers() : Observable <any> {
    return this.http.get<any>(`${this.baseUrl}/users`);
  }

  registerUser(data: User) : Observable <any> {
    return this.http.post<any>(`${this.baseUrl}/register`, data, this.getHeaders());
  }
  
  loginUser(data: User) : Observable <any> {
    return this.http.post<any>(`${this.baseUrl}/login`, data, this.getHeaders());
  }
}
