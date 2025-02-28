import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PopularEvents } from '../interfaces/popular.model';

@Injectable({
  providedIn: 'root'
})
export class PopularSService {
  popularServicesApi: string = "http://localhost:3000/proxy?targetUrl=https://gateway.tkt.ge/Events/Top?api_key=7d8d34d1-e9af-4897-9f0f-5c36c179be77"
  constructor(private _http:HttpClient) { }
  getPopular(){
    return this._http.get<{ data: PopularEvents[] }>(this.popularServicesApi);
  }
}
