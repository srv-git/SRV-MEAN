import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  baseUrl: string = "https://srv-server.onrender.com";
  httpHdrContntType = { headers: new HttpHeaders({'Content-Type': 'application/json','Accept': 'application/json'})};
  
  constructor(readonly http: HttpClient) { }

  getAllCards() : Observable <any> {
    return this.http.get<any>(`${this.baseUrl}/getAllCards`);
  }
}
