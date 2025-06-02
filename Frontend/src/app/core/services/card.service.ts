import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments.ts/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private readonly baseUrl = environment.apiUrl;
  
  constructor(readonly http: HttpClient) { }

  getAllCards() : Observable <any> {
    return this.http.get<any>(`${this.baseUrl}/getAllCards`);
  }
}
