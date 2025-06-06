import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../../models/user.model';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = environment.apiUrl;
  private readonly _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn.asObservable();
  
  constructor(readonly http: HttpClient, private readonly router: Router) {
    if(localStorage.getItem('access_token')){
      this._isLoggedIn.next(true);
    }
   }

  private getHeaders(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  
  registerUser(data: User) : Observable <any> {
    return this.http.post<any>(`${this.baseUrl}/register`, data, this.getHeaders());
  }
  
  loginUser(data: User) : Observable <any> {
    return this.http.post<any>(`${this.baseUrl}/login`, data, this.getHeaders()).pipe(
      tap(res => {
        localStorage.setItem('access_token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this._isLoggedIn.next(true);
      })
    );
  }

  getJWTToken(): string | null {
    return localStorage.getItem('access_token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    this.router.navigate(['login']);
    this._isLoggedIn.next(false);
  }
}
