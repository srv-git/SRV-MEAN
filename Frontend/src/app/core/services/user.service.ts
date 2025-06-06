import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl = environment.apiUrl;
  
  constructor(readonly http: HttpClient) {}

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

  getUser(id: string) : Observable <any> {
    return this.http.get<any>(`${this.baseUrl}/user/${id}`);
  }
}
